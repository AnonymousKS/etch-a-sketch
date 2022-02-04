const container = document.getElementById("grid-container");
const resetbtn = document.getElementById('reset');


function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', 
        e => e.target.classList.add('my-color-class')
        )
        container.appendChild(cell).className = "grid-item";
    }
}

function resetGrid() {
    let x = prompt('Enter the number of boxes you want.', 16);
    if(x < 100) {
        makeRows(x,x);
    }else {
        do {
            x = prompt("Invalid size! Try Again!");
        }
        while(x > 100);
        makeRows(x,x);
    }
}

resetbtn.addEventListener('click', () => location.reload());

resetGrid();