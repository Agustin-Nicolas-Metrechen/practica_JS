// EJERCICIO JAVASCRIPT NIVEL 02
// EJERCICIO 01
let exercise01 = function() {
    var variable_a = 33;
    var variable_b = 77;
    var variable_resultado = variable_a + variable_b;
    console.log(variable_resultado);   
}
exercise01();

//EJERCICIO 02
let exercise02 = function() {
    let a = 10;
    let b = 6;
    let c = 19;
    let d = 4;
    let e = 21;
    let promedio = (parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e))/5;
    console.log(promedio);
}
exercise02();

//EJERCICIO 03
let exercise03 = function() {
    let nota1 = 8;
    let nota2 = 6;
    console.log(nota1 > nota2);
}
exercise03();

//EJERCICIO 04
let exercise04 = function() {
    let exercise04a = parseFloat(prompt("Ingresar valor de la compra"));
    if (exercise04a >= 100) {
        alert("El valor de su compra es " +(parseFloat(exercise04a) - (parseFloat(exercise04a) * 0.15))+"");
    }
    else {
        alert("El valor de su compra es " +exercise04a+"");
    }
}
exercise04();

//EJERCICIO 05
let exercise05 = function() {
    let exercise05a = parseInt(prompt("Ingresar cantidad de tickets"));
    let exercise05b = 0;
    if (exercise05a >= 8) {
        exercise05b = parseFloat(0.5);
    }
    else {
        exercise05b = parseFloat(1.5);
    }
    let exercise05c = parseFloat(exercise05a * exercise05b);
    alert("Total a pagar " +exercise05c+"");
}
exercise05();

//EJERCICIO 06
let exercise06 = function() {
    let nota1 = 3;
    let nota2 = 7;
    if (nota1 > nota2) {
        console.log("nota1 es mayor");
    }
    else {
        console.log("nota2 es mayor");
    }
}
exercise06();

//EJERCICIO 07
let exercise07 = function() {
    let exercise07a = parseInt(prompt("Clasificar película del 0 al 4"));
    switch (exercise07a) {
        case (exercise07a = 0):
            console.log("Mala");
        break;
        case (exercise07a = 1):
            console.log("Regular");
        break;
        case (exercise07a = 2):
            console.log("Buena");
        break;
        case (exercise07a = 3):
            console.log("Muy buena");
        break;
        case (exercise07a = 4):
            console.log("Excelente");
        break;
        default:
            alert("Número incorrecto")
    }
}
exercise07();

//EJERCICIO 08
let exercise08 = function() {
    let exercise08a = 59;
    while (exercise08a > 0) {
        console.log(exercise08a--)
    }
}
exercise08();

//EJERCICIO 09
let exercise09 = function() {
    let exercise09a = 0;
    let exercise09b = 2;
    while (exercise09a < 100) {
        exercise09a = exercise09a + exercise09b;
        console.log(exercise09a);
}
}
exercise09();

//EJERCICIO 10
let exercise10 = function() {
    let exercise10a = 100;
    while (exercise10a > -1) {
        console.log(exercise10a--);
    }
}
exercise10();

//EJERCICIO 11
let exercise11 = function() {
    let exercise11a =[];
    while (exercise11b != -1) {
        var exercise11b = parseInt(prompt("Ingresar un número (Pulsar -1 para finalizar)"));
        exercise11a.push(exercise11b);
    } if (exercise11b = -1) {
        exercise11a.pop();
        console.log(exercise11a)
    }
}
exercise11();

//EJERCICIO 12
let exercise12 = function () {
    let exercise12a = [];
    while (exercise12b != -1) {
        var exercise12b = parseInt(prompt("Ingresar un número (Pulsar -1 para finalizar)"));
        exercise12a.push(exercise12b);
    } if (exercise12b = -1) {
        exercise12a.pop();
        var exercise12c = exercise12a.reduce((previous, current) => current + previous);
        var exercise12d = exercise12c / exercise12a.length;
        console.log(exercise12d);
    }
}
exercise12();

//EJERCICIO 13
let exercise13 = function() {
    let exercise13a= [];
    let exercise13e = [];
    for (let exercise13b = 0; exercise13b <= 4; exercise13b++) {
        var exercise13c = prompt("Ingresar producto");
        var exercise13d = parseInt(prompt("Ingresar precio"));
        exercise13a.push(exercise13c);
        exercise13e.push(exercise13d);
    }
    var exercise13f = exercise13e.reduce((previous, current) => current + previous);
   console.log(exercise13a);
   console.log(exercise13e);
   console.log("Total a pagar: " +exercise13f+ "");

}
exercise13();

//EJERCICIO 14 
let exercise14 = function () {
    let exercise14a = [];
    while (exercise14b != -1) {
        var exercise14b = parseFloat(prompt("Ingresar altura (Pulsar -1 para finalizar)"));
        exercise14a.push(exercise14b);
    } if (exercise14b = -1) {
        exercise14a.pop();
        var exercise14c = exercise14a.reduce((previous, current) => current + previous);
        var exercise14d = exercise14c / exercise14a.length;
        console.log("Promedio de altura: " +exercise14d+ "");
    }
}
exercise14();

//EJERCICIO 15
let exercise15 = function () {
    let exercise15a = ["Huevos","Agua","Niño","San Cono","La cama","Gato","Perro","Revolver","Incendio","Arroyo","La Leche","Palito","Soldado","La Yeta","Borracho","Niña Bonita","Anillo"
,"Desgracia","Sangre","Pescado" ,"La Fiesta","Mujer","Loco","Cocinero","Caballo","Gallina"];
    let exercise15b = parseInt(prompt("ingresar un número del 0 al 25"));
    console.log(exercise15a[exercise15b]);
}
exercise15();

//EJERCICIO 16
let exercise16 = function () {
    let exercise16a = ["Agustin","Ana","Celina","Demian","Diego","Ezequiel","Federico","Hernan","Kayla","Luis"];
    let exercise16b = ["Avella","Escobar","Costilla","Rios","Sanabia","Chiesa","Torres","Petroni","Pedrozo","Herrera"];
    for (let exercise16c = 0; exercise16c <= 9; exercise16c++) {
        console.log("Nombre: ",exercise16a[exercise16c]," Apellido: ",exercise16b[exercise16c]);
    }
}
exercise16();