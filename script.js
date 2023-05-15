const choiceButtons = document.querySelectorAll(".btn-box");
const playButton = document.querySelectorAll(".play-btn")
const home = document.querySelector("#home")
const board = document.querySelector("#board")

let player1 = "x"
let mode = "cpu"

let turn = "x"
let freeButton = [0,1,2,3,4,5,6,7,8]
let xArray = []
let oArray = []

const activateChoice = (icon) =>{
  if(icon === "x"){
    choiceButtons[0].classList.add("active");
    choiceButtons[1].classList.remove("active");
    player1 = "x"
    
  }
  else{
    choiceButtons[1].classList.add("active");
    choiceButtons[0].classList.remove("active");
    player1 = "o"
  }

}

const startGame = (modeParam) =>{
  home.style.display =  "none"
  board.style.display = "block"
  document.body.style.alignItems = "flex-start"
  mode = modeParam
}