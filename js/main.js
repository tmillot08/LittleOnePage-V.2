function initMap() {
        var cci = {lat: 49.768234, lng: 4.722480};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: cci
        });
        var image = "./img/simplon.png";
        var marker = new google.maps.Marker({
          position: cci,
          title:"CCI des ardennes",
          icon: image,
          map: map
        });
      }
