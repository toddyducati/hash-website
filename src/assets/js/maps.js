import { Loader } from '@googlemaps/js-api-loader';

const apiOptions = {
  apiKey: "AIzaSyAg4yFFPXR5CFyypLFbSB2-U3dXTx0qa4I"
}

const loader = new Loader(apiOptions);

loader.load().then(() => {
  console.log('Maps JS API loaded');
  const map = displayMap();
});

function displayMap() {
  const mapOptions = {
    center: { lat: 39.0458, lng: -76.6413 },
    zoom: 10,
  };

  const mapDiv = document.getElementById('map');
  return new google.maps.Map(mapDiv, mapOptions);
}

