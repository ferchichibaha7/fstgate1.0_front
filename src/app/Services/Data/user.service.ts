import { Post } from './../../Models/post';
import { UserProfile } from './../../Models/UserProfile';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, filter, switchMap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private baseurl: String = 'http://localhost:8080/';


  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.baseurl+'user/me',httpOptions);
  }

  getStudPrev(): Observable<any> {
    return this.http.get<any>(this.baseurl+'users/stud/prev',httpOptions);
  }

  getProfPrev(): Observable<any> {
    return this.http.get<any>(this.baseurl+'users/prof/prev',httpOptions);
  }

  getPostsByGroup(idgroup:number): Observable<any> {
    return this.http.get<any>(this.baseurl+'posts/group/'+idgroup,httpOptions);
  }
  getPostById(id:number): Observable<Post> {
    return this.http.get<Post>(this.baseurl+'posts/'+id,httpOptions);
  }

  getPostsBySubGroup(idsub:number): Observable<any> {
    return this.http.get<any>(this.baseurl+'posts/subgroup/'+idsub,httpOptions);
  }

  getSubByGroup(idgroup:number): Observable<any> {
    return this.http.get<any>(this.baseurl+'subgroup/group/'+idgroup,httpOptions);
  }
  getSubById(id:number): Observable<any> {
    return this.http.get<any>(this.baseurl+'subgroups/'+id,httpOptions);
  }

  createPost(id:number,Post): Observable<any> {
    return this.http.post<any>(this.baseurl+'posts/'+id,Post,httpOptions);
  }

  deletePost(id:number): Observable<any> {
    return this.http.delete<any>(this.baseurl+'posts/'+id,httpOptions);
  }

  getUserProfileById(id:number): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.baseurl+'users/'+id,httpOptions);
  }

  getPending():Observable<any>{
    return this.http.get<any>(this.baseurl+'users/pending',httpOptions)
  }

activateUser(userid:number){
  return this.http.get(this.baseurl+'users/activate/'+userid,httpOptions)
}

confirmEmail(token:String){
  return this.http.get(this.baseurl+'api/auth/confirm-account/'+token,httpOptions)
}

createSub(id:number,name): Observable<any> {
  return this.http.post<any>(this.baseurl+'sub/'+id+'/'+name,Post,httpOptions);
}

disableSub(subid:number):Observable<any> {
  return this.http.get(this.baseurl+'sub/disable/'+subid,httpOptions)
}

}
