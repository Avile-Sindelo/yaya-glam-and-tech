/**************************************************************************
 * Blossom Petals
 **************************************************************************/

const container = document.querySelector("#petal-container");

const PETAL_COUNT = 22;

for(let i = 0; i < PETAL_COUNT; i++){

    createPetal();

}

/**************************************************************************
 * Create Petal
 **************************************************************************/

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = createSVG();

    const size = random(18,40);

    petal.style.width = `${size}px`;

    petal.style.height = `${size}px`;

    petal.style.left = `${random(0,100)}vw`;

    petal.style.animationDuration = `${random(14,24)}s`;

    petal.style.animationDelay = `${random(0,10)}s`;

    petal.style.opacity = random(35,80) / 100;

    petal.style.setProperty("--rotation", `${random(0,360)}deg`);

    petal.style.setProperty("--drift", `${random(-120,120)}px`);

    container.appendChild(petal);

}

/**************************************************************************
 * SVG
 **************************************************************************/

function createSVG(){

    return `

<svg
viewBox="0 0 60 60"
xmlns="http://www.w3.org/2000/svg">

<defs>

<linearGradient
id="petalGradient"
x1="0%"
y1="0%"
x2="100%"
y2="100%">

<stop
offset="0%"
stop-color="#ffe7f1"/>

<stop
offset="100%"
stop-color="#d63384"/>

</linearGradient>

</defs>

<path
fill="url(#petalGradient)"
d="M30 6
C46 10 54 24 46 40
C39 55 21 55 14 40
C6 24 14 10 30 6Z"/>

</svg>

`;

}

/**************************************************************************
 * Random
 **************************************************************************/

function random(min,max){

    return Math.floor(

        Math.random() * (max - min + 1)

    ) + min;

}