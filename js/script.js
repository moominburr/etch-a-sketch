const main = document.querySelector('.main');
const sketchpad = document.querySelector('.sketchpad');
const controls = document.querySelector('.controls');
const color = 'pink';

// Event listeners

//Functions
function setupGrid(size) {
    sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div');
      gridElement.style.border = '1px solid black';
      gridElement.addEventListener('mouseover', changeColor);
      sketchpad.appendChild(gridElement);
    }
}
function changeColor(e){
    let div = e.target;
    div.style.backgroundColor = `${color}`;
}
setupGrid(16);