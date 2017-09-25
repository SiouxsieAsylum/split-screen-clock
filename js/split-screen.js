

document.addEventListener('DOMContentLoaded', function(){
const url = "https://api.sunrise-sunset.org/json?lat=40.4328&lng=73.5659&formatted=0";
const p = document.getElementById("testP");

var dayInSeconds = 86400;
var dayOffSet = 0;
var counter = 0;
var res;

var daylight;
var nighttime;

let wrapper = document.getElementById('wrapper');
let topLayer = wrapper.querySelector(".top");
let bottomLayer = wrapper.querySelector(".bottom");
let skew = 0;
let delta = 0;


Date.prototype.stdTimezoneOffset = function() {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

Date.prototype.dst = function() {
    return this.getTimezoneOffset() < this.stdTimezoneOffset();
}


fetch(url)
	.then((resp) => resp.json())

	.then(function(data){
		res = data.results;
		daylight = res.day_length;
		nighttime = dayInSeconds - daylight;
		
		// how to get what percent of the day has already passed?
		// set daysOffSet to the percentage of the passed day of the innerwidth
		//gotta toggle btwn day and night and get those respective percentages 


			setInterval(keepUpdating, 1000);


			function keepUpdating(){
			var dayPercent = daylight/dayInSeconds;
			var dayIncrement = dayPercent * window.innerWidth;
			counter = counter + dayOffSet;
			if (counter <= daylight){
				counter += dayIncrement
				// counter += 1000;
				delta = (window.innerWidth + counter) * 0.5;
				topLayer.style.width = skew + delta + 'px';
				console.log(topLayer.style.width);
				// console.log(window.innerWidth);
			}
		
		}
		// })
		

		

	})

	.catch(function(error){
		console.log(error);
	})


})