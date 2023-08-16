const grid = document.querySelector(".grid");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    grid.appendChild(div);
}

const gridDivList = grid.querySelectorAll("div");

function addClass(elementName, className) {
    elementName.classList.add(className);
}

function removeClass(elementName, className) {
    elementName.classList.remove(className);
}

gridDivList.forEach(div => {
    div.addEventListener('mouseenter', addClass.bind(null, div, "black10"));
    div.addEventListener('mouseout', removeClass.bind(null, div, "black10"));
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
        div.addEventListener('mouseenter', addClass.bind(null, div, "black10"));
        div.addEventListener('mouseout', removeClass.bind(null, div, "black10"));
    });
}

const button = document.querySelector("button");

button.addEventListener('click', createGrid);