let numberOfDays = getNumberOfDays();			//Zapoczątkowanie wartości w formie
window.addEventListener('DOMContentLoaded',function(){			//Załadowanie skryptu po załadowaniu elementów DOM
	listenButtons();			//Dodanie event listenerów do przycisków
	validateDays(numberOfDays);		//Ustawienie maksymalnego dnia w "pokrętle" do wybierania dnia wydarzenia adekwatnie do aktualnego miesiąca
});

function validateDays(days,reset){			
	let day = document.querySelector('#day'); // ^^
	day.max = days;
	if(reset === true){
		day.value = "1";		//Ustawienie wartości dni na 1 aby zapobiec pozostaniu z poprzedniego miesiąca np. 31, gdy miesiąc ma 30 dni.
	}
}

function validateDate(){
	let date = new Date();		//Sprawdzanie aktualnego roku i miesiąca
	let year = date.getFullYear();
	let monthForm = document.querySelector('#month');
	let month = monthForm.value;
	let days = daysInMonth(month,year);		//Zwraca ilość dni w miesiącu
	validateDays(days,true);			//Ustawienie maksymalnego dnia w "pokrętle" do wybierania dnia wydarzenia adekwatnie do aktualnego miesiąca

	
}

function listenButtons(){			//Dodanie event listenerów do przycisków
	
	let forms = document.getElementsByClassName("val");
	let month = document.querySelector('#month');			//Przy kliknięciu aktualizacja miesiąca i jego  liczby dni
	month.addEventListener('click',validateDate,false);
	
}

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();	//Zwraca liczbę dni w miesiącu danego roku
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

function initializeForm(day,month,year,hour,min)			//Tworzenie forma, nadawanie domyślnych wartości.
{
	let dayForm = document.querySelector('#day');
	let monthForm = document.querySelector('#month');
	let yearForm = document.querySelector('#year');
	let hourForm = document.querySelector('#hours');
	let minForm = document.querySelector('#min');
	dayForm.value = day;
	monthForm.value = month;
	yearForm.value = year;
	if(hour === 0){					//Jeżeli jest 12 w nocy godzina jest ustawiana na 00, aby ładniej wyglądało
		hourForm.value = "00";
	}
	else
	{
		hourForm.value = hour;		//Ustawianie wartości godziny na aktualną godzine
	}
	if(min === 0)
	{
		minForm.value = "00";	//To samo co z godziną
	}
	else
	{
		minForm.value = min;	//Ustawianie wartości minuty na aktualną minutę
	}
}

