window.addEventListener('DOMContentLoaded', () => {

    'use strict'; 

    let screens = document.querySelectorAll(".module"),
        moreTitleDiv = document.querySelectorAll(".module__info-show"),
        nextScrBtn = document.querySelectorAll(".next"),
        prevScrBtn = document.querySelectorAll(".prev"),
        mainScrBtn = document.querySelectorAll(".main-screen-path"),
        moduleShowMoreBtn = document.querySelectorAll("#modulePlus"),
        counterSrc = 0;
  

    mainScrBtn.forEach((item) => {
        item.setAttribute("href", "./index.html#1");
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


    moduleShowMoreBtn.forEach((item, i) => {
        item.addEventListener('click', () =>{

            let showMoreDiv = document.createElement("div");
            
            if (moreTitleDiv[i].classList.contains("module__info-show-accord")) {

                moreTitleDiv[i].removeChild(moreTitleDiv[i].children[2]);
                moreTitleDiv[i].classList.remove("module__info-show-accord");

            } else{

                moreTitleDiv[i].classList.add("module__info-show-accord");
                showMoreDiv.classList.add("txt");
                moreTitleDiv[i].appendChild(showMoreDiv);
                showMoreDiv.innerHTML = 'Let us show you more information about it';

            }
        });
    });
    
    // Downloads

    let downloadBtn = document.querySelectorAll(".download");

    function downloadPdf(blob, fileName) {

        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
    
        let url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    }



      downloadBtn.forEach((item) => {

        item.addEventListener('click', () => {

            let xhr = new XMLHttpRequest();
            let requestUrl = "../schema robot.pdf";

            xhr.open("GET", requestUrl);
            xhr.responseType = "blob";

            xhr.onload = function () {
                downloadPdf(this.response, 'schema robot.pdf'); 
            };
            xhr.send();         
        });
    });


    // Video

    let videoFrame = document.querySelector(".overlay"),
        videoContent = document.querySelector("#frame"),
        closeBtn = videoFrame.querySelector(".close"),
        videoItemSecondary = document.querySelectorAll(".module__video > div:nth-child(2)"),
        videoTitleSecondary = document.querySelectorAll(".module__video > div:nth-child(2) > .play > .play__text"),
        playPrimaryBtn = document.querySelectorAll(".module__video > div:first-child > .play > .play__circle"),
        playSecondaryBtn = document.querySelectorAll(".module__video > div:nth-child(2) > .play > .play__circle"),
        urlVideo = document.querySelectorAll(".play");


    function changeStyleVideo(num) {

        let newBtn = playPrimaryBtn[0].cloneNode(true),
            svg = playSecondaryBtn[num].getElementsByTagName("svg");
    
        playSecondaryBtn[num].removeChild(svg[0]);
        playSecondaryBtn[num].appendChild(newBtn);
        playSecondaryBtn[num].classList.remove("closed");
        videoItemSecondary[num].style.filter = "none";
        videoItemSecondary[num].style.opacity = 1;
        videoTitleSecondary[num].classList.remove("attention");
        videoTitleSecondary[num].innerHTML = "play video";
    }


    function playVideo(num){

        videoContent.setAttribute('src', urlVideo[num].getAttribute('data-url'));
        videoFrame.style.display = "flex";


        closeBtn.addEventListener('click', () => {
            videoContent.setAttribute('src', 'none');
            videoFrame.style.display = "none";
        });
    }


    playPrimaryBtn.forEach((item, i) => {

        item.addEventListener('click', () => {

            if(playSecondaryBtn[i].classList.contains("closed")) {
                playVideo(i * 2);
                changeStyleVideo(i);

            } else{
                playVideo(i * 2);
            }
        });
    });

    playSecondaryBtn.forEach((item, i) => {

        item.addEventListener('click', () => {

            if(!item.classList.contains("closed")) {
                playVideo(i * 2 + 1);
            }  
        });
    });



  



});