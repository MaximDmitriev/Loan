window.addEventListener('DOMContentLoaded', () => {

    'use strict'; 

    let screens = document.querySelectorAll(".module"),
        nextScrBtn = document.querySelectorAll(".next"),
        prevScrBtn = document.querySelectorAll(".prev"),
        mainScrBtn = document.querySelectorAll(".main-screen-path"),
        counterSrc = 0;

    mainScrBtn.forEach(item => {

        item.addEventListener('click', (event) => {
            event.preventDefault();
            screens[0].scrollIntoView({behavior: "smooth"});
            counterSrc = 0;
        });
    });    
    
    nextScrBtn.forEach((item) => {
       
        item.addEventListener('click', (event) => {
            event.preventDefault();
            counterSrc++;
            
            if (counterSrc == 8){counterSrc = 0;}
            
            screens[counterSrc].scrollIntoView({behavior: "smooth"});
        });
    });

    prevScrBtn.forEach((item) => {
       
        item.addEventListener('click', (event) => {
            event.preventDefault();
            counterSrc--;
            
            if (counterSrc < 0){counterSrc = 7;}
            
            screens[counterSrc].scrollIntoView({behavior: "smooth"});
        });
    });




});