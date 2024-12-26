function makeBoard(dimension) {
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
                square.style.backgroundColor = penColor});
            let divContent = document.createTextNode('');
            square.appendChild(divContent);

            let parentDiv = document.getElementById('row' + i);
            parentDiv.appendChild(square);
        }
    }    
}

function reset(dimension) {
    for (let i = 0; i < dimension; i++) {
        let row = document.getElementById('row' + i);
        if (row != null) {
            row.remove();
        }
    }
    makeBoard(dimension);
}

let dimension = 150;
penColor = 'black';
makeBoard(dimension);

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => reset(dimension));

const redButton = document.getElementById('red');
redButton.addEventListener('click', () => { 
    penColor = 'red';
});

const blueButton = document.getElementById('blue');
blueButton.addEventListener('click', () => { 
    penColor = 'blue';
});

const yellowButton = document.getElementById('yellow');
yellowButton.addEventListener('click', () => { 
    penColor = 'yellow';
});

const purpleButton = document.getElementById('purple');
purpleButton.addEventListener('click', () => { 
    penColor = 'purple';
});

const greenButton = document.getElementById('green');
greenButton.addEventListener('click', () => { 
    penColor = 'green';
});

const orangeButton = document.getElementById('orange');
orangeButton.addEventListener('click', () => { 
    penColor = 'orange';
});

const blackButton = document.getElementById('black');
blackButton.addEventListener('click', () => { 
    penColor = 'black';
});

const pinkButton = document.getElementById('pink');
pinkButton.addEventListener('click', () => { 
    penColor = 'pink';
});