import {Box, Container, debounce, Grid, IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PlaceCard from "../components/PlaceCard";
import {useEffect, useState} from "react";
import {PlaceShort} from "../models/Place";

const PlacesPage = () => {
    const [places, setPlaces] = useState<PlaceShort[]>([]);
    useEffect(() => {
        fetch(`http://localhost:3100`).then(resp=>resp.json()).then(data=> setPlaces(data)).catch(console.log)
    }, []);
    const onInputChange = (event: any) => {
            fetch(`http://localhost:3100?searchQuery=${event?.target?.value || ''}`).then(resp=>resp.json()).then(data=> setPlaces(data)).catch(console.log);
    }
  return <Container>
      <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
      >
          <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search business entries"
              inputProps={{ 'aria-label': 'search google maps' }}
              onChange={debounce(onInputChange, 500)}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
          </IconButton>
      </Paper>
      <Box mt={2}>
          <PlacesListView places={places}/>
      </Box>
  </Container>
}

const PlacesListView = ({places}: {places: PlaceShort[]}) => <Grid container spacing={2}>
    {places.map(place => <Grid item xs={6}> <PlaceCard key={place.id} place={place}/> </Grid>)}
</Grid>

export default PlacesPage;
