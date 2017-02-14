/*
* Application: JavaScript Calculator
* Programmer: Ryan Jones
* Version: 02/13/2017
*/

var userNum1 = 0;
var userNum2 = 0;
var currentTotal = 0;
var strOne = "";



/*** Operator Button logic ***/

document.getElementById("btnPlus").onclick=function() {
  // sets current value of text field to textField
  var textField = document.getElementById("mathArea");
  // changes textField to an int
  var uTemp = parseInt(textField.textContent);
  // then we need to save this number globally
  userNum1 += uTemp;
  // add the number back in with a plus sign
  // strOne holds the entire string
  strOne = document.getElementById("mathArea").innerHTML = userNum1 + " + ";
}

document.getElementById("btnEquals").onclick=function() {
  // set the second part of the string to textField
  var textField = document.getElementById("mathArea");
  var uTemp = textField.textContent;
  alert(uTemp);
}

// I want to store the second number somehow so I can then save it globally
// and use userNum1 and userNum2 to give an answer..

// wipe the entry then


















/*** Numbered Button Logic ***/
document.getElementById("btnOne").onclick=function() {
  document.getElementById("mathArea").innerHTML = document.getElementById("mathArea").innerHTML + 0;
}

document.getElementById("btnOne").onclick=function() {
  document.getElementById("mathArea").innerHTML = document.getElementById("mathArea").innerHTML + 1;
}

document.getElementById("btnTwo").onclick=function() {
  document.getElementById("mathArea").innerHTML = document.getElementById("mathArea").innerHTML + 2;
}

document.getElementById("btnThree").onclick=function() {
  document.getElementById("mathArea").innerHTML = document.getElementById("mathArea").innerHTML + 3;
}

document.getElementById("btnFour").onclick=function() {
  document.getElementById("mathArea").innerHTML = document.getElementById("mathArea").innerHTML + 4;
}

document.getElementById("btnFive").onclick=function() {
  document.getElementById("mathArea").innerHTML = document.getElementById("mathArea").innerHTML + 5;
}

document.getElementById("btnSix").onclick=function() {
  document.getElementById("mathArea").innerHTML = document.getElementById("mathArea").innerHTML + 6;
}

document.getElementById("btnSeven").onclick=function() {
  document.getElementById("mathArea").innerHTML = document.getElementById("mathArea").innerHTML + 7;
}

document.getElementById("btnEight").onclick=function() {
  document.getElementById("mathArea").innerHTML = document.getElementById("mathArea").innerHTML + 8;
}

document.getElementById("btnNine").onclick=function() {
  document.getElementById("mathArea").innerHTML = document.getElementById("mathArea").innerHTML + 9;
}
