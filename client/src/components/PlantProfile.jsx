import { Avatar, Card, CardContent, Typography, Stack } from '@mui/material';
import YardIcon from '@mui/icons-material/Yard';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
export default function PlantProfile() {
    return(
       <Card>
            <CardContent>
                <Avatar>
                    <YardIcon />
                </Avatar>
                <Typography>This is a plant</Typography>
                <Stack>
                    <WbSunnyIcon/>
                    <WaterDropIcon/>
                </Stack>
            </CardContent> 
       </Card> 
    )
}