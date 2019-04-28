/* Condicional */

let numIngresado= prompt("Ingrese un numero");

let num= parseInt( numIngresado );

if( (num%2)===0) {
	alert(num+" es par");
}else{
	alert("No es par");
}

let num1 = parseInt(prompt("Ingrese un numero")); 
let num2 = parseInt(prompt("Ingrese el segundo numero")); 
if(num1>num2){
	alert(`${num1} es mayor`);
}else if(num2>num1){
	alert(`${num2} es mayor`);
}else{
  	alert(`${num1} y ${num2} son iguales`);
}
	
/* 
BUCLE FOR
*/
for(let c = 0; c<=100; c++){
	console.log(c);
}



