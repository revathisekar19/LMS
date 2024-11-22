import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private studentUrl = 'http://localhost:8085/learnlo/api/v1/student';
  private teacherUrl = 'http://localhost:8085/learnlo/api/v1/teacher';


  constructor(private http : HttpClient) { }

  //creation api

  //Course Creation API
  createCourse(data : any): Observable<any>{
    return this.http.post('http://localhost:8085/learnlo/api/v1/course',data);
  }

  //teacher creation api
  createTeacher(data : any): Observable<any>{
    return this.http.post('http://localhost:8085/learnlo/api/v1/teacher',data);
  }

  //view api

  //get All Course API
  viewCourse(): Observable<any>{
    return this.http.get('http://localhost:8085/learnlo/api/v1/course');
  }

  //get all teacher api
  viewTeacher(): Observable<any>{
    return this.http.get('http://localhost:8085/learnlo/api/v1/teacher');
  }

  //get student api
  getStudent(): Observable<any>{
    return this.http.get('http://localhost:8085/learnlo/api/v1/student');
  }

  //view by id api

  //get student by id api
  getStudentById(studentId: string): Observable<any> {
    return this.http.get(`${this.studentUrl}/${studentId}`);
  }

  //get teacher by id api
  getTeacherById(teacherId: string): Observable<any> {
    return this.http.get(`${this.teacherUrl}/${teacherId}`);
  }

  //get course by id api

}
