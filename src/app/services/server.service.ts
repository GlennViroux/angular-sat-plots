import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  serverIp = "";

  constructor(private http:HttpClient) {}

   async getIp(){
    if (this.serverIp){
      return this.serverIp;
    }

    let remoteResult = await this.http.get("https://glenny.hopto.org/servercheck")
    .toPromise()
    .then(_ => {
      return "glenny.hopto.org"
    })
    .catch(_ => {
      return null;
    })

    if (remoteResult){
      this.serverIp = remoteResult;
      return remoteResult;
    }

    let localResult = await this.http.get("https://192.168.0.13/servercheck")
    .toPromise()
    .then(_ => {
      return "192.168.0.13";
    })
    .catch(_ => {
      return null;
    })

    if (localResult) {
      this.serverIp = localResult;
      return localResult;
    }

    return "";
   }

}
