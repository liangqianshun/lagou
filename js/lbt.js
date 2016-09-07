/**
 * Created by fdd on 15/6/29.
 */
var oBannerBg=document.getElementById("banner_bg");
var oBannerControl=document.getElementById("banner_control");
var oLis=oBannerControl.getElementsByTagName("li");
var oEm=oBannerControl.getElementsByTagName("em")[0];
var oI=oBannerControl.getElementsByTagName("i");
var step=0;
function getCss1(ele,attr){
    if(window.getComputedStyle){
        return parseFloat(getComputedStyle(ele,null)[attr]);
    }else{
        return parseFloat(ele.currentStyle[attr]);
    }
}
function animate1(ele,attr,target,duration){
    clearInterval(ele.timer);
    var begin=getCss1(ele,attr),change=target-begin,interval=13,times=0;
    function step(){
        times+=interval;
        if(times>=duration){
            clearInterval(ele.timer);
            ele.style[attr]=target+"px";
        }else{
            ele.style[attr]=times/duration*change+begin+"px";
        }
    }
    ele.timer=window.setInterval(step,interval);
}
for (var i = 0; i < oLis.length; i++) {
    oLis[i].i = i;
    oLis[i].onmouseover = function () {
        clearTimeout(oBannerBg.autoTimer);
        animate1(oBannerBg,"margin-top",this.i*-160,150);
        animate1(oEm,"top",this.i*55,150);
        step = this.i;
        addStyle(step);
        oBannerBg.autoTimer = window.setTimeout(auto, 5000);
    };
}

function addStyle(step) {
    for (var i = 0; i < oLis.length; i++) oLis[i].className = "";
    oLis[step].className = "selected";
}
function auto(){
    step++;
    if(step==3){
        step=0;
        animate1(oBannerBg,"margin-top",0,150);
        animate1(oEm,"top",0,150);
        addStyle(0);
    }
    animate1(oBannerBg,"margin-top",step*-160,150);
    animate1(oEm,"top",step*55,150);
    addStyle(step);
    oBannerBg.autoTimer = window.setTimeout(auto, 2000);
}
oBannerBg.autoTimer = window.setTimeout(auto, 2000);

function stop(){
    clearTimeout(oBannerBg.autoTimer);
}
oBannerBg.onmouseover=stop;
oBannerBg.onmouseout=auto;