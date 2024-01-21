// Execute in strict mode to prevent some common mistakes
"use strict";

// Set the 'To' dropdown box to initialise as not expanded
var expanded = false;

// Toggle the 'To' dropdown checkbox menu 
function showCheckboxes() {
var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

// Hide the checkbox menu (to be used if a user clicks in another input box)
function hideCheckboxes() {
var checkboxes = document.getElementById("checkboxes");
  if (expanded) {
    checkboxes.style.display = "none";
    expanded = false;
  } 
}

// Collate and display the groups to send the announcement to
function sendingTo() {
	const options = ["all", "group1", "group2", "group3", "group4", 
	"group5", "group6",  "group7", "group8"];
	var text = "Sending to: "
	for (let i = 0; i < options.length; i++) {
		var checkBox = document.getElementById(options[i]);
  		if (checkBox.checked == true){
    	text = text + checkBox.value + ", ";
  		}	
  	}
  	text = text.substring(0, text.length - 2);
  	document.getElementById("recipient").innerHTML = text;
}

