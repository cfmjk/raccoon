function cmsInspector(s){var e=$(s).data("inspector");switch($(".cmsInspectorNavi__item").removeClass("isActive"),$(s).addClass("isActive"),e){case"fullscreen":$(".cmsInspector").addClass("cmsInspector--full"),$(".cmsInspector").removeClass("cmsInspector--sidebar"),$("#cmsInspector").draggable("enable");break;case"sidebar":$(".cmsInspector").removeClass("cmsInspector--full"),$(".cmsInspector").removeAttr("style"),$(".cmsInspector").addClass("cmsInspector--sidebar"),$("#cmsInspector").draggable("disable");break;case"window":$(".cmsInspector").removeClass("isOpen"),cmsPopup();break;case"open":$(".cmsInspector").addClass("isOpen");break;case"close":$(".cmsInspector").removeClass("isOpen");break;default:$(".cmsInspector").removeClass("isOpen")}}function cmsPopup(){var s=screen.availWidth,e=screen.availHeight-60,a=980,t="";a>s&&(a=s),t="menubar=0,toolbar=0,location=0,directorys=0,status=1,scrollbars=1,resizable=1,width="+a+",height="+e+",left="+(s-a-15)+",top=0",cmspopup=window.open("inspector.html","StdPopup",t),cmspopup.focus()}$(".rampLogin__button").click(function(s){s.preventDefault(),rampLogin=$(this).parents(".rampLogin");var e=$("#username").val(),a=$("#password").val();rampLogin.addClass("rampLogin--loading"),setTimeout(function(){rampLogin.removeClass("rampLogin--loading"),"test"==e&&"test"==a?rampLogin.addClass("rampLogin--success"):rampLogin.addClass("rampLogin--error")},3e3)}),$(function(){$("#cmsInspector").draggable({start:function(){$(this).addClass("dragging")},drag:function(s,e){},stop:function(){$(this).removeClass("dragging")},handle:".cmsInspectorNavi",containment:"window"}),$(".cmsInspector--sidebar").draggable("disable"),$("#cmsInspector").resizable({start:function(){$(this).addClass("noTransition"),heightDifference=$(this).outerHeight()-$(this).height()},resize:function(s,e){var a=$(document).outerHeight();e.size.height=e.size.height+heightDifference,e.size.height>=a&&(e.size.height=a),e.size.height<="300"&&(e.size.height="300"),e.size.width>="800"&&(e.size.width="800"),e.size.width<="300"&&(e.size.width="300")}})});