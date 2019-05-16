import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from './profiles';





@Injectable()
export class HomeService{


    baseUrl = "http://localhost:8087/profile/";

    constructor(private httpclient:HttpClient){}

    getprofiles():Observable<UserProfile[]>{
        return this.httpclient.get<UserProfile[]>(this.baseUrl);
    }

    
}