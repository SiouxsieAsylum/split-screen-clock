
//time as formatted by the timeFormat()
var hourString; 
var hoursToConvert; 
var minuteString;
var secondString;

//booleans
var militaryTimeSet = false;
// var timeSetManually = false;
// var alarmed = false;

//arrays to hold the user input time & alarmtime
// var inputTime = [null,null];
// var alarmTime = [null,null];

//get elements by ID / classname
var hourDisplay = document.getElementsByClassName("displayHours");
var minuteDisplay = document.getElementsByClassName("displayMinutes")
var secondDisplay = document.getElementsByClassName("displaySeconds")
var body = document.getElementsByTagName("body")[0];
// var dismissButton = document.getElementById('dismiss');
// var snoozeButton = document.getElementById('snooze');
// var music = document.getElementById("alarm");



//saved numbers
// var inputHour = 0;
// var inputMinute = 0;


//displays time
function setDate(){
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	hoursToConvert = timeFormat(hours);
	hourString = hourFormat();
	minuteString = timeFormat(minutes);
	secondString = timeFormat(seconds);

	return date;
}

// function setTimeFunction(){
// 	var now = new Date();

// 	inputHour ? now.setHours(inputHour) : 
// 	now.getHours();
// 	inputMinute ? now.setMinutes(inputMinute) : 
// 	now.getMinutes();
	
// 	hourString = timeFormat(now.getHours());
// 	minuteString = timeFormat(now.getMinutes());

// 	timeSetManually = true;

// }

//displays the time at all
function timePrint(){
	let date = setDate();

	// if (timeSetManually) {
	// 		setTimeFunction();
	// 	} else {
	
		// }

	militaryTimeSet ?  hourString = hoursToConvert : hourString;
	console.log(militaryTimeSet);
	for (var hour in hourDisplay){
		// console.log("inloop");
		hourDisplay[hour].innerHTML =  hourString;
		minuteDisplay[hour].innerHTML =  minuteString;
		secondDisplay[hour].innerHTML = secondString;
	}
		


	//will check whether to launch alarm every iteration

	// blareAlarm();
	// alarmed ? setTimeout(buttonJump, 500) : alarmed;
	
	var clockTicking = setTimeout(timePrint, 500);

}



//formats time
function timeFormat(num) {
	if (num < 10) {
		num = "0" + num; 
	} else {
		num = num.toString();
	}
	return num;
}

//change from military 
//doesn't work for 12am for some reason


function hourFormat() {
	let hour = parseInt(hoursToConvert);
	let militaryHourString;

	if (parseInt(hoursToConvert) > 12) {
		militaryHourString = timeFormat(hour - 12);
	} else if (parseInt(hourString) === 0){
		militaryHourString = "12";
	}

	return militaryHourString;

}

function militaryTime(){
	militaryTimeSet ?  militaryTimeSet = false : militaryTimeSet = true;
}



//increments time up
//display numbers while incrementing
// function hourUpFunction(){

// 	if (inputHour == 23){
// 		inputHour = 0;
// 	} else {
// 		inputHour++;
// 	}
	
// 	inputTime.splice(0, 1, timeFormat(inputHour));

// 	document.getElementById("displayHours").innerHTML = timeFormat(inputHour);
// }

// function minuteUpFunction(){
// 	if (inputMinute == 59){
// 		inputMinute = 0;
// 	} else {
// 		inputMinute++;
// 	}

// 	inputTime.splice(1, 1, timeFormat(inputMinute));
// 	document.getElementById("displayMinutes").innerHTML = timeFormat(inputMinute);
// }

// //set time for alarm;
// function hourDownFunction(){
// 	if (inputHour == 0){
// 		inputHour = 23;
// 	} else {
// 		inputHour--;
// 	}
// 	inputTime.splice(0, 1, timeFormat(inputHour));
// 	document.getElementById("displayHours").innerHTML = timeFormat(inputHour);
// }

// function minuteDownFunction(){
// 	if (inputMinute == 0){
// 		inputMinute = 59;
// 	} else {
// 		inputMinute--;
// 	}
// 	inputTime.splice(1, 1, timeFormat(inputMinute));
// 	document.getElementById("displayMinutes").innerHTML = timeFormat(inputMinute);
// }


// function setAlarmFunction(){
// 	//add the hour chosen by user to index 0 of the array that sets the alarm time
// 	alarmTime.splice(0,1,inputTime[0]);
// 	//add the minutes chosen by user to index 1 of the array that sets the alarm time
// 	alarmTime.splice(1,1,inputTime[1]);

// 	//resets the inputs so they can start from base 0 
// 	inputTime.fill(null);
// 	inputHour = 0;
// 	inputMinute = 0;

// }

// //resets all variables to resting state
// function reset(){
// 	inputTime.fill(null);
// 	alarmTime.fill(null);
// 	inputHour = 0;
// 	inputMinute = 0;
// 	timeSetManually = false;
// 	snooze = true;
// }

// //deploys alarm and clears time so it won't deploy again
// function blareAlarm(){
// 	//if alarm array's value at index 0 is equal to the current hour and alarm array's value at index 1 is equal to the current minute
// 	if (alarmTime[0] === hourString && alarmTime[1] === minuteString){

// 		body.style.animationName = "color";
// 		body.style.animationDuration = "5s";
// 		body.style.animationIterationCount = "infinite";
// 		body.style.animationPlayState = "running";
// 		body.style.transition = "2s"

		
// 		music.play();
// 		music.loop = true;
// 		alarmed = true;
// 	}
// }


// function shutUp(){
// 	music.muted = true;
// 	body.style.animationPlayState = "paused";
// 	setTimeout(function(){
// 		body.style.animationPlayState = "running";
// 		music.muted = false;
// 		music.currentTime = 0;
// 	}, 300000);
// }

// function dismissAlarm(){
// 	music.muted = true;
// 	body.style.animationPlayState = "paused";
// }

// function buttonJump(){
	
// 	let min = Math.ceil(0);
// 	let max = Math.floor(1000);

// 	for (let i = 1; i <= 2; i++) {
// 		let rand = Math.floor(Math.random() * (max - min)) + min;
// 		dismissButton.style.top = rand + "px";
// 		console.log(rand);
// 		dismissButton.style.left = rand + "px";
// 	}

// 	for (let i = 1; i <= 2; i++) {
// 		let rand = Math.floor(Math.random() * (max - min)) + min;
// 		snoozeButton.style.top = rand + "px";
// 		snoozeButton.style.left = rand + "px"
// 	}

// }