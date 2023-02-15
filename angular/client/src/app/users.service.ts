// https://www.youtube.com/watch?v=O-MAtagUJjM
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
private baseURL='http://localhost:3000'
  constructor(private http:HttpClient) { }
grtalldata():Observable<any>{
  return this.http.get(`${this.baseURL}/getAll`)
}
postData(data:any):Observable<any>{
  return this.http.post(`${this.baseURL}/post`,data)
}
updateData(data:any):Observable<any>{
  return this.http.post(`${this.baseURL}/update`,data)
}
}
