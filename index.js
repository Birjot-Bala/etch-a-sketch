const container = document.querySelector('#container');
const clearButton = document.querySelector('#clear')
const style = getComputedStyle(container);

clearButton.addEventListener('click', () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let sideElements = prompt('How many squares per side? Limit: 100 ', "16");
    sideElements = parseInt(sideElements);
    if (sideElements > 100) {
        sideElements = 100;
    }
    let clearGrid = new Grid(sideElements, style.height);
    clearGrid.showGrid(container);
});

let newGrid = new Grid(16, style.height);
newGrid.showGrid(container);
