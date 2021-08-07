// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const colorPicker= document.getElementById('colorPicker');
const rows= document.getElementById('inputHeight');
const cell= document.getElementById('inputWidth');
const pixelCanvas= document.getElementById('pixelCanvas');
const form= document.getElementById('sizePicker');


form.addEventListener('submit',function(e) {
pixelCanvas.innerHTML = '';
e.preventDefault();
makeGrid();

});
pixelCanvas.addEventListener('click' , function(e){
  if (e.target.nodeName ==='TD'){
    e.target.style.backgroundColor = colorPicker.value;
  }})

function makeGrid() {
  for (let i = 0; i <rows.value; i++){
    const row = pixelCanvas.insertRow(0);
    for (let j = 0; j <cell.value; j++){
       row.insertCell(0);
    }
    }
    }
