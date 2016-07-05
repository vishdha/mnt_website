// $(function() {


// 	$('#')

// 	$('#faq').show();
// });

$(document).ready(function() {
	$('.btn-login-area').addClass('hide');
});

$('#newuser').click(function () {
	$( "div[questiontype|='N']" ).removeClass('hide');
	$( "div[questiontype|='NE']" ).removeClass('hide');
	if (!$( "div[questiontype|='E']" ).hasClass('hide')) {
		$( "div[questiontype|='E']" ).addClass('hide');
	}
})


$('#existinguser').click(function () {
	$( "div[questiontype|='E']" ).removeClass('hide');
	$( "div[questiontype|='NE']" ).removeClass('hide');
	if (!$( "div[questiontype|='N']" ).hasClass('hide')) {
		$( "div[questiontype|='N']" ).addClass('hide');
	}
})