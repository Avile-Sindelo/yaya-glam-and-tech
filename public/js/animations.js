/**************************************************************************
 * Scroll Reveal
 **************************************************************************/

const revealElements = document.querySelectorAll(".reveal");

const observerOptions = {

    threshold: 0.15,

    rootMargin: "0px 0px -80px 0px"

};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("revealed");

            observer.unobserve(entry.target);

        }

    });

}, observerOptions);

revealElements.forEach(element => {

    observer.observe(element);

});