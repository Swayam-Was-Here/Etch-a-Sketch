document.addEventListener('DOMContentLoaded', () => {
	const container = document.getElementById('container');
	const btnInput = document.getElementById('button');


	function createGrid(size) {
		container.innerHTML = '';

		container.style.setProperty('--grid-cols', size);

		for (let i = 0; i < size * size; i++) {
			const divGrid = document.createElement('div');
			divGrid.className = 'smallSquare';

			divGrid.addEventListener('mouseover', () => {
				const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
				divGrid.style.backgroundColor = randomColor;
			});

			container.appendChild(divGrid);
		}
	}

	btnInput.addEventListener('click', () => {
		const userInput = prompt('Enter the grid dimension (e.g., 16 for a 16x16 grid):');

		if (userInput === null) {
			return;
		}

		const number = parseInt(userInput.trim());

		if (isNaN(number) || number <= 0 || number > 100) {
			alert('Please enter a valid number between 1 and 100!');
			return;
		}

		createGrid(number);
	});

	createGrid(16);
});