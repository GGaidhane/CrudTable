import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
baseurl:string="http://localhost:3000/";
headers:HttpHeaders=new HttpHeaders()
                    .set('content-type','application/json')
  constructor(private http:HttpClient) { }
  getDataFromServer(endpoint:string){
    let url=this.baseurl+endpoint;
    return this.http.get(url,{'headers':this.headers})
  }
  postDataToServer(endpoint:string,body:any){
    let url=this.baseurl+endpoint;
    return this.http.post(url,body,{headers:this.headers})
  }
  updateDataFromServer(endpoint:string,body:any){
    let url=this.baseurl+endpoint;
    return this.http.put(url,body,{headers:this.headers})
  }
  DeleteDataFromServer(endpoint:string){
    let url=this.baseurl+endpoint;
    return this.http.delete(url,{headers:this.headers})
  }
}
