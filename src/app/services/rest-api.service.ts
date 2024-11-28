import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
username = 'mfernando';
password = 'password1';
  private studentUrl = 'http://localhost:8085/learnlo/api/v1/student';
  private teacherUrl = 'http://localhost:8085/learnlo/api/v1/teacher';
  private coutseUrl  = 'http://localhost:8085/learnlo/api/v1/course';
  private userUrl = 'http://localhost:8085/learnlo/api/v1/user';

  constructor(private http : HttpClient) { }

  //login api
  login(userId : any): Observable<any>{
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    // return this.http.get(`${this.userUrl}/${userId}`,{headers})

    const urls = [
      `${this.userUrl}/${userId}`,  // first URL
      `${this.studentUrl}/${userId}`,  // second URL
      `${this.teacherUrl}/${userId}`  // third URL
  ];

    return this.http.get(urls[0], { headers }).pipe(
      catchError(error => {
          if (error.status === 404) {
              // If 404 error occurs, try the next URL
              return this.http.get(urls[1], { headers }).pipe(
                  catchError(error => {
                      if (error.status === 404) {
                          // If the second URL also returns 404, try the next one
                          return this.http.get(urls[2], { headers }).pipe(
                              catchError(err => {
                                  // If the third URL returns 404 as well, return an error message
                                  return of(`Error: User with ID ${userId} not found.`);
                              })
                          );
                      }
                      // Handle any other errors from the second URL
                      return of(`Error: ${error.message}`);
                  })
              );
          }
          // Handle any other errors from the first URL
          return of(`Error: ${error.message}`);
      })
  );
  }

  //creation api

  //Course Creation API
  createCourse(data : any): Observable<any>{
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.post('http://localhost:8085/learnlo/api/v1/course',data,{headers});
  }

  //teacher creation api
  createTeacher(data : any): Observable<any>{
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.post('http://localhost:8085/learnlo/api/v1/teacher',data,{headers});
  }

  //student creation api
  createStudent(data : any): Observable<any>{
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.post('http://localhost:8085/learnlo/api/v1/student',data,{headers});
  }

  //role & password creation api
  createRole(data : any): Observable<any>{
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.post('http://localhost:8085/learnlo/api/v1/user',data,{headers});
  }

  //view api

  //get All Course API
  viewCourse(): Observable<any>{
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.get('http://localhost:8085/learnlo/api/v1/course',{headers});
  }

  //get all teacher api
  viewTeacher(): Observable<any>{
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.get('http://localhost:8085/learnlo/api/v1/teacher',{headers});
  }

  //get student api
  getStudent(): Observable<any>{
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.get('http://localhost:8085/learnlo/api/v1/student',{headers});
  }
  

  //view by id api

  //get student by id api
  getStudentById(studentId: string): Observable<any> {
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.get(`${this.studentUrl}/${studentId}`,{headers});
  }

  //get teacher by id api
  getTeacherById(teacherId: string): Observable<any> {
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.get(`${this.teacherUrl}/${teacherId}`,{headers});
  }

  //get course by id api
  getCourseById(courseId: string): Observable<any> {
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.get(`${this.teacherUrl}/${courseId}`,{headers});
  }

  //update api

  //update teacher api
  updateTeacher(teacherId:string,data:any): Observable<any>{
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.put(`${this.teacherUrl}/${teacherId}`,data ,{headers});
  }

  //update courese api
  updateCourse(courseId:string,data:any):Observable<any>{
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.put(`${this.coutseUrl}/${courseId}`,data,{headers});
  }
  //update student api
  updateStudent(studentId: any,data:any): Observable<any> {
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.put(`${this.studentUrl}/${studentId}`,data,{headers});
  }
}
