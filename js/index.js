window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    //page slider

    
    let page = document.getElementsByClassName("page"),
        nextPageBtn = document.querySelectorAll(".next"),
        mainPageBtn = document.querySelectorAll(".main-page-path"),
        countPage = 1;

        
    mainPageBtn.forEach(item => {

        item.addEventListener('click', (event) => {
            event.preventDefault();
            page[0].childNodes[1].scrollIntoView({behavior: "smooth"});
            countPage = 1;
        });

    });    
    
    
    nextPageBtn.forEach((item, i) => {
       
        item.addEventListener('click', (event) => {
            event.preventDefault();
            countPage = countPage + 2;

            if (i == 5){countPage = 1;}

            page[0].childNodes[countPage].scrollIntoView({behavior: "smooth"});
        
        });
    });
        


    // Showup slider

    let showSliderPrevBtn = document.querySelector("#showupSliderPrev"),
        showSliderNextBtn = document.querySelector("#showupSliderNext"),
        showupSlider = document.querySelector(".showup__content-slider"),
        showupSliderCard = showupSlider.querySelectorAll("a"),
        countSlide = 1;

    showupSliderCard.forEach((item) =>  {
        item.style.display = "none";
        item.classList.remove("card-active");
    });

    showupSliderCard[0].style.display = "block";
    showupSliderCard[0].classList.add("card-active")

    showSliderNextBtn.addEventListener('click', () => {
     
        showupSliderCard.forEach((item) =>  {
            item.style.display = "none";
            item.classList.remove("card-active");
        });

        showupSliderCard[countSlide].style.display = "block";
        showupSliderCard[countSlide].classList.add("card-active");
             
        if(countSlide > showupSliderCard.length - 2) {
            countSlide = 0;

        } else{ 
            countSlide++;
            }     
    });

    showSliderPrevBtn.addEventListener('click', () => {
       
        showupSliderCard.forEach((item) =>  {
            item.style.display = "none";
            item.classList.remove("card-active");
        });

        showupSliderCard[countSlide].style.display = "block";
        showupSliderCard[countSlide].classList.add("card-active");
        
        if(countSlide < 1) {
            countSlide = 7;

        } else{ 
            countSlide--;
            }
    });

});