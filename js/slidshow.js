var slideIndex1 = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;
var slideIndex4 = 0;
carousel();

function carousel() {
  var i;
  var slides1 = document.getElementsByClassName("slideshow1");
  var slides2 = document.getElementsByClassName("slideshow2");
  var slides3 = document.getElementsByClassName("slideshow3");
  var slides4 = document.getElementsByClassName("slideshow4");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";  
  }
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
  slides1[slideIndex1-1].style.display = "block";  
  slideIndex2++;
  if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
  slides2[slideIndex2-1].style.display = "block";  
  slideIndex3++;
  if (slideIndex3 > slides3.length) {slideIndex3 = 1}    
  slides3[slideIndex3-1].style.display = "block";  
  slideIndex4++;
  if (slideIndex4 > slides4.length) {slideIndex4 = 1}    
  slides4[slideIndex4-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}