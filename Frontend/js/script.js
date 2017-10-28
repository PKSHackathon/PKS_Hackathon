window.addEventListener('DOMContentLoaded',function(){
	listenButtons();

});



function listenButtons(){
	let buttons = document.querySelectorAll(".day-name");
	for(x = 0 ; x < buttons.length ; x++)
	{
		buttons[x].addEventListener('click',showActiv,false);		//Pokazywanie dni pod przyciskiem
	}
	let send = document.querySelector('#send');
	send.addEventListener('click',sendData,false);

}


function showActiv(){
let dayNr = this.value;
let list = document.querySelector(".day-" + dayNr);
list.classList.toggle('hidden');
}

function sendData(){
let title = document.querySelector('#title').value;
let place = document.querySelector('#place').value;
let day = document.querySelector('#day').value;
let month = document.querySelector('#month').value;
let year = document.querySelector('#year').value;
let hour = document.querySelector('#hours').value;
let min = document.querySelector('#min').value;
let link = document.querySelector('#link').value;
let tags = document.querySelector('#tags').value;
let description = document.querySelector('#description');
let add = document.querySelector('#add').value;







}