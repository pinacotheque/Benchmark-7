export interface Weather {
   
    cod: string;
    message: string;
    cnt: number;
    list: Dt
    type: string;
}

export interface City extends Weather {
    id: string;
    name: string;
    coor: Coor;
    country: string;
    population: number;
    timezone: number;
}

export default interface Album {
    id: number;
    title: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    tracklist: string;
    type: string;
}

export interface Dt extends Weather {
    id: number;
    name: string;
    link: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    tracklist: string;
    type: string;

    
}
export interface Coor extends City {
    lon: string;
    lat: string; 
}
// "city": {
//     "id": 2643743,
//     "name": "London",
//     "coord": {
//       "lon": -0.1257,
//       "lat": 51.5085
//     },
//     "country": "GB",
//     "population": 1000000,
//     "timezone": 3600
//   },
//   "cod": "200",
//   "message": 0.0610271,
//   "cnt": 7,
//   "list": [
//     {
//       "dt": 1625140800,
//       "sunrise": 1625111254,
//       "sunset": 1625170853,
//       "temp": {
//         "day": 19.55,
//         "min": 11.96,
//         "max": 19.77,
//         "night": 16.09,
//         "eve": 19.47,
//         "morn": 13.33
//       },
//       "feels_like": {
//         "day": 19.15,
//         "night": 15.43,
//         "eve": 18.93,
//         "morn": 12.7
//       },
//       "pressure": 1018,
//       "humidity": 61,
//       "weather": [
//         {
//           "id": 803,
//           "main": "Clouds",
//           "description": "broken clouds",
//           "icon": "04d"
//         }
//       ],
//       "speed": 2.71,
//       "deg": 335,
//       "gust": 3.8,
//       "clouds": 69,
//       "pop": 0.15
//     },