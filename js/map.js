let map = L.map('homeMap').setView([51.31826434825611, 4.574083311124841], 12);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let apMarker = L.marker([51.31826434825611, 4.574083311124841]).addTo(map);
apMarker.bindPopup("<b>Netwerken Ilario</b><br>Sorbenlaan 38").openPopup();