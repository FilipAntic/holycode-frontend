export type Place = {
    id: string;
    name: string;
    address: string;
    openingHours: {[key: string]: OpeningHour[]};
}
type OpeningHour = {start: string; end: string; type: "OPEN"};
export type PlaceShort = Pick<Place, 'name' | 'address' | 'id'>;
