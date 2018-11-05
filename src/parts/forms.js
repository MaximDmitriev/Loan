function forms() {

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

}

module.exports = forms;