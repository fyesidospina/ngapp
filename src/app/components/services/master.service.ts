import { Injectable } from '@angular/core';
import { BehaviorSubject,  Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { masterModel } from '../model/master.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private urlServicio: string = "http://localhost:3000";

  private urlA: string = "/master";
  
  constructor(private http:HttpClient) { 
    
  }

  getMaster(): Observable<masterModel> {
    return this.http.get<masterModel>(this.urlServicio + this.urlA);
  }

  create(Master:masterModel): Observable<masterModel>{
    return this.http.post<masterModel>(this.urlServicio + this.urlA, Master);
  }

  
    delete(id : any): Observable<any> {
    return this.http.delete<any>(`${this.urlServicio}/master?id=${id}`);

  }

}
