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
    center: { lat: -33.860664, lng: 151.208138 },
    zoom: 14,
  };
  const mapDiv = document.getElementById('map');
  return new google.maps.Map(mapDiv, mapOptions);
}

