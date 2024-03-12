const GRID_SIZE = 100;

function createCanvas() {
// Create the playable area for the game based on the size of the window

    // Get the size of the window
    let min = document.documentElement.clientHeight;
    let max = document.documentElement.clientWidth;

    // Define the minimum playable area
    if (min > max) {
        min = document.documentElement.clientWidth;
    }

    // Apply styles to the HTML
    document.querySelector(".container").style.height = `${min - 100}px`;
    document.querySelector(".container").style.width = `${min - 100}px`;

}


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

    // If the cell is empty, add a color to it
    if (!event.target.style.backgroundColor) {
        // Select a random RGB value
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
    
        // Update the background color of the cell
        event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        event.target.style.opacity = ".1";
    }

    // Else, increase the opacity by 10%
    else {
        let opacity = +event.target.style.opacity;
        opacity += .1;
        event.target.style.opacity = opacity;
    }
}

// Create the grid on the screen
createCanvas();
createGrid(GRID_SIZE);

// Create event listeners for all cells on the page
let cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
        colorOnHover(event);
    });
});