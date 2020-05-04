console.log("c64jekyll theme by Reg Tait: regmtait.co.uk");

var loaded = false;

window.onfocus = function () { 

    if(!loaded) {

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

        setTimeout(function() {
            printLetterByLetter("load", "Load\"$\",8", 50);
        }, 100);

        setTimeout(function() {
            document.querySelector("#page-heading").style.visibility = "visible";
        }, 700)

        setTimeout(function() {
            printLetterByLetter("list", "List", 140);
        }, 700);

        setTimeout(function() {
            setInterval(function() {
                document.querySelector("#post-list").style.visibility = "visible";
                document.getElementById("cursor").classList.toggle("blink");
            }, 600);
        }, 800)

    loaded = true;
    
    }

}