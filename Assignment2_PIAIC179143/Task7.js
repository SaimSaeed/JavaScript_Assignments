var num1 = prompt("Enter First Number");
var num2 = parseInt(num1);
var num3 = prompt("Enter Second Number");
var num4 = parseInt(num3);
var num5 = prompt("Select Operation : /,*,+,-,**,%");
if(num5 === "+"){
    alert(num2+num4);
}
else if (num5 === "-"){
    alert(num2-num4);
}
else if (num5=== "/"){
    alert(num2/num4)
}
else if (num5 === "*"){
    alert(num2*num4);
}
else if(num5 === "**"){
    alert(num2**num4);
}
else if(num5 === "%"){
    alert(num2%num4);
}
else{
    alert("No Number")
}