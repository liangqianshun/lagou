
var tool=new Tool;

var lg_tab_header=document.getElementById("lg_tab_header");
var lg_tab_oLis=lg_tab_header.getElementsByTagName("li");
var lg_tab_oDivs=tool.getElementsByClass("lg_tab_unselected");
for(var i=0;i<lg_tab_oLis.length;i++){
    var cur=lg_tab_oLis[i];
    cur.onclick=changeTab;
}
function changeTab(){
    var index=tool.getIndex(this);
    var siblings=tool.getSiblings(this);
    for(var j=0;j<siblings.length;j++){
        siblings[j].className="";
    }
    this.className="lg_tab_select";
    for(var i=0;i<lg_tab_oDivs.length;i++){
        lg_tab_oDivs[i].className="lg_tab_unselected";

    }
    lg_tab_oDivs[index].className="lg_tab_unselected lg_tab_selected";


}
/*
var lg_tab_oLis=lg_tab_oUl.getElementsByTagName("li");
var lg_tab_sContents=lg_tab_tool.getElementsByClass("lg_tab_unselected");
console.log(lg_tab_sContents);
for(var i= 0;i<lg_tab_oLis.length;i++){
    var lg_tab_oLi=lg_tab_oLis[i];
    lg_tab_oLi.zhufeng=i;
    lg_tab_oLi.onclick=function(){
        for (var j=0;j<lg_tab_oLis.length;j++) {
            lg_tab_oLis[j].className="";
            lg_tab_sContents[j].className="";
        }
        this.className="lg_tab_select";
        lg_tab_sContents[this.zhufeng].className="lg_tab_selected";
    };
}
*/
