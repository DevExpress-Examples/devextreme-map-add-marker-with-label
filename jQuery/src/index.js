$(() => {
  $('#map').dxMap({
    apiKey: 'YOUR_API_KEY',
    width: 1200,
    height: 620,
    zoom: 14,
    center: '49.47805, -123.84716',
    provider: 'google',
    onReady(s) {
      const map = s.originalMap;
      const homeLatLng = new google.maps.LatLng(49.47805, -123.84716);

      const marker1 = new MarkerWithLabel({
        position: homeLatLng,
        draggable: false,
        clickable: false,
        map,
        labelContent: '$425K',
        labelAnchor: new google.maps.Point(-21, 3),
        labelClass: 'labels', // the CSS class for the label
        labelStyle: { opacity: 0.75 },
      });

      const marker2 = new MarkerWithLabel({
        position: new google.maps.LatLng(49.475, -123.84),
        draggable: true,
        map,
        labelContent: '$395K',
        labelAnchor: new google.maps.Point(-21, 3),
        labelClass: 'labels', // the CSS class for the label
        labelStyle: { opacity: 1.0 },
      });
    },
  });
});
