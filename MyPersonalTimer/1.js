btnStart.addEventListener("click", Timer, false);
var counterSec = 0;
counterMin = 1;
counterHour = 1;

function Timer () {
    counterSec++;
    document.getElementById("countSec").innerHTML= counterSec;
    setTimeout("Timer()", 1000);
    if (counterSec == 60){
        document.getElementById("countMin").innerHTML= counterMin;
        counterMin++;
        return counterSec=0;
     }
     if ( counterMin== 60){
        document.getElementById("countHours").innerHTML= counterHour;
        counterHour++;
         return counterMin = 0;
     }
}