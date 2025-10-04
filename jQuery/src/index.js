function initMap() {
  const map = $('#map').dxMap({
    center: '49.47805, -123.84716',
    zoom: 14,
    width: 1200,
    height: 620,
    provider: 'google',
    apiKey: {
      google: 'YOUR_API_KEY',
    },
    providerConfig: {
      mapId: 'DEMO_MAP_ID',
    },
    onReady(s) {
      const googleMap = s.originalMap;

      const createMarkerContent = (price, opacity = 1) => {
        const content = document.createElement('div');
        content.className = 'labels';
        content.textContent = price;
        content.style.opacity = opacity;
        return content;
      };

      const marker1 = new google.maps.marker.AdvancedMarkerElement({
        map: googleMap,
        position: { lat: 49.47805, lng: -123.84716 },
        content: createMarkerContent('$425K', 0.75),
        // eslint-disable-next-line spellcheck/spell-checker
        gmpDraggable: false,
        // eslint-disable-next-line spellcheck/spell-checker
        gmpClickable: false,
      });

      const marker2 = new google.maps.marker.AdvancedMarkerElement({
        map: googleMap,
        position: { lat: 49.475, lng: -123.84 },
        content: createMarkerContent('$395K', 1.0),
        // eslint-disable-next-line spellcheck/spell-checker
        gmpDraggable: true,
      });
    },
  }).dxMap('instance');
}

window.initMap = initMap;

$(() => {
  if (window.google && window.google.maps) {
    initMap();
  }
});
