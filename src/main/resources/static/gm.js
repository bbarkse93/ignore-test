var map;
var button = document.getElementById('map_button');
button.addEventListener('click', changeCenter);

function initMap() {
    var myLocation = { lat: 35.165179, lng: 129.184779};
    map = new google.maps.Map( document.getElementById('map'), {
        zoom: 15,
        center: myLocation
    });

    var mainMarker = new google.maps.Marker({
        position: gyeongbokgung,
        map: map,
        icon: {
            url: "pooh_marker.png",
            labelOrigin: new google.maps.Point(100, 55)
        }
    });
}

function changeCenter() {
    var myLocation = { lat: 35.165179, lng: 129.184779 };
    map.panTo(myLocation);
    map.setZoom(15);
}