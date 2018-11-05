window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let forms = require("./parts/forms"),
        screens = require("./parts/screens"),
        showup = require("./parts/showup"),
        differences = require("./parts/differences"),
        modslider = require("./parts/modslider.js"),
        feed = require("./parts/feed");


    forms();
    screens();
    showup();
    differences();
    modslider();
    feed();

});