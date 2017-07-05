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








$( function() {

	$( "#cmsInspector" ).draggable({
		start: function() {
			$( this ).addClass('dragging');
		},
		drag: function( event, ui) {

		},
		stop: function() {
			$( this ).removeClass('dragging');
		},
		handle: ".cmsInspectorNavi",
		containment: "window"
	});
	$( ".cmsInspector--sidebar" ).draggable( "disable" );


	$( "#cmsInspector" ).resizable({
		start: function() {
			$( this ).addClass('noTransition');
			heightDifference = $(this).outerHeight() - $(this).height();
		},
		resize: function( event, ui ) {
			var maxHeight = $( document ).outerHeight();
			//var windowWidth = $( document ).outerWidth();
			var minHeight = "300";
			var maxWidth = "800";
			var minWidth = "300";

			ui.size.height = ui.size.height + heightDifference;

			if( ui.size.height >= maxHeight ) {
				ui.size.height = maxHeight;
			}

			if( ui.size.height <= minHeight ) {
				ui.size.height = minHeight;
			}

			if( ui.size.width >= maxWidth ) {
				ui.size.width = maxWidth;
			}

			if( ui.size.width <= minWidth ) {
				ui.size.width = minWidth;
			}
		}
	});

} );




