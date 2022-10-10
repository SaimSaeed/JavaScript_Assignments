var a = 2;
document.write("Value of a: ",a,",<br>");
var b = 1;
document.write("Value of b: ",b,"<br>");
var result = --a - --b + ++b + b--;
// when --a value of a is 1
// when --b value of b is 0
// when ++b value of b is 1
// when b-- value of b is 1 because it is postfix and it's value will increase the next time we call b variable 
// when this expression --a - --b + ++b + b--
// then, 1 - 0 +1 + 1
// answer is 3
document.write("Result: ",result);