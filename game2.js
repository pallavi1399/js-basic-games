var color = ['blue','green','indigo','orange','red','violet','yellow'];
var count = 0;
var finished = false;
var random;
function game() {

	random = Math.floor(Math.random() * (color.length - 1));
	console.log(color[random]);
	while(!finished) {
		
		var input = (prompt("enter any color from the given colors \n blue, green, indigo, orange, red, violet, yellow"));
		guess = color.indexOf(input);
		count += 1;
		finished = check();
	}
}

function check(){
	if(guess == -1) {
		alert("plz enter color from given choice only!!");
		return false;
	}
	if(guess < random) {
		alert("Your color is alphabetically smaller than mine");
		return false;
	}
	if(guess > random) {
		alert("Your color is alphabetically greater than mine");
		return false;
	}
	if(guess == random) {
		alert("You got it!!" + "\n" + "You guessed in" + count + "times");
		document.getElementById("bg").style.backgroundColor = color[random];
		return true;
	}
}


