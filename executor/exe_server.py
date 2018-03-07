import json
from flask import Flask, jsonify, request
from exe_utils import build_and_run, load_image
app = Flask(__name__)

@app.route('/build_and_run', methods=['POST'])
def build_run():
    data = request.get_json()
    if 'code' not in data or 'lang' not in data:
        return 'You should provide "code" and "lang"'
    code = data['code']
    lang = data['lang']
    print('API get called with code: %s in %s' % (code, lang))
    result = build_and_run(code, lang)
    return jsonify(result)

if __name__ == '__main__':
    load_image()
    app.run(debug=True)