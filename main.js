let dimension = 100;
for (let i = 0; i < dimension; i++) {
    // make row 
    let row = document.createElement('div');
    row.id = 'row' + i;
    let rowContent = document.createTextNode('');
    row.appendChild(rowContent);
    //create a break 
    let br = document.createElement('p');
    let brContent = document.createTextNode('');
    br.appendChild(brContent);

    let parentDiv = document.getElementById('board');
    parentDiv.appendChild(row);

    for (let j = 0; j < dimension; j++) {   
        let square = document.createElement('div');
        square.classList.add('pixel');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'});
        let divContent = document.createTextNode('');
        square.appendChild(divContent);

        let parentDiv = document.getElementById('row' + i);
        parentDiv.appendChild(square);
    }
}    