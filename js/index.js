window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    //page slider and show teacher

    
    let page = document.getElementsByClassName("page"),
        nextPageBtn = document.querySelectorAll(".next"),
        mainPageBtn = document.querySelectorAll(".main-page-path"),
        modulesPage = document.querySelector(".modules"), // по возможности удалить
        teacherDiv = document.querySelector("#hanson"),
        countPage = 1;

    teacherDiv.style.display ="none";

    function showTeacher(){
        teacherDiv.style.display ="block";
    }

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
            
            if (countPage == 3){setTimeout(showTeacher, 3000);}

            countPage = countPage + 2;

            if (i == 5){countPage = 1;}

            page[0].childNodes[countPage].scrollIntoView({behavior: "smooth"});

        });

    });
        


    // Showup slider (убрать в функции показать и скрыть)

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


    //Differences Lists

    let parentDiv = document.querySelector(".officernew"),
        cardCounter = document.querySelector("#cardCounter"),
        moreCardsBtn = cardCounter.querySelector(".plus"),
        countList = 1;

    function addCard(num) {
        let newCard = document.createElement("div"),
            cardNumber = document.createElement("div"),
            cardInfo = document.createElement("div");

        parentDiv.insertBefore(newCard, cardCounter);
        parentDiv.children[num].classList.add("officer__card-item");
    
        parentDiv.children[num].appendChild(cardNumber);
        parentDiv.children[num].children[0].classList.add("card__counter");
        parentDiv.children[num].children[0].innerHTML = "0" + num;
    
        parentDiv.children[num].appendChild(cardInfo);
        parentDiv.children[num].children[1].classList.add("card__descr");
        parentDiv.children[num].children[1].innerHTML = "Some descriptions";

    }

    moreCardsBtn.addEventListener('click', () => {
        addCard(countList);
        countList++;

        if(countList > 3) {
            parentDiv.removeChild(cardCounter);
        }
    });


    //First screen video

    let videoFrame = document.querySelector(".overlay"),
        videoContent = document.querySelector("#frame"),
        closeBtn = videoFrame.querySelector(".close"),
        playBtn = document.querySelector("#showupVideo");


    playBtn.addEventListener('click', () => {

        videoContent.setAttribute('src', playBtn.getAttribute('data-url'));
        videoFrame.style.display = "flex";

    });

    closeBtn.addEventListener('click', () => {
        videoContent.setAttribute('src', 'none');
        videoFrame.style.display = "none";
    
    });



    // Modules


});