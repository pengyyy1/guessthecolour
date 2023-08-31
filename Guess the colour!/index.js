/*set up variables for the button, the question/rgb code and the answer message*/
var buttons = document.getElementsByClassName("colorButton");
var question = document.getElementById("colorValue");
var answerMessage = document.getElementById("answer");

/*vars for ncrease and decrease amount of buttons on screen*/ 
var container = document.getElementById("container");
var increaseBtn = document.getElementById("increaseBtn");
var decreaseBtn = document.getElementById("decreaseBtn");

  /*Add button*/
  function addButton() {
	var button = document.createElement("div");
	button.className = "colorButton";
	container.appendChild(button);
	game()
  }
/*random Color function*/
function makeColorValue() {
	return Math.floor(Math.random() * 256);
}
/*function to set the buttons color*/
function setButtonColor(button, red, green, blue) {
	button.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

function game() {
	answerMessage.innerHTML = "";
	/*pick a button as the correct answer*/
	answerButton = Math.floor(Math.random() * buttons.length);
	/*use a for loop to color in the buttons.*/
	for (i = 0; i < buttons.length; i++) {
		var red = makeColorValue();
		var green = makeColorValue();
		var blue = makeColorValue();

		setButtonColor(buttons[i], red, green, blue);
		/*set the rgb code/question to the rgb code of the correct button*/
		if (i === answerButton) {
			question.innerHTML = "(" + red + "," + green + "," + blue + ")";
		}
		/*making the buttons clickable and showing correct or wrong*/
		buttons[i].onclick = function() {
			if (this === buttons[answerButton]) {
				addButton()
				answerMessage.innerHTML = "Correct";

			} else {
				answerMessage.innerHTML = "Wrong answer! Guess again";
			}
		};
	}
}
game();