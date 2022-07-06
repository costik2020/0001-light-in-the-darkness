/*
Mouse over a div
Method1:
document.getElementById("element").addEventListener("mouseenter", function(  ) {isOnDiv=true;});
document.getElementById("element").addEventListener("mouseout", function(  ) {isOnDiv=false;});

Method2
 <img onmouseover="bigImg(this)" src="smiley.gif" alt="Smiley">



*/

//console.log("fooo");
let matrix = document.querySelector(".matrix");
//console.log("matrix=",matrix);

let boxesArray = document.querySelectorAll(".box");
console.log("box=",boxesArray);

// Add the code that detexts when the mouse cursor is over
// First I need to interate over all the boxes from `boxesArray`
//box.addEventListener("mouseover", changeColor);

for (let box of boxesArray){
	//DEBUG console.log(box);
	//box.addEventListener("mouseover", changeColor, eventObj.target);
	box.addEventListener("mouseover", changeColor);
}

// Define the changeColor() function
function changeColor(box){
	//console.log("test");
	console.log(box);
	//box.style.backgroundColor="white";
}



