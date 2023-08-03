import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cat } from '../models/cat.model';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private httpClient: HttpClient) {}

  async getCat(max_length: number, limit: number): Promise<Cat[]> {
    let result: Cat[] = [];
    let responseFacts = this.httpClient.get<Cat[]>(`https://catfact.ninja/facts?max_length=${max_length}&limit=${limit}`);
    let responseImg = this.httpClient.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&api_key=live_jhojQtQWDUE4xdCLiRvXHTGZ4zuFfNNxvJqm2AI8lvoBtKkhjkWO7ASW8DSGm18r`);

    let promiseFacts = new Promise<Cat[]>((resolve, reject) => {
      responseFacts.subscribe((data:any) => {
        resolve(data['data']);
      });
    });
    let promiseImg = new Promise<any>((resolve, reject) => {
      responseImg.subscribe((data:any) => {
        resolve(data);
      });
    });

    let data = await Promise.all([promiseFacts, promiseImg]);
    console.log(data);
    let facts : any[] = data[0];
    let images : any[] = data[1];
    facts.forEach((fact, index) => {
      result.push({
        id: fact.id,
        fact: fact.fact,
        imageURL: images[index].url,
        length: fact.length,
      });
    });
    console.log(result);
    return result;
  }
   
}
