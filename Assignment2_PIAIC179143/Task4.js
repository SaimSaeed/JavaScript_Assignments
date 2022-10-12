var sub1 = prompt("Marks in English?");
var english = parseInt(sub1);
document.write("Marks Obtained in English: ",english+"<br>");
var sub2= prompt("Marks in Physics")
var physics = parseInt(sub2);
document.write("Marks Obtained in Physics: ",physics+"<br>");
var sub3= prompt("Marks in chemisry");
var chemistry = parseInt(sub3);
document.write("Marks Obtained in Chemistry: ",chemistry+"<br>");
obtain = english+physics+chemistry;
document.write("Obtained Marks: ",obtain+"<br>");
totalMarks = 300;
document.write("Total Marks: ",totalMarks+"<br>");
var percentage = obtain/ totalMarks*100;
document.write("Percentage is: ",percentage+"<br>");
if(percentage >= 90){
    document.write("Grade : A+ "+"<br> Remarks: Excelent Job");
}
else if(percentage >=80 && percentage< 90){
    document.write("Grade : A"+"<br> Remarks: Good Job");
}
else if(percentage >=70 && percentage < 80){
    document.write("Grade : B"+"<br> Remarks:  Keep it Up");
}
else if( percentage >=60 && percentage < 70){
    document.write("Grade : C"+"<br> Remarks: Satisfactory");
}
else if( percentage >=40 && percentage < 60){
    document.write("Grade : D"+"<br> Remarks: You Need to Improve ");
}
else if( percentage >=30 && percentage < 40){
    document.write("Grade : E"+"<br> Remarks: Need to Work Hard and Improve ");
}
else{
    document.write("You Failed.");  
}
