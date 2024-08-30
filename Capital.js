let capital  = parseFloat(prompt("ingrese la capital: "));
let tasaInteres = parseFloat(prompt("ingrese la tasa de interes anual: "));
let años =  parseInt(prompt("ingrese el numero de años: "));

let valorFururo = capital * Math.pow(( 1 + tasaInteres), años);

console.log("El valor futuro del capital es: " + valorFuturo.toFixed(2)); alert("El valor futuro del capital es: " + valorFuturo.toFixed(2));
