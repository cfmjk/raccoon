//*--------------------------------------------------------------*
// cmsInspector
//*--------------------------------------------------------------*
//
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
