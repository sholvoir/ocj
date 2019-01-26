import { Component, OnInit } from '@angular/core';
import { CollaborationService } from '../../services/collaboration.service';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../services/data.service'

declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editor: any;
  defaultContent = {
    Java: `public class Example {
  public static void main(String[] args) {
    //type your Java code here
  }
}`,
    Python: `class Solution:
  def example():
    # write your python code here.
`
  };
  output = '';
  languages: string[] = ['Java', 'Python'];
  language: string = 'Java';
  sessionId: string;

  constructor(private dataService: DataService,
    private collaboration: CollaborationService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sessionId = params['id'];
      this.initEditor();
      this.collaboration.restoreBuffer();
    })
  }

  resetEditor() {
    this.editor.setValue(this.defaultContent[this.language]);
    this.editor.getSession().setMode('ace/mode/' + this.language.toLowerCase());
  }

  setLanguage(language: string) {
    this.language = language;
    this.resetEditor();
  }

  submit() {
    let code = this.editor.getValue();
    const data = { code, lang: this.language.toLocaleLowerCase() };
    this.dataService.buildAndRun(data)
      .then((res: any) => this.output = res.text);
  }

  initEditor() {
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/eclipse');
    this.collaboration.init(this.editor, this.sessionId);
    this.editor.session.setMode('ace/mode/java');
    this.resetEditor();
    this.editor.lastAppliedChange = null;
    this.editor.on('change', e => {
      console.log('editor chagees: ' + JSON.stringify(e));
      if (this.editor.lastAppliedChange != e) {
        this.collaboration.change(JSON.stringify(e));
      }
    })
  }
}
