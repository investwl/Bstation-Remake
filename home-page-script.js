
let slideIndex = 0;
let mainSlideIndex = 0;
showMainSlides();
showSlides();

function showMainSlides() {
  let i;
  let slides = document.getElementsByClassName("mainslide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  mainSlideIndex++;
  if (mainSlideIndex > slides.length) {mainSlideIndex = 1}    
  slides[mainSlideIndex-1].style.display = "block";  
  setTimeout(showMainSlides, 3000);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000);
}

