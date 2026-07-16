const errorElem = document.getElementsByClassName('error-message');

if(errorElem[0].textContent != ''){

    setTimeout(()=>{
        errorElem[0].style.visibility = 'hidden';
    }, 5000);
}

