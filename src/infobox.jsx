import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infobox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Infobox({info}){
    const image="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const hot_url="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const cold_url="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const rain_url="https://images.unsplash.com/uploads/14116603688211a68546c/30f8f30b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    return(
        <div className='Infobox'>
        <div className='card-container'>
        <Card sx={{ maxWidth: 345 }}>
        
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? rain_url : info.temp>15 ? hot_url : cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {info.city}<br></br>
            {info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Max Temperature = {info.tempmax}</p>
            <p>Min Temperature = {info.tempmin}</p>
            <p>The Weather feels like {info.feelslike}&deg;C and described as {info.weather}</p>
        </Typography>
      </CardContent>
    </Card>
     </div>
    </div>
    )
}