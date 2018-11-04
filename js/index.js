window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    //Page slider and Show teacher

    let page = document.getElementsByClassName("page"),
        nextPageBtn = document.querySelectorAll(".next"),
        mainPageBtn = document.querySelectorAll(".main-page-path"),
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
            
            if (countPage == 3) {setTimeout(showTeacher, 3000);}

            countPage = countPage + 2;

            if (i == 5) {countPage = 1;}

            page[0].childNodes[countPage].scrollIntoView({behavior: "smooth"});
        });
    });


    // Showup slider & Route

    let showSliderPrevBtn = document.querySelector("#showupSliderPrev"),
        showSliderNextBtn = document.querySelector("#showupSliderNext"),
        showupSlider = document.querySelector(".showup__content-slider"),
        showupSliderCard = showupSlider.querySelectorAll("a"),
        showupBtn = document.querySelector("#showupPlus"),
        showUpHelper = [];

    showupSlider.style.display = "flex";

    showupSliderCard.forEach((item, i) => {
        item.setAttribute("href", `./modules.html#${i + 1}`);
    });

    showupBtn.addEventListener('click', () => {
        showupSliderCard[0].click();
    });

    for (let i = 0; i < showupSliderCard.length; i++) {
        showupSliderCard[i].style.display = "none";
        showUpHelper.push(showupSliderCard[i]);
    }

    showUpShow();
    
    function showUpShow() {
        
        for (let i = 0; i < 3; i++) {
            showUpHelper[i].style.order = i;
            showUpHelper[i].style.display = "inline-block";
         }
        
        setTimeout(() => {
            showUpHelper[0].classList.add("slick-current");
        }, 20);
    }
     
    function showUpHide() {

        showupSliderCard.forEach((item) => {
            item.style.display = "none";
            item.classList.remove("slick-current");
        });
        setTimeout(() => {
            for (let i = 0; i < 3; i++) {
                showUpHelper[i].classList.remove("slick-current");
             }
        }, 50);
    }

    function slideRight(){

        showUpHide();
        let temp = showUpHelper[showUpHelper.length - 1];
        showUpHelper.pop();
        showUpHelper.unshift(temp);

        setTimeout(() => {
            showUpShow();
        }, 50);
    }

    function slideLeft(){

        showUpHide();
        let temp = showUpHelper[0];
        showUpHelper.shift();
        showUpHelper.push(temp);

        setTimeout(() => {
            showUpShow();
        }, 50);
    }

    showSliderNextBtn.addEventListener('click', () => slideRight());

    showSliderPrevBtn.addEventListener('click', () => slideLeft());


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

    // Form "Let us help"

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
            inputFormHelp[3].value = start + num.slice(0, 3) + ") " + num.slice(3, 6) + "-" + num.slice(6);
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

    // Modules Slider

    let modulesSlNextBtn = document.querySelector("#modulesSliderNext"),
        modulesSlPrevBtn = document.querySelector("#modulesSliderPrev"),
        modulesSlider = document.querySelector(".modules__content-slider"),
        modulesCard = document.querySelectorAll(".modules__content-slider > a");

    modulesSlider.style.display = "flex";

    let helper = [];

    for (let i = 0; i < modulesCard.length; i++) {
        helper.push(modulesCard[i]);
    }
        
    function newOrder(callback) {

        modulesCard.forEach((item) => {
            item.style.transition = "0.01s";
        });
        
            for (let i = 0; i < helper.length; i++) {
                
                helper[i].style.opacity = 0;
                helper[i].style.display = "none";
                helper[i].style.order = i;
                helper[i].classList.remove("card-active");
            }
            callback();
    }

    function fade(){

        for (let i = 0; i < helper.length; i++) {
            helper[i].style.display = "inline-block";
        }
        setTimeout(() => {
            for (let i = 0; i < helper.length; i++) {
                helper[i].style.transition = "1s";
                helper[i].style.opacity = 1;
            }
            helper[0].classList.add("card-active");
        }, 300);
    }

    function nextSlide(){

        modulesCard.forEach((item) => {                   
            item.style.display = "none";
        });

        let temp = helper[0];
        helper.shift();
        helper.push(temp);
        
        newOrder(fade);
    }

    function prevSlide(){

        let temp = helper[7];
        helper.pop();
        helper.unshift(temp);

        newOrder(fade);
    }

    let toSlide = setInterval(function() {
        nextSlide();
    }, 4000);

    modulesSlNextBtn.addEventListener('click', () => {

        clearInterval(toSlide);
        nextSlide();
        toSlide = setInterval(function() {
            nextSlide();
        }, 4000);
    });

    modulesSlPrevBtn.addEventListener('click', () => {

        clearInterval(toSlide);
        prevSlide();
        toSlide = setInterval(function() {
            nextSlide();
        }, 4000);
    });


// Slider 5 (Feed)

    let feedSlider = document.querySelector(".feed__slider"),
        feedCard = document.querySelectorAll(".feed__item "),
        feedNextBtn = document.querySelector("#feedNext"),
        feedPrevBtn = document.querySelector("#feedPrev"),
        tempDiv = document.createElement("div"),
        feedHelper = [];

    feedSlider.style.display = "flex";

    for (let i = 0; i < feedCard.length; i++) {
        feedCard[i].style.display = "none";
        feedCard[i].classList.remove("feed__item-active");
        feedHelper.push(feedCard[i]);
    }

    feedShow();
 
    function feedShow() {
                
        for (let i = 0; i < 4; i++) {
            feedHelper[i].style.order = i;
            feedHelper[i].style.display = "inline-block";
        }
        tempDiv.textContent = feedHelper[0].children[4].textContent;
        feedHelper[0].children[4].textContent = "";
            
        setTimeout(() => {
            
            feedHelper[0].classList.add("feed__item-active");
            
            setTimeout(() => {
                feedHelper[0].children[4].textContent = tempDiv.textContent;
            }, 500);
        }, 20);
    }

    function feedHide() {

        feedCard.forEach((item) => {
            item.style.display = "none";
        });

        setTimeout(() => {
            for (let i = 0; i < 4; i++) {
                feedHelper[i].classList.remove("feed__item-active");
             }
        }, 5);
    }

    feedNextBtn.addEventListener('click', () => {

        feedHide();
        let temp = feedHelper[feedHelper.length - 1];
        feedHelper.pop();
        feedHelper.unshift(temp);

        setTimeout(() => {
            feedShow();
        }, 10);
    });

    feedPrevBtn.addEventListener('click', () => {
        
        feedHide();
        let temp = feedHelper[0];
        feedHelper.shift();
        feedHelper.push(temp);

        setTimeout(() => {
            feedShow();
        }, 10);
    });
});