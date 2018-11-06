/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var forms = __webpack_require__(/*! ./parts/forms */ "./parts/forms.js"),
      screens = __webpack_require__(/*! ./parts/screens */ "./parts/screens.js"),
      showup = __webpack_require__(/*! ./parts/showup */ "./parts/showup.js"),
      differences = __webpack_require__(/*! ./parts/differences */ "./parts/differences.js"),
      modslider = __webpack_require__(/*! ./parts/modslider */ "./parts/modslider.js"),
      feed = __webpack_require__(/*! ./parts/feed */ "./parts/feed.js");

  forms();
  screens();
  showup();
  differences();
  modslider();
  feed();
});

/***/ }),

/***/ "./parts/differences.js":
/*!******************************!*\
  !*** ./parts/differences.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function differences() {
  var parentDiv = document.querySelector(".officernew"),
      cardCounter = document.querySelector("#cardCounter"),
      moreCardsBtn = cardCounter.querySelector(".plus"),
      countList = 1;

  function addCard(num) {
    var newCard = document.createElement("div"),
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

  moreCardsBtn.addEventListener('click', function () {
    addCard(countList);
    countList++;

    if (countList > 3) {
      parentDiv.removeChild(cardCounter);
    }
  });
}

module.exports = differences;

/***/ }),

/***/ "./parts/feed.js":
/*!***********************!*\
  !*** ./parts/feed.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function feed() {
  var feedSlider = document.querySelector(".feed__slider"),
      feedCard = document.querySelectorAll(".feed__item "),
      feedNextBtn = document.querySelector("#feedNext"),
      feedPrevBtn = document.querySelector("#feedPrev"),
      tempDiv = document.createElement("div"),
      feedHelper = [];
  feedSlider.style.display = "flex";

  for (var i = 0; i < feedCard.length; i++) {
    feedCard[i].style.display = "none";
    feedCard[i].classList.remove("feed__item-active");
    feedHelper.push(feedCard[i]);
  }

  feedShow();

  function feedShow() {
    for (var _i = 0; _i < 4; _i++) {
      feedHelper[_i].style.order = _i;
      feedHelper[_i].style.display = "inline-block";
    }

    tempDiv.textContent = feedHelper[0].children[4].textContent;
    feedHelper[0].children[4].textContent = "";
    setTimeout(function () {
      feedHelper[0].classList.add("feed__item-active");
      setTimeout(function () {
        feedHelper[0].children[4].textContent = tempDiv.textContent;
      }, 500);
    }, 20);
  }

  function feedHide() {
    feedCard.forEach(function (item) {
      item.style.display = "none";
    });
    setTimeout(function () {
      for (var _i2 = 0; _i2 < 4; _i2++) {
        feedHelper[_i2].classList.remove("feed__item-active");
      }
    }, 5);
  }

  feedNextBtn.addEventListener('click', function () {
    feedHide();
    var temp = feedHelper[feedHelper.length - 1];
    feedHelper.pop();
    feedHelper.unshift(temp);
    setTimeout(function () {
      feedShow();
    }, 10);
  });
  feedPrevBtn.addEventListener('click', function () {
    feedHide();
    var temp = feedHelper[0];
    feedHelper.shift();
    feedHelper.push(temp);
    setTimeout(function () {
      feedShow();
    }, 10);
  });
}

module.exports = feed;

/***/ }),

/***/ "./parts/forms.js":
/*!************************!*\
  !*** ./parts/forms.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function forms() {
  // Form page 6
  var message = {
    loading: "Loading",
    success: "Upload completed successfully",
    failure: "Server Error. Try again later"
  };
  var formTime = document.querySelector("#formTime"),
      inputFormTime = document.querySelectorAll("#formTime > .form__item > input"),
      statusInfo = document.createElement("div");
  statusInfo.style.paddingTop = 15 + "px";

  function sendFormTime(formName, inputname) {
    function clearInput() {
      for (var i = 0; i < inputname.length; i++) {
        inputname[i].value = '';
      }

      formName.removeChild(statusInfo);
    }

    formName.appendChild(statusInfo);
    var formData = new FormData(formName),
        request = new XMLHttpRequest();
    request.open('POST', '../server.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.addEventListener('readystatechange', function () {
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

  inputFormTime[1].addEventListener('input', function () {
    var re = /[а-яё]/gi;
    inputFormTime[1].value = inputFormTime[1].value.replace(re, '');
  });
  inputFormTime[2].addEventListener('input', function () {
    var re = /[^\d\/\.]/g;
    inputFormTime[2].value = inputFormTime[2].value.replace(re, '');
  });
  formTime.addEventListener('submit', function (event) {
    event.preventDefault();

    if (inputFormTime[0].value != '' && inputFormTime[1].value != '' && inputFormTime[2].value != '') {
      sendFormTime(formTime, inputFormTime);
    }
  }); // Form "Let us help"

  var formHelp = document.querySelector("#formHelp"),
      inputFormHelp = formHelp.getElementsByTagName("input");
  formHelp.addEventListener('submit', function (event) {
    event.preventDefault();

    if (inputFormHelp[0].value != '' && inputFormHelp[1].value != '' && inputFormHelp[2].value != '' && inputFormHelp[3].value != '') {
      sendFormTime(formHelp, inputFormHelp);
    }
  });
  inputFormHelp[2].addEventListener('input', function () {
    var re = /[а-яё]/gi;
    inputFormHelp[2].value = inputFormHelp[2].value.replace(re, '');
  });

  function getMask(num) {
    var start = "+1 (";

    if (num.length > 0 && num.length <= 3) {
      inputFormHelp[3].value = start + num;
    } else if (num.length > 3 && num.length <= 6) {
      inputFormHelp[3].value = start + num.slice(0, 3) + ") " + num.slice(3);
    } else if (num.length > 6 && num.length <= 10) {
      inputFormHelp[3].value = start + num.slice(0, 3) + ") " + num.slice(3, 6) + "-" + num.slice(6);
    }
  }

  inputFormHelp[3].addEventListener('input', function (event) {
    event.preventDefault();
    var re = /[\D]/g;
    var number = inputFormHelp[3].value.replace(re, '');

    if (number.length > 1 && number.length <= 10) {
      number = number.slice(1);
    } else if (number.length > 10) {
      number = number.slice(1, 11);
    }

    getMask(number);
  });
}

module.exports = forms;

/***/ }),

/***/ "./parts/modslider.js":
/*!****************************!*\
  !*** ./parts/modslider.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modslider() {
  var modulesSlNextBtn = document.querySelector("#modulesSliderNext"),
      modulesSlPrevBtn = document.querySelector("#modulesSliderPrev"),
      modulesSlider = document.querySelector(".modules__content-slider"),
      modulesCard = document.querySelectorAll(".modules__content-slider > a");
  modulesSlider.style.display = "flex";
  var helper = [];

  for (var i = 0; i < modulesCard.length; i++) {
    helper.push(modulesCard[i]);
  }

  function newOrder(callback) {
    modulesCard.forEach(function (item) {
      item.style.transition = "0.01s";
    });

    for (var _i = 0; _i < helper.length; _i++) {
      helper[_i].style.opacity = 0;
      helper[_i].style.display = "none";
      helper[_i].style.order = _i;

      helper[_i].classList.remove("card-active");
    }

    callback();
  }

  function fade() {
    for (var _i2 = 0; _i2 < helper.length; _i2++) {
      helper[_i2].style.display = "inline-block";
    }

    setTimeout(function () {
      for (var _i3 = 0; _i3 < helper.length; _i3++) {
        helper[_i3].style.transition = "1s";
        helper[_i3].style.opacity = 1;
      }

      helper[0].classList.add("card-active");
    }, 300);
  }

  function nextSlide() {
    modulesCard.forEach(function (item) {
      item.style.display = "none";
    });
    var temp = helper[0];
    helper.shift();
    helper.push(temp);
    newOrder(fade);
  }

  function prevSlide() {
    var temp = helper[7];
    helper.pop();
    helper.unshift(temp);
    newOrder(fade);
  }

  var toSlide = setInterval(function () {
    nextSlide();
  }, 4000);
  modulesSlNextBtn.addEventListener('click', function () {
    clearInterval(toSlide);
    nextSlide();
    toSlide = setInterval(function () {
      nextSlide();
    }, 4000);
  });
  modulesSlPrevBtn.addEventListener('click', function () {
    clearInterval(toSlide);
    prevSlide();
    toSlide = setInterval(function () {
      nextSlide();
    }, 4000);
  });
}

module.exports = modslider;

/***/ }),

/***/ "./parts/screens.js":
/*!**************************!*\
  !*** ./parts/screens.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function screens() {
  var page = document.getElementsByClassName("page"),
      nextPageBtn = document.querySelectorAll(".next"),
      mainPageBtn = document.querySelectorAll(".main-page-path"),
      teacherDiv = document.querySelector("#hanson"),
      countPage = 1;
  teacherDiv.style.display = "none";

  function showTeacher() {
    teacherDiv.style.display = "block";
  }

  mainPageBtn.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      page[0].childNodes[1].scrollIntoView({
        behavior: "smooth"
      });
      countPage = 1;
    });
  });
  nextPageBtn.forEach(function (item, i) {
    item.addEventListener('click', function (event) {
      event.preventDefault();

      if (countPage == 3) {
        setTimeout(showTeacher, 3000);
      }

      countPage = countPage + 2;

      if (i == 5) {
        countPage = 1;
      }

      page[0].childNodes[countPage].scrollIntoView({
        behavior: "smooth"
      });
    });
  });
}

module.exports = screens;

/***/ }),

/***/ "./parts/showup.js":
/*!*************************!*\
  !*** ./parts/showup.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function showup() {
  // Showup slider & Route
  var showSliderPrevBtn = document.querySelector("#showupSliderPrev"),
      showSliderNextBtn = document.querySelector("#showupSliderNext"),
      showupSlider = document.querySelector(".showup__content-slider"),
      showupSliderCard = showupSlider.querySelectorAll("a"),
      showupBtn = document.querySelector("#showupPlus"),
      showUpHelper = [];
  showupSlider.style.display = "flex";
  showupSliderCard.forEach(function (item, i) {
    item.setAttribute("href", "./modules.html#".concat(i + 1));
  });
  showupBtn.addEventListener('click', function () {
    showupSliderCard[0].click();
  });

  for (var i = 0; i < showupSliderCard.length; i++) {
    showupSliderCard[i].style.display = "none";
    showUpHelper.push(showupSliderCard[i]);
  }

  showUpShow();

  function showUpShow() {
    for (var _i = 0; _i < 3; _i++) {
      showUpHelper[_i].style.order = _i;
      showUpHelper[_i].style.display = "inline-block";
    }

    setTimeout(function () {
      showUpHelper[0].classList.add("slick-current");
    }, 20);
  }

  function showUpHide() {
    showupSliderCard.forEach(function (item) {
      item.style.display = "none";
      item.classList.remove("slick-current");
    });
    setTimeout(function () {
      for (var _i2 = 0; _i2 < 3; _i2++) {
        showUpHelper[_i2].classList.remove("slick-current");
      }
    }, 50);
  }

  function slideRight() {
    showUpHide();
    var temp = showUpHelper[showUpHelper.length - 1];
    showUpHelper.pop();
    showUpHelper.unshift(temp);
    setTimeout(function () {
      showUpShow();
    }, 50);
  }

  function slideLeft() {
    showUpHide();
    var temp = showUpHelper[0];
    showUpHelper.shift();
    showUpHelper.push(temp);
    setTimeout(function () {
      showUpShow();
    }, 50);
  }

  showSliderNextBtn.addEventListener('click', function () {
    return slideRight();
  });
  showSliderPrevBtn.addEventListener('click', function () {
    return slideLeft();
  }); //First screen video

  var videoFrame = document.querySelector(".overlay"),
      videoContent = document.querySelector("#frame"),
      closeBtn = videoFrame.querySelector(".close"),
      playBtn = document.querySelector("#showupVideo"); // playBtn.addEventListener('click', () => {
  //     videoContent.setAttribute('src', playBtn.getAttribute('data-url'));
  //     videoContent.addEventListener('load', () => {
  //         videoFrame.style.display = "flex";
  //     }, {once: true});
  // });

  playBtn.addEventListener('click', function () {
    videoContent.setAttribute('src', playBtn.getAttribute('data-url'));
    videoContent.addEventListener('load', function () {
      if (videoContent.getAttribute('src') != "none") {
        videoFrame.style.display = "flex";
      }
    });
  });
  closeBtn.addEventListener('click', function () {
    videoContent.setAttribute('src', 'none');
    videoFrame.style.display = "none";
  });
}

module.exports = showup;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map