current_dom = [];

function erase_current_dom() {
	console.log(current_dom);
	for (var i = 0; i < current_dom.length; i++) {
		current_dom[i].remove();
	}
	console.log(current_dom);
}

function load_chat() {
	erase_current_dom();
}

function load_budget() {
	erase_current_dom();
	current_dom.push(document.createElement("p"));
	current_dom[0].innerHTML = "La patrouille a actuellement: \n" + "100€";
	current_dom[0].className = "budget-marker";
	document.body.appendChild(current_dom[0]);
}

function load_planning() {
	erase_current_dom();
	current_dom.push(document.createElement("p"));
	current_dom[0].innerHTML = "Week end\n9-10 mars";
	current_dom[0].className = "activity-marker";
	document.body.appendChild(current_dom[0]);
}