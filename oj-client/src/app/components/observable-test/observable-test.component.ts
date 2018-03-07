import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css']
})
export class ObservableTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.subjectTest();
  }

  timeoutTest() {
    console.log('Exec Before SetTimeout!');
    setTimeout(() => {
      console.log('Exec Inner Timeout!')
    }, 3000);
    console.log('Exec After SetTimeout.')
  }

  promiseTest() {
    let promise = new Promise((resolve, reject) => {
      console.log('Exec Before Resolve');
      setTimeout(() => {
        resolve('Exec In Promise and In Timeout!');
      }, 3000);
    });
    promise.then((v: string) => console.log(v), (err) => console.error('error: ' + err));
  }

  observableTest() {
    let stream$ = new Observable(observer => {
      console.log('obversable start exec!');
      observer.next(1);
      observer.next(2);
      setTimeout(() => observer.next(3), 3000);
    });

    let subscription1 = stream$.subscribe(
      v => console.log('s1: ' + v),
      e => console.error('s1 error: ' + e),
      () => console.log('s1 done!')
    );

    setTimeout(() => {
      let subscription2 = stream$.subscribe(
        v => console.log('s2: ' + v),
        e => console.error('s2 error: ' + e),
        () => console.log('s2 done!')
      )
    }, 1000);
  }

  subjectTest() {
    let subject = new Subject();
    
    subject.subscribe(v => console.log('O1: ' + v));
    subject.subscribe(v => console.log('O2: ' + v));

    subject.next(1);
    subject.next(2);

    subject.subscribe(v => console.log('O3: ' + v));

    subject.next(3);
    setTimeout(() => subject.next(4), 3000);
  }
}
