// owl carosol

$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 10,
    nav: false,
    loop: true,
    autoplay: true,
    autoplaytimeout: 5000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});

// menu fixed function
$(window).scroll(function(){
	if($(this).scrollTop() > 260)
	{
		$('#menu').addClass("fixed");
	}else{
		$('#menu').removeClass("fixed");
	}
});




// alert('help');
