const container = document.querySelector('#container');

for (i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    })
    div.classList.add('div');
    container.appendChild(div);
}

