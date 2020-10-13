var slideIndex = 1;
  var millis = 5000;
  var interval;
  
  startSlides();
  
  function startSlides(){
    pauseSlides();
    nextSlide();
    interval = setInterval(nextSlide, millis);
  }


  function resumeSlides() {
    nextSlide();
  }

  function pauseSlides() {
    clearInterval(interval);
  }

  function nextSlide() {
    showSlide();
    slideIndex++;
  }

  function plusSlides(n) {
    clearInterval(interval);
    slideIndex += n;
    nextSlide();
    interval = setInterval(nextSlide, millis);
  }

  function currentSlide(n) {
    clearInterval(interval);
    slideIndex = n + 1;
    nextSlide();
    interval = setInterval(nextSlide, millis);
  }

  function showSlide() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

