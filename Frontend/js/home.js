window.addEventListener("DOMContentLoaded",function(){
	let buttons = document.querySelectorAll(".day-name");
	for(x = 0 ; x < buttons.length ; x++)
	{
		buttons[x].addEventListener('click',showActive,false);		//Pokazywanie dni pod przyciskiem
	}
});

function showActive(){
let dayNr = this.value;
let list = document.querySelector(".day-" + dayNr);
list.classList.toggle('hidden');
}
