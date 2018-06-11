$(document).ready(function() {
	var s = $("#ban");
	var pos = s.position();
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= 50 & windowpos <= 400) {
			s.addClass("reduc");
		} else if (windowpos >= 400 & windowpos <= 800) {
			s.removeClass("reduc");
      s.addClass("reducb");
		} else if (windowpos >= 800 & windowpos <= 1200) {
      s.removeClass("reducb");
      s.addClass("reducc");
    }
	});
});


function initMap() {
        var cci = {lat: 49.768234, lng: 4.722480};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: cci,
        });
        var image = "./img/simplon.png";
        var marker = new google.maps.Marker({
          position: cci,
          title:"CCI des ardennes",
          icon: image,
          map: map,
        });
      };
