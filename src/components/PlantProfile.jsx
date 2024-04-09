import { useState, useEffect } from "react";
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import YardIcon from "@mui/icons-material/Yard";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
export default function PlantProfile() {
  const apiKey = import.meta.env.VITE_PERENUAL_API_KEY;
  
  // State of plant information to be displayed
  const [plant, setPlant] = useState({
    plantName:'',
    water: '',
    sunlight: ''
  })

  // State of plant data being fetched
  const [plantInfo, setPlantInfo] = useState();

  useEffect(() => {
    fetch(`https://perenual.com/api/species/details/1?key=${apiKey}`)
        .then(response => response.json())
        .then(plantData => {
            setPlantInfo(plantData);
            console.log(plantData)
        })
  },[]);
  return (
    <Card>
      <CardContent>
        <Avatar sx={{ margin: "auto auto" }}>
          <img src={plantInfo.default_image.thumbnail}/>
        </Avatar>
        <Typography>{plantInfo.common_name}</Typography>
        <Stack>
          <Box sx={{ display: "flex" }}>
            <WbSunnyIcon />
            <Typography>{plantInfo.sunlight}</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <WaterDropIcon />
            <Typography>{plantInfo.watering}</Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
