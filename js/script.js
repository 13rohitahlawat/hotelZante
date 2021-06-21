const navBtn = document.querySelector(".nav-btn");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".slider");
const numberOfSlides = slides.length;
let slideNumber = 0;

navBtn.addEventListener("click", () => {
  const sideNavbar = document.querySelector(".sideNavbar");
  sideNavbar.style.transform = "translateX(0%)";
});

closeBtn.addEventListener("click", () => {
  const sideNavbar = document.querySelector(".sideNavbar");
  sideNavbar.style.transform = "translateX(100%)";
});

/************ slider ****************/
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideNumber++;

  if (slideNumber > numberOfSlides - 1) {
    slideNumber = 0;
  }
  slides[slideNumber].classList.add("active");
});

prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }
  slides[slideNumber].classList.add("active");
});

/*********autoplay********** */
let playSlider;

const repeater = () => {
  playSlider = setInterval(function () {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > numberOfSlides - 1) {
      slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
  }, 4000);
};
repeater();

/************pause slide show when mouse on buttons */
nextBtn.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});
nextBtn.addEventListener("mouseout", () => {
  repeater();
});
prevBtn.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});
prevBtn.addEventListener("mouseout", () => {
  repeater();
});

/*****************services section*********** */

const imageCaption = document.querySelectorAll(".innerImg-caption");
const imgSlider = document.querySelectorAll(".img-slider");
let imgSlideNumber = 0;
let imgCaptionNumber = 0;

for (let i = 0; i < imageCaption.length; i++) {
  imageCaption[i].addEventListener("click", () => {
    // console.log(imageCaption[i]);
    imageCaption.forEach((caption) => {
      caption.classList.remove("activee");
    });
    imageCaption[i].classList.add("activee");

    imgSlider.forEach((imgSlide) => {
      imgSlide.classList.remove("active");
    });
    imgSlideNumber++;
    if (imgSlideNumber > imgSlider.length - 1) {
      imgSlideNumber = 0;
    }
    imgSlider[imgSlideNumber].classList.add("active");
    // console.log(imgSlideNumber);
  });
}
//-----------autoplay--------//

let playService;

const autoplay = () => {
  playService = setInterval(function () {
    imageCaption.forEach((caption) => {
      caption.classList.remove("activee");
    });
    imgCaptionNumber++;
    if (imgCaptionNumber > imageCaption.length - 1) {
      imgCaptionNumber = 0;
    }
    imageCaption[imgCaptionNumber].classList.add("activee");
    //--------------------------------------//
    imgSlider.forEach((imgSlide) => {
      imgSlide.classList.remove("active");
    });
    imgSlideNumber++;
    if (imgSlideNumber > imgSlider.length - 1) {
      imgSlideNumber = 0;
    }
    imgSlider[imgSlideNumber].classList.add("active");
    console.log(imgSlideNumber);
  }, 4000);
};
autoplay();
