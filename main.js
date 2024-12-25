for (let i = 0; i < 16; i++) {

    const square = document.createElement('div');
    square.classList.add('pixel');
    const divContent = document.createTextNode('');
    square.appendChild(divContent);
    const parentDiv = document.getElementById('board');
    parentDiv.appendChild(square);
}