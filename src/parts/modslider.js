function modslider() {

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

}

module.exports = modslider;