import { addMapButtons } from "./addMapButtons";

declare var L;

export const createMap = (mapCenter: number[], mapZoom: number) => {
    const map = L.map('map', {
        editable: true
    } as any).setView([mapCenter[0], mapCenter[1]], mapZoom),
        tilelayer = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: 'Data \u00a9 <a href="http://www.openstreetmap.org/copyright"> OpenStreetMap Contributors </a> Tiles \u00a9 HOT'
        }).addTo(map);
    addMapButtons(map)
    return map
}