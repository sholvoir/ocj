import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { DataService } from './services/data.service';
import { CollaborationService } from './services/collaboration.service';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { ObservableTestComponent } from './components/observable-test/observable-test.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditorComponent } from './components/editor/editor.component';
import { ModifyProblemComponent } from './components/modify-problem/modify-problem.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    ObservableTestComponent,
    NavbarComponent,
    EditorComponent,
    ModifyProblemComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService,
    CollaborationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
