
// let multiplicarNumeros = (num1, num2) => {

//     if (num1 && num2) {
//         return num1 * num2
//     }
//     return "Ah ocurrido un error!"
// }

// const sumarCallback = (cb, num3) => {
//     console.log("inicia la suma!")
//     let res = num3 + cb(3, 7) 
//     return res + " un saludo!"
// }

// let resultado = sumarCallback(console.log, 9)
let resultado = 3;
console.log(resultado);

//IIFE - Inmediatly Invoked Function Expression
(function () {
    console.log("hola que tal soy una IIFE!")
})();
