//your JS code here. If required.
const table = document.getElementById('table').getElementsByTagName('tbody')[0];
const btn = document.getElementById('submit');

btn.addEventListener('click',function() {
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const isbn = document.getElementById('isbn').value;
	const btn1 = document.createElement('button');
	btn1.textContent = 'X';
	btn1.classList.add('delete');
	if(title && author && isbn){
		const newRow = table.insertRow();
		
		const cell1 = newRow.insertCell(0);
		const cell2 = newRow.insertCell(1);
		const cell3 = newRow.insertCell(2);
		const cell4 = newRow.insertCell(3);
		
		cell1.textContent = title;
		cell2.textContent = author;
		cell3.textContent = isbn;
		cell4.appendChild(btn1);

		document.getElementById('title').value = '';
		document.getElementById('author').value = '';
		document.getElementById('isbn').value = '';
	}
	btn1.addEventListener('click',function() {
	const row = this.parentNode.parentNode;
	row.parentNode.removeChild(row);
	})
})
