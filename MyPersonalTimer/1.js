
var counter = 0;

functiom timer() {
    counter++;
    document.getElementById("count").innerHTML= counter;
    setTimeout("timer()",1000);
}