<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/128584404/18.1.11%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T108722)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->

# Map for DevExtreme - How to add a marker with a label

This example demonstrates how to add a marker with a label to the Google map. We used the <a href="http://google-maps-utility-library-v3.googlecode.com/svn/tags/markerwithlabel/1.1.8/docs/reference.html">MarkerWithLabel</a> class for this task. This class constructor requires the Google map instance. dxMap allows obtaining the instance in the <a href="http://phonejs.devexpress.com/Documentation/ApiReference/Widgets/dxMap/Configuration?version=13_2#readyAction">dxMap.readyAction</a> event handler using the <strong>originalMap</strong> parameter. The <a href="http://google-maps-utility-library-v3.googlecode.com/svn/tags/markerwithlabel/1.1.8/docs/examples.html">MarkerWithLabel Examples</a> web page demonstrates how to use the <strong>MarkerWithLabel</strong> class. We can use the same code in the <strong>dxMap.readyAction</strong> event handler. However, we should remember that dxMap loads the map's APIs dynamically and that is why we need to load a file that contains code for the <strong>MarkerWithLabel</strong> class when a map is completely loaded. We used <a href="http://api.jquery.com/jquery.getscript/">jQuery.getScript</a> for this purpose as shown below:

```js
readyAction: function (s) {
    $.getScript("js/markerwithlabel.js", function () {
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
```

## Files to Review

- **jQuery**
    - [index.html](jQuery/index.html)
    - [script.js](jQuery/script.js)

## Documentation

- [Map Overview](https://js.devexpress.com/Documentation/Guide/UI_Components/Map/Overview/)
- [Map - API Reference](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxMap/)

## See Also

- [Map for DevExtreme - How to add the current location marker](https://www.devexpress.com/Support/Center/p/E4734)
<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=devextreme-map-add-marker-with-label&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=devextreme-map-add-marker-with-label&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
