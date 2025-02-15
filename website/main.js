var two_hundred = document.getElementById("200")
var pig_emoji = "🐷"
two_hundred.onclick = function(){
	if(!two_hundred.innerHTML.includes(pig_emoji)){
		two_hundred.innerHTML = pig.innerHTML + pig_emoji
	} else {
		pig.innerHTML = "pig"
	}
}
