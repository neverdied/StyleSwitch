
function modify(){
    var depth=document.getElementById("depth").value;
    document.getElementById("container_neu_morphism").style.boxShadow=depth*2+"px "+depth*2+"px "+depth*3+"px #cbced1,-"+depth*2+"px -"+depth*2+"px "+depth*3+"px white";
    document.getElementById("logo_neu_morphism").style.boxShadow=depth+"px "+depth+"px "+depth+"px #cbced1 ,-"+depth+"px -"+depth+"px "+depth+"px white";
    document.getElementById("input1_neu_morphism").style.boxShadow="inset "+depth+"px "+depth+"px "+depth+"px #cbced1,inset -"+depth+"px -"+depth+"px "+depth+"px white";
    document.getElementById("button_neu_morphism").style.boxShadow=depth+"px "+depth+"px "+depth+"px #cbced1,-"+depth+"px -"+depth+"px "+depth+"px white";
    document.getElementById("input2_neu_morphism").style.boxShadow="inset "+depth+"px "+depth+"px "+depth+"px #cbced1,inset -"+depth+"px -"+depth+"px "+depth+"px white";
    document.getElementById("container_clay_morphism").style.boxShadow=depth*2+"px "+depth*2+"px "+depth*3+"px rgba(155,196,255,0.42),inset "+depth*1.5+"px "+depth*1.5+"px "+depth*1.5+"px rgba(250,252,255,0.48),inset -"+depth*1.5+"px -"+depth*1.5+"px "+depth*2.5+"px rgba(46,129,255,0.23)";
    document.getElementById("logo_clay_morphism").style.boxShadow=depth+"px "+depth+"px "+depth*1.5+"px rgba(155,196,255,0.42),inset "+depth+"px "+depth+"px "+depth+"px rgba(250,252,255,0.48),inset -"+depth+"px -"+depth+"px "+depth+"px rgba(46,129,255,0.23)";
    document.getElementById("input1_clay_morphism").style.boxShadow=depth+"px "+depth+"px "+depth*1.5+"px rgba(155,196,255,0.42) ,inset "+depth+"px "+depth+"px "+depth+"px rgba(46,129,255,0.23),inset -"+depth+"px -"+depth+"px "+depth+"px rgba(250,252,255,0.48)";
    document.getElementById("button_clay_morphism").style.boxShadow=depth+"px "+depth+"px "+depth*1.5+"px rgba(155,196,255,0.42),inset "+depth+"px "+depth+"px "+depth+"px rgba(250,252,255,0.48),inset -"+depth+"px -"+depth+"px "+depth+"px rgba(46,129,255,0.23)";
    document.getElementById("input2_clay_morphism").style.boxShadow=depth+"px "+depth+"px "+depth*1.5+"px rgba(155,196,255,0.42) ,inset "+depth+"px "+depth+"px "+depth+"px rgba(46,129,255,0.23),inset -"+depth+"px -"+depth+"px "+depth+"px rgba(250,252,255,0.48)";
    document.getElementById("glass").style.filter="blur("+depth+"px)";
}

var scroll = document.getElementById('scroll');
var bar = document.getElementById('bar');

bar.onmousedown = function(event) {
    var event = event || window.event;
    //页面事件的X减去当前相对于最近的祖先定位元素
    var x = event.clientX - this.offsetLeft;
    document.onmousemove = function(event) {
        var event = event || window.event;
        var left = event.clientX - x;
        if (left < 0)
            left = 0;
        else if (left > scroll.offsetWidth - bar.offsetWidth) {
            left = scroll.offsetWidth - bar.offsetWidth;
        }
        //改变滑块的left

        bar.style.left = left + "px";
        document.getElementById("depth").value=left / (scroll.offsetWidth - bar.offsetWidth) * 10;

        //防止选择内容
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    }

}
//当鼠标弹起的时候，不做任何操作
document.onmouseup = function() {
    document.onmousemove = null;
}