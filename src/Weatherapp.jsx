import Searchbox from "./searchbox"
import Infobox from "./infobox"
import { useState } from "react"
export default function Weatherapp(){
    let [weatherinfo,setweatherinfo]=useState({ 
    city:"Delhi",
    feelslike: 39.53,
    humidity: 30,
    temp: 38.05,
    tempmax: 38.05,
    tempmin: 38.05,
    weather: "haze"})
    let updateinfo=(result)=>{
        setweatherinfo(result)
    }
    return(
        <div style={{textAlign:"center"}}>
            <h3>Weather App by Yogesh</h3>
            <Searchbox updateinfo={updateinfo}/>
            <Infobox info={weatherinfo}/>
        </div>
    )
}