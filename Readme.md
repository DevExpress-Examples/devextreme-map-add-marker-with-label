<!-- default file list -->
*Files to look at*:

<!-- default file list end -->
# dxMap - How to add a marker with a label


<p>This example demonstrates how to add a marker with a label to the Google map. We used the <a href="http://google-maps-utility-library-v3.googlecode.com/svn/tags/markerwithlabel/1.1.8/docs/reference.html">MarkerWithLabel</a> class for this task. This class constructor requires the Google map instance. dxMap allows obtaining the instance in the <a href="http://phonejs.devexpress.com/Documentation/ApiReference/Widgets/dxMap/Configuration?version=13_2#readyAction">dxMap.readyAction</a> event handler using the <strong>originalMap</strong> parameter. The <a href="http://google-maps-utility-library-v3.googlecode.com/svn/tags/markerwithlabel/1.1.8/docs/examples.html">MarkerWithLabel Examples</a> web page demonstrates how to use the <strong>MarkerWithLabel</strong> class. We can use the same code in the <strong>dxMap.readyAction</strong> event handler. However, we should remember that dxMap loads the map's APIs dynamically and that is why we need to load a file that contains code for the <strong>MarkerWithLabel</strong> class when a map is completely loaded. We used <a href="http://api.jquery.com/jquery.getscript/">jQuery.getScript</a> for this purpose as shown below:<br /><br /></p>


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


<p><br /><strong>See also:</strong><br /><a href="https://www.devexpress.com/Support/Center/p/E4734">dxMap - How to add the current location marker</a> <br /><a href="https://www.devexpress.com/Support/Center/p/E4639">dxMap - How to add draggable markers</a> </p>

<br/>


