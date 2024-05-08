
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

const navigate = document.querySelectorAll('.vids')
navigate.forEach(function(div) {
  div.addEventListener('click', function() {
    window.location.href = 'video-page.html'
  })
})

function toggleRec() {
  var rec = document.querySelector('.recommend-vids')
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

function darkMode() {
  var element = document.querySelector('.header');
  element.classList.toggle("dark-header");
  element.classList.toggle("dark-navbar-link");
  element.classList.toggle("dark-login");
  element.classList.toggle("dark-sign-up");
  var elemInputText = document.querySelector('.cari');
  elemInputText.classList.toggle("dark-cari");
  var elemInputBg = document.querySelector('.inputtext');
  elemInputBg.classList.toggle("dark-inputtext");
  var elemForYou = document.querySelector('.for-you-text');
  elemForYou.classList.toggle("dark-for-you-text");
  var elemForYou = document.querySelector('.trending-text'); 
  elemForYou.classList.toggle("dark-trending-text");
  var elemTop5 = document.querySelector('.top5-text'); 
  elemTop5.classList.toggle("dark-top5-text");
  var elemBody = document.querySelector('.bodypage'); 
  elemBody.classList.toggle("dark-bodypage");
  var elemRecentAdd = document.querySelector('.recently-added-text'); 
  elemRecentAdd.classList.toggle("dark-recently-added-text");
  var elemFooter = document.querySelector('.footer'); 
  elemFooter.classList.toggle("dark-footer");
  var elemCopyright = document.querySelector('.copyright'); 
  elemCopyright.classList.toggle("dark-copyright");
}