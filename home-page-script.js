
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

function toggleRec() {
  var rec = document.querySelector('.vids')
  var expand = document.querySelector('.rec-show-more')
  var txt = expand.querySelector('a')
  var img = expand.querySelector('img')
  rec.classList.toggle('more')
  if (rec.classList.contains('more')) {
      rec.style.height = 'auto'
      rec.style.paddingBottom = '45px'
      txt.textContent = 'Show less'
      img.src = "images/chevron-up.svg"
  } else {
      rec.style.height = '480px'
      rec.style.paddingBottom = '0px'
      txt.textContent = 'Show more'
      img.src = "images/chevron-down.svg"
  }
}