/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression

//Tetiana Reznychenko, 300870231, Mini portfolio.
//Date: August 08, 2016 
//Description: JavaScript code to read
//paragraph data from a JSON file using AJAX and populate your page with this data 

(function () {
    "use strict";

    var xhrParagraphs;

//This is for reading the data and append data to ID. 

    function readData() {
        // data loaded                everything is ok
        if ((xhrParagraphs.readyState === 4) && (xhrParagraphs.status === 200)) {

            var text = JSON.parse(xhrParagraphs.responseText);
            var paragraphs = text.paragraphs;
            
            // define paragraphs array;
            var content = [];
            
            // data for pages
            content[0] = text.paragraphs.document.getElementById("intro").innerHTML;
            content[1] = text.paragraphs.document.getElementById("projects").innerHTML;
            content[2] = text.paragraphs.document.getElementById("contacts").innerHTML;
             // check to see if paragraph one exists
    for (var index = 0; index < content.length; index++) {
        if(content[index]) {
         content[index].textContent = paragraphs[index];
        }
    }
        }
    }
   function readParagraphs() {
        xhrParagraphs = new XMLHttpRequest(); // step 1 - create xhr object
        xhrParagraphs.open("GET", "Scripts/paragraphs.json", true); // step 2 - open request
        xhrParagraphs.send(null); // step 3 - send request
        xhrParagraphs.addEventListener("readystatechange", readData); // step 4
    }

    // app entry function
    function init() {
        readParagraphs();
    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);
  
})();