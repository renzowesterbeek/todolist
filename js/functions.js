var saveValue;
var saveArray;

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

var createTodo = function(todoValue){
	// Get input
	var input = todoValue;
	var inputValue = todoValue;
	
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
	}
	
	checkRows();
	
};

var removeTodo = function(itemName){
	var numberRows = document.getElementById("todoList").rows.length;

	var itemIndex = itemName.parentNode.parentNode.rowIndex;
	document.getElementById("todoList").deleteRow(itemIndex);
	
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
	if(saveCookie == 0){
		saveArray = []
	}
	else{
		saveValue = saveCookie.split('=')[1];
		saveArray = saveValue.split(',');
	
		for(cookie in saveArray){
			createTodo(saveArray[cookie]);
		}
	}
}

var saveTodo = function(cookieValue){
	var expires = new Date();
	expires.setFullYear(expires.getFullYear() + 1);
	expireDate = expires.toGMTString();
	
	saveArray.push(cookieValue);
	
	document.cookie = "savedTodos=" + saveArray + "; expires=" + expireDate;
	console.log(saveArray);
};

// Loads todos from cookies
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    loadSave();
  }
}