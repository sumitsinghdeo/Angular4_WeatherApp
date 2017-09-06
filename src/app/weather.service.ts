import { Injectable } from '@angular/core';
import {CurrentWeather} from './current-weather';
import {Http,Response} from '@angular/http';
import { Forecast } from './forecast';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherService {
 
  current:CurrentWeather= new CurrentWeather('New York',12,'"http://openweathermap.org/img/w/03d.png"','Sunny',20,8);
  
  constructor(private http:Http) { }
 
  weatherNow(){
    //return this.current;
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=0f636668cb4025b7cddb5962b8f5d048&units=matric`)
    .map((response:Response)=>response.json());
  }
  anotherCityWeather(city:string){
     return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f636668cb4025b7cddb5962b8f5d048&units=matric`)
    .map((response:Response)=>response.json());

    // return new Promise ( (res,rej)=>{
    //   navigator.geolocation.getCurrentPosition((pos)=>{
    //     this.location=pos.coords;
    //     const lat=this.location.latitude;
    //     const lon=this.location.longitude;
    //     console.log(location);
    //     return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0f636668cb4025b7cddb5962b8f5d048&units=imperial`)
    // .map((response:Response)=>response.json()).toPromise().then(
    //   (data)=>{
    //     console.log(data);
    //     this.myWeather= new CurrentWeather(
    //       data.name,
    //       data.main.temp,
    //       data.weather[0].icon,
    //       data.weather[0].discription,
    //       data.main.temp_max,
    //       data.main.temp_min);
    //     res (this.myWeather);
    //   }
    // )
    //   })
    }
    fiveDayForecast(city:string){
      return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0f636668cb4025b7cddb5962b8f5d048&units=matric`)
     .map((response:Response)=>response.json())
    }
    
    
  
}
