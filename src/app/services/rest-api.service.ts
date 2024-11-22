import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private baseUrl = 'http://localhost:8085/learnlo/api/v1/student';

  constructor(private http : HttpClient) { }

  //Course Creation API
  createCourse(data : any): Observable<any>{
    return this.http.post('http://localhost:8085/learnlo/api/v1/course',data);
  }

  //teacher creation api
  createTeacher(data : any): Observable<any>{
    return this.http.post('http://localhost:8085/learnlo/api/v1/teacher',data);
  }

  //View All Course API
  viewCourse(): Observable<any>{
    return this.http.get('http://localhost:8085/learnlo/api/v1/course');
  }

  //get student api
  getStudent(): Observable<any>{
    return this.http.get('http://localhost:8085/learnlo/api/v1/student');
  }

  //get student by id api
  getStudentById(studentId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${studentId}`);
  }

}
