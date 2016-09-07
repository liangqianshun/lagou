//function getWin(attr) {
//    return document.documentElement[attr] || document.body[attr];
//}
var  oDiv = document.getElementsByClassName("lg_backtop")[0];
window.onscroll = function () {
    var sT = win("scrollTop");
    if (sT > 0) {
        oDiv.style.display = "block";
    } else {
        oDiv.style.display = "none";
    }
};
function shunMove() {
    oDiv.style.display = "none";
    window.clearTimeout(this.timer);
    oDiv.timer = null;
    document.body.scrollTop -= 50;
    if ((document.body.scrollTop - 50) <= 0) {
        document.body.scrollTop = 0;
        return;
    }
    oDiv.timer = window.setTimeout(shunMove, 10);
}
oDiv.onclick = shunMove;
var Icon=document.getElementsByClassName("lg_fb-icon")[0];
var close=document.getElementsByClassName("lg_pfb-close")[0];
var Con=document.getElementsByClassName("lg_feedback-con")[0];
Icon.onclick=function(){
    if(Con.style.display="none"){
        Con.style.display="block";
    }
};
close.onclick=function(){
    Con.style.display="none";
};