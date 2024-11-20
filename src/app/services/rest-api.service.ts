import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http : HttpClient) { }

  //Course Creation API
  createCourse(data : any){
    return this.http.post('http://localhost:8085/learnlo/api/v1/course',data);
  }

  //View All Course API
  viewCourse(){
    return this.http.get('http://localhost:8085/learnlo/api/v1/course');
  }

  //

}
