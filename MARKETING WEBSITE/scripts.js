//Function expression to select elements.
const selectElement = (s) => document.querySelector(s);


//Open the menu on click
selectElement('.open').addEventListener('click', () => {
  selectElement('.nav-list').classList.add('active');
});


//Close the menu on click
selectElement('.close').addEventListener('click', () => {
  selectElement('.nav-list').classList.remove('active');
});

//function to control the button for the opening the registration form
function openForm() {
  document.getElementById("myForm").style.display = "block";
  }
  function closeForm() {
  document.getElementById("myForm").style.display = "none";
  }
  function myFunction() {
  alert("Congratulations,You have been registered!");
  }
  function myFunction2() {
    alert("Submitted!");
    }
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

