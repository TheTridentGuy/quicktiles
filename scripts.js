var time = 0.0;
var activetile = 0;
var score = 0;


function load(){
    document.getElementById("modal").style.display = "block";
    document.getElementById("scoremodal").style.display = "none";
}

function setLevel(timelevel){
    time = timelevel;
    document.getElementById("modal").style.display = "none";
    start();
}

function start(){
    setTimeout("end()", 30000)
    setTimeout("next()", Math.floor(time * 1000))
}

function next(){
    if(activetile > 0){
        document.getElementById("tile" + activetile).style.background = "grey";
    }  
    activetile = getRandomInt();
    document.getElementById("tile" + activetile).style.background = "green";
    setTimeout("next()", Math.floor(time * 1000));
}

function end(){
    document.getElementById("scorebox").innerHTML = "Score: " + score;
    document.getElementById("scoremodal").style.display = "block";
    if(getCookie("highscore") != ""){
        if(getCookie("highscore") >= score){
            document.getElementById("highscore").innerHTML = "Highscore: " + getCookie("highscore");
        }else{
            document.getElementById("highscore").innerHTML = "New Highscore: " + score;
            setCookie("highscore", score, 365)
        }
    }else{
        document.getElementById("highscore").innerHTML = "New Highscore: " + score;
        setCookie("highscore", score, 365)
    }
}

function clicked(num){
    if(num == activetile){
        score ++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
}

function getRandomInt(){
    return Math.floor(Math.random() * 16) + 1;
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
