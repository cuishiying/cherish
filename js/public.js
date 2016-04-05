
//--------------------------------------图片文字转换---------------------



//-----------------------------------


//导航与首页函数
$(document).ready(function(){
	$('.nav_li').each(function(){
		$(this).hover(function(){
			//$(this).find('.nav_a1').stop().animate({marginTop:'-41px',marginBottom:'41px'},200);
			$(this).find('.nav_a1').stop().stop().fadeIn(300);
		},function(){

			//$(this).find('.nav_a1').stop().animate({marginTop:'0px',marginBottom:'0px'},200);
			$(this).find('.nav_a1').stop().fadeOut(300);
			
		});
	
	});
	




	//返回顶部
	(function() {
		var $backToTopTxt = "返回顶部", $backToTopEle = $('<div class="backToTop"><img src="/images/lanren_top.jpg" /></div>').appendTo($("body"))
			.click(function() {
				$("html, body").animate({ scrollTop: 0 }, 164);
		}), $backToTopFun = function() {
			var st = $(document).scrollTop(), winh = $(window).height();
			(st > 0)? $backToTopEle.show(): $backToTopEle.hide();    
			//IE6下的定位
			if (!window.XMLHttpRequest) {
				$backToTopEle.css("top", st + winh - 164);    
			}
		};
		$(window).bind("scroll", $backToTopFun);
		$(function() { $backToTopFun(); });
	})();




	
});





//底部导航
$(document).ready(function(){
	$('.bottomnav').each(function(){
		$(this).hover( function(){ $(this).find('.bottomnavpic').stop().fadeIn(300);
		},function(){ $(this).find('.bottomnavpic').stop().fadeOut(300);	});

	
	
	});

});



$(function(){
		//-----------------------------------顶部轮换图片-----------------
		
		$('#slides').slides({
			preload: true,
			preloadImage: '/images/loading.gif',
			play: 2000,
			pause: 2500,
			hoverPause: true
		});
		

		//--------------------------顶部标签分类-----------------
		$("#js_menutitle1").mouseover(function(){js_menunav_close();$(this).addClass("li_click");$("#js_newSubMenuCon1").show();})
		$("#js_menutitle2").mouseover(function(){js_menunav_close();$(this).addClass("li_click");$("#js_newSubMenuCon2").show();})
		$("#js_menutitle3").mouseover(function(){js_menunav_close();$(this).addClass("li_click");$("#js_newSubMenuCon3").show();})
		$("#js_menutitle4").mouseover(function(){js_menunav_close();$(this).addClass("li_click");$("#js_newSubMenuCon4").show();})
		function js_menunav_close(){
		$("#js_menutitle1").removeClass("li_click");$("#js_newSubMenuCon1").hide();
		$("#js_menutitle2").removeClass("li_click");$("#js_newSubMenuCon2").hide();
		$("#js_menutitle3").removeClass("li_click");$("#js_newSubMenuCon3").hide();
		$("#js_menutitle4").removeClass("li_click");$("#js_newSubMenuCon4").hide();
		}		
		



});








//-----------------------------------顶部轮换图片-----------------

(function($){$.fn.slides=function(option){option=$.extend({},$.fn.slides.option,option);return this.each(function(){$('.'+option.container,$(this)).children().wrapAll('<div class="slides_control"/>');var elem=$(this),control=$('.slides_control',elem),total=control.children().size(),width=control.children().outerWidth(),height=control.children().outerHeight(),start=option.start-1,effect=option.effect.indexOf(',')<0?option.effect:option.effect.replace(' ','').split(',')[0],paginationEffect=option.effect.indexOf(',')<0?effect:option.effect.replace(' ','').split(',')[1],next=0,prev=0,number=0,current=0,loaded,active,clicked,position,direction;if(total<2){return;}
if(start<0){start=0;};if(start>total){start=total-1;};if(option.start){current=start;};if(option.randomize){control.randomize();}
$('.'+option.container,elem).css({overflow:'hidden',position:'relative'});control.css({position:'relative',width:(width*3),height:height,left:-width});control.children().css({position:'absolute',top:0,left:width,zIndex:0,display:'none'});if(option.autoHeight){control.animate({height:control.children(':eq('+start+')').outerHeight()},option.autoHeightSpeed);}
if(option.preload&&control.children()[0].tagName=='IMG'){elem.css({background:'url('+option.preloadImage+') no-repeat 50% 50%'});var img=$('img:eq('+start+')',elem).attr('src')+'?'+(new Date()).getTime();$('img:eq('+start+')',elem).attr('src',img).load(function(){$(this).fadeIn(option.fadeSpeed,function(){$(this).css({zIndex:5});elem.css({background:''});loaded=true;});});}else{control.children(':eq('+start+')').fadeIn(option.fadeSpeed,function(){loaded=true;});}
if(option.bigTarget){control.children().css({cursor:'pointer'});control.children().click(function(){animate('next',effect);return false;});}
if(option.hoverPause&&option.play){control.children().bind('mouseover',function(){stop();});control.children().bind('mouseleave',function(){pause();});}
if(option.generateNextPrev){$('.'+option.container,elem).after('<a href="#" class="'+option.prev+'">Prev</a>');$('.'+option.prev,elem).after('<a href="#" class="'+option.next+'">Next</a>');}
$('.'+option.next,elem).click(function(e){e.preventDefault();if(option.play){pause();};animate('next',effect);});$('.'+option.prev,elem).click(function(e){e.preventDefault();if(option.play){pause();};animate('prev',effect);});if(option.generatePagination){elem.append('<ul class='+option.paginationClass+'></ul>');control.children().each(function(){$('.'+option.paginationClass,elem).append('<li><a rel='+number+' href="#">'+(number+1)+'</a></li>');number++;});}else{$('.'+option.paginationClass+' li a',elem).each(function(){$(this).attr('rel',number);number++;});}
$('.'+option.paginationClass+' li a:eq('+start+')',elem).parent().addClass('current');$('.'+option.paginationClass+' li a',elem).click(function(){if(option.play){pause();};clicked=$(this).attr('rel');if(current!=clicked){animate('pagination',paginationEffect,clicked);}
return false;});if(option.play){playInterval=setInterval(function(){animate('next',effect);},option.play);elem.data('interval',playInterval);};function stop(){clearInterval(elem.data('interval'));};function pause(){if(option.pause){clearTimeout(elem.data('pause'));clearInterval(elem.data('interval'));pauseTimeout=setTimeout(function(){clearTimeout(elem.data('pause'));playInterval=setInterval(function(){animate("next",effect);},option.play);elem.data('interval',playInterval);},option.pause);elem.data('pause',pauseTimeout);}else{stop();}};function animate(direction,effect,clicked){if(!active&&loaded){active=true;switch(direction){case'next':prev=current;next=current+1;next=total===next?0:next;position=width*2;direction=-width*2;current=next;break;case'prev':prev=current;next=current-1;next=next===-1?total-1:next;position=0;direction=0;current=next;break;case'pagination':next=parseInt(clicked,10);prev=$('.'+option.paginationClass+' li.current a',elem).attr('rel');if(next>prev){position=width*2;direction=-width*2;}else{position=0;direction=0;}
current=next;break;}
if(effect==='fade'){option.animationStart();if(option.crossfade){control.children(':eq('+next+')',elem).css({zIndex:10}).fadeIn(option.fadeSpeed,function(){control.children(':eq('+prev+')',elem).css({display:'none',zIndex:0});$(this).css({zIndex:0});option.animationComplete(next+1);active=false;});}else{option.animationStart();control.children(':eq('+prev+')',elem).fadeOut(option.fadeSpeed,function(){if(option.autoHeight){control.animate({height:control.children(':eq('+next+')',elem).outerHeight()},option.autoHeightSpeed,function(){control.children(':eq('+next+')',elem).fadeIn(option.fadeSpeed);});}else{control.children(':eq('+next+')',elem).fadeIn(option.fadeSpeed,function(){if($.browser.msie){$(this).get(0).style.removeAttribute('filter');}});}
option.animationComplete(next+1);active=false;});}}else{control.children(':eq('+next+')').css({left:position,display:'block'});if(option.autoHeight){option.animationStart();control.animate({left:direction,height:control.children(':eq('+next+')').outerHeight()},option.slideSpeed,function(){control.css({left:-width});control.children(':eq('+next+')').css({left:width,zIndex:5});control.children(':eq('+prev+')').css({left:width,display:'none',zIndex:0});option.animationComplete(next+1);active=false;});}else{option.animationStart();control.animate({left:direction},option.slideSpeed,function(){control.css({left:-width});control.children(':eq('+next+')').css({left:width,zIndex:5});control.children(':eq('+prev+')').css({left:width,display:'none',zIndex:0});option.animationComplete(next+1);active=false;});}}
if(option.pagination){$('.'+option.paginationClass+' li.current',elem).removeClass('current');$('.'+option.paginationClass+' li a:eq('+next+')',elem).parent().addClass('current');}}};});};$.fn.slides.option={preload:false,preloadImage:'/img/loading.gif',container:'slides_container',generateNextPrev:false,next:'next',prev:'prev',pagination:true,generatePagination:true,paginationClass:'pagination',fadeSpeed:350,slideSpeed:350,start:1,effect:'slide',crossfade:false,randomize:false,play:0,pause:0,hoverPause:false,autoHeight:false,autoHeightSpeed:350,bigTarget:false,animationStart:function(){},animationComplete:function(){}};$.fn.randomize=function(callback){function randomizeOrder(){return(Math.round(Math.random())-0.5);}
return($(this).each(function(){var $this=$(this);var $children=$this.children();var childCount=$children.length;if(childCount>1){$children.hide();var indices=[];for(i=0;i<childCount;i++){indices[indices.length]=i;}
indices=indices.sort(randomizeOrder);$.each(indices,function(j,k){var $child=$children.eq(k);var $clone=$child.clone(true);$clone.show().appendTo($this);if(callback!==undefined){callback($child,$clone);}
$child.remove();});}}));};})(jQuery);

//---------------------------------图文切换-----------------
$(function(){

	$("#img-txt-box2").imgTxtCut({
		effects:"fade",
		speed :400
	});

});



(function($){
	$.fn.imgTxtCut=function(options){
		var opts = $.extend({},$.fn.imgTxtCut.deflunt,options);
		var targetObj=$(this).find("li");
		var targetObjH=$(this).find("li img").height()
		return this.each(function() {
			$.fn.imgTxtCut.effect[opts.effects](targetObj,targetObjH,opts);
			
    	});
	};
	$.fn.imgTxtCut.effect = {
		flaser:function(targetObj,targetObjH,opts){
			targetObj.hover(function(){
				$(this).find('img').stop().animate({height:"0"}, opts.speed);
			},function(){
				$(this).find('img').stop().animate({height:targetObjH},opts.speed);
			})
		},
		scroll:function(targetObj,targetObjH,opts){
			targetObj.hover(function(){
				$(this).find('.scrool-box').stop().animate({top:-targetObjH}, opts.speed);
			},function(){
				$(this).find('.scrool-box').stop().animate({top:0},opts.speed);
			})
		},
		fade:function(targetObj,targetObjH,opts){
			targetObj.hover(function(){
				$(this).find('.imgBox').stop().animate({opacity:0.1}, opts.speed);
			},function(){
				$(this).find('.imgBox').stop().animate({opacity:1},opts.speed);
			})
		}
	};
	$.fn.imgTxtCut.deflunt={
		effects : "flaser",
		speed : "normal"
	};
})(jQuery);



//--------------------------------------------------js推荐
var xmlHttp = false;
function AjaxTest_vodesubmitcount(indPid)
{
	/////////////////////////////////////////////////
	try {xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");} catch (e) {
	  try {xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	  } catch (e2) {xmlHttp = false;}
	}
	if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {xmlHttp = new XMLHttpRequest();}
	/////////////////////////////////////////////////////////
	if ((indPid == null) || (indPid == "")) return;
	
	var url = "/active_vodesubmitcount.asp?FileID=" + escape(indPid)+"&ActiveID=2";
	xmlHttp.open("GET", url, true);
	
	xmlHttp.onreadystatechange = updatePage_vodesubmitcount;
	xmlHttp.send(null);
}

function updatePage_vodesubmitcount() {
  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    document.getElementById("js_vodecount").innerHTML = response;
	//alert(response);
  }
}


//------------------------------flash 显示代码---------------------------------------------

if(typeof deconcept=="undefined"){var deconcept=new Object();}
if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}
if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}
deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a,_b){if(!document.getElementById){return;}
this.DETECT_KEY=_b?_b:"detectflash";
this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);
this.params=new Object();
this.variables=new Object();
this.attributes=new Array();
if(_1){this.setAttribute("swf",_1);}
if(id){this.setAttribute("id",id);}
if(w){this.setAttribute("width",w);}
if(h){this.setAttribute("height",h);}
if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}
this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();
if(c){this.addParam("bgcolor",c);}
var q=_8?_8:"high";
this.addParam("quality",q);
this.setAttribute("useExpressInstall",_7);
this.setAttribute("doExpressInstall",false);
var _d=(_9)?_9:window.location;
this.setAttribute("xiRedirectUrl",_d);
this.setAttribute("redirectUrl","");
if(_a){this.setAttribute("redirectUrl",_a);}};
deconcept.SWFObject.prototype={setAttribute:function(_e,_f){
this.attributes[_e]=_f;
},getAttribute:function(_10){
return this.attributes[_10];
},addParam:function(_11,_12){
this.params[_11]=_12;
},getParams:function(){
return this.params;
},addVariable:function(_13,_14){
this.variables[_13]=_14;
},getVariable:function(_15){
return this.variables[_15];
},getVariables:function(){
return this.variables;
},getVariablePairs:function(){
var _16=new Array();
var key;
var _18=this.getVariables();
for(key in _18){_16.push(key+"="+_18[key]);}
return _16;},getSWFHTML:function(){var _19="";
if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){
if(this.getAttribute("doExpressInstall")){
this.addVariable("MMplayerType","PlugIn");}
_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\"";
_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";
var _1a=this.getParams();
for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}
var _1c=this.getVariablePairs().join("&");
if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";
}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");}
_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\">";
_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";
var _1d=this.getParams();
for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}
var _1f=this.getVariablePairs().join("&");
if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}
return _19;
},write:function(_20){
if(this.getAttribute("useExpressInstall")){
var _21=new deconcept.PlayerVersion([6,0,65]);
if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){
this.setAttribute("doExpressInstall",true);
this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));
document.title=document.title.slice(0,47)+" - Flash Player Installation";
this.addVariable("MMdoctitle",document.title);}}
if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){
var n=(typeof _20=="string")?document.getElementById(_20):_20;
n.innerHTML=this.getSWFHTML();return true;
}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}
return false;}};
deconcept.SWFObjectUtil.getPlayerVersion=function(){
var _23=new deconcept.PlayerVersion([0,0,0]);
if(navigator.plugins&&navigator.mimeTypes.length){
var x=navigator.plugins["Shockwave Flash"];
if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}
}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}
catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}
catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}
catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}
return _23;};
deconcept.PlayerVersion=function(_27){
this.major=_27[0]!=null?parseInt(_27[0]):0;
this.minor=_27[1]!=null?parseInt(_27[1]):0;
this.rev=_27[2]!=null?parseInt(_27[2]):0;
};
deconcept.PlayerVersion.prototype.versionIsValid=function(fv){
if(this.major<fv.major){return false;}
if(this.major>fv.major){return true;}
if(this.minor<fv.minor){return false;}
if(this.minor>fv.minor){return true;}
if(this.rev<fv.rev){
return false;
}return true;};
deconcept.util={getRequestParameter:function(_29){
var q=document.location.search||document.location.hash;
if(q){var _2b=q.substring(1).split("&");
for(var i=0;i<_2b.length;i++){
if(_2b[i].substring(0,_2b[i].indexOf("="))==_29){
return _2b[i].substring((_2b[i].indexOf("=")+1));}}}
return "";}};
deconcept.SWFObjectUtil.cleanupSWFs=function(){if(window.opera||!document.all){return;}
var _2d=document.getElementsByTagName("OBJECT");
for(var i=0;i<_2d.length;i++){_2d[i].style.display="none";for(var x in _2d[i]){
if(typeof _2d[i][x]=="function"){_2d[i][x]=function(){};}}}};
deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};
__flash_savedUnloadHandler=function(){};
if(typeof window.onunload=="function"){
var _30=window.onunload;
window.onunload=function(){
deconcept.SWFObjectUtil.cleanupSWFs();_30();};
}else{window.onunload=deconcept.SWFObjectUtil.cleanupSWFs;}};
if(typeof window.onbeforeunload=="function"){
var oldBeforeUnload=window.onbeforeunload;
window.onbeforeunload=function(){
deconcept.SWFObjectUtil.prepUnload();
oldBeforeUnload();};
}else{window.onbeforeunload=deconcept.SWFObjectUtil.prepUnload;}
if(Array.prototype.push==null){
Array.prototype.push=function(_31){
this[this.length]=_31;
return this.length;};}
var getQueryParamValue=deconcept.util.getRequestParameter;
var FlashObject=deconcept.SWFObject;
var SWFObject=deconcept.SWFObject;

