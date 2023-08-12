
function MagicEightBall() {
    this.answers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes definitely.",
        "You may rely on it.",

        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",

        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",

        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];

    this.generatePrediction = function () {

        this.generateName = {
            name: "plain name"
        }
        return this.answers[parseInt(Math.random() * this.answers.length)]
    }
}


setTimeout(() => {
    let eightBall = document.querySelector("#eightball")
    let triangle = document.createElement("div")

    let triangleContainer = document.createElement("div")
    triangleContainer.classList = "d-flex justify-content-center align-items-center border border-width-1 border-white rounded-circle shadow-sm text-white"
    triangleContainer.style.width = "45%"
    triangleContainer.style.height = "45%"
    triangleContainer.classList.add("text-white")

    triangle.classList = "d-flex justify-content-center text-center"
    triangle.id = "triangle"
    triangle.style.padding = "20px"
    let number = document.querySelector(".number")

    // let link = document.createElement("a")
    // link.href = "url/descarga"
    // link.target = "_black"
    // link.onclick()

    eightBall.removeChild(number)

    triangle.innerText = new MagicEightBall().generatePrediction()
    triangleContainer.appendChild(triangle)
    eightBall.appendChild(triangleContainer)
}, 3000)



// eightBall.innerHTML = `<div class="d-flex justify-content-center align-items-center border border-width-1 border-white rounded-circle shadow-sm text-white" style="width: 45%; height: 45%;">
//             <div id="triangle" class="d-flex justify-content-center align-items-center">
//               ${ }
//             </div>
//           </div>`

// let elemento = document.querySelector(".answer")
// elemento.innerHTML = new MagicEightBall().generatePrediction()
