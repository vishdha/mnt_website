// $(function() {


// 	$('#')

// 	$('#faq').show();
// });

$(document).ready(function() {

	$('#newuser').click(function () {
		$( "#faq" ).removeClass('hide');

		$( "div[questiontype|='N']" ).removeClass('hide');
		$( "div[questiontype|='NE']" ).removeClass('hide');
		if (!$( "div[questiontype|='E']" ).hasClass('hide')) {
			$( "div[questiontype|='E']" ).addClass('hide');
		}

		$('html, body').animate({
	        scrollTop: $("#faq").offset().top - 100
	    }, 750);
	})


	$('#existinguser').click(function () {
		$( "#faq" ).removeClass('hide');
		
		$( "div[questiontype|='E']" ).removeClass('hide');
		$( "div[questiontype|='NE']" ).removeClass('hide');
		if (!$( "div[questiontype|='N']" ).hasClass('hide')) {
			$( "div[questiontype|='N']" ).addClass('hide');
		}

		$('html, body').animate({
	        scrollTop: $("#faq").offset().top - 100
	    }, 750);
	})

});