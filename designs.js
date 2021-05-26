// Select color input
var color = document.getElementById("colorPicker");


// Select size input
var size = document.getElementById("sizePicker");
var row = document.getElementById("inputHeight");
var cell = document.getElementById("inputWidth");
var table = document.getElementById("pixelCanvas");


size.addEventListener("submit", function(event) {
  event.preventDefault();
  table.innerHTML = "";
  makeGrid(row,cell)
});

// When size is submitted by the user, call makeGrid()
function addColor(event){
  event.target.style.backgroundColor = color.value;
}

function makeGrid(row,cell) {
  for (times = 1; times <= row.value; times++)  {
    let newRow = table.insertRow(row);
      for (cycle = 1; cycle <= cell.value; cycle++) {
        var newCell = newRow.insertCell(cell);
      };
  table.addEventListener("click",addColor);
    };

}
