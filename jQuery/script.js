$(function(){  
    $("#map").dxMap({
        location: "40.749825, -73.987963",
        width: 1200,
        height: 620,
        zoom: 12,
        provider: "google",
        readyAction: function (s) {
            $.getScript("markerwithlabel.js", function () {
                var map = s.originalMap;
                var markerSettings = {
                    position: new google.maps.LatLng(40.749825, -73.987963),
                    map: map,
                    labelContent: "Label text",
                    labelAnchor: new google.maps.Point(26, 0),
                    labelClass: "mylabel"
                };
                var marker = new MarkerWithLabel(markerSettings);
            });
        }
    });
});