const main = document.querySelector(".main");
const sketchpad = document.querySelector(".sketchpad");
const controls = document.querySelector(".controls");
const color = "slategrey";

// Event listeners

//Functions
function setupGrid(size) {
  sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.style.border = "1px solid black";
    gridElement.addEventListener("mouseover", changeColor);
    sketchpad.appendChild(gridElement);
  }
}
function changeColor(e) {
  let div = e.target;
  let currentColor = color;
  let divAttr = div.getAttribute("data-key");
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
setupGrid(16);
