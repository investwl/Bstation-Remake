const navigate = document.querySelectorAll('.other-vids-left')
navigate.forEach(function(div) {
  div.addEventListener('click', function() {
    window.location.href = 'video-page.html'
  })
})

const navigate2 = document.querySelectorAll('.other-vids-mid')
navigate2.forEach(function(div) {
  div.addEventListener('click', function() {
    window.location.href = 'video-page.html'
  })
})

const navigate3 = document.querySelectorAll('.other-vids-right')
navigate3.forEach(function(div) {
  div.addEventListener('click', function() {
    window.location.href = 'video-page.html'
  })
})

const navigate4 = document.querySelectorAll('.trendingpage-background-1-icon')
navigate4.forEach(function(div) {
  div.addEventListener('click', function() {
    window.location.href = 'video-page.html'
  })
})

function darkMode() {
  var element = document.querySelector('.header');
  element.classList.toggle("dark-header");
  element.classList.toggle("dark-navbar-link");
  element.classList.toggle("dark-login");
  element.classList.toggle("dark-sign-up");
  var elemBody = document.querySelector('.bodypage'); 
  elemBody.classList.toggle("dark-bodypage");
  var elemInputText = document.querySelector('.cari');
  elemInputText.classList.toggle("dark-cari");
  var elemInputBg = document.querySelector('.inputtext');
  elemInputBg.classList.toggle("dark-inputtext");
  var elemFooter = document.querySelector('.footer'); 
  elemFooter.classList.toggle("dark-footer");
  var elemCopyright = document.querySelector('.copyright'); 
  elemCopyright.classList.toggle("dark-copyright");
  var elemTrendText = document.querySelector('.other-trend-text'); 
  elemTrendText.classList.toggle("dark-other-trend-text");
}