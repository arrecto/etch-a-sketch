const gridContainer = document.querySelector('#grid-container');
const slideContainer = document.querySelector('#myRange');
const clearButton = document.querySelector('#clear-button');
const colorPicker = document.querySelector('#color-picker');

let color;
let previousGridWidth=0;
let fixedWidth = 550;
let widthGrid, maximumGrid;

createSketchPad();

function clearSketchPad(){
    for (i=0; i<previousGridWidth; i++){
        let pixelGridRemoveContainer = document.getElementById(`parent${i.toString()}`);
        pixelGridRemoveContainer.remove();
    }
}

function clearPixelColor() {

    const allGrid = Array.from(document.querySelectorAll(`.pixel-grid-outline`));
    allGrid.forEach(grid => grid.style.cssText=`background-color: white; width: ${widthGrid}px; height:  ${widthGrid}px`);

}

function colorPixelGrid(e){
    this.style.cssText = `background-color: ${color}; width: ${widthGrid}px; height:  ${widthGrid}px`;
}

function createSketchPad(){
    clearSketchPad();
    maximumGrid = slideContainer.value;
    previousGridWidth = maximumGrid; 
    widthGrid = fixedWidth/maximumGrid;

    for (i=0; i<maximumGrid; i++){
        const pixelGridContainer = document.createElement('div');
        pixelGridContainer.setAttribute('id', `parent${i.toString()}`)
        gridContainer.append(pixelGridContainer);
        for(j=0; j<maximumGrid; j++){
            const pixelGrid = document.createElement('div');
            pixelGrid.setAttribute('id', `child${i.toString()+j.toString()}`)
            pixelGrid.classList.add('pixel-grid-outline');
            pixelGrid.style.cssText = `width: ${widthGrid}px; height:  ${widthGrid}px`;
            pixelGridContainer.appendChild(pixelGrid);

            pixelGrid.addEventListener('mouseover', colorPixelGrid);
        }
        
    }
}

slideContainer.addEventListener('change', createSketchPad);
clearButton.addEventListener('click', clearPixelColor);
colorPicker.addEventListener('change', function(){color = colorPicker.value;})


