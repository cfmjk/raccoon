// cmsInspector
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
			break;

		// sidebar
		case 'sidebar':
			$( '.cmsInspector' ).removeClass('cmsInspector--full');
			break;

		// window
		case 'window':
			$( '.cmsInspector' ).removeClass('cmsInspector--open');
			cmsPopup();
			break;

		// open
		case 'open':
			$( '.cmsInspector' ).addClass('cmsInspector--open');
			break;

		// close
		case 'close':
			$( '.cmsInspector' ).removeClass('cmsInspector--open');
			break;

		default:
			$( '.cmsInspector' ).removeClass('cmsInspector--open');

	}

}



function cmsPopup()
{													  
	var xmax = screen.availWidth;
	var ymax = screen.availHeight;
	var y=0;	
	var yw = ymax-60;
	var x=0;
	var xw=980;
	var winstr = "";
	
	if (xw > xmax) xw = xmax; 
	x = xmax-xw-15;
	winstr = "menubar=0,toolbar=0,location=0,directorys=0,status=1,scrollbars=1,resizable=1,width="+xw+",height="+yw+",left="+x+",top="+y;

    cmspopup = window.open("inspector.html","StdPopup",winstr);
	cmspopup.focus();
} 