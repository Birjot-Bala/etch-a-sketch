class Grid {
    constructor(sideElements, sideLength) {
        this.sideElements = sideElements;
        this.sideLength = parseInt(sideLength.slice(0, -2));
    }

    calcElementSideLength() {
        return this.sideLength / this.sideElements;
    }

    showGrid(container) {
        // Edit container display
        container.style.gridTemplateRows = `repeat(${this.sideElements}, ${this.calcElementSideLength()}px)`;
        container.style.gridTemplateColumns = `repeat(${this.sideElements}, ${this.calcElementSideLength()}px)`;
        // Create grid and display
        for (let i = 0; i < this.sideElements**2; i++) {
            let div = document.createElement('div');
            div.addEventListener('mouseover', () => {
                window.requestAnimationFrame((time) => {
                    div.className = 'cell changing';
                })
            });
            div.classList.add('cell');
            container.appendChild(div);
        }
    }
}