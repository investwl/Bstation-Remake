<<<<<<< HEAD
function toggleDescription() {
    var descContainer = document.querySelector('.video-desc-container')
    var desc = document.querySelector('.video-desc')
    var btn = document.querySelector('.show-btn')
    desc.classList.toggle('expanded')
    if (desc.classList.contains('expanded')) {
        descContainer.style.height = 'auto'
        desc.style.maskImage = 'linear-gradient(to bottom, black, black)'
        btn.style.position = 'relative'
        btn.textContent = 'Show less'
    } else {
        descContainer.style.height = '50px'
        desc.style.maskImage = 'linear-gradient(to bottom, black, transparent)'
        btn.style.position = 'absolute'
        btn.textContent = 'Show more'
    }
}

function downloaded() {
    var dwl = document.querySelector('.dwl')
    var txt = dwl.querySelector('div')
    var img = dwl.querySelector('img')
    dwl.classList.toggle('clicked1')
    if (dwl.classList.contains('clicked1')) {
        img.src = "images/check-circle.svg"
        txt.textContent = "Downloaded"
    } else {
        img.src = "images/arrow-down-circle.svg"
        txt.textContent = "Download"
    }
}

function saved() {
    var save = document.querySelector('.save')
    var txt = save.querySelector('div')
    var img = save.querySelector('img')
    save.classList.toggle('clicked2')
    if (save.classList.contains('clicked2')) {
        img.src = "images/bookmarked.svg"
        txt.textContent = "Saved"
    } else {
        img.src = "images/bookmark.svg"
        txt.textContent = "Save"
    }
}

function next() {
    var list = document.querySelector('.related-vids')

    list.scrollBy({
        left: 1430,
        behavior: "smooth"
    })
}

function prev() {
    var list = document.querySelector('.related-vids')

    list.scrollBy({
        left: -1430,
        behavior: "smooth"
    })
}
=======
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}
>>>>>>> 44d2ecdb367475dcd3c920be7bd0ca8296cbbbcc
