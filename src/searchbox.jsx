import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css"
import { useState } from 'react';
import { colors } from '@mui/material';
export default function Searchbox({updateinfo}){
    let [city,setcity]=useState("")
    let [error,seterror]=useState(false)
    let apiurl="https://api.openweathermap.org/data/2.5/weather"
    let apikey=`b97554de742b803653f0cc8f70cd1c54`
    let getweatherinfo=async ()=>{
        try{
            let res=await fetch(`${apiurl}?q=${city}&appid=${apikey}&units=metric`)
        let jsonresponse=await res.json()
        console.log(jsonresponse)
        let result={
            city:city,
            temp:jsonresponse.main.temp,
            tempmin:jsonresponse.main.temp_min,
            tempmax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            feelslike:jsonresponse.main.feels_like,
            weather:jsonresponse.weather[0].description
        }
        console.log(result)
        updateinfo(result)
        }catch(error){
            seterror(true)
        }
        
    }
    
    let handlechange=(event)=>{
        setcity(event.target.value)
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(city)
        getweatherinfo()
        setcity("")

    }
    return(
        <div className="searchbox">
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handlechange} required/><br></br><br></br>
            <Button variant="contained" type='submit'>Search</Button>
            </form>
            {error && <p style={{color:"red"}}>No such Place exist.</p>}
        </div>
    )
}