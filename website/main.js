console.log("Loaded main.js")
window.onload = function (){
	console.log("Page loaded!")
	let meal_swipe = localStorage.getItem("meal_swipe_count")
	let plus_count= localStorage.getItem("plus_swipe_count")
	let daily_meals = localStorage.getItem("daily_meals_count")
	let days = meal_swipe / daily_meals

	if(meal_swipe != null){ 
		console.log("we're in the IF part")
		document.getElementById("remainmeals").innerText = meal_swipe + " meal swipes"
	} else {
		console.log("we're in the ELSE part")
		document.getElementById("remainmeals").innerText = "please set meal swipe amount"
	}
	if(plus_count != null){
		document.getElementById("remainplus").innerText = plus_count + " plus swipes"
		}
	else { 
		document.getElementById("remainplus").innerText = "please set plus swipe amount"
	}
	if(daily_meals != null){ 
		document.getElementById("daysleft").innerText = "You can eat " + daily_meals + " meals for " + days + " days"

	} else {
		document.getElementById("daysleft").innerText = "please set daily meal amt"
	}


}

function updateValues() {
	console.log("started updateValues")
	let meal_swipe_count = document.getElementById("mealswipes").value
	console.log(meal_swipe_count)
	localStorage.setItem("meal_swipe_count",meal_swipe_count ) // this saves it "in memory"
	window.location.href = "dashboard.html"

	let plus_swipe_count = document.getElementById("plusswipes").value
	localStorage.setItem("plus_swipe_count", plus_swipe_count) 
	window.location.href = "dashboard.html"

	let daily_meals_count = document.getElementById("dailymeals").value
	console.log(daily_meals_count)
	localStorage.setItem("daily_meals_count", daily_meals_count)
	window.location.href = "dashboard.html"
}


//log meal buttons:



var meal_button = document.getElementById("mealswipe_button")
meal_button.onclick = function(){ 
	meal_swipe --; 
}

var plus_swipes_button = document.getElementById("plus_button")
plus_swipes_button.onclick = function(){
	if (plus_count > 0){
		 
	plus_count --; 
	meal_swipe --; 
	}
}

// document.getElementById("mealswipe_button").addEventListener("click", me); 
// document.getElementById("plus_button").addEventListener("click", increaseComments); */





//displayMS()

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






