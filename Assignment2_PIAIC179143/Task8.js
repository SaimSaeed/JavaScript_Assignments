var num = prompt("Write Number");
var num1= parseInt(num);
if(num1=== 0){
    alert("The Number is 0.");
}
else if(num1 > 0){
    alert("The Number is Positive.");
}
else if(num1 < 0){
    alert("The Number is Negative.");
}
else{
    alert("No Number");
}