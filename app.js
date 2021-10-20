const SatURl = "https://api.wheretheiss.at/v1/satellites/25544";
// setting the map view to scale 1x so that it does'nt zoom in by default



var mymap = L.map("ISSloc").setView([0, 0], 1);
console.debug(mymap)
// // sepcifying which icon to use
var myIcon = L.icon({
  iconUrl: "iss.png",
  iconSize: [50, 32],
  iconAnchor: [25, 16],
});
// setting the map marker to a custom Internation Space Station Icon
const marker = L.marker([0, 0], { icon: myIcon }).addTo(mymap);

// Getting the map from leaflert api and setting tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

async function getSat() {
  const response = await fetch(SatURl);
  const data = await response.json();
  const latitude = data.latitude;
  const longitude = data.longitude;
  const velocity = data.velocity;
  // L.marker([latitude, longitude]).addTo(mymap)
  //   plotting the coordinates of ISS
  marker.setLatLng([latitude, longitude]);
  document.getElementById("lon").innerHTML = longitude.toFixed(4);
  document.getElementById("lat").innerHTML = latitude.toFixed(4);
  document.getElementById("vel").innerHTML = velocity.toFixed(0) + " Km/Hr";
  console.log(data);
}


setInterval(getSat, 1000);

