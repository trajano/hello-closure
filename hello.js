goog.provide('myproject.start');

goog.require('goog.dom');

myproject.start = function () {
    "use strict";
    var newHeader = goog.dom.createDom('h1', {'style': 'background-color:#EEE'},
        'Hello world!');
    goog.dom.appendChild(document.body, newHeader);
}

goog.exportSymbol('myproject.start', myproject.start);
