var navHeight=145
var isStickyPage=false

/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-css_positionsticky-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e});for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("csspositionsticky",function(){var a="position:",b="sticky",c=document.createElement("modernizr"),d=c.style;return d.cssText=a+Modernizr._prefixes.join(b+";"+a).slice(0,-a.length),d.position.indexOf(b)!==-1});

function makeSticky() {
	if(!Modernizr.csspositionsticky) {
		$("#topNav").sticky({ topSpacing: 0 });
	} else {
		$("#topNav").addClass("is-sticky");
		$(".is-sticky .fixedNavLogoBox").css({"display":"none"});
	}
}

//http://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html,body').animate({
		  scrollTop: target.offset().top - 140  // -140 to accommodate for height of fixed header
		}, 500);
		return false;
	  }
	}
  });


  //http://jreject.turnwheel.com/
   $.reject({  
        reject: {  
            msie8: true // Microsoft Internet Explorer  
        } ,
        display: ['msie','chrome','firefox'],
        closeCookie: true
    }); // Customized Browsers  


});

(function( $ ){
      $.fn.valList = function(){
            return $.map( this, function (elem) {
                  return elem.value || "";
            }).join( "," );
      };
})( jQuery );

function jsDollars(p) {
	return "$" + p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "<span class='byoMSRPStar'>*</span>"
}

function productVideo(y) {
	$(".productVideoBox").toggle();
	$(".productVideoClose").toggle();
	$(".productVideo").attr({"src":"//www.youtube.com/embed/" + y + "?rel=0&autohide=1&autoplay=1"});
	var gh=$(".productBG").css("height");
	$(".productVideoBox").css({"height":gh})
}

function closeProductVideo(t) {
	$(".productVideoBox").toggle();
	$(".productVideoClose").toggle();
	$(".productVideo").attr({"src":""});
}

function closeVideo(t) {
	$(".homeVideoBox").toggle();
	$(".homeVideoClose").toggle();
	$(".homeVideo").attr({"src":""});
}

function chooseBrochure(b) {
	$("#bs" + b).toggleClass("brochureSelectOn");
	if($("#bro" + b).val()==0) {
		$("#bro" + b).val(1)
	} else {
		$("#bro" + b).val(0)
	}
}

function brochurePost(n) {
	$(".broChoiceError").hide();
	$(".broFormError").hide();

	brandCode=$("#brandCode").val()
	uFirstName=$("#uFirstName").val()
	uLastName=$("#uLastName").val()
	uEmail=$("#uEmail").val()
	uAddress=$("#uAddress").val()
	uPhone=$("#uPhone").val()
	UserUid=$("#UserUid").val()
	SessionUid=$("#SessionUid").val()
	promoEmails=$("input[name=promoEmails]:checked").valList()
	buyingTimeframe=$("input[name=buyingTimeframe]:checked").valList()
	contactPreferences=$("input[name=contactPreferences]:checked").valList()
	uZip=$("#uZip").val()

	b1=$("#bro1").val()
	b2=$("#bro2").val()
	b3=$("#bro3").val()
	if(b1+b2+b3 > 0) {
		if (valBrochure(n)) {
			$(".selectDownload").hide();
			$(".buyerFormBox").hide();
			$(".buyerDownloads").show();
			if(n==1) {
				$("#jsonResponse").load("/brand/brochure_post.asp",{brandCode:brandCode,uFirstName:uFirstName,uLastName:uLastName,uEmail:uEmail,uPhone:uPhone,uAddress:uAddress,uZip:uZip,UserUid:UserUid,SessionUid:SessionUid,contactPreferences:contactPreferences,promoEmails:promoEmails,buyingTimeframe:buyingTimeframe},function(data) {
			});
				
			}
			$(".broDownload").hide();
			if(b1==1) { $("#broDownload1").show() }
			if(b2==1) { $("#broDownload2").show() }
			if(b3==1) { $("#broDownload3").show() }
		} else {
			$(".broFormError").show();
		}
	} else {
		$(".broChoiceError").show();
	}

}

function valBrochure(n) {
	atLeastOneErr=false
	if(n==1) {
		$("input[type=text],select,textarea, #purchasingListBox").css({ border : "none"})
		if(document.theBuyerForm.uFirstName.value=='') { makeError('uFirstName'); }
		if(document.theBuyerForm.uLastName.value=='') { makeError('uLastName'); }
		if(!validateEmail(document.theBuyerForm.uEmail.value)) { makeError('uEmail'); }
		if(document.theBuyerForm.uPhone.value=='') { makeError('uPhone'); }
		if(document.theBuyerForm.uZip.value=='') { makeError('uZip'); }
		if(document.theBuyerForm.uAddress.value=='') { makeError('uAddress'); }
		if(!isValidZip(document.theBuyerForm.uZip.value)) { makeError('uZip'); }
		if(!$('input[name=buyingTimeframe]:checked').val()) { makeError('purchasingListBox'); }
		if(atLeastOneErr) {
			return false;
		} else {
			return true;
		}
	} else {
		return true
	}
}

//Once Aimbase has been launched, this function should be deleted -KSB 12.18.14
function getDownloads(n) {
	$(".broChoiceError").hide();
	$(".broFormError").hide();
	b1=$("#bro1").val()
	b2=$("#bro2").val()
	b3=$("#bro3").val()
	brandID=$("#brandID").val()
	brandModelYear=$("#brandModelYear").val()
	brandCode=$("#brandCode").val()
	userFirstName=$("#userFirstName").val()
	userLastName=$("#userLastName").val()
	userEmail=$("#userEmail").val()
	userPhone=$("#userPhone").val()
	userPostalCode=$("#userPostalCode").val()
	userAddress1=$("#userAddress1").val()
	purchasePlanID=$('input[name=purchasePlanID]:checked').val()
	var emailOK=0;
	var phoneOK=0;
	var promoEmails=0;
	if($('#emailOK').is(':checked')) {
		emailOK=1
	}
	if($('#phoneOK').is(':checked')) {
		phoneOK=1
	}
	if($('#promoEmails').is(':checked')) {
		promoEmails=1
	}



	if(b1+b2+b3 > 0) {
		if (valBrochure(n)) {
			$(".selectDownload").hide();
			$(".buyerFormBox").hide();
			$(".buyerDownloads").show();
			if(n==1) {
				var theDealer=0
				$.post("/resources/productBrochure_post.asp",{brandID:brandID,brandModelYear:brandModelYear,brandCode:brandCode,userFirstName:userFirstName,userLastName:userLastName,userEmail:userEmail,userPhone:userPhone,userAddress1:userAddress1,userPostalCode:userPostalCode,purchasePlanID:purchasePlanID,emailOK:emailOK,phoneOK:phoneOK},function(data) {
					dsc=data.split("|")
					theDealer=dsc[0];
					userCity=dsc[1];
					userState=dsc[2];
					//$("#theDealer").html(data)
					//$("#theDealer").html("dealerNumber:" + theDealer+",brandCode:"+brandCode+",userFirstName:"+userFirstName+",userLastName:"+userLastName+",userEmail:"+userEmail+",userPhone:"+userPhone+",userAddress1:"+userAddress1+",userCity:"+userCity+",userState:"+userState+",userPostalCode:"+userPostalCode+",purchasePlanID:"+purchasePlanID+",emailOK:"+emailOK+",phoneOK:"+phoneOK+",promoEmails:"+promoEmails)
					$("#jsonResponse").load("http://monacorvqa.avalaeconnect.com/Api/AddLead.ashx",{dealerNumber:theDealer,brandCode:brandCode,userFirstName:userFirstName,userLastName:userLastName,userEmail:userEmail,userPhone:userPhone,userAddress1:userAddress1,userCity:userCity,userState:userState,userPostalCode:userPostalCode,purchasePlanID:purchasePlanID,emailOK:emailOK,phoneOK:phoneOK,promoEmails:promoEmails});
				});
				
			}
			$(".broDownload").hide();
			if(b1==1) { $("#broDownload1").show() }
			if(b2==1) { $("#broDownload2").show() }
			if(b3==1) { $("#broDownload3").show() }
		} else {
			$(".broFormError").show();
		}
	} else {
		$(".broChoiceError").show();
	}
}

function valChangeOwner(f) {  
	atLeastOneErr=false
	$("input[type=text],select").css({ border : "1px solid #ccc"})
	$("label").css({ color : "#000" })
	$(".rqd").each(function() {
		if($(this).val()=='') { makeError($(this).attr("id"),f); }
	});
	if(atLeastOneErr) {
		return false;
	}
}

function valSchedule() {
	atLeastOneErr=false
	$("input[type=text]").css({ border : "1px solid #ccc"})
	$("label").css({ color : "#666" })
	if(document.scheduleForm.uFirstName.value=='') { makeError('uFirstName'); }
	if(document.scheduleForm.uLastName.value=='') { makeError('uLastName'); }
	if(document.scheduleForm.uPhone.value=='') { makeError('uPhone'); }
	if(document.scheduleForm.uZip.value=='') { makeError('uZip'); }
	if(document.scheduleForm.uAddress.value=='') { makeError('uAddress'); }
	if(document.scheduleForm.sTotal.value=='') { makeError('sTotal'); }
	if(!validateEmail(document.scheduleForm.uEmail.value)) { makeError('uEmail'); }
	if($("[name=interestedBrands]:checked").length==0) {
		alert("Please identify at least one brand in which you are interested.");
		return false;
	}
	if(atLeastOneErr) {
		return false;
	}
}

function valTestDrive() {
	atLeastOneErr=false
	$("input[type=text]").css({ border : "1px solid #ccc"})
	$("label").css({ color : "#666" })
	if(document.TestDriveForm.uFirstName.value=='') { makeError('uFirstName'); }
	if(document.TestDriveForm.uLastName.value=='') { makeError('uLastName'); }
	if(document.TestDriveForm.uPhone.value=='') { makeError('uPhone'); }
	if(document.TestDriveForm.uZip.value=='') { makeError('uZip'); }
	if(document.TestDriveForm.uAddress1.value=='') { makeError('uAddress1'); }
	if(document.TestDriveForm.sTotal.value=='') { makeError('sTotal'); }
	if(!validateEmail(document.TestDriveForm.uEmail.value)) { makeError('uEmail'); }
	if(atLeastOneErr) {
		return false;
	}
}

function valWarr() {
	atLeastOneErr=false
	$("input[type=text],select").css({ border : "1px solid #ccc"})
	$("label").css({ color : "#000" })
	if(document.warrantyForm.firstName.value=='') { makeError('firstName','warranty'); }
	if(document.warrantyForm.lastName.value=='') { makeError('lastName','warranty'); }
	if(document.warrantyForm.email.value=='') { makeError('email','warranty'); }
	if(document.warrantyForm.city.value=='') { makeError('city','warranty'); }
	if(document.warrantyForm.state.value=='') { makeError('state','warranty'); }
	if(document.warrantyForm.zip.value=='') { makeError('zip','warranty'); }
	
	if(isNaN(document.warrantyForm.homePhone.value)) { makeError('homePhone','warranty'); }
	if(isNaN(document.warrantyForm.workPhone.value)) { makeError('workPhone','warranty'); }
	if(isNaN(document.warrantyForm.cellPhone.value)) { makeError('cellPhone','warranty'); }
	if(isNaN(document.warrantyForm.otherPhone.value)) { makeError('otherPhone','warranty'); }

	if(!validateEmail(document.warrantyForm.email.value)) { makeError('email','warranty'); }

	if(atLeastOneErr) {
		return false;
	}
}

function makeError(f) {
	atLeastOneErr=true;
	$("#" + f).css({ border : "1px solid #f00"})
	
	if($("#errBoxcontact")) {
		$("#errBoxcontact").show();
	}
	if($("#errBoxschedule")) {
		$("#errBoxschedule").show();
	}
	if($("#errBoxTestDrive")) {
		$("#errBoxTestDrive").show();
	}
	if($("#errBoxwarranty")) {
		$("#errBoxwarranty").show();
	}
}

function tab(t) {
	$(".specPanel").hide();
	$("#panel" + t).show();
	$(".specTab").removeClass("specTabOn")
	$("#tab" + t).addClass("specTabOn")
}

function getTiles(b) {
	$("#restOfTheTiles").load("/brand/" + b + "_tiles.html");
	//http://stackoverflow.com/questions/1687790/how-to-remove-onclick-with-jquery
	$(".expandTiles").html('COLLAPSE').attr('onclick','').unbind('click').click(function() {
		hideTiles(b);
	});
}

function hideTiles(b) {
	$("#restOfTheTiles").html('');
		$('html,body').animate({
		  scrollTop: 715
		}, 250);
		$(".expandTiles").html('EXPAND GALLERY').attr('onclick','').unbind('click').click(function() {
			getTiles(b);
		});
}

function showFeatures(f) {
	featuresShown=true
	$("#fl" + f).show();
	$("#sf" + f).html('Close All Amenities').attr('onclick','').unbind('click').click(function() {
		hideFeatures(f);
	});
}

function hideFeatures(f) {
	featuresShown=false
	$("#fl" + f).hide();
	$("#sf" + f).html('See All Amenities').attr('onclick','').unbind('click').click(function() {
		showFeatures(f);
	});
	$('html,body').animate({
	  scrollTop: $("#fgb").offset().top - 140  // -140 to accommodate for height of fixed header
	}, 250);
}

function chooseGroup(g,c) {
	$(".featureCategory").removeClass("fcatOn")
	$(".featureGroup").hide();
	$(".showFeatures").hide();
	$(".featureList").hide();
	$(".fgLink").removeClass("fcOn")
	
	$("#fg" + g).show();
	$("#sf" + g).show();
	if(featuresShown) {
		showFeatures(g);
	} else {
		hideFeatures(g);
	}	
	$("#fgl" + g).addClass("fcOn");
	$("#fc" + c).addClass("fcatOn");
}

function zoomFab(f) {
	$("#zf_" + f).fadeIn(250);
}

function zoomExt(f) {
	$("#zf_" + f).fadeIn(250);
	$(".decorIntBox").toggle();
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 

function valDealer() {  
	if(!validateEmail(document.dealerForm.email.value) ||
	document.dealerForm.fname.value=='' ||
	document.dealerForm.lname.value=='' ||
	document.dealerForm.email.value=='' ||
	!validateEmail(document.dealerForm.email.value) ||
	document.dealerForm.postalCode.value=='' ||
	document.dealerForm.homePhone.value=='') { 
		alert("Please fill out all fields.");
		return false;
	 }
}

function valWhichModel(n) {
	atLeastOneErr=false
		sTotal=document.whichModelForm.sTotal.value;
		wmName=document.whichModelForm.wmName.value;
		wmEmail=document.whichModelForm.wmEmail.value;
		wmPhone=document.whichModelForm.wmPhone.value;
		wmCS=document.whichModelForm.wmCS.value;
		wmQ=document.whichModelForm.wmQ.value;
		theModel=document.whichModelForm.theModel.value;
		$("input[type=text],select,textarea").css({ border : "#1px solid #ccc"})
		if(document.whichModelForm.theModel.value=='') { makeError('theModel'); }
		if(document.whichModelForm.wmName.value=='') { makeError('wmName'); }
		if(document.whichModelForm.wmPhone.value=='') { makeError('wmPhone'); }
		if(document.whichModelForm.wmCS.value=='') { makeError('wmCS'); }
		if(!validateEmail(document.whichModelForm.wmEmail.value)) { makeError('wmEmail'); }
		if(document.whichModelForm.sTotal.value=='') { makeError('sTotal'); }
		if(atLeastOneErr) {
			return false;
		} else {
			$("#inquiryBox").load("/contact/whichModel_post.asp",{wmName:wmName, wmEmail:wmEmail, wmPhone:wmPhone, wmCS:wmCS, theModel: theModel, wmQ:wmQ, sTotal:sTotal});
		}
}

function isValidZip(zip) {
	var zUS=/(^\d{5}$)|(^\d{5}-\d{4}$)/;
	var zCA=/^[abceghjklmnprstvxy][0-9][abceghjklmnprstvwxyz]\s?[0-9][abceghjklmnprstvwxyz][0-9]$/i;
	if(zUS.test(zip)) {
		return true;
	} else if(zCA.test(zip)) {
		return true;
	} else {
		return false;
	}
}

function valContact() {
	$("#errBoxcontact").hide();
	atLeastOneErr=false
	$("input[type=text]").css({ border : "1px solid #ccc"})
	$("label").css({ color : "#666" })
	if(document.contactForm.uName.value=='') { makeError('uName','contact'); }
	if(!validateEmail(document.contactForm.uEmail.value)) { makeError('uEmail','contact'); }
	if(document.contactForm.uAddress.value=='') { makeError('uAddress','contact'); }
	if(document.contactForm.uCSZ.value=='') { makeError('uCSZ','contact'); }
	if(document.contactForm.uCountry.value=='') { makeError('uCountry','contact'); }
	if(document.contactForm.sTotal.value=='') { makeError('sTotal','contact'); }
		if(document.contactForm.rvFIN.value=='') { makeError('rvFIN','contact'); }
		if(document.contactForm.rvVIN.value=='') { makeError('rvVIN','contact'); }
		if(document.contactForm.rvYMM.value=='') { makeError('rvYMM','contact'); }
		if(document.contactForm.rvOwnership.value=='') { makeError('rvOwnership','contact'); }
		if(document.contactForm.rvMileage.value=='') { makeError('rvMileage','contact'); }
		if(!$("input[name=rvOwnership]:checked").val()) { makeError('rvOwnership','contact'); }



	if(atLeastOneErr) {
		return false;
	}
}


//http://www.htmlcodetutorial.com/forms/index_famsupp_157.html
function submitenter(myfield,e,whichForm)
{
var keycode;
if (window.event) keycode = window.event.keyCode;
else if (e) keycode = e.which;
else return true;

if (keycode == 13)
   {
   eval("document." + whichForm + ".submit()");
   return false;
   }
else
   return true;
}

