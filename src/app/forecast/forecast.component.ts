import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Forecast } from '../forecast';
import { WeatherService } from '../weather.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  constructor(private weatherService:WeatherService) { }

  forecastForm:FormGroup
  cityForecast: Forecast[]=[];

  ngOnInit() {
    this.forecastForm=new FormGroup({
      forecastCity: new FormControl('')
    })
  }
 onSubmit(){
   this.cityForecast.splice(0,this.cityForecast.length)
   console.log(this.forecastForm);
  this.weatherService.fiveDayForecast(this.forecastForm.value.forecastCity).subscribe(
    (data)=>{
      console.log(data);
      for(let i=0; i<data.list.length; i+=8){
        const temporary=new Forecast(data.list[i].dt_txt,
                                  data.list[i].weather[0].icon,
                                  data.list[i].main.temp_max-273.15,
                                  data.list[i].main.temp_min-273.15)
          this.cityForecast.push(temporary);
            
      }
        console.log(this.cityForecast);
    }
  )
 }

 
}
