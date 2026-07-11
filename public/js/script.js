const errorElem = document.getElementsByClassName('error-message');

console.log(errorElem[0].style);

setTimeout(()=>{
    errorElem[0].style.display = 'block';
    console.log('LOG from the Timeout function')
}, 5000);