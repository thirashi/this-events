//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.
var navE = document.getElementsByClassName('navi');

for (var i=0; i<navE.length; i++){

	naveE[i].addEventListener('click', showInner);

}

var innerE = document.getElementsByClassName('inner');
for(var i=0; i<innerElem.length;i++){
	innerE[i].style.display = "none";
}

function showInner(){
	var about = this.querySelectorAll(".inner")[0];
	if(about.style.display === "none"){
		about.style.display = "block";
	}else{
		about.style.display = "none";
	}
}
*/

var navElem = document.getElementsByClassName("navi");

for(var i=0; i<navElem.length; i++){
	navElem[i].addEventListener("click", showInner);
}

var innerElem = document.getElementsByClassName("inner");
for(var i=0; i<innerElem.length;i++){
	innerElem[i].style.display = "none";
}

function showInner(){
	var about = this.querySelectorAll(".inner")[0];
	if(about.style.display === "none"){
		about.style.display = "block";
	}else{
		about.style.display = "none";
	}
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var nameElem = document.getElementsByClassName("name");

for(var i=0; i<nameElem.length; i++){
	nameElem[i].addEventListener("click", showPara);
}

var innerPara = document.getElementsByClassName("menu");
for(var i=0; i<innerPara.length; i++){
	innerPara[i].style.display = "none";
}

function showPara(){

	var menu= this.querySelectorAll(".menu")[0];
	if(menu.style.display==="none"){
		menu.style.display= "block";
	}else{
		menu.style.display="none";
	}

}



/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/





