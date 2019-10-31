
var count = 0;
var finished = false;
var target;
var guess;
var input;

function game() {
	
	target = Math.floor(Math.random() * 100) + 1;

	console.log(target);
	
	while(!finished) {
		
		input = prompt("enter any value between 1 to 100");
		guess = parseInt(input);
		count ++;
		finished = check();
	
	} 
}

function check() {
	
	if (isNaN(guess)) {
		alert("please enter a number");
		return false;
	}
	if ((guess>100) || (guess<1)) {
		alert("out of range");
		return false;
	}
	if (guess < target) {
		alert("number is too small");
		return false;
	}
	if (guess > target) {
		alert("number is too large");
		return false;
	}
	
	alert("You got it!" + "\n" + "you guessed in " + count + "times");
	return true;
		

}
			
	