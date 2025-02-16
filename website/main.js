
two_hundred.onclick = function(){
	two_hundred.style.backgroundColor = "#21cfe7"; 
	var meal_plan = 200
}
var one_sixty = document.getElementById("160")
one_sixty.onclick = function(){ 
	one_sixty.style.backgroundColor = "#21cfe7"; 
	var meal_plan = 160
}
var one_twenty = document.getElementById("120")
one_twenty.onclick = function(){ 
	one_twenty.style.backgroundColor = "#21cfe7"; 
	var meal_plan = 120
}
var one_hundred = document.getElementById("100")
one_hundred.onclick = function(){ 
	one_hundred.style.backgroundColor = "#21cfe7"; 
	var meal_plan = 100
	//test
}

//log meal buttons:

var user_meal_swipes = document.getElementById("mealswipes")
var user_plus_swipes = document.getElementById("plus")

var normal_button = document.getElementById("normal")
normal_button.onclick = function(){ 
	user_meal_swipes --; 
}

var plus_swipes_button = document.getElementById("plus")
plus_swipes_button.onclick = function(){
	user_plus_swipes --; 
}

document.getElementById("normal").innerText = meal_swipes + "meal swipes left"






