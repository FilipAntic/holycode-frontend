import {Box, Container, Grid, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Place} from "../models/Place";

const PlacePage = () => {
    const { id } = useParams();
    const [place, setPlace] = useState<Place>();
    useEffect(() => {
        fetch(`http://localhost:3100/${id}`).then(resp=>resp.json()).then(data=> setPlace(data)).catch(console.error)
    }, [id]);
    return <Container>
        {place ? <PlaceView place={place}/> : <Typography>Place not found</Typography>}
    </Container>
}

const PlaceView = ({place}: {place: Place}) => {
    return  <>
        <Typography variant="h3">{place.name}</Typography>
        <Grid container spacing={2}>
        <Grid item xs={6}>


            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                Address:
            </Typography>
            <Typography variant="body1" pl={2}>{place.address}</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                Opening Hours:
            </Typography>
            {Object.entries(place.openingHours).map(([key, value])=> <Box display="flex" justifyContent="space-between">
                <Typography variant="body1" pl={2}>{key}</Typography>
                <Box display="flex" flexDirection="column">
                    {value.map(time=> time.type === "OPEN" ? <Typography variant="body1" pl={2}>{time.start} - {time.end}</Typography>:<Typography variant="body1" pl={2}>{time.type}</Typography>)}
                </Box>
            </Box>)}
        </Grid>

    </Grid> </>
}

export default PlacePage;
