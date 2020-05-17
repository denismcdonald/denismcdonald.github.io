console.log("c64jekyll theme by Reg Tait: regmtait.co.uk");

setInterval(function() {
    document.getElementById("cursor").classList.toggle("blink");
}, 600);

function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}

var c = document.getElementById("cursor");
var text = document.getElementById("text");
var secret = document.getElementById("secret");
var close = document.getElementById("close");
var frame = document.getElementById("frame");
var expanded = false;

c.addEventListener("mousedown", function() {
    if (expanded == false) {
        text.style.display = "inline-block";
        c.style.visibility = "hidden";
        printLetterByLetter("text", "\xa0SUPER SECRET MENU\xa0", 25);
        setTimeout(function() {
            document.getElementById("secret").style.visibility = "visible";
            expanded = true;
        }, 500)
    } else {
        return;
    }
});

text.addEventListener("mousedown", function() {
    if (expanded == true) {
        text.innerText = "";
        c.style.visibility = "visible";
        expanded = false;
        secret.style.visibility = "hidden";
        frame.style.display = "none";
    }
});

close.addEventListener("mousedown", function() {
    if (expanded == true) {
        text.innerText = "";
        c.style.visibility = "visible";
        expanded = false;
        secret.style.visibility = "hidden";
        frame.style.display = "none";
    }
});

function commando() {
    frame.style.display = "block";
    frame.src = "https://www.youtube.com/embed/qrQuR1LHAVI";
}

function thing() {
    frame.style.display = "block";
    frame.src = "https://www.youtube.com/embed/mmmEBO2lDVI";
}

function ninja() {
    frame.style.display = "block";
    frame.src = "https://www.youtube.com/embed/1ok1ChTtWQI";
}