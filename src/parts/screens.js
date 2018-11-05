function screens() {
 
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
}

module.exports = screens;