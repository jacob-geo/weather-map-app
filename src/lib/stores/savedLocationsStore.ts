import { writable } from "svelte/store";

import type { Location } from "./currentLocationStore"; 


const savedLocationsList: Location[] = [
    {
        name: "Default Location 1",
        country: "Default Country 1",
        lat: 0,
        lon: 0
    },
    {
        name: "Default Location 2",
        country: "Default Country 2",
        lat: 0,
        lon: 0
    },
    {
        name: "Default Location 3",
        country: "Default Country 3",
        lat: 0,
        lon: 0
    },
    {
        name: "Default Location 4",
        country: "Default Country 4",
        lat: 0,
        lon: 0
    }
]


const savedLocations = writable(savedLocationsList);

export default savedLocations