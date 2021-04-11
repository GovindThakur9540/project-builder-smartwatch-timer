//Working on SMS part

document.querySelector("#sms").onclick = function(){
    var mainPart = document.querySelector("#main");  //for covering body area of watch
    mainPart.innerHTML = ""; //removing content from body area

    var smsContainer = document.createElement("div");//create div for assigning text
    smsContainer.id = "sms-container"; //give id to div
    smsContainer.innerHTML = 
    `<div id = "html" onclick="showContent('html')">HTML</div>
    <div id = "css" onclick="showContent('css')">CSS</div>
    <div id = "js" onclick="showContent('js')">JavaScript</div>`;

    mainPart.appendChild(smsContainer); //append to main part
};

//write function to showcontent on sms container
function showContent(data){
    var smsBox = document.querySelector("#sms-container");
    smsBox.innerHTML = "";
    var sms = document.createElement("p");
    sms.id = "text";
    switch(data){
        case "html":
            sms.innerHTML = 
                "HTML is the standard markup language for Web pages With HTML you can create your own Website HTML is easy to learn - You will enjoy it!";
        break;
        case "css":
            sms.innerHTML = 
                "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced.";
        break;
        case "js":
            sms.innerHTML = 
                "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.";
        break;
    }

    smsBox.appendChild(sms); //append sms to text container
}

//on page loading show time
var mainPart = document.querySelector("#main");
mainPart.innerHTML=`<h2 class="time2" id="time2"></h2>
<p class="day" id="day"></p>
<p class="date" id="date"></p>` 