function load(){
    var system={};
    var p=navigator.platform;
    system.win=p.indexOf("Win")==0;
    system.mac=p.indexOf("Mac")==0;
    system.X11=(p=="X11")||(p.indexOf("Linux")==0)
    if(system.win||system.mac||system.x11){
    }else{
        document.getElementById("main").style.gridTemplateAreas= '"x x" "x x"';
        document.getElementById("scroll").style.display="none";
    }
}
let depth
/*点击修改按钮修改对应形态登陆样式*/
function modify(){
    depth=document.getElementById("depth").value;

    document.getElementById("glass").style.filter="blur("+depth+"px)";
    document.getElementById("logo_glass").style.boxShadow=depth+"px "+depth+"px "+depth+"px #cbced1 ,-"+depth+"px -"+depth+"px "+depth+"px white";
    document.getElementById("input1_glass").style.boxShadow="inset "+depth+"px "+depth+"px "+depth+"px #cbced1,inset -"+depth+"px -"+depth+"px "+depth+"px white";
    document.getElementById("button_glass").style.boxShadow=depth+"px "+depth+"px "+depth+"px #cbced1,-"+depth+"px -"+depth+"px "+depth+"px white";
    document.getElementById("input2_glass").style.boxShadow="inset "+depth+"px "+depth+"px "+depth+"px #cbced1,inset -"+depth+"px -"+depth+"px "+depth+"px white";


    document.getElementById("depth").style.boxShadow="inset "+depth+"px "+depth+"px "+depth+"px #cbced1,inset -"+depth+"px -"+depth+"px "+depth+"px white";
    document.getElementById("modifyCss").style.boxShadow=depth+"px "+depth+"px "+depth+"px #cbced1,-"+depth+"px -"+depth+"px "+depth+"px white";
    document.getElementById("code").style.boxShadow="inset "+depth+"px "+depth+"px "+depth+"px #cbced1,inset -"+depth+"px -"+depth+"px "+depth+"px white";
    document.getElementById("less").style.boxShadow=depth+"px "+depth+"px "+depth+"px #cbced1,-"+depth+"px -"+depth+"px "+depth+"px white";
    document.getElementById("more").style.boxShadow=depth+"px "+depth+"px "+depth+"px #cbced1,-"+depth+"px -"+depth+"px "+depth+"px white";


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
}

/*滑动条转数字写入输入框*/
let scroll = document.getElementById('scroll');
let bar = document.getElementById('bar');
bar.onmousedown = function(event) {
    // alert("鼠标点击");
    var event = event || window.event;
    //页面事件的X减去当前相对于最近的祖先定位元素
    let x = event.clientX - this.offsetLeft;
    document.onmousemove = function(event) {
        var event = event || window.event;
        let left = event.clientX - x;
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

function less_click(){
    document.getElementById("depth").value--;
}

function more_click(){
    document.getElementById("depth").value++;
}










/*点击不同部位再代码框显示代码*/
function onclick_input1_neu_morphism(){
    depth=document.getElementById("depth").value;
    let onclick_input1_neu_morphism_code=
        "<!--新拟态邮箱输入框--><!doctype html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <meta name=\"viewport\"\n" +
        "          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n" +
        "    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
        "    <style type=\"text/css\">\n" +
        "        .container{\n" +
        "            width: 90%;\n" +
        "            height: 520px;\n" +
        "            background: #ecf0f3;\n" +
        "            padding: 40px;\n" +
        "            border-radius: 20px;\n" +
        "            box-sizing: border-box;\n" +
        "            float: left;\n" +
        "            position: relative;\n" +
        "            margin: auto;\n" +
        "        }\n" +
        "        #container_neu_morphism{\n" +
        "            box-shadow: "+depth*2+"px "+depth*2+"px "+depth*3+"px #cbced1,-"+depth*2+"px -"+depth*2+"px "+depth*3+"px white;\n" +
        "        }\n" +
        "        .inputs{\n" +
        "            text-align: left;\n" +
        "            margin-top: 30px;\n" +
        "        }\n" +
        "        input{\n" +
        "            display: block;\n" +
        "            width: 100%;\n" +
        "            border: none;\n" +
        "            outline: none;\n" +
        "            box-sizing: border-box;\n" +
        "            background: #ecf0f3;\n" +
        "            padding: 10px 10px 10px 20px;\n" +
        "            font-size: 14px;\n" +
        "            border-radius:50px;\n" +
        "            height: 50px;\n" +
        "        }\n" +
        "        input::placeholder{\n" +
        "            color: gray;\n" +
        "        }\n" +
        "        #input1_neu_morphism{\n" +
        "            box-shadow: "+depth+"px "+depth+"px "+depth+"px #cbced1,-"+depth+"px -"+depth+"px "+depth+"px white;\n" +
        "        }\n" +
        "    </style>\n" +
        "    <title>新拟态邮箱输入框</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "<div class=\"container\" id=\"container_neu_morphism\">\n" +
        "    <div class=\"inputs\">\n" +
        "        <label>EMAIL</label>\n" +
        "        <input id=\"input1_neu_morphism\" type=\"text\" name=\"email\" placeholder=\"example@email.com\"/>\n" +
        "    </div>\n" +
        "</div>\n" +
        "</body>\n" +
        "</html>\n";

    document.getElementById("code").innerHTML=onclick_input1_neu_morphism_code;
}
function onclick_input2_neu_morphism(){
    depth=document.getElementById("depth").value;
    let onclick_input2_neu_morphism_code=
        "<!--新拟态密码输入框-->" +
        "<!doctype html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <meta name=\"viewport\"\n" +
        "          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n" +
        "    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
        "    <style type=\"text/css\">\n" +
        "        .container{\n" +
        "            width: 90%;\n" +
        "            height: 520px;\n" +
        "            background: #ecf0f3;\n" +
        "            padding: 40px;\n" +
        "            border-radius: 20px;\n" +
        "            box-sizing: border-box;\n" +
        "            float: left;\n" +
        "            position: relative;\n" +
        "            margin: auto;\n" +
        "        }\n" +
        "        #container_neu_morphism{\n" +
        "            box-shadow: "+depth*2+"px "+depth*2+"px "+depth*3+"px #cbced1,-"+depth*2+"px -"+depth*2+"px "+depth*3+"px white;\n" +
        "        }\n" +
        "        .inputs{\n" +
        "            text-align: left;\n" +
        "            margin-top: 30px;\n" +
        "        }\n" +
        "        input{\n" +
        "            display: block;\n" +
        "            width: 100%;\n" +
        "            border: none;\n" +
        "            outline: none;\n" +
        "            box-sizing: border-box;\n" +
        "            background: #ecf0f3;\n" +
        "            padding: 10px 10px 10px 20px;\n" +
        "            font-size: 14px;\n" +
        "            border-radius:50px;\n" +
        "            height: 50px;\n" +
        "        }\n" +
        "        input::placeholder{\n" +
        "            color: gray;\n" +
        "        }\n" +
        "        #input2_neu_morphism{\n" +
        "            box-shadow: "+depth+"px "+depth+"px "+depth+"px #cbced1,-"+depth+"px -"+depth+"px "+depth+"px white;\n" +
        "        }\n" +
        "    </style>\n" +
        "    <title>新拟态密码输入框</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "<div class=\"container\" id=\"container_neu_morphism\">\n" +
        "    <div class=\"inputs\">\n" +
        "        <label>PASSWORD</label>\n" +
        "        <input id=\"input2_neu_morphism\" type=\"password\" name=\"password\" placeholder=\"输入密码\"/>\n" +
        "    </div>\n" +
        "</div>\n" +
        "</body>\n" +
        "</html>\n";

    document.getElementById("code").innerHTML=onclick_input2_neu_morphism_code;
}
function onclick_button_neu_morphism(){
    depth=document.getElementById("depth").value;
    let onclick_button_neu_morphism_code=
        "<!--新拟态登陆按钮-->" +
        "<!doctype html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <meta name=\"viewport\"\n" +
        "          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n" +
        "    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
        "    <style type=\"text/css\">\n" +
        "        .container{\n" +
        "            width: 90%;\n" +
        "            height: 520px;\n" +
        "            background: #ecf0f3;\n" +
        "            padding: 40px;\n" +
        "            border-radius: 20px;\n" +
        "            box-sizing: border-box;\n" +
        "            float: left;\n" +
        "            position: relative;\n" +
        "            margin: auto;\n" +
        "        }\n" +
        "        #container_neu_morphism{\n" +
        "            box-shadow: "+depth*2+"px "+depth*2+"px "+depth*3+"px #cbced1,-"+depth*2+"px -"+depth*2+"px "+depth*3+"px white;\n" +
        "        }\n" +
        "        .inputs{\n" +
        "            text-align: left;\n" +
        "            margin-top: 30px;\n" +
        "        }\n" +
        "        button{\n" +
        "            display: block;\n" +
        "            width: 100%;\n" +
        "            padding: 0;\n" +
        "            border: none;\n" +
        "            outline: none;\n" +
        "            box-sizing: border-box;\n" +
        "        }\n" +
        "        .button{\n" +
        "            margin-top: 20px;\n" +
        "            background: #1da1f2;\n" +
        "            height: 40px;\n" +
        "            border-radius: 20px;\n" +
        "            cursor:pointer;\n" +
        "            font-weight: 900;\n" +
        "            font-family: sans-serif;\n" +
        "            letter-spacing: 1px;\n" +
        "        }\n" +
        "        button:hover{\n" +
        "            box-shadow: none;\n" +
        "        }\n" +
        "        #button_neu_morphism{\n" +
        "            box-shadow: "+depth+"px "+depth+"px "+depth+"px #cbced1,-"+depth+"px -"+depth+"px "+depth+"px white;\n" +
        "        }\n" +
        "    </style>\n" +
        "    <title>新拟态登陆按钮</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "<div class=\"container\" id=\"container_neu_morphism\">\n" +
        "    <div class=\"inputs\">\n" +
        "        <button type=\"submit\" class=\"button\" id=\"button_neu_morphism\">登录</button>\n" +
        "    </div>\n" +
        "</div>\n" +
        "</body>\n" +
        "</html>\n";

    document.getElementById("code").innerHTML=onclick_button_neu_morphism_code;
}
function onclick_input1_clay_morphism(){
    depth=document.getElementById("depth").value;
    let onclick_input1_clay_morphism_code=
        "<!--泥陶态邮箱输入框-->" +
        "<!doctype html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <meta name=\"viewport\"\n" +
        "          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n" +
        "    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
        "    <style type=\"text/css\">\n" +
        "        .container{\n" +
        "            width: 90%;\n" +
        "            height: 520px;\n" +
        "            background: #ecf0f3;\n" +
        "            padding: 40px;\n" +
        "            border-radius: 20px;\n" +
        "            box-sizing: border-box;\n" +
        "            float: left;\n" +
        "            position: relative;\n" +
        "            margin: auto;\n" +
        "        }\n" +
        "\n" +
        "        .inputs{\n" +
        "            text-align: left;\n" +
        "            margin-top: 30px;\n" +
        "        }\n" +
        "        input{\n" +
        "            display: block;\n" +
        "            width: 100%;\n" +
        "            border: none;\n" +
        "            outline: none;\n" +
        "            box-sizing: border-box;\n" +
        "            background: #ecf0f3;\n" +
        "            padding: 10px 10px 10px 20px;\n" +
        "            font-size: 14px;\n" +
        "            border-radius:50px;\n" +
        "            height: 50px;\n" +
        "        }\n" +
        "        button:hover{\n" +
        "            box-shadow: none;\n" +
        "        }\n" +
        "        #container_clay_morphism{\n" +
        "            box-shadow: "+depth*2+"px "+depth*2+"px "+depth*3+"px rgba(155,196,255,0.42),inset "+depth*1.5+"px "+depth*1.5+"px "+depth*2+"px rgba(250,252,255,0.48),inset -"+depth*1.5+"px -"+depth*1.5+"px "+depth*2.5+"px rgba(46,129,255,0.23);\n" +
        "        #input1_clay_morphism{\n" +
        "            box-shadow: "+depth+"px "+depth+"px "+depth*1.5+"px rgba(155,196,255,0.42),inset "+depth+"px -"+depth+"px "+depth+"px rgba(46,129,255,0.23),inset -"+depth+"px -"+depth+"px "+depth+"px rgba(250,252,255,0.48);\n" +
        "        }\n" +
        "\n" +
        "\n" +
        "    </style>\n" +
        "    <title>泥陶态邮箱输入框</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "<div class=\"container\" id=\"container_clay_morphism\">\n" +
        "    <div class=\"inputs\" id=\"inputs_clay_morphism\">\n" +
        "        <label>EMAIL</label>\n" +
        "        <input id=\"input1_clay_morphism\" type=\"text\" name=\"email\" placeholder=\"example@email.com\"/>\n" +
        "    </div>\n" +
        "</div>\n" +
        "</body>\n" +
        "</html>\n";

    document.getElementById("code").innerHTML=onclick_input1_clay_morphism_code;
}
function onclick_input2_clay_morphism(){
    depth=document.getElementById("depth").value;
    let onclick_input2_clay_morphism_code=
        "<!--泥陶态密码输入框-->"+
        "<!doctype html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <meta name=\"viewport\"\n" +
        "          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n" +
        "    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
        "    <style type=\"text/css\">\n" +
        "        .container{\n" +
        "            width: 90%;\n" +
        "            height: 520px;\n" +
        "            background: #ecf0f3;\n" +
        "            padding: 40px;\n" +
        "            border-radius: 20px;\n" +
        "            box-sizing: border-box;\n" +
        "            float: left;\n" +
        "            position: relative;\n" +
        "            margin: auto;\n" +
        "        }\n" +
        "\n" +
        "        .inputs{\n" +
        "            text-align: left;\n" +
        "            margin-top: 30px;\n" +
        "        }\n" +
        "        input{\n" +
        "            display: block;\n" +
        "            width: 100%;\n" +
        "            border: none;\n" +
        "            outline: none;\n" +
        "            box-sizing: border-box;\n" +
        "            background: #ecf0f3;\n" +
        "            padding: 10px 10px 10px 20px;\n" +
        "            font-size: 14px;\n" +
        "            border-radius:50px;\n" +
        "            height: 50px;\n" +
        "        }\n" +
        "        button:hover{\n" +
        "            box-shadow: none;\n" +
        "        }\n" +
        "        #container_clay_morphism{\n" +
        "            box-shadow: "+depth*2+"px "+depth*2+"px "+depth*3+"px rgba(155,196,255,0.42),inset "+depth*1.5+"px -"+depth*1.5+"px "+depth*2+"px rgba(250,252,255,0.48),inset -"+depth*1.5+"px -"+depth*1.5+"px "+depth*2.5+"px rgba(46,129,255,0.23);\n" +
        "        }\n" +
        "        #input2_clay_morphism{\n" +
        "            box-shadow: "+depth+"px "+depth+"px "+depth*1.5+"px rgba(155,196,255,0.42),inset "+depth+"px "+depth+"px "+depth+"px rgba(46,129,255,0.23),inset -"+depth+"px -"+depth+"px "+depth+"px rgba(250,252,255,0.48);\n" +
        "        }\n" +
        "\n" +
        "\n" +
        "    </style>\n" +
        "    <title>泥陶态密码输入框</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "<div class=\"container\" id=\"container_clay_morphism\">\n" +
        "    <div class=\"inputs\" id=\"inputs_clay_morphism\">\n" +
        "        <label>密码</label>\n" +
        "        <input id=\"input2_clay_morphism\" type=\"password\" name=\"password\" placeholder=\"输入密码\"/>\n" +
        "    </div>\n" +
        "</div>\n" +
        "</body>\n" +
        "</html>\n"


    document.getElementById("code").innerHTML=onclick_input2_clay_morphism_code;
}
function onclick_button_clay_morphism(){
    depth=document.getElementById("depth").value;
    let onclick_button_clay_morphism_code=
        "<!--泥陶态登录按钮-->\n" +
        "<!doctype html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <meta name=\"viewport\"\n" +
        "          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n" +
        "    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
        "    <style type=\"text/css\">\n" +
        "        .container{\n" +
        "            width: 90%;\n" +
        "            height: 520px;\n" +
        "            background: #ecf0f3;\n" +
        "            padding: 40px;\n" +
        "            border-radius: 20px;\n" +
        "            box-sizing: border-box;\n" +
        "            float: left;\n" +
        "            position: relative;\n" +
        "            margin: auto;\n" +
        "        }\n" +
        "        #container_clay_morphism{\n" +
        "            box-shadow:\n" +
        "            box-shadow: "+depth*2+"px "+depth*2+"px "+depth*3+"px rgba(155,196,255,0.42),inset "+depth*1.5+"px -"+depth*1.5+"px "+depth*2+"px rgba(250,252,255,0.48),inset -"+depth*1.5+"px -"+depth*1.5+"px "+depth*2.5+"px rgba(46,129,255,0.23);\n" +
        "        }\n" +
        "        .button{\n" +
        "            margin-top: 20px;\n" +
        "            background: #1da1f2;\n" +
        "            height: 40px;\n" +
        "            border-radius: 20px;\n" +
        "            cursor:pointer;\n" +
        "            font-weight: 900;\n" +
        "            font-family: sans-serif;\n" +
        "            letter-spacing: 1px;\n" +
        "        }\n" +
        "        #button_clay_morphism{\n" +
        "            box-shadow:\n" +
        "            box-shadow: "+depth+"px "+depth+"px "+depth*1.5+"px rgba(155,196,255,0.42),inset "+depth+"px -"+depth+"px "+depth+"px rgba(250,252,255,0.48),inset -"+depth+"px -"+depth+"px "+depth+"px rgba(46,129,255,0.23);\n" +
        "        }\n" +
        "        button{\n" +
        "            display: block;\n" +
        "            width: 100%;\n" +
        "            border: none;\n" +
        "            outline: none;\n" +
        "            box-sizing: border-box;\n" +
        "        }\n" +
        "    </style>\n" +
        "    <title>泥陶态登录按钮</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "<div class=\"container\" id=\"container_clay_morphism\">\n" +
        "    <div class=\"inputs\" id=\"inputs_clay_morphism\">\n" +
        "        <button type=\"submit\" class=\"button\" id=\"button_clay_morphism\">登录</button>\n" +
        "    </div>\n" +
        "</div>\n" +
        "</body>\n" +
        "</html>\n"


    document.getElementById("code").innerHTML=onclick_button_clay_morphism_code;
}
