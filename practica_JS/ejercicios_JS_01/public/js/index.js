// EJERCICIO JAVASCRIPT NIVEL 01
// EJERCICIO 01
let exercise01 = "Agustin Nicolas Metrechen - Comisión 1112 - Hobbies: Comprar cosas por internet / Pasear por el parque / Jugar con mi gato / Pasar tiempo en la PC";
console.log(exercise01);

// EJERCICIO 02
let exercise02;
exercise02 = prompt("Escribe una frase"); 
console.log(exercise02);

// EJERCICIO 03
let exercise03;
exercise03 = prompt("Escribe tu nombre");
console.log("¡Hola",exercise03,"!");

// EJERCICIO 04
let exercise04;
let exercise04a;
exercise04 = prompt("Escribe tu nombre"); 
exercise04a = prompt("Ahora escribe tu apellido");
console.log(exercise04, exercise04a);

// EJERCICIO 05
let exercise05;
exercise05 = prompt("Escribe tu año de nacimiento");
console.log("Tenés",2021 - exercise05,"años");

// EJERCICIO 06
let exercise06;
let exercise06a;
    exercise06 = prompt("Escribe tu peso");
    exercise06a = prompt("Escribe tu altura");
    console.log("tu BMI es", exercise06 / ((exercise06a)**2));

// EJERCICIO 07
var cantidadDeVentanas = 1;
console.log(cantidadDeVentanas);

// EJERCICIO 08
var soyHumano = true;
console.log(soyHumano);

// EJERCICIO 09
var miGustoDePizza = "Napolitana";
console.log(miGustoDePizza);

// EJERCICIO 10
var exercise10 = ("Hola", 0, "Minions");
var exercise10 = false;
console.log(exercise10);

// EJERCICIO 11
let exercise11;
let exercise11a;
    exercise11 = prompt("Escribe la base de tu triangulo");
    exercise11a = prompt("Escribe la altura de tu triangulo");
    console.log("La superfice de tu triangulo es",(exercise11 * exercise11a) / 2),"cm2";

// EJERCICIO 11.a
let exercise11b;
let exercise11c;
let exercise11d;
    exercise11b = prompt("Cuanto mide el lado A de tu triangulo");
    exercise11c = prompt("Cuanto mide el lado B de tu triangulo");
    exercise11d = prompt("Cuanto mide el lado D de tu triangulo");
    console.log("El perimetro de tu triangulo es", parseFloat(exercise11b) + parseFloat(exercise11c) + parseFloat(exercise11d));

// EJERCICIO 12
let exercise12 = function() {
let exercise12a;
let exercise12b = 2.20462262;
    exercise12a = prompt("Escribe tu peso en libras");
    console.log("Tu peso en Kiogramos es", (exercise12a / exercise12b), "Kg" );
}
exercise12();

// EJERCICIO 13
let exercise13 = function() {
let exercise13a = prompt("Ingrese el valor de su sueldo");
let exercise13b = parseFloat(exercise13a) + ((15 / 100) * parseFloat(exercise13a)); 
console.log("Con un 15% de aumento su sueldo seria", exercise13b , "Pesos");
}
exercise13();

// EJERCICIO 14
let exercise14 = function() {
let exercise14a = prompt("Ingrese la nota del examen");
    if (exercise14a >= 7) {
        alert("Aprobado");
}
    else { (exercise14a <= 7) 
        alert("Desaprobado");
}
}
exercise14();

// EJERCICIO 15
// No entontre la tabla
// TABLA CREADA:[Categoría01 = 15%][Categoría02 = 20%][Categoría03 = 30%]
let exercise15 = function() {
    let exercise15a = parseInt(prompt("Ingrese su categoría: 1 2 3"));
    let exercise15b = parseFloat(prompt("Ingrese el valor de su sueldo"));
    let exercise15c = 0;
    switch(exercise15a) {
        case(exercise15a = 1):
            exercise15c = parseFloat(0.15);
            alert("Categoría 01");
            break;
        case(exercise15a = 2):
            exercise15c = parseFloat(0.20);
            alert("Categoría 02");
            break;
        case(exercise15a = 3):
            exercise15c = parseFloat(0.30)
            alert("Categoría 03");
        default:
            alert("Esta categoría no existe");
    }
    let exercise15d= parseFloat(exercise15b) + ((exercise15c) * parseFloat(exercise15b));
        alert("Según categoría y sueldo ahora cobrará: " +exercise15d+ " pesos");
}
exercise15();

// EJERCICIO 16
let exercise16 = prompt("ingrese número de matrícula");
let exercise16a = parseFloat(prompt("ingrese nota 01"));
let exercise16b = parseFloat(prompt("ingrese nota 02"));
let exercise16c = parseFloat(prompt("ingrese nota 03"));
let exercise16d = parseFloat(prompt("ingrese nota 04"));
let exercise16e = parseFloat(prompt("ingrese nota 05"));
let estate;
let exercise16g = function () {
    let exercise16f = (parseFloat(exercise16a) + parseFloat(exercise16b) + parseFloat(exercise16c) + parseFloat(exercise16d) + parseFloat(exercise16e)) / 5;
    if (exercise16f >= 7) {
        estate = "Aprobado";
}
    else { (exercise16f <= 7) 
        estate = "Desaprobado";
}
    alert("Número de matrícula: " +exercise16+ " / Promedio del alumno: " +exercise16f+ "/ Estado del alumno: " +estate+ "")
}
exercise16g();

// EJERCICIO 17
let exercise17 = function() {
    let exercise17a = parseFloat(prompt("Seleccione un número 01"));
    let exercise17b = parseFloat(prompt("Seleccione un número 02"));
    let exercise17c = parseFloat(prompt("Seleccione un número 03"));
    let exercise17d = [exercise17a, exercise17b, exercise17c];
    exercise17d = Math.max.apply(null,exercise17d);
    alert("El mayor número es: " +exercise17d+ "");
}
exercise17();