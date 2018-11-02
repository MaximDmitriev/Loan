window.addEventListener('DOMContentLoaded', () => {

    'use strict'; 

    let screens = document.querySelectorAll(".module"),
        moreTitleDiv = document.querySelectorAll(".module__info-show"),
        nextScrBtn = document.querySelectorAll(".next"),
        prevScrBtn = document.querySelectorAll(".prev"),
        mainScrBtn = document.querySelectorAll(".main-screen-path"),
        moduleShowMoreBtn = document.querySelectorAll("#modulePlus"),
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

    function saveData(blob, fileName) // does the same as FileSaver.js
    {
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
                saveData(this.response, 'schema robot.pdf'); // saveAs is now your function
            };
            xhr.send();




            // let blob = new Blob(['GET'],{type: 'application/pdf'});

            // let blobURL = window.URL.createObjectURL(blob);
            // let tempLink = document.createElement('a');
            // tempLink.style.display = 'none';
            // tempLink.href = blobURL;
            // tempLink.setAttribute('download', 'schema robot.pdf');

            // document.body.appendChild(tempLink);
            // tempLink.click();
            // document.body.removeChild(tempLink);
            // window.URL.revokeObjectURL(blobURL);
         
        });
    });



});