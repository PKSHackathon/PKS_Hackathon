let numberOfDays = getNumberOfDays();
console.log(numberOfDays);
window.addEventListener('DOMContentLoaded',function(){
	listenButtons();
	validateDays(numberOfDays);
});

function validateDays(days,reset){
	let day = document.querySelector('#day');
	day.max = days;
	if(reset === true){
		day.value = "1";
	}
}

function validateDate(){
	let date = new Date();
	let year = date.getFullYear();
	let monthForm = document.querySelector('#month');
	let month = monthForm.value;
	let days = daysInMonth(month,year);
	validateDays(days,true);

	
}

function listenButtons(){
	
	let forms = document.getElementsByClassName("val");
	console.log(forms);
	for(x = 0; x < forms.length ; x++){
		forms[x].addEventListener('click',validateForm);
	}
	let month = document.querySelector('#month');
	month.addEventListener('click',validateDate,false);
	
}

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}
function getNumberOfDays() {
	let date = new Date();
let year = date.getFullYear();
let month = date.getMonth()+1;
let day = date.getDate();
let hour = date.getHours();
let min = date.getMinutes();
initializeForm(day,month,year,hour,min);
return daysInMonth(month,year);
}

function initializeForm(day,month,year,hour,min)
{
	let dayForm = document.querySelector('#day');
	let monthForm = document.querySelector('#month');
	let yearForm = document.querySelector('#year');
	let hourForm = document.querySelector('#hours');
	let minForm = document.querySelector('#min');
	dayForm.value = day;
	monthForm.value = month;
	yearForm.value = year;
	if(hour === 0){
		hourForm.value = "00";
	}
	else
	{
		hourForm.value = hour;
	}
	if(min === 0)
	{
		minForm.value = "00";
	}
	else
	{
		minForm.value = min;
	}
}

function validateForm(){
	if(this.value == ""){
		console.log('puste')
	}
}