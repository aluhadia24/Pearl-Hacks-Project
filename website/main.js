
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

/*var user_meal_swipes = document.getElementById("mealswipes").value
var user_plus_swipes = document.getElementById("plusswipes").value

var normal_button = document.getElementById("mealswipe_button")
normal_button.onclick = function(){ 
	user_meal_swipes --; 
}

var plus_swipes_button = document.getElementById("plus_button")
plus_swipes_button.onclick = function(){
	user_plus_swipes --; 
}

document.getElementById("remainmeals").innerText = user_meal_swipes + "meal swipes left"; */

let meal_swipe_count = document.getElementById("mealswipes")
let plus_swipe_count = document.getElementById("plusswipes")

function displayMS() {
	document.getElementById("remainmeals").innerText = meal_swipe_count + "swipes left"
}

displayMS()

/*function decreaseMealCount(){
    likes += 1; 
    console.log(likes);
    document.getElementById("like-count").innerText = likes + " likes"
}

function decreasePlusCount(){
    comments += 1; 
    console.log(comments);
    document.getElementById("comment-count").innerText = comments + " comments"
}
document.getElementById("Like").addEventListener("click", increaseLikes); 
document.getElementById("Comment").addEventListener("click", increaseComments); */






