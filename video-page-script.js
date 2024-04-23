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

const navigate = document.querySelectorAll('.vids')
navigate.forEach(function(div) {
  div.addEventListener('click', function() {
    window.location.href = 'video-page.html'
  })
})