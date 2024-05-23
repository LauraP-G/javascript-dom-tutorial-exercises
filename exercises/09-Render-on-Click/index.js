let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	let elementDiv = document.createElement("div");
	// Your code here

	elementDiv.innerHTML = "Hello World";

	elementDiv.style.background = "yellow";
	document.body.appendChild(elementDiv)

	
});
