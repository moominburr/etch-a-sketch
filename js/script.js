//Defaults
let DEFAULT_SIZE = 16;
let DEFAULT_COLOR = "#32fbcc";
let DEFAULT_MODE = "normal";

const sketchpad = document.querySelector(".sketchpad");
const resetBtn = document.querySelector(".reset");
let color = DEFAULT_COLOR;
let mode = DEFAULT_MODE;

// Inputs
const gridSizeSlider = document.getElementById("grid-size-slider");
const colorSlider = document.getElementById("colorPicker");
const modeSelectBtns = document.querySelectorAll('input[name="mode"]');

// Event listeners
gridSizeSlider.onchange = (e) => changeSize(e);
colorSlider.oninput = (e) => setNewColor(e);
for (var i = 0; i < modeSelectBtns.length; i++) {
  let radio = modeSelectBtns[i];
  radio.onclick = (e) => changeMode(e);
}
resetBtn.addEventListener("click", resetBoard);

//Functions
function setupGrid(size) {
  sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    //gridElement.style.border = "1px solid black";
    gridElement.addEventListener("mouseover", changeColorHover);
    gridElement.classList.add("box");
    sketchpad.appendChild(gridElement);
  }
}

function changeMode(e) {
  mode = e.target.value;
}

function changeSize(e) {
  let size = e.target.value;
  setupGrid(size);
  let divs = document.querySelectorAll(".box");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
}

function setNewColor(e) {
  color = e.target.value;
  mode = "normal";
  gridSizeSlider.style.backgroundColor = color;
}

function changeColorHover(e) {
  let div = e.target;
  let currentColor = color;
  let divAttr = div.getAttribute("data-key");
  if (mode === "random") {
    currentColor = chroma.random();
    div.style.backgroundColor = `${currentColor}`;
    div.setAttribute("data-key", "1");
    console.log("added attr");
  } else if (mode === "erase") {
    currentColor = "white";
    div.style.backgroundColor = `${currentColor}`;
  } else {
    if (divAttr === "1") {
      currentColor = chroma(currentColor).darken(0.5);
      div.style.backgroundColor = `${currentColor}`;
      div.removeAttribute("data-key", "1");
      div.setAttribute("data-key", "2");
    } else if (divAttr === "2") {
      currentColor = chroma(currentColor).darken(1);
      div.style.backgroundColor = `${currentColor}`;
      div.removeAttribute("data-key", "2");
      div.setAttribute("data-key", "3");
    } else if (divAttr === "3") {
      currentColor = chroma(currentColor).darken(1.5);
      div.style.backgroundColor = `${currentColor}`;
      div.removeAttribute("data-key", "3");
      div.setAttribute("data-key", "4");
    } else if (divAttr === "4") {
      currentColor = chroma(currentColor).darken(2);
      div.style.backgroundColor = `${currentColor}`;
      div.removeAttribute("data-key", "4");
      div.setAttribute("data-key", "5");
    } else if (divAttr === "5") {
      currentColor = chroma(currentColor).darken(2.5);
      div.style.backgroundColor = `${currentColor}`;
      div.removeAttribute("data-key", "5");
      div.setAttribute("data-key", "6");
    } else if (divAttr === "6") {
      currentColor = chroma(currentColor).darken(3);
      div.style.backgroundColor = `${currentColor}`;
    } else {
      div.style.backgroundColor = `${currentColor}`;
      div.setAttribute("data-key", "1");
    }
  }
}

function resetBoard() {
  let divs = document.querySelectorAll(".box");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
}

window.onload(setupGrid(DEFAULT_SIZE));
