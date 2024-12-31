//your JS code here. If required.
const table = document.getElementById('table').getElementsByTagName('tbody')[0];
const btn = document.getElementById('btn');

btn.addEventListener('click',function() {
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const isbn = document.getElementById('isbn').value;
	if(title && author && isbn){
		const newRow = table.insertRow(0);
		
		const cell1 = newRow.insertCell(0);
		const cell2 = newRow.insertCell(1);
		const cell3 = newRow.insertCell(2);
		
		cell1.textContent = title;
		cell2.textContent = author;
		cell3.textContent = isbn;

		document.getElementById('title').value = '';
		document.getElementById('author').value = '';
		document.getElementById('isbn').value = '';
	}
})