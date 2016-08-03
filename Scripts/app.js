/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression

//Tetiana Reznychenko, 300870231, Mini portfolio.
(function(){
    "use strict";
    
    var paragraphOne = document.getElementById("paragraphOne");
    var paragraphTwo = document.getElementById("paragraphTwo");
    var paragraphThree = document.getElementById("paragraphThree");
    
    //define paragraphs array
    var paragraphs = [];
    
        // create a reference to the sendButton
    var sendButton = document.getElementById("sendButton");
    
    // check to see if sendButton exists
    if(sendButton) {
        // event listener
        sendButton.addEventListener("click", sendButtonClick);
    }
    
    
    // event handler function
    function sendButtonClick(event) {
        console.log("clicked!");
    }
    
    // create a reference to the firstName field
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var contactNumber = document.getElementById("contactNumber");
    var message = document.getElementById("message");    
    
    // create a reference to the form
    var contactForm = document.getElementById("contactForm");
    
    
    if(contactForm) {
        // event listener with inline anonymous event handler function
        contactForm.addEventListener("submit", function(event){
            event.preventDefault();
            console.log("submitted");
            showFormInput();
            contactForm.reset();
        });
    }
    
    /**
     * This function shows the input from each form field 
     * on the console
     * 
     * @method showFormInput
     * @return {void} 
     */
    function showFormInput() {
        console.log("********************************");
        console.log("First Name: " + firstName.value);
        console.log("********************************");

        console.log("Last Name: " + lastName.value);
        console.log("********************************");
        
        console.log("Email: " + email.value);
        console.log("********************************");

        console.log("Contact Number: " + contactNumber.value);
        console.log("********************************");   

        console.log("Message: " + message.value);
        console.log("********************************");               

    }























    //data for my pages
    paragraphs[0] = "</br> Hi, I am Tetiana.</br> I am a student of Centennial College. My program is Software Engineering Technician.</br> I am from Ukraine. I am 23 years old. Previously I studied at Kiev National Economic University. I have a Master degree in Economics and I worked in a transport company for few years as a Project manager.</br> </br> <center>The quotes that can describe me: </br> <i>Oh, Mario. If only I could control everyone the way I control you.</i></br> © Dr. Sheldon Cooper. </br></br> <i>Do not be silly, I am a fan of anything that tries to replace actual human contact.</i> </br> © Dr. Sheldon Cooper.</center>";
    paragraphs[1] = "</br> 1. I wrote a detective novel “Crownless again shall be the king” and it was published . </br> Annotation: </br>Are you ready to face the unfavorable conditions? Can you sacrifice your peaceful life and become your enemy`s shadow? </br> Are you ready to accept that you have made the biggest mistake in your life, even if you believed in happy endings for a while? </br> Capitan Thomas Walker has been one of the best detectives in New Scotland Yard. However, now confused and tangled, </br>he can`t find the killer. Experience, money, and logic are simply powerless. Maybe something similar was already in the past.</br> It is time to figure it out. </br></br> 2.  The biggest project I was involved, was the replacement of the cement production technology at one of the Ukrainian plants. </br> </br> 3. A long time ago I was interested in the field investments. I even wrote some articles about investment strategy.  </br>";
    paragraphs[2] = "<center></br>To contact me just fill the simple form or find me in social medias.</center></br>";

    
    // check to see if paragraph one exists
    if (paragraphOne){
        paragraphOne.innerHTML = paragraphs[0];

    }
    
    if (paragraphTwo){
        paragraphTwo.innerHTML = paragraphs[1];

    }
    
    if (paragraphThree){
        paragraphThree.innerHTML = paragraphs[2];

    }

    
    
})();