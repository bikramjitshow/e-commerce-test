function myMap(address) {
    /*var mapOptions = {
        center: new google.maps.LatLng(12.971599, 77.594563),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);*/

    var ul = {lat: parseFloat(address.geo.lat), lng: parseFloat(address.geo.lng)};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: ul
    });
    var marker = new google.maps.Marker({
        position: ul,
        map: map
    });
    google.maps.event.addListener(marker, 'click', function () {
        var infowindow = new google.maps.InfoWindow({
            content: "<div>Street :" + address.street + "</div>" +
            "<div>Suite :" + address.suite + "</div>" +
            "<div>City :" + address.city + "</div>" +
            "<div>Zip Code :" + address.zipcode + "</div>"
        });
        infowindow.open(map, marker);
    });

}
