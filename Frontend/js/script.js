window.addEventListener('DOMContentLoaded',function(){
	listenButtons();

});



function listenButtons(){
	let buttons = document.querySelectorAll(".day-name");
	for(x = 0 ; x < buttons.length ; x++)
	{
		buttons[x].addEventListener('click',showActiv,false);		//Pokazywanie dni pod przyciskiem
	}


}


function showActiv(){

}