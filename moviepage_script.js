document.addEventListener("DOMContentLoaded", function() {
    let viewers = 4200000;
    let thumbsUp = 69;
    let thumbsDown = 31;

    function formatViewers(count){
        if(count<1000) return count;
        if(count<1000000) return (count/1000).toFixed(1) + "K";
        if(count<1000000000) return (count/1000000).toFixed(1) + "M";
        if(count<1000000000000) return (count/1000000000).toFixed(1) + "B";
    }

    function updateViewers(){
        const viewersText = document.querySelector(".viewers-ratings .views");
        viewersText.textContent = formatViewers(viewers) + " viewers";
    }

    function updateRatings(){
        const totalRates = thumbsUp + thumbsDown;
        let like = 0;
        if(totalRates==0){
            like = 0;
        } else{
            like = (thumbsUp/totalRates) * 100;
        }
        let dislike = 0;
        if(totalRates==0){
            dislike = 0;
        } else{
            dislike = (thumbsDown/totalRates) * 100;
        }

        const likeRate = document.querySelectorAll(".viewers-ratings .rate")[0];
        const dislikeRate = document.querySelectorAll(".viewers-ratings .rate")[1];

        likeRate.textContent = `${like.toFixed(0)}%`;
        dislikeRate.textContent = `${dislike.toFixed(0)}%`;
    }

    function createReview(username, reviewText){
        const review = document.createElement("div");
        review.classList.add("posted-review");

        const userProfile = document.createElement("div");
        userProfile.classList.add("user-profile");
        userProfile.innerHTML = `
            <i class="fas fa-user"></i>
            <span class="username">${username}</span>
            <i class="fas fa-thumbs-up"></i>
            <span class="time">Just now</span>
        `;
        review.appendChild(userProfile);

        const reviewContent = document.createElement("div");
        reviewContent.classList.add("review-content");
        reviewContent.innerHTML = `<p>${reviewText}</p>`;
        review.appendChild(reviewContent);

        return review;
    }

    const sendReview = document.querySelector(".post-review");
    sendReview.addEventListener("click", function(){
        const inputReview = document.querySelector(".input-review");
        const reviewText = inputReview.value.trim();
        if(reviewText!==""){
            const username = "You";
            const newReview = createReview(username, reviewText);
            const otherReviews = document.querySelector(".other-review");
            otherReviews.insertBefore(newReview, otherReviews.firstChild);
            inputReview.value = "";
        }
    });

    const thumbsUpButton = document.querySelector(".fa-thumbs-up");
    thumbsUpButton.addEventListener("click", function(){
        thumbsUp++;
        updateRatings();
    });
    
    const thumbsDownButton = document.querySelector(".fa-thumbs-down");
    thumbsDownButton.addEventListener("click", function(){
        thumbsDown++;
        updateRatings();
    });

    const moviePlayer = document.querySelector(".movie-player video");
    moviePlayer.addEventListener("play", function(){
        viewers++;
        updateViewers();
    });

    updateViewers();
    updateRatings();

    const showMore = document.querySelector(".movie-desc .show-more");
    const desc = document.querySelector(".movie-desc .description");

    showMore.addEventListener("click", function(){
        if(desc.classList.contains("expanded")){
            desc.classList.remove("expanded");
            showMore.innerHTML = "Show More <i class='fas fa-angle-down'></i>";
        } else{
            desc.classList.add("expanded");
            showMore.innerHTML = "Show Less <i class='fas fa-angle-up'></i>";
        }
    });
});

const navigate = document.querySelectorAll('.card-list')
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
    var elemInputReview = document.querySelector('.input-review');
    elemInputReview.classList.toggle("dark-input-review");
    var elemFooter = document.querySelector('.footer'); 
    elemFooter.classList.toggle("dark-footer");
    var elemCopyright = document.querySelector('.copyright'); 
    elemCopyright.classList.toggle("dark-copyright");
}