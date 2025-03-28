// Example store locations
const stores = [
    { name: "Store 1", lat: 40.7128, lng: -74.0060 }, // New York
    { name: "Store 2", lat: 34.0522, lng: -118.2437 }, // Los Angeles
    { name: "Store 3", lat: 41.8781, lng: -87.6298 },  // Chicago
  ];
  
  function initMap() {
    // Center on the first store
    const center = { lat: stores[0].lat, lng: stores[0].lng };
  
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: center,
    });
  
    stores.forEach((store) => {
      const marker = new google.maps.Marker({
        position: { lat: store.lat, lng: store.lng },
        map: map,
        title: store.name,
      });
  
      const infoWindow = new google.maps.InfoWindow({
        content: `<strong>${store.name}</strong>`,
      });
  
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  }
  