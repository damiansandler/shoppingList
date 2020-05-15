var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var itemsList  = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("deleteButton");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	itemsList.appendChild(li);
	input.value = "";
}

function createListElement2(){
	var listItem = document.createElement("li");
	var divContainer = document.createElement("div");
	var spanText = document.createElement("span");
	var button = document.createElement("button");
	

	//Configure the button
	button.setAttribute("class","deleteButton");
	button.appendChild(document.createTextNode("delete"));
	//Configure the span container
	spanText.appendChild(document.createTextNode(input.value));

	//Configure the div
	divContainer.setAttribute("class","listItem");

	divContainer.appendChild(spanText);
	divContainer.appendChild(button);
	listItem.appendChild(divContainer);
	itemsList.appendChild(listItem);
	input.value = "";
}

function deleteListElement(element){
	var button = element.target;
	var itemToDelete = button.parentElement.parentElement;


	if(element.target && element.target.nodeName === "BUTTON" && element.target.className === "deleteButton"){
		//console.log("deleteee");
		itemToDelete.parentElement.removeChild(itemToDelete);
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement2();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement2();
	}
}

function crossListItem(element){
	var listItem = element.target;
	var divItem = listItem.children[0];

	if(element.target && element.target.nodeName === "SPAN") {
		//console.log(element.target);
		//console.log(element.target.nodeName);
		//console.log(element.target.innerText + " was clicked");
		element.target.classList.toggle("done");
	}

}

//Event Listeners
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
itemsList.addEventListener("click",crossListItem);
itemsList.addEventListener("click",deleteListElement);