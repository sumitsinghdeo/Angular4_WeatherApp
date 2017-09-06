import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import {CurrentWeather} from '../current-weather';
//import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
  location;
  myWeather: CurrentWeather;
  constructor(private ws:WeatherService){}
  
  ngOnInit() {
     //this.myWeather=this.ws.weatherNow();
    // navigator.geolocation.getCurrentPosition((pos)=>{
    //     this.location=pos.coords;
    //     const lat=this.location.latitude;
    //     const lon=this.location.longitude;
        this.ws.weatherNow().subscribe(
        (data)=>{
        console.log(data);
        this.myWeather= new CurrentWeather(
          data.name,
          data.main.temp-273.15,
          data.weather[0].icon,
          data.weather[0].description,
          data.main.temp_max-273.15,
          data.main.temp_min-273.15);
        return (this.myWeather);
      }
        )
      
  }
    onSubmit(weatherForm:NgForm){
     this.ws.anotherCityWeather(weatherForm.value.city).subscribe(
       (data)=>{
         console.log(data);
         this.myWeather=new CurrentWeather(
           data.name,
          this.myWeather.temp=(data.main.temp-273.15),
          data.weather[0].icon,
          data.weather[0].description,
          
          this.myWeather.maxTemp=(data.main.temp_max-273.15),
          this.myWeather.minTemp=(data.main.temp_min-273.15));
          
        return (this.myWeather);
         
       }
     )
    }

}
