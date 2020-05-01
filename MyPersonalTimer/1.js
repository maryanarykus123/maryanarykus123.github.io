btnStart.addEventListener("click", Timer, false);
btnRestart.addEventListener("click", RestartTimer, false);
var counterSec = 0;
counterMin = 0;
counterHour = 0;


function Timer () {
    counterSec++;
    document.getElementById("countSec").innerHTML= counterSec;
    setTimeout("Timer()", 1000);
    if (counterSec == 60){
        counterMin++;
        document.getElementById("countSec").innerHTML=0;
        document.getElementById("countMin").innerHTML= counterMin;
        return counterSec = 0;
    }

    if ( counterMin== 60){
        counterHour++;
        document.getElementById("countMin").innerHTML=0;
        document.getElementById("countHours").innerHTML= counterHour;
         return counterMin = 0;
     }
    
     
    }
 function RestartTimer(){
     if(counterSec != 0 || counterMin  != 0 || counterHour != 0 ){
        document.getElementById("countSec").innerHTML=0;
        document.getElementById("countMin").innerHTML=0;
        document.getElementById("countHours").innerHTML=0;
        counterSec = 0;
       return;
     }
 }
 btnStop.addEventListener("click", StopTimer, false);

 function StopTimer(e) {
    if (confirm("Ви зупинили таймер \n" +"Години:" + counterHour +"  Хвилини:"+ counterMin + "  Секунди:" + counterSec )) {
        return;
    }
}