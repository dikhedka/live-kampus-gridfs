import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from './profile';
import { UserUploadImages } from './uploadImages';
import { FileResource } from './FileResource';



@Injectable()
export class ProfileService{


    baseUrl = "http://localhost:8087/profile/";

    constructor(private httpclient:HttpClient){}

    getprofile():Observable<UserProfile[]>{
        return this.httpclient.get<UserProfile[]>(this.baseUrl);
    }

    findProfileByUserName(): Observable<UserProfile> {        
        return this.httpclient.get<UserProfile>(this.baseUrl + "SRK");

    }

    uploadImages(fd:FormData):Observable<UserUploadImages>{
        alert(fd.get("email"));
        return this.httpclient.post<UserUploadImages>(this.baseUrl+"upload/"+fd.get("myEmail"),fd);
    }

    fetch(email:String):Observable<Blob>{
            return this.httpclient.get(this.baseUrl+"save/"+email, {responseType: 'blob'});
        }
        // fetchAll():Observable<FileResource[]>{
        //     return this.httpclient.get(this.baseUrl+"/retrieve/"+id, {responseType: 'blob'});
        // }

    
}