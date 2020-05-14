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
        printLetterByLetter("load", "Load\"*\",8,1", 50);
    }, 200)

    setTimeout(function() {
        document.querySelector("#page-heading").style.visibility = "visible";
        printLetterByLetter("list", "Run", 100);
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