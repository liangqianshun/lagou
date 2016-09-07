var tool=new Tool;
var lg_alert_bg=document.getElementById("lg_alert_bg");
var lg_alert_bg_new=document.getElementById("lg_alert_bg_new");
var lg_alert_close=document.getElementById("lg_alert_close");
var lg_fixed_login=document.getElementById("lg_fixed_login");
var cboxOverlay=document.getElementById("cboxOverlay");
console.log(cboxOverlay);
   var winH=win("clientHeight"); var winW=win("clientWidth");
   var bg_newH=lg_alert_bg_new.offsetHeight;
   var bg_newW=lg_alert_bg_new.offsetWidth;
   var bgH=lg_alert_bg.offsetHeight;
   var bgW=lg_alert_bg.offsetWidth;

lg_fixed_login.onclick=function(){
    var boxTop=win("scrollTop")+winH/2-bgH/2, boxLeft=winW/2-bgW/2;
    var bg_newTop=win("scrollTop")+winH/2-bg_newH/2, bg_newLeft=winW/2-bg_newW/2;
    tool.setGroupCss(lg_alert_bg,{left:boxLeft,top:boxTop,zIndex:9999});
    tool.setGroupCss(lg_alert_bg_new,{left:bg_newLeft,top:bg_newTop,opacity:1,zIndex:9998});
    tool.setGroupCss(cboxOverlay,{display:"block"});
    animate(lg_alert_bg_new,{height:bgH,top:boxTop-15,left:boxLeft-15},200,1,callback);
}


function callback(){
    var bg_newH=lg_alert_bg_new.offsetHeight;
    var bg_newW=lg_alert_bg_new.offsetWidth;
    tool.setCss(lg_alert_bg,"opacity",1);

}

lg_alert_close.onclick=function(){
	tool.setGroupCss(lg_alert_bg,{opacity:0,zIndex:-9});
    tool.setGroupCss(lg_alert_bg_new,{width:"630",height:"500",opacity:0,zIndex:-10});
    tool.setGroupCss(cboxOverlay,{display:"none"});
	}
	




