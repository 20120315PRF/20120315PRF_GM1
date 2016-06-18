var seed  = Date.now();

function rand(a,b)
{
    seed = (seed * 9301 + 49297) % 233280
    var sumar =  (b == undefined)?0:a -1 ;
    var multiplicar = (b==undefined)?a:b;
    return Math.min(multiplicar,sumar+Math.ceil(seed / (233280.0)*multiplicar));
}

var globalVar = 
{
   
}