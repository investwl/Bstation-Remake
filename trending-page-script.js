const navigate = document.querySelectorAll('.')
navigate.forEach(function(div) {
  div.addEventListener('click', function() {
    window.location.href = 'video-page.html'
  })
})