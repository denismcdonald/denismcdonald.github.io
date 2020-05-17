var loaded = false;

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

function loadList() {
    setTimeout(function() {
        document.querySelector("#load").innerText = "";
        document.querySelector("#load").style.visibility = "visible";
        printLetterByLetter("load", "Load\"?\",8", 50);
    }, 200)

    setTimeout(function() {
        document.querySelector("#list").innerText = "";
        document.querySelector("#list").style.visibility = "visible";
        document.querySelector("#page-heading").style.visibility = "visible";
        printLetterByLetter("list", "RUN", 100);
    }, 800)

    setTimeout(function() {
        setInterval(function() {
            document.querySelector("#post-list").style.visibility = "visible";
            document.getElementById("cursor").classList.toggle("blink");
        }, 600);
    }, 900);
    loaded = true;
}

if (!document.hidden && loaded == false) {
    window.onload = loadList();
}

document.addEventListener("visibilitychange", function() {
    if (!document.hidden && loaded == false) {
        loadList();
    }
});

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