var time= prompt("Write Time in 24 Hour Format");
var time1 = parseInt(time);
if(time1 >= 0000 && time < 1200){
    alert("Good Morning!")
}
else if(time >= 1200 && time <1700){
    alert("Good Afternoon!");
}
else if(time >= 1700 && time < 2100){
    alert("Good Evening!");
}
else if(time >=2100 && time <= 2359){
    alert("Good Night!");
}
else{
    alert("Time not Right")
}