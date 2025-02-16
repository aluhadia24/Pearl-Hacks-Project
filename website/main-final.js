console.log("Loaded main.js")

window.onload = function (){
	console.log("Page loaded!")

	let meal_swipe = localStorage.getItem("meal_swipe_count")
	let plus_count= localStorage.getItem("plus_swipe_count")
	let daily_meals = localStorage.getItem("daily_meals_count")
	
	let days = meal_swipe / daily_meals

	// added the three lines below
	meal_swipe = meal_swipe ? parseInt(meal_swipe) : 0;
    plus_count = plus_count ? parseInt(plus_count) : 0;
    daily_meals = daily_meals ? parseInt(daily_meals) : 1;

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
		document.getElementById("daysleft").innerText = "You can eat " + daily_meals + " meals for " + Math.floor(days) + " days"

	} else {
		document.getElementById("daysleft").innerText = "please set daily meal amt"
	}


}

/* OUR ORGINAL UPDATEVALUES()

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
} */

// editted function
function updateValues() {
    console.log("started updateValues");
    
    let meal_swipe_count = parseInt(document.getElementById("mealswipes").value)
	localStorage.setItem("meal_swipe_count", meal_swipe_count);
	window.location.href = "dashboard-final.html"


    let plus_swipe_count = parseInt(document.getElementById("plusswipes").value)
	localStorage.setItem("plus_swipe_count", plus_swipe_count);
	window.location.href = "dashboard-final.html"


    let daily_meals_count = parseInt(document.getElementById("dailymeals").value)
    localStorage.setItem("daily_meals_count", daily_meals_count);
	window.location.href = "dashboard-final.html"


    window.location.href = "dashboard-final.html";
}

/* OUR INITIAL FUNCTIONS FOR BUTTONS

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
} */

document.getElementById("mealswipe_button").addEventListener("click", function () {
		let meal_swipe = parseInt(localStorage.getItem("meal_swipe_count")) || 0;
		if (meal_swipe > 0) {
			meal_swipe--;
			localStorage.setItem("meal_swipe_count", meal_swipe);
			document.getElementById("remainmeals").innerText = meal_swipe + " meal swipes";
		}
});

document.getElementById("plus_button").addEventListener("click", function () {
    let plus_count = parseInt(localStorage.getItem("plus_swipe_count")) || 0;
    if (plus_count > 0) {
        plus_count--;
        localStorage.setItem("plus_swipe_count", plus_count);
        document.getElementById("remainplus").innerText = plus_count + " plus swipes";
		
	let meal_swipe = parseInt(localStorage.getItem("meal_swipe_count")) || 0;
	if (meal_swipe > 0) {
		meal_swipe--;
		localStorage.setItem("meal_swipe_count", meal_swipe);
		document.getElementById("remainmeals").innerText = meal_swipe + " meal swipes";
			}
	};
	
    }
);