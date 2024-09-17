import { writable } from "svelte/store";

type Location = {
    name: string,
    country: string,
    lat: number,
    lon: number,   

    // Add more if needed
}


const DEFAULT_LOCATION: Location = {
    name: "Default Location",
    country: "Default Country",
    lat: 0,
    lon: 0
}

const currentLocation = writable(DEFAULT_LOCATION);

export default currentLocation