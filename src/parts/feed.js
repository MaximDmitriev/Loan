function feed() {

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
}

module.exports = feed;