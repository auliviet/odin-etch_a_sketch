const GRID_SIZE = 16;

function createGrid(gridSize) {
// Create a grid on the HTML page of X by X cells, X being the gridSize
let container = document.querySelector(".container");

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < gridSize; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
        
        // Add each row to the container
        container.appendChild(row);
    }
}


function colorOnHover(event) {
// Change the background color of a cell when hovered over

    // Select a random RGB value
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
 
    // Update the background color of the cell
    event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Create the grid on the screen
createGrid(GRID_SIZE);

// Create event listeners for all cells on the page
let cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
        colorOnHover(event);
    });
});