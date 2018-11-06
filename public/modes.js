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
/******/ 	return __webpack_require__(__webpack_require__.s = "./modules.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules.js":
/*!********************!*\
  !*** ./modules.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var screens = document.querySelectorAll(".module"),
      moreTitleDiv = document.querySelectorAll(".module__info-show"),
      nextScrBtn = document.querySelectorAll(".next"),
      prevScrBtn = document.querySelectorAll(".prev"),
      mainScrBtn = document.querySelectorAll(".main-screen-path"),
      moduleShowMoreBtn = document.querySelectorAll("#modulePlus"),
      counterSrc = 0;
  mainScrBtn.forEach(function (item) {
    item.setAttribute("href", "./index.html#1");
  });
  nextScrBtn.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      counterSrc++;

      if (counterSrc == 8) {
        counterSrc = 0;
      }

      screens[counterSrc].scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  prevScrBtn.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      counterSrc--;

      if (counterSrc < 0) {
        counterSrc = 7;
      }

      screens[counterSrc].scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  moduleShowMoreBtn.forEach(function (item, i) {
    item.addEventListener('click', function () {
      var showMoreDiv = document.createElement("div");

      if (moreTitleDiv[i].classList.contains("module__info-show-accord")) {
        moreTitleDiv[i].removeChild(moreTitleDiv[i].children[2]);
        moreTitleDiv[i].classList.remove("module__info-show-accord");
      } else {
        moreTitleDiv[i].classList.add("module__info-show-accord");
        showMoreDiv.classList.add("txt");
        moreTitleDiv[i].appendChild(showMoreDiv);
        showMoreDiv.innerHTML = 'Let us show you more information about it';
      }
    });
  }); // Downloads

  var downloadBtn = document.querySelectorAll(".download");

  function downloadPdf(blob, fileName) {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  downloadBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      var xhr = new XMLHttpRequest();
      var requestUrl = "../schema robot.pdf";
      xhr.open("GET", requestUrl);
      xhr.responseType = "blob";

      xhr.onload = function () {
        downloadPdf(this.response, 'schema robot.pdf');
      };

      xhr.send();
    });
  }); // Video

  var videoFrame = document.querySelector(".overlay"),
      videoContent = document.querySelector("#frame"),
      closeBtn = videoFrame.querySelector(".close"),
      videoItemSecondary = document.querySelectorAll(".module__video > div:nth-child(2)"),
      videoTitleSecondary = document.querySelectorAll(".module__video > div:nth-child(2) > .play > .play__text"),
      playPrimaryBtn = document.querySelectorAll(".module__video > div:first-child > .play > .play__circle"),
      playSecondaryBtn = document.querySelectorAll(".module__video > div:nth-child(2) > .play > .play__circle"),
      urlVideo = document.querySelectorAll(".play");

  function changeStyleVideo(num) {
    var newBtn = playPrimaryBtn[0].cloneNode(true),
        svg = playSecondaryBtn[num].getElementsByTagName("svg");
    playSecondaryBtn[num].removeChild(svg[0]);
    playSecondaryBtn[num].appendChild(newBtn);
    playSecondaryBtn[num].classList.remove("closed");
    videoItemSecondary[num].style.filter = "none";
    videoItemSecondary[num].style.opacity = 1;
    videoTitleSecondary[num].classList.remove("attention");
    videoTitleSecondary[num].innerHTML = "play video";
  }

  function playVideo(num) {
    videoContent.setAttribute('src', urlVideo[num].getAttribute('data-url'));
    videoContent.addEventListener('load', function () {
      if (videoContent.getAttribute('src') != "none") {
        videoFrame.style.display = "flex";
      }
    });
    closeBtn.addEventListener('click', function () {
      videoContent.setAttribute('src', 'none');
      videoFrame.style.display = "none";
    });
  } // function playVideo(num){
  //     videoContent.setAttribute('src', urlVideo[num].getAttribute('data-url'));
  //     videoContent.addEventListener('load', () => {
  //         videoFrame.style.display = "flex";
  //     }, {once: true});
  //     closeBtn.addEventListener('click', () => {
  //         videoContent.setAttribute('src', 'none');
  //         videoFrame.style.display = "none";
  //     });
  // }


  playPrimaryBtn.forEach(function (item, i) {
    item.addEventListener('click', function () {
      if (playSecondaryBtn[i].classList.contains("closed")) {
        playVideo(i * 2);
        changeStyleVideo(i);
      } else {
        playVideo(i * 2);
      }
    });
  });
  playSecondaryBtn.forEach(function (item, i) {
    item.addEventListener('click', function () {
      if (!item.classList.contains("closed")) {
        playVideo(i * 2 + 1);
      }
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=modes.js.map