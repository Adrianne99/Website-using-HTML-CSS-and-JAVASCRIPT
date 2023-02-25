let hamburger = document.querySelector('.hamburger');
let navbarMenuu = document.querySelector('.nav-1');
let navbarMenu = document.querySelector('.nav-2');

hamburger.addEventListener('click', function(){
    navbarMenuu.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});


$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
})