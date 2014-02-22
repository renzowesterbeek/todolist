var addTodo = function(userInput, mode){
	// Get input
	if(mode === "system"){
		var input = userInput;
		var inputValue = input;
	}
	else{
		var input = document.getElementById("input");
		var inputValue = input.value;
	}
	
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
		inputValue = "";
		input.focus();
	}
	
	checkRows();
	
};

var removeTodo = function(r){
	var numberRows = document.getElementById("todoList").rows.length;

	var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("todoList").deleteRow(i);
	
	checkRows();
}

var checkRows = function(){
	// Get items
	var notSpan = document.getElementById("notification");
	var numberRows = document.getElementById("todoList").rows.length;

	if(numberRows < 1){
		notSpan.innerHTML = "You're finished for today!";
	}else if(numberRows > 0){
		notSpan.innerHTML = "";
	}
}