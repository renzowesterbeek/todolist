var addTodo = function(){
	// Get input
	var input = document.getElementById("input");
	var inputValue = input.value;

	// Find table
	var table = document.getElementById("todoList");

	if(inputValue.length < 1){
		console.log("Input is empty...");
	}
	else{
		// Create new row
		var row = table.insertRow(-1);

		// Insert cells
		var todoName = row.insertCell(0);
		var checkBox = row.insertCell(1);

		// Add text and id to cells
		todoName.innerHTML = inputValue;
		todoName.id = "todoName";
		todoName.className = "itemCell";

		checkBox.innerHTML = "<button class='checkBox' onclick='removeTodo(this)'>X</button>";
		checkBox.className = "checkBoxCell";

		// Clears input field
		input.value = "";
		input.focus();
	}

	checkRows();
	saveTodo(inputValue);

};

var removeTodo = function(r){
	var numberRows = document.getElementById("todoList").rows.length;

	var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("todoList").deleteRow(i);

	checkRows();
};

var checkRows = function(){
	// Get items
	var notSpan = document.getElementById("notification");
	var numberRows = document.getElementById("todoList").rows.length;

	if(numberRows < 1){
		notSpan.innerHTML = "You're finished for today!";
	}else if(numberRows > 0){
		notSpan.innerHTML = "";
	}
};

var loadSave = function(){
	saveCookie = document.cookie;
	saveValue = saveCookie.split('=')[1];
	saveArray = saveValue.split(',');

	console.log("Save file loaded: " + saveArray);
}

var saveTodo = function(cookieValue){
	var expires = new Date();
	expires.setFullYear(expires.getFullYear() + 1);
	expireDate = expires.toGMTString();
	saveArray.push(cookieValue)

	document.cookie = "savedTodos=" + saveArray + "; expires=" + expireDate;
	console.log("Save file updated: " + document.cookie);
};

loadSave();