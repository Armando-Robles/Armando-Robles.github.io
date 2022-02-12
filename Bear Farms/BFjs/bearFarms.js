"use strict";
/*********************************************************************
***
*Original Author: Armando Robles                                   *
*Date Created: 1/19/2022                                      *
*Version:1.00                                                *
*Date Last Modified:1/28/2022                              *
*Modified by:  Armando Robles                                        *
*Modification log:                                  *
*1/21/2022: Basic alert system informing the client that the website is incomplete.*
*1/28/2022: Added JS for slide show (which isnt working yet), FAQs, Contact us and Newletter*
******************************************************************** */

//Java for slideshow with buttons
$(document).ready( () => {

    const slider = $("#image_list");      // slider = ul element

    // the click event handler for the right button
    $("#right_button").click( () => { 

        // get value of current left property
        const leftProperty = parseInt(slider.css("left"));
        
        // determine new value of left property
        let newLeftProperty = 0;
        if (leftProperty - 300 > -1500) {
            newLeftProperty = leftProperty - 300;
        }
        
        // use the animate function to change the left property
        slider.animate({left: newLeftProperty}, 1000);    
    }); 
    
    // the click event handler for the left button
    $("#left_button").click( () => {
    
        // get value of current left property
        const leftProperty = parseInt(slider.css("left"));
        
        // determine new value of left property
        let newLeftProperty = 0;
        if (leftProperty < 0) {
            newLeftProperty = leftProperty + 100;
        } else {
            newLeftProperty = -800 //displays last book in the carousel
        }
        
        // use the animate function to change the left property
        slider.animate({left: newLeftProperty}, 1000);
    });

});

//
//
//
// This is the Javascript for the Newsletter sign up
//
//

// const $ = selector => document.querySelector(selector);
$(document).ready(() => {
    $("#join_news").click( () => {
        const email = $("#news_email").value;
        // constant to verify if legit email
        const verifyCom = email.substr(email.length - 4, 4);
        //Looking for that @
        const verifyAt = email.search("@");
        let msg = "";
        //check it check it
        if (verifyCom == ".com" && verifyAt != -1) {
            msg = "Thank you for joining our newsletter!";
        } else {
            msg = "Please enter a valid email.";
        }
        alert(msg);
        $("#news_email").value = "";
        $("#news_email").focus();
    });
});
//
//
//
//This one here is the FAQs Javascript
//
//
// //
// const toggle = evt => {
//     const linkElement = evt.currentTarget;      //get the clicked a element
//     const h2Element = linkElement.parentNode;                 // get the h2 parent element
//     const divElement = h2Element.nextElementSibling;     // get h2's sibling div

//     // h2Element.classList.toggle("minus");
//     if (h2Element.hasAttribute("class")) {
//         h2Element.removeAttribute("class");
//     } else {
//         h2Element.className="minus";
//     }
//     // divElement.classList.toggle("open");
//     if (divElement.hasAttribute("class")) {
//         divElement.removeAttribute("class");
//     } else {
//         divElement.className="open";
//     }

//     evt.preventDefault();   // cancel default action of <a> tag
// };

// document.addEventListener("DOMContentLoaded", () => {
//     // get the a tags
//     const linkElements = faqs.querySelectorAll("#faqs a");

//     // attach event handler for each a tag	    
//     for (let linkElement of linkElements) {
//         linkElement.addEventListener("click", toggle);
//     }
//     // set focus on first <a> tag
//     linkElements[0].focus();
// });
// //
// //
// //
// //This is the Contact Us page JavaScript
// //
// //
// //
// const displayErrorMsgs = msgs => {
//     // create a new ul element
//     const ul = document.createElement("ul");
//     ul.classList.add("messages");

//     // create a new li element for each error message, add to ul
//     for (let msg of msgs) {
//         const li = document.createElement("li");
//         const text = document.createTextNode(msg);
//         li.appendChild(text);
//         ul.appendChild(li);
//     }

//     // if ul node isn't in document yet, add it
//     const node = $("ul");
//     if (node == null) {
//         // get the form element 
//         const form = $("form");

//         // add ul to parent of form, before the form
//         form.parentNode.insertBefore(ul, form);
//     } else {
//         // replace existing ul node
//         node.parentNode.replaceChild(ul, node);
//     }  
// }

// const processEntries = () => {
//     // get form controls to check for validity
//     const email = $("#email_address");
//     const phone = $("#phone");
//     const country = $("#country");
//     const terms = $("#terms");
//     const comment = $("#comment")

//     // create array for error messages
//     let msgs = "";

//     // check user entries for validity
//     if (email.value == "") {
//         msgs += "Please enter an email address.\n";
//     } 
//     if (phone.value == "") {
//         msgs += "Please enter a mobile phone number.\n"; 
//     } 
//     if (comment.value == "") {
//         msgs += "Please enter a comment.\n"; 
//     }
//     if (country.value == "") {
//         msgs += "Please select a country.\n";
//     } 
//     if (terms.checked == false) {
//         msgs += "You must agree to the terms of service.\n"; 
//     }

//     // submit the form or notify user of errors
//     if (msgs.length == 0) {  // no error messages
//         alert("Thank you for reaching out to us!");
//         resetForm(); 
//     } else {
//         alert(msgs);
//     }
// };

// const resetForm = () => {
//     $("form").reset();
    
//     // remove error messages
//     $("ul").remove();
    
//     $("#email_address").focus();
// };

// document.addEventListener("DOMContentLoaded", () => {
//     $("#register").addEventListener("click", processEntries);
//     $("#reset_form").addEventListener("click", resetForm);  
//     $("#email_address").focus();   
// });
// //
// //
// //This here is for the Slideshow
// //
// //
    
// const imageCache = [];
// let imageCounter = 0;
// let timer = null;
// let image = null;

// const mainImage = $("#main_image");   // the img element for the show
// const caption = $("#caption");        // the h2 element for the caption

// const runSlideShow = function() {
//     imageCounter = (imageCounter + 1) % imageCache.length;
//     image = imageCache[imageCounter];
//     mainImage.src = image.src;
//     mainImage.alt = image.alt;
//     caption.textContent = image.alt;
// };
         
// document.addEventListener("DOMContentLoaded", () => {
//     const links = $("#image_list").querySelectorAll("a");
    
//     // process image links
//     for ( let link of links ) {
//         // Preload image and copy title properties
//         image = new Image();
//         image.src = link.href;
//         image.alt = link.title;

//         // add image to array 
//         imageCache[imageCache.length] = image;
//     }

//     // attach start and pause event handlers
//     $("#start").addEventListener("click", () => {
//         runSlideShow();
//         timer = setInterval(runSlideShow, 2000);
//         $("#start").disabled=true;
//         $("#pause").disabled=false;
//     });
//     $("#pause").addEventListener("click", () => {
//         clearTimeout(timer);
        
//         $("#start").disabled=false;
//         $("#pause").disabled=true;
//     });
// });
