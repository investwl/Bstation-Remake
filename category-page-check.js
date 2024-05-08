const navigate = document.querySelectorAll('.video-card-exclusive')
navigate.forEach(function(div) {
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
  var elemFantasyText = document.querySelector('.fantasytext');
  elemFantasyText.classList.toggle("dark-fantasytext");
  var elemDramaText = document.querySelector('.dramatext');
  elemDramaText.classList.toggle("dark-dramatext");
  var elemActionText = document.querySelector('.actiontext');
  elemActionText.classList.toggle("dark-actiontext");
  var elemAnimeText = document.querySelector('.animetext');
  elemAnimeText.classList.toggle("dark-animetext");
  var elemFooter = document.querySelector('.footer'); 
  elemFooter.classList.toggle("dark-footer");
  var elemCopyright = document.querySelector('.copyright'); 
  elemCopyright.classList.toggle("dark-copyright");
}