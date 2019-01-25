import { Injectable } from '@angular/core';
import { Character } from '../character';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  characters: Character;
  powers=[];

  constructor(private http: HttpClient) { 
    this.characters = new Character('','','','','','','','', '')
  }

  search_powers() {
    interface ApiResponse {
      results: any
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.proxy + this.characters.power_link + environment.character_url_filter).toPromise().then(response => {
        for(let i in response.results.powers){
          this.powers.push(response.results.powers[i].name)
        }
        resolve()
      },
        err => {
          console.log("Nigga not found");
          reject(err);
        })
        this.powers.length=0
      return promise
    })
  }

  default(){
    interface ApiResponse{
      results:any
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.default_url).toPromise().then(response => {
        response.results.forEach(element => {
          if (element.name == 'Silver Surfer') {
            this.characters.overview = element.deck
            this.characters.description = element.description
            this.characters.power_link = element.api_detail_url
            this.characters.image_path = element.image.original_url
            this.characters.origin = element.origin.name
            this.characters.publisher = element.publisher.name
            this.characters.real_name = element.real_name
            this.characters.s_name = element.name
            if(element.gender=1){
              this.characters.gender = 'Male'
            }else if(element.gender=2){
              this.characters.gender = 'Female'
            }else{
              this.characters.gender = 'Unknown'
            }
            this.search_powers()
            console.log('Default function ran')
          }
        })
        resolve()
      },
        err => {
          console.log("Nigga not found");
          reject(err);
        })
      return promise
    })
  }

  character_search(search){
    interface ApiResponse {
      results: any
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.base_url+search).toPromise().then(response => {
        response.results.forEach(element => {
          if (element.name.toLowerCase() == search.toLowerCase()) {
            this.characters.overview = element.deck
            this.characters.description = element.description
            this.characters.power_link = element.api_detail_url
            this.characters.image_path = element.image.original_url
            this.characters.origin = element.origin.name
            this.characters.publisher = element.publisher.name
            this.characters.real_name = element.real_name
            this.characters.s_name = element.name
            if (element.gender = 1) {
              this.characters.gender = 'Male'
            } else if (element.gender = 2) {
              this.characters.gender = 'Female'
            } else {
              this.characters.gender = 'Unknown'
            }
            this.search_powers()
            console.log('Search function ran')
          }
        })
        resolve()
      },
        err => {
          alert('That character cannot be found')
          reject(err);
        })
      return promise
    })
  }
}
