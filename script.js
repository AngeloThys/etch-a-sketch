const grid = document.querySelector(".grid");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    grid.appendChild(div);
}

function resizeDivs(squares) {
    const stylesheet = document.styleSheets[0];
    console.log(stylesheet);
    const gridDivs = [...stylesheet.cssRules].find(r => r.selectorText === ".grid > div")

    gridDivs.style.setProperty("height", `${50/squares}vh`);
    gridDivs.style.setProperty("width", `${50/squares}vw`);
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
}

const button = document.querySelector("button");

button.addEventListener('click', createGrid);