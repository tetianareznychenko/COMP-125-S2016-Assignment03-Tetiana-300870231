/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression

//Tetiana Reznychenko, 300870231, Mini portfolio.
    
(function () {
    "use strict";

    var xhrParagraphs;
    // we can use a named function instead of an anonymous function
    function readData() {
        // data loaded                everything is ok
        if ((xhrParagraphs.readyState === 4) && (xhrParagraphs.status === 200)) {

            var paragraphs = JSON.parse(xhrParagraphs.responseText);
            var paragraphsForPages = paragraphs.paragraphsForPages;

            paragraphsForPages.forEach(function (paragraphsForPages) {
            document.getElementById("paragraphOne").appendChild(paragraphsForPages);
            document.getElementById("paragraphTwo").appendChild(paragraphProjectPage);
            document.getElementById("paragraphThree").appendChild(paragraphContact);    
            },);

        }
    }


    function readParagraphs() {
        xhrParagraphs = new XMLHttpRequest(); // step 1 - create xhr object
        xhrParagraphs.open("GET", "Scripts/paragraphs.json", true); // step 2 - open request
        xhrParagraphs.send(null); // step 3 - send request
        xhrParagraphs.addEventListener("readystatechange", readData); // step 4
    }

    function init() {

        
        readData();
    }
    // call init funciton when window finishes loading
    window.addEventListener("load", init);


   
   
})();