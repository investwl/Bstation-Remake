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
    
}