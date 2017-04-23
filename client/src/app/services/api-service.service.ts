import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from "@angular/http";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Student} from '../models/students.model';
import {Config} from "../models/config.model";

@Injectable()
export class ApiServiceService {
  students: any[];

  constructor(private http: Http) {
  }

  getAllStudents(): Observable<Student[]> {
    return this.http.get('/api/students')
      .map(this.extractData)
      .catch(this.handleError);
  };

  getBeneficiariesStudents(): Observable<Student[]> {
    return this.http.get('/api/students/beneficiaries')
      .map(this.extractData)
      .catch(this.handleError);
  };

  getConfig(): Observable<Config[]> {
    return this.http.get('/api/config')
      .map(this.extractData)
      .catch(this.handleError);
  };

  createStudent(data): Observable<Student[]> {
    return this.http.post('/api/students', data)
      .map(this.extractData)
      .catch(this.handleError);
  };

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
