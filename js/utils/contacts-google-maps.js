export default function contactsMap() {
  const createxAddress = {lat: 39.95541365369952, lng: -75.16208429872842}

  const map = new google.maps.Map(document.getElementById('map'), {
    center: createxAddress,
    zoom: 16,
    disableDefaultUI: true,
    styles: [
      {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
      }
    ]
  });

  const markerImage = "/images/icons/map-marker.svg"

  const marker = new google.maps.Marker({
    position: createxAddress,
    map: map,
    icon: markerImage
  });
}