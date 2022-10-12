var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");   // given condtion is true and alert message is displayed "Given condition for variable a is true"
}


var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");   // given condtion is false and alert message is not displayed
}


var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}                                                  // Conditon 2 and 4 are true and alert message is displayed while 1 and 3 are false and alert message is not displayed 
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}



var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;                  // given condition is true and alert message is displayed  "The cost equals"
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}




if (true){
    alert("True");
    }
    if (false){                                       //given condition is true because the alert display the message which is true
    alert("False");
    }



if("car" < "cat"){
    alert("car is smaller than cat");                  //given conditon is true and the message is displayed "car is smaller than cat"
    }