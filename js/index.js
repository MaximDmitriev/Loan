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



    // Form page 6

    let message = {
        loading: "Loading",
        success: "Upload completed successfully",
        failure: "Server Error. Try again later",
    };

    let formTime = document.querySelector("#formTime"),
        inputFormTime = document.querySelectorAll("#formTime > .form__item > input"),
        statusInfo = document.createElement("div");

    statusInfo.style.paddingTop = 15 + "px";


    function sendFormTime(formName, inputname) {

        function clearInput() {
            for (let i=0; i < inputname.length; i++) {
                inputname[i].value = '';
            }
            formName.removeChild(statusInfo);
        }

        formName.appendChild(statusInfo);

        let formData = new FormData(formName),
            request = new XMLHttpRequest();

        request.open('POST', '../server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        request.addEventListener('readystatechange', function() {

            if (request.readyState < 4) {
                statusInfo.innerHTML = message.loading;

            } else if (request.readyState === 4 && request.status == 200) {
                statusInfo.innerHTML = message.success;

            } else {
                statusInfo.innerHTML = message.failure;
            }
        });
        request.send(formData);
        setTimeout(clearInput, 2000);
    }


    inputFormTime[1].addEventListener('input', () => {
        let re = /[а-яё]/gi;
        inputFormTime[1].value = inputFormTime[1].value.replace(re, '');

    });

    inputFormTime[2].addEventListener('input', () => {
        let re = /[^\d\/\.]/g;
        inputFormTime[2].value = inputFormTime[2].value.replace(re, '');

    });

    formTime.addEventListener('submit', (event) => {
        event.preventDefault();

        if (inputFormTime[0].value != '' && inputFormTime[1].value != '' && inputFormTime[2].value != '') {
            sendFormTime(formTime, inputFormTime);
        }   
    });

    // Form let us help

    let formHelp = document.querySelector("#formHelp"),
        inputFormHelp = formHelp.getElementsByTagName("input");

        formHelp.addEventListener('submit', (event) => {
            event.preventDefault();

            if (inputFormHelp[0].value != '' && inputFormHelp[1].value != '' && inputFormHelp[2].value != '' && inputFormHelp[3].value != '') {
            sendFormTime(formHelp, inputFormHelp);
            }
        });

        inputFormHelp[2].addEventListener('input', () => {
            let re = /[а-яё]/gi;
            inputFormHelp[2].value = inputFormHelp[2].value.replace(re, '');
    
        });

        function getMask(num) {
            let start = "+1 (";
            if (num.length > 0 && num.length <= 3 ){
                inputFormHelp[3].value = start + num;
            } else if (num.length > 3 && num.length <= 6) {
                inputFormHelp[3].value = start + num.slice(0, 3) + ") " + num.slice(3);
            } else if (num.length > 6 && num.length <= 10) {
                inputFormHelp[3].value = start + num.slice(0, 3) + ") " + num.slice(3, 6) + " " + num.slice(6);
            }
            
        }

        inputFormHelp[3].addEventListener('input', (event) => {
            event.preventDefault();
            let re = /[\D]/g;
            let number = inputFormHelp[3].value.replace(re, '');
            
            if (number.length > 1 && number.length <= 10) {
                   number = number.slice(1);
            } else if (number.length > 10){
                number = number.slice(1,11);
            }
            getMask(number);
           
        });


});