
var interval
let playButton = true
var mp3_url = 'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3';


document.addEventListener("keypress",function(e){
    if(e.key === 'i'){
        start()
        changeButton()
    }
    if(e.key === 'p'){
        pause()
        changeButton()
    }
});

function start(){
    interval=setInterval(watch, 1000)
}

function pause(){
    clearInterval(interval)
}

function reset(){
    clearInterval(interval)
    document.getElementById("hours-input").value=0
    document.getElementById("minutes-input").value=0
    document.getElementById("seconds-input").value=0
    document.getElementById("watch").innerText="00:00:00"
    var x = document.getElementsByClassName("playbutton")[0];
    x.innerHTML = "";
    x.innerHTML = "<button id='start' onclick='start()'>Iniciar</button>";
}

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }
    else{
        return digit
    }
}


function watch(){
    console.log("Foi")
    var hour=document.getElementById("hours-input").value
    var min=document.getElementById("minutes-input").value
    var sec=document.getElementById("seconds-input").value
    
    if(hour==0){
        document.getElementById("hours-input").value=0
    }
    if(min==0){
        document.getElementById("minutes-input").value=0
    }
    if(sec==0){
        sec=document.getElementById("seconds-input").value=0
    }

    if(hour<0 || min<0 || sec<0){
        alert("Não é possível inserir valores negativos")
        reset()
        var x = document.getElementsByClassName("playbutton")[0];
        x.innerHTML = "";
        x.innerHTML = "<button id='start' onclick='start()'>Iniciar</button>";
        return
    }
    
    document.getElementById("seconds-input").value=sec-1
    if(sec==0){
        document.getElementById("seconds-input").value=59
        document.getElementById("minutes-input").value=min-1
        if(min<=0){
            document.getElementById("minutes-input").value=59
            document.getElementById("hours-input").value=hour-1
        }
    }if(sec==0 && min==0 && hour==0){
        (new Audio(mp3_url)).play();
        clearInterval(interval)
        document.getElementById("hours-input").value=0
        document.getElementById("minutes-input").value=0
        document.getElementById("seconds-input").value=0
        var x = document.getElementsByClassName("playbutton")[0];
        x.innerHTML = "";
        x.innerHTML = "<button id='start' onclick='start()'>Iniciar</button>";
        setTimeout(function() {
            alert('Acabou');
        }, 300);

    }
    document.getElementById('watch').innerText=twoDigits(hour)+":"+twoDigits(min)+":"+twoDigits(sec)
    // document.getElementById('watch').innerText=hour+":"+min+":"+sec
}

function changeButton() {
    if(playButton) {
        var x = document.getElementsByClassName("playbutton")[0];
        x.innerHTML = "<button id='pause' onclick='pause()'>Parar</button>";
    playButton = !playButton;
      } else {
        var x = document.getElementsByClassName("playbutton")[0];
        x.innerHTML = "";
        x.innerHTML = "<button id='start' onclick='start()'>Iniciar</button>";
    playButton = !playButton;
      }
    }
