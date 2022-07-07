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

// Add the code that detects when the mouse cursor is over
// First I need to interate over all the boxes from `boxesArray`
//box.addEventListener("mouseover", changeColor);
//boxesArray[0].style.transition="backgroundColor 2s;"

for (let box of boxesArray){
	//DEBUG console.log(box);
	//box.addEventListener("mouseover", changeColor, eventObj.target);

	box.addEventListener("mouseover", function(){
		console.log("box=",box);
		box.style.backgroundColor="white";
		// Adding neon light to each small box
		box.classList.add('boxLight');
	});

	box.addEventListener("mouseout", function(){
		console.log("foo");
		box.style.backgroundColor="black";
		//box.style.transition="backgroundColor 1.5s;"
		// Remove the neon Light
		box.classList.remove('boxLight');
	});
}





