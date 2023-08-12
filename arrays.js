const geeks = ["Diego", "Stefano", "Carlos", "Roberto", "Sebastian", "Stefano G.", "Alexander", "Samuel"]

function saludar(persona) {
    console.log("Hola 👋🏼 " + persona + "!")
}

// geeks.forEach(saludar)

// let result = geeks.reverse().forEach((student, ind, arr) => {
//     //console.log(student, ind, arr);
//     console.log("Hola 👋🏼 " + student + "!")
// })

// console.log(result)

// const geekItems = geeks.map(persona => `<li>${persona}</li>`)
//     .join("")

// const listaDeGeeks = `<ul>${geekItems}</ul>`

// console.log(listaDeGeeks)

// const geeksWithLetterS = geeks.filter(name => name.startsWith("S"))

// console.log(geeksWithLetterS)


const newGeeks = geeks.sort((a, b) => {
    return a.localeCompare(b)
})

console.log(newGeeks)

