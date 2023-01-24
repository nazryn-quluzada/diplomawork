function scrollWin(){
    window.scrollTo(0, 650);
}

/* When the user scrolls down  from the top of the document, show the button */
window.onscroll = function () { scrollFunction() };



//Get the button
let mybutton = document.getElementById("myBtn");




//For Course Button
let Button = document.getElementById('submit')
function myFunc(){
    alert('Your Comment Has Been Sent')
   
}

//For Contact Button
let message = document.getElementById('submit')

function myMessage(){
    alert('Your Message Has Been Sent')
    window.onload("load", (event) => {

    })
}


//Scroll
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Accordion

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/*JS for Toggle Menu For small screens*/
let navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}