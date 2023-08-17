const grid = document.querySelector(".grid");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    grid.appendChild(div);
}

const gridDivList = grid.querySelectorAll("div");

function createRandomHexColor() {
    const hexadecimalArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

    let randomColorString = '#';

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        
        let hexadecimalValue = hexadecimalArray[index];

        randomColorString += hexadecimalValue;
    }

    return randomColorString;
}

function createRandomNumber0To255() {
    return Math.floor(Math.random() * 256);
}

function createRandomRGBColor() {
    let red, green, blue;

    red = createRandomNumber0To255();
    green = createRandomNumber0To255();
    blue = createRandomNumber0To255();

    return `rgb(${red}, ${green}, ${blue})`;
}

function addColor(div) {
    div.style.backgroundColor = createRandomRGBColor();
}

function removeColor(div) {
    div.style.backgroundColor = "";
}

gridDivList.forEach(div => {
    div.addEventListener('mouseenter', addColor.bind(null, div));
    div.addEventListener('mouseout', removeColor.bind(null, div));
});

function resizeDivs(squares) {
    const stylesheet = document.styleSheets[0];
    console.log(stylesheet);
    const stylesheetGridDiv = [...stylesheet.cssRules].find(r => r.selectorText === ".grid > div")

    stylesheetGridDiv.style.setProperty("height", `${50/squares}vh`);
    stylesheetGridDiv.style.setProperty("width", `${50/squares}vw`);
}

function createGrid() {
    let squares = +prompt("Indicate the amount of squares per side for the new grid.")

    if (squares > 100) {
        squares = 100;
    }

    grid.replaceChildren();

    resizeDivs(squares);

    for (let i = 0; i < squares**2; i++) {
        const div = document.createElement("div");
        grid.appendChild(div);
    }

    gridDivList.forEach(div => {
        div.addEventListener('mouseenter', addColor.bind(null, div));
        div.addEventListener('mouseout', removeColor.bind(null, div));
    });
}

const button = document.querySelector("button");

button.addEventListener('click', createGrid);