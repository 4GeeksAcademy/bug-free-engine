


let condicion = 5 < 1; // true

let condicion2 = 0 == '0' // true

if (condicion) { // ! negacion - refactorizar 
    // si es verdadero
    console.log(" Es mayor! ")
} else if (condicion && condicion2) {
    // si es falso
    console.log("se cumplen ambas condiciones!")

    if (condicion3) { // anidado
        // never nested, always ...
    }

} else {
    console.log("Ninguna de las anteriores.")
}



// operador ternario - expresiones

const condicionTernaria = condicion == condicion2 ? true + 1 : add(3, 4);



switch (numerito) {

    case 1:
        console.log("el numerito es 1")
        break;

    case 5:
        condicionTernaria = false;
        break;

    default:
        console.log("esto es un switch!")
        break;

}

