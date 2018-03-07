import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

@Injectable()
export class DataService {
  private _problemSource = new BehaviorSubject<Problem[]>([]);

  constructor(private httpClient: HttpClient) { }

  private handleError(err: any) {
    console.error('An error occured, ', err)
    return Promise.reject(err.body || err);
  }

  getProblems() {
    this.httpClient.get('/api/v1/problems')
      .toPromise()
      .then((res: any) => {
        this._problemSource.next(res);
      })
      .catch(this.handleError);
    return this._problemSource.asObservable();
  }

  getProblem(id: number) {
    return this.httpClient.get(`/api/v1/problems/${id}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  addProblem(problem: Problem) {
    return this.httpClient.post('/api/v1/problems', problem, options)
      .toPromise()
      .then((res: any) => {
        this.getProblems();
        return res;
      })
      .catch(this.handleError);
  }

  modifyProblem(problem: Problem) {
    return this.httpClient.put(`/api/v1/problems/${problem.id}`, problem, options)
      .toPromise()
      .then((res: any) => {
        this.getProblems();
        return res;
      })
      .catch(this.handleError);
  }

  buildAndRun(data) {
    return this.httpClient.post('/api/v1/build_and_run', data, options)
      .toPromise()
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(this.handleError);
  }
}
