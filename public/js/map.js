mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  accessToken:
    "pk.eyJ1IjoidGhhcnVuNzc3IiwiYSI6ImNtdGw2dWpqaDAwOHczNHF3NmNlZXVveXIifQ.N0JD6626-EA1_Jo_q8vDrw",
  container: "map", // container ID
  center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 10, // starting zoom
});

const marker1 = new mapboxgl.Marker({ color: "red", rotation: 45 })
  .setLngLat(coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      ` <p>Exact location provided after booking</p>`
    )
  )
  .addTo(map);
