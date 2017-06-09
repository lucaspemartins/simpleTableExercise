var userData = ['nome'];

start();

function start() {
	var buttonAdd = document.getElementById('singlebutton');
	buttonAdd.onclick = function() {
			addNewUser();
            clearFields();
            focusOnFirstInputText();
	};
}

function focusOnFirstInputText() {
	var i = 0;
	var max = userData.length;
	
	for (; i < max; i++) {
		if(userData[i] == "nome"){
            var input = document.getElementById(userData[i]);
            input.focus();
        }
	}
}

function clearFields() {
	var i = 0;
	var max = userData.length;
	
	for (; i < max; i++) {
		var input = document.getElementById(userData[i]);
		input.value = "";
	}
}

function addNewUser() {
	var tBody = getTBody();
	var newLine = createNewLine(tBody);
	addUserFields(newLine);
}

function addUserFields(newLine) {
	var i = 0;
	var max = userData.length;
	
	for (; i < max; i++) {
		var input = document.getElementById(userData[i]);
		var cell = createCell(newLine);
		createTextNode(cell, input.value);
	}
}

function createTextNode(cell, content) {
	var textNode = document.createTextNode(content);
	cell.appendChild(textNode);
}

function createCell(newLine) {
	var cell = document.createElement('td');
	newLine.appendChild(cell);
	
	return cell;
}

function createNewLine(tBody) {
	var tr = document.createElement('tr');
	tBody.appendChild(tr);
	
	return tr;
}

function getTBody() {
	var table = getTable();
	return table.tBodies[0];
}

function getTable() {
	var tables = document.getElementsByTagName('table');
	return tables[0];
}