const navigate = document.querySelectorAll('.vids')
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
  var elemLeftButton = document.querySelector('.pfp-btn');
  elemLeftButton.classList.toggle("dark-pfp-btn");
  var elemRightButton = document.querySelector('.pfp-btn2');
  elemRightButton.classList.toggle("dark-pfp-btn2");
  var elemMostViewed = document.querySelector('.most-viewed');
  elemMostViewed.classList.toggle("dark-most-viewed");
  var elemFooter = document.querySelector('.footer'); 
  elemFooter.classList.toggle("dark-footer");
  var elemCopyright = document.querySelector('.copyright'); 
  elemCopyright.classList.toggle("dark-copyright");
}