//funcion normal

/** 
 * let suma = function(a:number,b:number){
    return a+b;
}
console.log(suma(5,4));
*/

//funcion flecha
let  sumaFlecha=(a:number,b:number)=>{
    return a+b;
}

//funcion flecha reducida
//let sumaFlecha=(a:number,b:number)=>a+b;

console.log(sumaFlecha(5,8));

//ejemplo de otro metodo de funcion flecha
var obtenerNombre=function(){
    return"Victor Lopez";
}
let obtenerNombreFlecha=()=>"Victor López";

console.log(obtenerNombreFlecha());