//*--------------------------------------------------------------*
// cmsInspector
//*--------------------------------------------------------------*
//
function cmsInspector( actElem ) {

	// mode
	var mode = $( actElem ).data('inspector');

	// set active
	$('.cmsInspectorNavi__item').removeClass('isActive');
	$( actElem ).addClass('isActive');


	// switch
	switch(mode) {

		// fullscreen
		case 'fullscreen':
			$( '.cmsInspector' ).addClass('cmsInspector--full');
			$( '.cmsInspector' ).removeClass('cmsInspector--sidebar');
			$( "#cmsInspector" ).draggable( "enable" );
			break;

		// sidebar
		case 'sidebar':
			$( '.cmsInspector' ).removeClass('cmsInspector--full');
			$( '.cmsInspector' ).removeAttr('style');
			$( '.cmsInspector' ).addClass('cmsInspector--sidebar');
			$( "#cmsInspector" ).draggable( "disable" );
			break;

		// window
		case 'window':
			$( '.cmsInspector' ).removeClass('isOpen');
			cmsPopup();
			break;

		// open
		case 'open':
			$( '.cmsInspector' ).addClass('isOpen');
			break;

		// close
		case 'close':
			$( '.cmsInspector' ).removeClass('isOpen');
			break;

		default:
			$( '.cmsInspector' ).removeClass('isOpen');

	}

}
