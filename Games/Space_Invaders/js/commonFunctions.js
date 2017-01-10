var seed  = Date.now();

function rand(a,b)
{
    if(a==b || a>b){return a;}
    seed = (seed * 9301 + 49297) % 233280
    var sumar =  (b == undefined)?0:a -1 ;
    var multiplicar = (b==undefined)?a:b;
    return Math.min(multiplicar,sumar+Math.ceil(seed / (233280.0)*multiplicar));
};

var globalVar = 
{

};
function initGlobalsVar()
{

};

//Para los navegadores que no soportan la función create, podemos extender el objeto de JavaSript Object para incluir esta funcionalidad:
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
};