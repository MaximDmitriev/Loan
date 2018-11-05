function differences() {

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
}

module.exports = differences;