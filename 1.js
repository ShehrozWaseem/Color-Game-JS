var numSq=6;
var colors=generatearray(numSq);


var squares=document.querySelectorAll(".square");
console.log(squares);
var colorDisplay= document.getElementById('tst');
var pickedcolor=pickColor();	
var msgDisplay = document.querySelector(".msg");
var heading= document.querySelector("h1");
var reset=document.getElementById("new");
var easybtn=document.getElementById("easybtn");
var hardbtn=document.getElementById("hardbtn");

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numSq=3;
	colors=generatearray(numSq);
	pickedcolor=pickColor();
	msgDisplay.textContent=" ";
	colorDisplay.textContent = pickedcolor
	for(var i=0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
})


hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numSq=6;
	colors=generatearray(numSq);
	pickedcolor=pickColor();
	colorDisplay.textContent = pickedcolor
	for(var i=0; i<squares.length; i++){

			squares[i].style.backgroundColor=colors[i];
	

			squares[i].style.display="block";
	}
})


reset.addEventListener("click",function(){
	//color pick kru pehle 
	 colors=generatearray(numSq);
	 msgDisplay.textContent=" ";
	 pickedcolor=pickColor();
	 this.textContent="new colors";
	//color ki rgb value new wali set kru ju abi pick ki ha
	colorDisplay.textContent = pickedcolor;
	// code chalau loop
	for (var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];}  
	heading.style.backgroundColor= "steelblue";




});




colorDisplay.textContent = pickedcolor;
for (var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click" , function () {
		var clickedcolor=this.style.backgroundColor;
		if (clickedcolor===pickedcolor) {
			msgDisplay.textContent = "CORRECT";
			reset.textContent="PLAY AGAIN !"
			Changecolor(clickedcolor);
			heading.style.backgroundColor = clickedcolor;
		}
		else{
			this.style.backgroundColor = "#232323";
			msgDisplay.textContent = "TRY AGAIN";
					}
	
		}); }
	function Changecolor(color){
		for(var i=0; i<squares.length; i++){
			squares[i].style.backgroundColor=color;
		}
}
function pickColor(){
		var random= Math.floor(Math.random() * colors.length);
		return colors[random];
		console.log(random);

	}
function generatearray(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(generatecolor());

	}
	return arr

}
function generatecolor(){
	//for red
	var r=Math.floor(Math.random()*256);//color ranges from 0-256
	//for green
	var g=Math.floor(Math.random()*256);
	//for blue
	var b=Math.floor(Math.random()*256);

	return "rgb(" + r +", " + g + ", " + b + ")";
}
	
	


