//*--------------------------------------------------------------*
// rampLogin
//*--------------------------------------------------------------*
//
$( ".rampLogin__button" ).click(function( event ) {
	event.preventDefault();
	rampLogin = $( this ).parents('.rampLogin');
	var user = $('#username').val();
	var pw = $('#password').val();


	// add loading class on click the submit button
 	rampLogin.addClass('rampLogin--loading');

	// timeout for animation
	setTimeout(function () {

		// remove loading class
		rampLogin.removeClass('rampLogin--loading');

		// add success class if login = correct
		if( user == 'test' && pw == 'test') {
			rampLogin.addClass('rampLogin--success');
		}
		// else add error class
		else {
			rampLogin.addClass('rampLogin--error');
		}

	}, 3000);

});
