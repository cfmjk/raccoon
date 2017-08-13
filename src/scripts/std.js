





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
