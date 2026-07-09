const photos = document.querySelectorAll('.photo-card');

let current = 0;

setInterval(() => {
    photos[current].classList.remove('active');
    current++;

    if(current >= photos.length){

        current = 0;

    }

    photos[current].classList.add('active');

}, 5000);


/**************************************************************************
PHOTO STACK
**************************************************************************/

const photoStack = document.querySelector(".photo-stack");

const cards = [...document.querySelectorAll(".photo-card")];

const DELAY = 5000;

let interval;

/**************************************************************************
ROTATE
**************************************************************************/

function rotateStack(){

    cards.push(cards.shift());

    cards.forEach((card,index)=>{

        card.className="photo-card";

        switch(index){

            case 0:

                card.classList.add("front");

                break;

            case 1:

                card.classList.add("second");

                break;

            case 2:

                card.classList.add("third");

                break;

            case 3:

                card.classList.add("fourth");

                break;

        }

    });

}

/**************************************************************************
START
**************************************************************************/

function start(){

    interval=setInterval(

        rotateStack,

        DELAY

    );

}

/**************************************************************************
STOP
**************************************************************************/

function stop(){

    clearInterval(interval);

}

photoStack.addEventListener(

    "mouseenter",

    stop

);

photoStack.addEventListener(

    "mouseleave",

    start

);

start();
