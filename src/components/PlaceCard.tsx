import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {PlaceShort} from "../models/Place";
import {Link} from "react-router-dom";

type PlaceCardProps = {
    place: PlaceShort;
}
const PlaceCard = ({place}: PlaceCardProps) => {
        return (
            <Card>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {place.name}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {place.address}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" component={Link} to={`/${place.id}`}>Learn More</Button>
                </CardActions>
            </Card>
        );
}
export default PlaceCard;
