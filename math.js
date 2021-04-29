//I removed the sequence itself from this link 
//(something was changed, but I didn't quite 
//remember how recursion was performed for fibonacci)
//link: https://elvex.ugr.es/decsai/java/pdf/7C-Ejemplos.pdf

//const Math = {};

function Fibonacci(n){
    if ((n == 0) || (n == 1)) return 1;
    else return Fibonacci(n - 1) + Fibonacci(n - 2);
}

//Math.Fibonacci = Fibonacci ;
//export

//Math.Fibonacci = Fibonacci ; 
module.exports = Fibonacci ; // is not working 