import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutDetails } from './donut-details';
import { DonutResults } from './donut-results';

@Injectable({
  providedIn: 'root'
})
export class DonutssService {
  url:string ="https://grandcircusco.github.io/demo-apis/donuts";
  constructor(private http:HttpClient) { }

  getAllDonuts() : Observable<DonutResults>{
    return this.http.get<DonutResults>(this.url + ".json");
  }

  getDonutDetails(id:number){
    return this.http.get<DonutDetails>(this.url +"/"+ id +".json");
  }
}