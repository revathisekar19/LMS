import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
username = 'mfernando';
password = 'password1';
private baseUrl = 'http://localhost:8085/learnlo/api/v1';
  private studentUrl = 'http://localhost:8085/learnlo/api/v1/student';
  private teacherUrl = 'http://localhost:8085/learnlo/api/v1/teacher';
  private courseUrl  = 'http://localhost:8085/learnlo/api/v1/course';
  private userUrl = 'http://localhost:8085/learnlo/api/v1/user';

  constructor(private http : HttpClient) { }

  //login api
  login(userId : any): Observable<any>{
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.get(`${this.userUrl}/${userId}`,{headers})
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

  //create teacher course api
  assignTeacher(data:any):Observable<any>{
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.post(`${this.baseUrl}/teacher-course`,data,{headers});
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

  //get course teacher api
  getCourseTeacher() : Observable<any>{
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.get(`${this.baseUrl}/teacher-course`,{headers});
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

  //get course by teacher id api
  getCoursesByTeacherId(teacherId: string): Observable<any> {
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.get(`${this.baseUrl}/teacher-course?teacherId=${teacherId}`,{headers});
  }

  //get course by student id api
  getStudentCourse(teachercourseId:string) : Observable<any>{
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
            Authorization: authHeader
        });
    return this.http.get(`http://localhost:8085/learnlo/api/v1/enrollment?teacherCourseId=${teachercourseId}`,{headers})
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
    return this.http.put(`${this.courseUrl}/${courseId}`,data,{headers});
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
