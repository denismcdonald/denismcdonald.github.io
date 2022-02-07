function commando() {
    frame.style.display = "block";
    frame.src = "https://www.youtube.com/embed/qrQuR1LHAVI";
}

window.onload = (event) => {

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
        printLetterByLetter("load", "Load\"$\",8", 40);
    }, 200)

    setTimeout(function() {
        document.querySelector("#list").innerText = "";
        document.querySelector("#list").style.visibility = "visible";
        document.querySelector("#page-heading").style.visibility = "visible";
        printLetterByLetter("list", "LIST", 100);
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
        text.innerHTML = "";
        // text.style.marginLeft = "-1.1rem";
        text.style.backgroundColor = "#b4b7ff";
        text.style.color = "#545eec";
        printLetterByLetter("text", "\xa0SECRET MENU!", 25);
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


    // Add event listener on keydown
    document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;

    // if(expanded == false && event.key == 1 || expanded == false && event.key == 2 || expanded == false && event.key == 3 || expanded == false && event.key == 4 || expanded == false && event.key == 5) {
    //     text.style.backgroundColor = "#545eec";
    //     text.style.color = "#b4b7ff";
    //     text.innerHTML = event.key;
    //     text.style.display = "inline-block";
    // } 

    if(expanded == false && event.key == 1 || expanded == false && event.key == 2 || expanded == false && event.key == 3 || expanded == false && event.key == 4 || expanded == false && event.key == 5) {
        text.style.backgroundColor = "#545eec";
        text.style.color = "#b4b7ff";
        text.innerHTML = event.key;
        text.style.display = "inline-block";
    } 

    if(event.key == "Backspace") {
        text.innerHTML = "";
    }
   
    if(event.key == "Enter" && text.innerHTML == 1 ) { 
    window.location.replace("https://www.denismcdonald.com/blog");
    }
    if(event.key == "Enter" && text.innerHTML == 2 ) { 
    window.location.replace("https://github.com/denismcdonald");
    }
    if(event.key == "Enter" && text.innerHTML == 3 ) { 
    window.location.replace("https://www.linkedin.com/in/denismcdonald/");
    }
    if(event.key == "Enter" && text.innerHTML == 4 ) { 
    window.location.replace("https://twitter.com/DenisMcD");
    }
    if(event.key == "Enter" && text.innerHTML == 5 ) { 
    window.location.replace("mailto:hello@denismcdonald.com");
    }

    }, false);

}