window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    //page slider

    
    let page = document.getElementsByClassName("page"),
        nextBtn = document.querySelectorAll(".next"),
        mainPageBtn = document.querySelectorAll(".main-page-path"),
        countPage = 1;
        
        
    mainPageBtn.forEach((item) => {

        item.addEventListener('click', (event) => {
            event.preventDefault();
            page[0].childNodes[1].scrollIntoView({behavior: "smooth"});
            countPage = 1;
        });

    });    
    
    
    nextBtn.forEach((item, i) => {
       
        item.addEventListener('click', (event) => {
            event.preventDefault();
            countPage = countPage + 2;

            if (i == 5){countPage = 1;}

            page[0].childNodes[countPage].scrollIntoView({behavior: "smooth"});
        
        });
    });
        


});