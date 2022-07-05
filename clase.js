

/*
function mayorEdad(edad) {
  if (edad >= 18) {
    console.log('es mayor de edad');
  } else if (edad < 18) {
    console.log('es menor de edad');
  } else {
    console.log('ingrese una edad valida!');
  }
}
mayorEdad(41);
mayorEdad(ale);
mayorEdad(34); 



let num2 = 0;

while(num2>20 || num2<10 ){
   
  num2 = parseInt(prompt("ingrese un numero entre 10 y 30 "));

  if( num2> 20 ){
    console.log("ingreso ",num2 ,"es muy alto");
 
  }
  else if(num2 <10){
    console.log("ingreso ",num2 ,"es menor a 10");

  }
else {
  console.log("ingreso ",num2 ,"es correcto");
 
}
  
}

/*
let num1 =0;

while (num1 < 50) {
  num1 = parseFloat(prompt( "ingrese un mumero menor a 50"));
  console.log (" el numero ingresado es ", num1)
}

let num= parseFloat(prompt( "ingrese un numero"))
let resto =50 - num;

if(num < 50){
for( let i =0 ;i <= resto ;i ++){
  console.log(50 -i )
}
}  */

function calcular_prestamo (monto,cuotas){
  if( cuotas == 3){
    return monto * 1.25
  }
  else if(cuotas == 6){
    return monto * 1.40 
  }
  else if(cuotas == 12){
    return monto * 1.60
  }
  else if(cuotas == 18){
    return monto * 1.90
  }
  else{
    console.log("in grese una cuota entre : 3 , 6 , 12 y 18 ")
  }
}

let monto = parseFloat(prompt("Simulador de Prestamo----Ingrese Monto a Solicitar"))
let cuotas = parseFloat(prompt("ingrese la cantidad de cuotas : 3 - 6 - 12 -18 "));

calcular_prestamo (monto,cuotas)


let total_prestamo = calcular_prestamo (monto,cuotas)/cuotas;
console.log("usted va a pagar por cuotas :",total_prestamo ) 
alert("usted va a pagar :"+" "+cuotas+" "+"cuotas de :"+total_prestamo);

 