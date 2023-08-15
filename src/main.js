let texto = "";
let input = document.querySelector("#destiny")
let title = document.querySelector("#title")
input.addEventListener("keyup", controlledInput)

function controlledInput(evento){
    texto = evento.target.value;
}


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

let count = 0;
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

const shakeBall = () => {
    title.innerText = "";
    setTimeout(() => {
        console.log(triangle)
        if(count == 0 ){
            eightBall.removeChild(number)
            triangle.innerText = new MagicEightBall().generatePrediction()
            triangleContainer.appendChild(triangle)
            eightBall.appendChild(triangleContainer)
            count++;
        }else{
            triangle.innerText = new MagicEightBall().generatePrediction()
        }
        title.innerText = texto;
    }, 1*1000)
}

let shakeButton = document.querySelector("#shake")

shakeButton.onclick = (event) => {
    console.log(event)
    shakeBall();
}

    
    // eightBall.innerHTML = `<div class="d-flex justify-content-center align-items-center border border-width-1 border-white rounded-circle shadow-sm text-white" style="width: 45%; height: 45%;">
//             <div id="triangle" class="d-flex justify-content-center align-items-center">
//               ${ }
//             </div>
//           </div>`

// let elemento = document.querySelector(".answer")
// elemento.innerHTML = new MagicEightBall().generatePrediction()
