$(document).ready(function() {
	var s = $(".cc");
	var pos = s.position();
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= 50 & windowpos <= 400) {
			s.removeClass("slide")
			s.addClass("reduc");
			$('#1').addClass("hide")
			$('#2').addClass("hide")
			$('#3').addClass("hide")
			$('#4').addClass("hide")
			$('#5').removeClass("hide")

		} else if (windowpos >= 400 & windowpos <= 600) {
			$('#5').addClass("hide")
      $('#6').removeClass("hide")
			$('#10').removeClass("center")
			$('#10').addClass("center2")

		} else if (windowpos >= 600 & windowpos <= 2000) {
			$('#6').addClass("hide")
      $('#7').removeClass("hide")
    } else{
			s.removeClass("reduc")
			s.addClass("slide")
			$('#6').addClass("hide")
			$('#5').addClass("hide")
			$('#7').addClass("hide")
			$('#1').removeClass("hide")
			$('#2').removeClass("hide")
			$('#3').removeClass("hide")
			$('#4').removeClass("hide")
			$('#10').removeClass("center2")
			$('#10').addClass("center")

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
