var c = 25;
function celciusconvert() {
   let d=  c*(9/5)+32;
    return d;
    
}

document.write(c,"°C is ",celciusconvert(),"°F <br>");

var f= 70;
function farenhietconvert() {
    let e = (f-32)*5/9;
    return e;
}
document.write(f," °F is ",farenhietconvert(),"°C");

