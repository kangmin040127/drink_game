let computerNumber = 0;
let numberArr = [];
let playBtn = document.getElementById('play-button');
let userInput = document.getElementById('user-input');
let result = document.getElementById('result');
let reset = document.getElementById('reset-button');
let numArr = document.getElementById('numArr');
let chanceArea = document.getElementById('chance-area');
let gameOver = document.getElementById('GameOver');

let chance = 5;
chanceArea.textContent = 5;

playBtn.addEventListener('click', play); 
reset.addEventListener('click', resetFnc);
userInput.addEventListener("focus", function(){userInput.value = ""})


function randomNumber(){
    computerNumber = Math.floor(Math.random()*100)+1
    console.log(computerNumber);
}

function play(){
  let userValue = userInput.value;
	if(numberArr.includes(userValue)){
		result.textContent = "이미 했잖아 제발 정신차리셈"
		return;
	}
	if(!(userValue >= 1 && userValue <= 100)){
		result.textContent = 'from 1 to 100 pls'
		return;
	}
	else if(userValue < computerNumber){
		result.textContent = 'UP'
	} else if(userValue > computerNumber){
		result.textContent = "DOWN"
	} else{
		result.textContent = "CORRECT"
		playBtn.disabled = true;
	}
	chanceArea.textContent -= 1;
	chance -= 1;
	if(chance <= 0){
		gameOver.textContent = "GameOver";
		playBtn.disabled = true;
	}
	numberArr.push(userValue);
	numArr.textContent = numberArr;
	console.log(numberArr);
	console.log(chanceArea.textContent);
}

function resetFnc(){
	result.textContent = ''
	chanceArea.textContent = 5;
	userInput.value = ""
	numArr.textContent = ''
	gameOver.textContent = ""
	numberArr = [];
	playBtn.disabled = false;
	computerNumber = Math.floor(Math.random()*100)+1
	console.log(computerNumber);
}

randomNumber();