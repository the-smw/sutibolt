// 1. Slideshow gallery



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




// 2. Feedback toggle

$(document).ready(function(){
  $(".fb-toggle").click(function(){
    $(".fb-box").toggle();
  });
});





// Scroll To Top Button

const scrollToTopButton = document.getElementById('js-top');

const scrollFunc = () => {
  let y = window.scrollY; 
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};


window.addEventListener("scroll", scrollFunc);


const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {   window.requestAnimationFrame(scrollToTop);
              window.scrollTo(0, c - c / 30);
  }
};


scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}





// Cookie container

$(document).ready(function(){   
  if (window.localStorage.getItem('accept_cookies')) {
        $(".cookie-container").hide();
    }
  
    $(".cookie-btn").click(function() {
   window.localStorage.setItem('accept_cookies', true);
        $(".cookie-container").fadeOut(1000);
    }); 
}); 




