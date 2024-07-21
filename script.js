// header

$(document).ready(function(){
    $('.header__burger').click(function(){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $(".header__link").click(function(){
        if ($(window).width() < 767){
        $('.header__menu').hide();
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').removeClass('lock');
    }
    }); 
    $(".header__logo").click(function(){
        if ($(window).width() < 992){
        $('.header__menu').hide();
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    }
    });
    $(".header__burger, .header__link, .header__logo").click(function(){
        $('.header__menu').show(); 
    });
}); 


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});

// header

// header show

$(document).ready(function() {
  $(".header__logo").addClass("show");
  $(".header__list li").each(function(index) {
      var $item = $(this);
      setTimeout(function() {
          $item.addClass("show");
      }, index * 200);
  });
});

// header show

// scroll

window.addEventListener('DOMContentLoaded', function() {
  reveal(true); // Call the reveal function once when the DOM content is loaded, passing true to indicate page load
});

window.addEventListener('scroll', function() {
  reveal(false); // Call the reveal function on scroll, passing false to indicate scroll
});

function reveal(isPageLoad) {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint || (isPageLoad && i === 0)) {
      reveals[i].classList.add('active-scroll');
    } else {
      reveals[i].classList.remove('active-scroll');
    }
  }
}

// scroll

// slider

let slideIndex = 1;
showSlides(slideIndex);

// Call plusSlides automatically every 5 seconds
let slideInterval = setInterval(() => {
  plusSlides(1);
}, 10000);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot_active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " dot_active";
}

// Function to pause the slideshow when mouse is over it
function pauseSlideshow() {
  clearInterval(slideInterval);
}

// Function to resume the slideshow when mouse leaves it
function resumeSlideshow() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 10000);
}


// slider

// view more

var items = document.querySelectorAll('.portfolio__item');
var btn = document.querySelector('.btn');
var currentIndex = 0;

// Function to reveal the next three items smoothly
function revealNextItems() {
    for (var i = currentIndex; i < currentIndex + 3; i++) {
        if (items[i]) {
            items[i].style.display = 'grid';
            // Adding a short delay for each item to create a smooth appearance
            setTimeout(function(item) {
                item.classList.add('active-item');
            }, 50 * (i - currentIndex), items[i]);
        }
    }
    currentIndex += 3;
    if (currentIndex >= items.length) {
        btn.style.display = 'none';
    }
}

// Initially reveal the first three items
revealNextItems();

// Event listener for the button click
btn.addEventListener('click', function() {
    revealNextItems();
});

// view more