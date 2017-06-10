import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from "@angular/http";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiServiceService {
  students: any[];

  constructor(private http: Http) {
  }
  /*Global api*/
  getConfig(): Observable<any> {
    return this.http.get('/api/config')
      .map(this.extractData)
      .catch(this.handleError);
  };

  /*Api for students*/
  getAllStudents(): Observable<any> {
    return this.http.get('/api/students')
      .map(this.extractData)
      .catch(this.handleError);
  };

  getBeneficiariesStudents(): Observable<any> {
    return this.http.get('/api/students/beneficiaries')
      .map(this.extractData)
      .catch(this.handleError);
  };

  getIncompleteFamilies(): Observable<any> {
    return this.http.get('/api/students/parent')
      .map(this.extractData)
      .catch(this.handleError);
  };

  getGroupAssets(): Observable<any> {
    return this.http.get('/api/students/groupAssets')
      .map(this.extractData)
      .catch(this.handleError);
  };

  createStudent(data): Observable<any> {
    return this.http.post('/api/students', data)
      .map(this.extractData)
      .catch(this.handleError);
  };

  updateStudent(data): Observable<any> {
    return this.http.put('/api/students', data)
      .map(this.extractData)
      .catch(this.handleError);
  };

  deleteStudent(data): Observable<any> {
    return this.http.delete('/api/students', {body: data})
      .map(this.extractData)
      .catch(this.handleError);
  };

  /*Api for parents*/
  getParents(): Observable<any> {
    return this.http.get('/api/parents')
      .map(this.extractData)
      .catch(this.handleError);
  };

  /*Api for performance*/
  getTotalPerformance(course, semester): Observable<any> {
    return this.http.get(`/api/performance/total/${course}/${semester}`)
      .map(this.extractData)
      .catch(this.handleError);
  };
  getAllPerformance(course, semester): Observable<any> {
    return this.http.get(`/api/performance/${course}/${semester}`)
      .map(this.extractData)
      .catch(this.handleError);
  };
  getSchoolItems(course, semester): Observable<any> {
    return this.http.get(`/api/items/${course}/${semester}`)
      .map(this.extractData)
      .catch(this.handleError);
  };
  createSchoolItem(data): Observable<any> {
    return this.http.post(`/api/items/`, data)
      .map(this.extractData)
      .catch(this.handleError);
  };
  removeSchoolItem(id): Observable<any> {
    return this.http.delete(`/api/items/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  };
  updateRatingById(data): Observable<any> {
    return this.http.put(`/api/rating`, data)
      .map(this.extractData)
      .catch(this.handleError);
  };

  /*Api for omissions*/
  getAllOmissions(course, semester): Observable<any> {
    return this.http.get(`/api/omissions/${course}/${semester}`)
      .map(this.extractData)
      .catch(this.handleError);
  };
  getMonths(course, semester): Observable<any> {
    return this.http.get(`/api/omissions/month/${course}/${semester}`)
      .map(this.extractData)
      .catch(this.handleError);
  };
  updateOmissions(data): Observable<any> {
    return this.http.put(`/api/omissions`, data)
      .map(this.extractData)
      .catch(this.handleError);
  };
  updateMonths(data,courseNumber, semester): Observable<any> {
    return this.http.put(`/api/omissions/month`, {
      data: data,
      courseNumber: courseNumber,
      semester: semester
    })
      .map(this.extractData)
      .catch(this.handleError);
  };


  /*Holidays*/
  getHolidays(): Observable<any> {
    return this.http.get(`/api/holidays`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getHolidaysByDate(date): Observable<any> {
    return this.http.get(`/api/holidays/${date}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteHoliday(id): Observable<any> {
    return this.http.delete(`/api/holidays/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  };

  updateHoliday(data): Observable<any> {
    return this.http.put(`/api/holidays`, {
      data: data
    })
      .map(this.extractData)
      .catch(this.handleError);
  };

  addHoliday(data): Observable<any> {
    return this.http.post(`/api/holidays`, {
      data: data
    })
      .map(this.extractData)
      .catch(this.handleError);
  };

  /*Auth*/
  login(login, password): Observable<any> {
    return this.http.post(`/api/login`, {
      data: {
        login: login,
        password: password
      }
    })
      .map(this.extractData)
      .catch(this.handleError);
  }
  changePassword(data): Observable<any> {
    return this.http.post(`/api/login/change`, {
      data: data
    })
      .map(this.extractData)
      .catch(this.handleError);
  }

  /*Functions*/
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
