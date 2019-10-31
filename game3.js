function game() {
	var top_p = 25, left_p = 25; 
	var height = 400, width = 400;
	var color = ['red', 'orange', 'green', 'blue', 'yellow', 'violet', 'pink'];
	var body_s = document.getElementById("body");
	while (width > 50) {
		var div_s = document.createElement("div");
		var random = Math.floor(Math.random() * 7);

		div_s.style.top = top_p + "px";
		div_s.style.left = left_p + "px";
		div_s.style.height = height + "px";
		div_s.style.width = width + "px";
		div_s.style.background = color[random];

		body_s.appendChild(div_s);
		top_p += 10 ; left_p += 10;
		height -= 20; width -= 20;
	}
}
