window.addEventListener("DOMContentLoaded",function(){			//Ładowanie skryptu przy załadowaniu elementów DOM
	let buttons = document.querySelectorAll(".day-name");		//Elementy przechowujące wydarzenia w danym dniu
	for(x = 0 ; x < buttons.length ; x++)
	{
		buttons[x].addEventListener('click',showActive,false);		//Pokazywanie dni pod przyciskiem
	}
});

function showActive(){						//Chowanie i rozwijanie dni w których są wydarzenia
let dayNr = this.value;
let list = document.querySelector(".day-" + dayNr);
list.classList.toggle('hidden');
}
