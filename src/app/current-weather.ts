export class CurrentWeather {
    constructor (public cityName:string,
                public temp:number,
                public icon:string,
                public weatherKind:string,
                public maxTemp:number,
                public minTemp:number){}
}
