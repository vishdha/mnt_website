// $(function() {


// 	$('#')

// 	$('#faq').show();
// });

$(document).ready(function() {
<<<<<<< HEAD
=======
	$('.btn-login-area').addClass('hide');
>>>>>>> 6716463f97004606cfccec334d5382397c50bb2d

	$('#newuser').click(function () {
		$( "#faq" ).removeClass('hide');

		$( "div[questiontype|='N']" ).removeClass('hide');
		$( "div[questiontype|='NE']" ).removeClass('hide');
		if (!$( "div[questiontype|='E']" ).hasClass('hide')) {
			$( "div[questiontype|='E']" ).addClass('hide');
		}

		$('html, body').animate({
<<<<<<< HEAD
	        scrollTop: $("#faq").offset().top - 100
=======
	        scrollTop: $("#faq").offset().top
>>>>>>> 6716463f97004606cfccec334d5382397c50bb2d
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
<<<<<<< HEAD
	        scrollTop: $("#faq").offset().top - 100
=======
	        scrollTop: $("#faq").offset().top
>>>>>>> 6716463f97004606cfccec334d5382397c50bb2d
	    }, 750);
	})

});