import os, docker, shutil, uuid
from docker.errors import APIError, ContainerError, ImageNotFound

client = docker.from_env()

Current_Dir = os.path.dirname(os.path.realpath(__file__))
Image_Name = 'sholvoir/archlinux'
Exec_Host_Root_Dir = '%s/exec' % Current_Dir
Exec_Guest_Root_Dir = '/exec'
Container_Name = '%s:latest' % Image_Name
Source_File_Names = {
    'java': 'example.java',
    'python': 'example.py'
}
Run_Commands = {
    'java': 'java-run example',
    'python': 'python example.py'
}

def load_image():
    try:
        client.images.get(Container_Name)
        print('Image exists locally')
    except ImageNotFound:
        print('Image not found locally, loading from docker hub')
        client.images.pull(Container_Name)
    except APIError:
        print('Cannot connect to docker')

def make_dir(dir):
    try:
        os.mkdir(dir)
    except OSError:
        print('cannot create directory')

def build_and_run(code, lang):
    result = {'run': None, 'error': None}
    source_file_parent_dir_name = uuid.uuid4()
    source_file_host_dir = '%s/%s' % (Exec_Host_Root_Dir, source_file_parent_dir_name)
    source_file_guest_dir = '%s/%s' % (Exec_Guest_Root_Dir, source_file_parent_dir_name)
    make_dir(source_file_host_dir)
    with open('%s/%s' % (source_file_host_dir, Source_File_Names[lang]), 'w') as source_file:
        source_file.write(code)
    try:
        log = client.containers.run(
            image=Container_Name,
            command=Run_Commands[lang],
            volumes={Exec_Host_Root_Dir: {'bind': Exec_Guest_Root_Dir, 'mode': 'rw'}},
            working_dir=source_file_guest_dir
        )
        result['run'] = str(log, 'utf-8')
    except ContainerError as e:
        result['error'] = str(e.stderr, 'utf-8')
    shutil.rmtree(source_file_host_dir)
    return result
