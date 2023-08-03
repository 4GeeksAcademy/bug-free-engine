
const amigos = ["Diego", { nombre: "Elizabeth", edad: 25 }, "Enmanuel", "Alexander", "Stefano", [] ];


for (geek of amigos) { // lista es un iterable

    if (typeof geek == "object")
        console.log(geek.edad);
    else
        console.log(geek);
}


for (property in amigos[1]) {    // object tambien es un iterable
    console.log(amigos[1][property]);
}


const bmw = {
    ruedas: 5,
    modelo: "m3",
    puertas: 3,
}