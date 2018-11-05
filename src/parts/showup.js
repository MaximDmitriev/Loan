function showup() {

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
    
    //First screen video

    let videoFrame = document.querySelector(".overlay"),
        videoContent = document.querySelector("#frame"),
        closeBtn = videoFrame.querySelector(".close"),
        playBtn = document.querySelector("#showupVideo");

    videoContent.setAttribute('src', '');

    playBtn.addEventListener('click', () => {
        videoContent.setAttribute('src', playBtn.getAttribute('data-url'));
        videoFrame.style.display = "flex";
    });

    closeBtn.addEventListener('click', () => {
        videoContent.setAttribute('src', '');
        videoFrame.style.display = "none";
    });
}

module.exports = showup;