var current_dom = [];

function erase_current_dom() {
  console.log(current_dom)
	for (var i = 0; i < current_dom.length; i++) {
    console.log(current_dom[i])
		document.getElementById(current_dom[i]).remove();
	}
  current_dom = []
  console.log(current_dom)
}

function load_chat() {
	erase_current_dom();
  var placeholder = document.createElement("p")
  placeholder.setAttribute("id", "placeholder")
  placeholder.innerHTML = "not implemented yet"
  document.body.appendChild(placeholder)
  current_dom[0] = "placeholder"
}

function load_budget() {
	erase_current_dom();
  var wrapper = document.createElement("div");
  wrapper.setAttribute("class", "rotate-center")
  wrapper.setAttribute("id", "wrapper-div");
  
  var budget_marker_background = document.createElement("div");
	budget_marker_background.setAttribute("id", "budget-marker-background");
  
  
	var budget_marker = document.createElement("p");
	budget_marker.innerHTML = "100€";
  budget_marker.setAttribute("id", "budget-marker");
 	document.body.appendChild(wrapper);
  budget_marker_background.appendChild(budget_marker);
  wrapper.appendChild(budget_marker_background);
  
  current_dom[0] = "budget-marker";
  current_dom[1] = "budget-marker-background";
  current_dom[2] = "wrapper-div";
}

function load_planning() {
	erase_current_dom();
  var placeholder = document.createElement("p")
  placeholder.setAttribute("id", "placeholder")
  placeholder.innerHTML = "not implemented yet"
  document.body.appendChild(placeholder)
  current_dom[0] = "placeholder"
}
