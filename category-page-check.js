const navigate = document.querySelectorAll('.video-card-exclusive')
navigate.forEach(function(div) {
  div.addEventListener('click', function() {
    window.location.href = 'video-page.html'
  })
})