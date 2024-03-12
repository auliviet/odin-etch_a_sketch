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

    event.target.style.backgroundColor = "black";
}

// Create the grid on the screen
createGrid(GRID_SIZE);

// Create event listeners
let cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
        colorOnHover(event);
    });
});