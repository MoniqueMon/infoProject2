function setupImage(puzzleObj, xyValues){
	var a = [];
	for(var i = 0; i < 2; i++){
		switch(xyValues[i]){
			case 0:
				a.push("0%");
				break;
			case 100:
				a.push("25%");
				break;
			case 200:
				a.push("50%");
				break;
			case 300:
				a.push("75%");
				break;
			default:
				console.log("*ERROR: out of bound case value.(setupImage)");
		}
	}
	
	
	puzzleObj.style.backgroundSize = "512%";
	puzzleObj.style.backgroundPosition = a[0] + " "+ a[1];
}

document.addEventListener("DOMContentLoaded",function(){
	var leftside=0;
	var topside=0;
	var puzzle = [];
	
var puzz=document.getElementById("puzzlearea").querySelectorAll("div");
for (var t=0; t<puzz.length; t++)
{
	//console.log("leftside: "+leftside+" topside: "+topside);
	puzz[t].className="puzzlepiece";
	puzz[t].style.left=leftside+"px";
	puzz[t].style.top=topside+"px";
	setupImage(puzz[t], [leftside, topside]);
	leftside+=100;
	if(leftside == 400)
	{
		leftside = 0;
		topside += 100;
	}
}
});

