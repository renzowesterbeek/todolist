var addTodo = function(){
	// Get input
	var input = document.getElementById("input");
	
	// Find table
	var table = document.getElementById("todoList");

	// Create new row
	var row = table.insertRow(-1);

	// Insert cells
	var todoName = row.insertCell(0);
	var checkBox = row.insertCell(1);

	// Add text and id to cells
	todoName.innerHTML = input.value;
	todoName.id = "todoName";
	
	checkBox.innerHTML = "<button class='checkBox' onclick='removeTodo(this)'>X</button>";
	
};

var removeTodo = function(r){
	var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("todoList").deleteRow(i);
}