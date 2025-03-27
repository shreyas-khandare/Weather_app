import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export default function InfoBox({ info }) {
  const INT_URL =
    "https://images.unsplash.com/photo-1612251276789-9b1a8f2add8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1617255469888-2da1a94c8030?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div id="InfoBox">
      <h2>Weather information {info.weather}</h2>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            Temperature: {info.temp}&deg;C
          </Typography>
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            Feels like: {info.feelsLike}&deg;C
          </Typography>
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            Maximum Temperature: {info.tempMax}&deg;C
          </Typography>
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            Minimum Temperature: {info.tempMin}&deg;C
          </Typography>
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            Humidity: {info.humidity}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
