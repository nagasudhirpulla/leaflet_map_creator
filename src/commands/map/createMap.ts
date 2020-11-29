import * as L from 'leaflet';

export const createMap = (mapCntr: number[], mapZoom: number) => {
    const map = L.map('map', {
        editable: true
    } as any).setView([mapCntr[0], mapCntr[1]], mapZoom),
        tilelayer = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: 'Data \u00a9 <a href="http://www.openstreetmap.org/copyright"> OpenStreetMap Contributors </a> Tiles \u00a9 HOT'
        }).addTo(map);
    return map;
}