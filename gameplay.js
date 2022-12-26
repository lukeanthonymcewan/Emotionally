var swiper = new Swiper(".swiper.levelone", {
  effect: "cards"
});
var swiper = new Swiper(".swiper.leveltwo", {
  effect: "cards"
});
var swiper = new Swiper(".swiper.levelthree", {
  effect: "cards"
});

//swiper.slideNext();

if (sessionStorage.getItem("firsttime") == null) {
  window.addEventListener("DOMContentLoaded", (event) => {
    $(".first-timer-wrapper").css("display", "flex");
    let firstTimeline = gsap.timeline({});
    firstTimeline.fromTo(
      ".first-timer-container",
      {
        opacity: 0,
        y: "+=100px"
      },
      {
        opacity: 1,
        y: "0px",
        duration: 1,
        delay: 0.5,
        ease: "power4.out"
      }
    );
    firstTimeline.fromTo(
      ".first-timer-title, .first-timer-subtitle, .first-timer-step, .okay-got-it",
      {
        opacity: 0,
        y: "+=40px"
      },
      {
        opacity: 1,
        y: "0px",
        duration: 1.5,
        delay: 0.7,
        stagger: 0.05,
        ease: "power4.out"
      },
      0
    );
  });

  $(".okay-got-it").on("click", function () {
    gsap.to(".first-timer-container", {
      y: "+=80px",
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      onComplete: hideFirstTimer
    });
  });

  function hideFirstTimer() {
    $(".first-timer-wrapper").hide();
    sessionStorage.setItem("firsttime", "true");
  }
}

$(".swiper-next").on("click", function () {
  swiper.slideNext();
});

$(".swiper-prev").on("click", function () {
  swiper.slidePrev();
});

// function howToPlayIntro() {
//   let rulesTl = gsap.timeline({});
//   $(".rules-container").css("display", "flex");
//   $(".rules-modal").css("display", "flex");
//   $(".rules-overlay").css("display", "block");
//   rulesTl.fromTo(
//     ".rules-container",
//     {
//       opacity: 0,
//       y: "+=40"
//     },
//     {
//       opacity: 1,
//       y: "-=40",
//       duration: 0.8
//     }
//   );
//   rulesTl.fromTo(
//     ".rules-overlay",
//     {
//       opacity: 0
//     },
//     {
//       opacity: 0.5,
//       duration: 0.8
//     }
//   );
//   rulesTl.fromTo(
//     ".rules-title",
//     {
//       opacity: 0,
//       y: "+=40"
//     },
//     {
//       opacity: 1,
//       delay: 0.6,
//       y: "-=40",
//       duration: 0.8
//     },
//     0
//   );
//   rulesTl.fromTo(
//     ".swiper-rules",
//     {
//       opacity: 0,
//       y: "+=40"
//     },
//     {
//       opacity: 1,
//       y: "-=40",
//       delay: 0.8,
//       duration: 0.8
//     },
//     0
//   );
//   rulesTl.fromTo(
//     ".swiper-dots",
//     {
//       opacity: 0,
//       y: "+=40"
//     },
//     {
//       opacity: 1,
//       y: "-=40",
//       delay: 1,
//       duration: 0.8
//     },
//     0
//   );
// }

//theme gameplay dependant on category

//gameplay-wrapper - background color
//gameplay-title - text should change
//swiper-slide - card color should match
//gameplay-card-copy - color of text should change
// variable to determine activeCategory
// if activeCategory is 'x', then set the correct cms category colors, text and title text

// level selector
//open level selector

let popupSecondaryColor = null;
let popupPrimaryColor = null;
let secondaryColor = $(".gameplay-wrapper").css("backgroundColor");
popupSecondaryColor = secondaryColor;

$(".in-game-level-button").on("click", function () {
  if (selectedLevel == 1) {
    $(levelOneItem).css("backgroundColor", popupSecondaryColor);
    $(".e-level1-heading").css("color", popupPrimaryColor);
    $(levelTwoItem).css("backgroundColor", "rgba(0, 0, 0, 0.0)");
    $(levelThreeItem).css("backgroundColor", "rgba(0, 0, 0, 0.0)");
  }
  if (selectedLevel == 2) {
    $(levelTwoItem).css("backgroundColor", popupSecondaryColor);
    $(".e-level2-heading").css("color", popupPrimaryColor);
    $(levelOneItem).css("backgroundColor", "rgba(0, 0, 0, 0.0)");
    $(levelThreeItem).css("backgroundColor", "rgba(0, 0, 0, 0.0)");
  }
  if (selectedLevel == 3) {
    $(levelThreeItem).css("backgroundColor", popupSecondaryColor);
    $(".e-level3-heading").css("color", popupPrimaryColor);
    $(levelOneItem).css("backgroundColor", "rgba(0, 0, 0, 0.0)");
    $(levelTwoItem).css("backgroundColor", "rgba(0, 0, 0, 0.0)");
  }
  $(".in-game-level-selection").css("display", "flex");
  $(".level-selector-container").show();
  $(".level-overlay").show();
  gsap.to(".in-game-level-selection", {
    top: 0,
    duration: 0.6,
    ease: "power4.out"
  });
  gsap.to(".level-overlay", {
    opacity: 0.5,
    duration: 0.6,
    ease: "power4.out"
  });
  gsap.to(".gameplay-wrapper", {
    filter: "blur(8px)",
    scale: 0.9,
    duration: 0.8,
    ease: "power2.out"
  });
});

$(".level-overlay, .save-level").on("click", function () {
  let closeTl = gsap.timeline({
    onComplete: hideLevelDivs
  });

  //switch card games
  if (selectedLevel == 1) {
    $(".swiper.levelone").show();
    setTimeout(() => {
      $(".swiper.leveltwo").hide();
      $(".swiper.levelthree").hide();
    }, "2000");
    gsap.to(".swiper.levelone", {
      opacity: 1,
      scale: 1,
      delay: 0.7,
      duration: 1.5,
      ease: "power2.out"
    });
    gsap.to(".swiper.leveltwo, .swiper.levelthree", {
      opacity: 0,
      scale: 1.2,
      delay: 0.7,
      duration: 1.5,
      ease: "power2.out"
    });
    gsap.to(".swiper.leveltwo, .swiper.levelthree", {
      scale: 0.8,
      delay: 2.2,
      duration: 0
    });
  }
  if (selectedLevel == 2) {
    $(".swiper.leveltwo").show();
    setTimeout(() => {
      $(".swiper.levelone").hide();
      $(".swiper.levelthree").hide();
    }, "2000");
    gsap.to(".swiper.leveltwo", {
      opacity: 1,
      scale: 1,
      delay: 0.7,
      duration: 1.5,
      ease: "power2.out"
    });
    gsap.to(".swiper.levelone, .swiper.levelthree", {
      opacity: 0,
      scale: 1.2,
      delay: 0.7,
      duration: 1.5,
      ease: "power2.out"
    });
    gsap.to(".swiper.levelone, .swiper.levelthree", {
      scale: 0.8,
      delay: 2.2,
      duration: 0
    });
  }
  if (selectedLevel == 3) {
    $(".swiper.levelthree").show();
    setTimeout(() => {
      $(".swiper.levelone").hide();
      $(".swiper.leveltwo").hide();
    }, "2000");

    gsap.to(".swiper.levelthree", {
      opacity: 1,
      scale: 1,
      delay: 0.7,
      duration: 1.5,
      ease: "power2.out"
    });
    gsap.to(".swiper.levelone, .swiper.leveltwo", {
      opacity: 0,
      scale: 1.2,
      delay: 0.7,
      duration: 1.5,
      ease: "power2.out"
    });
    gsap.to(".swiper.levelone, .swiper.leveltwo", {
      scale: 0.8,
      delay: 2.2,
      duration: 0
    });
  }
  closeTl.to(".in-game-level-selection", {
    top: "100vh",
    duration: 0.6,
    ease: "power1.out"
  });
  closeTl.to(
    ".level-overlay",
    {
      opacity: 0,
      duration: 0.6,
      ease: "power1.out"
    },
    0
  );
  closeTl.to(
    ".gameplay-wrapper",
    {
      filter: "blur(0px)",
      scale: 1,
      duration: 0.6,
      ease: "power1.out"
    },
    0
  );
});

function hideLevelDivs() {
  $(".in-game-level-selection").hide();
  $(".level-selector-container").hide();
  $(".level-overlay").hide();
}

//LEVEL FUNCTIONS
// Tap option level
let levelOneItem = document.querySelectorAll(".leveloneitem");
let levelTwoItem = document.querySelectorAll(".leveltwoitem");
let levelThreeItem = document.querySelectorAll(".levelthreeitem");
let selectedLevel = 1;

let levelButtonAnimation = "power4.out";
let levelButtonDuration = 0.5;

//if level 1 function
function levelOneSelected() {
  if (selectedLevel !== 1) {
    gsap.to(levelOneItem, {
      height: "106px",
      backgroundColor: popupSecondaryColor,
      border: 0,
      padding: 24,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level1-heading", {
      fontSize: 18,
      color: popupPrimaryColor,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level1-body-copy", {
      opacity: 1,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to([levelTwoItem, levelThreeItem], {
      height: "52px",
      backgroundColor: "rgba(255, 208, 249, 0)",
      border: 2,
      paddingTop: 12,
      paddingBottom: 12,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level2-heading, .e-level3-heading", {
      fontSize: 18,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level2-body-copy, .e-level3-body-copy", {
      opacity: 0,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level2-lv, .e-level3-lv", {
      backgroundColor: "#eeeeee",
      color: "#222222",
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level1-lv", {
      backgroundColor: "#AA399B",
      color: "#ffffff",
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    selectedLevel = "1";
    $(".in-game-level-copy").text("Level One");
  }
}

//if level 2 selected
function levelTwoSelected() {
  if (selectedLevel !== 2) {
    gsap.to(levelTwoItem, {
      height: "106px",
      backgroundColor: popupSecondaryColor,
      padding: 24,
      border: 0,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level2-heading", {
      fontSize: 18,
      color: popupPrimaryColor,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level2-body-copy", {
      opacity: 1,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to([levelOneItem, levelThreeItem], {
      height: "52px",
      backgroundColor: "rgba(255, 208, 249, 0)",
      border: 2,
      paddingTop: 12,
      paddingBottom: 12,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level1-heading, .e-level3-heading", {
      fontSize: 18,
      lineHeight: "24px",
      color: "#222222",
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level1-body-copy, .e-level3-body-copy", {
      opacity: 0,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level1-lv, .e-level3-lv", {
      backgroundColor: "#eeeeee",
      color: "#222222",
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level2-lv", {
      backgroundColor: "#AA399B",
      color: "#ffffff",
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    selectedLevel = "2";
    $(".in-game-level-copy").text("Level Two");
  }
}

//if level 3 selected
function levelThreeSelected() {
  if (selectedLevel !== 3) {
    gsap.to(levelThreeItem, {
      height: "106px",
      backgroundColor: popupSecondaryColor,
      padding: 24,
      border: 0,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level3-heading", {
      fontSize: 18,
      color: popupPrimaryColor,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level3-body-copy", {
      opacity: 1,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to([levelOneItem, levelTwoItem], {
      height: "52px",
      backgroundColor: "rgba(255, 208, 249, 0)",
      border: 2,
      paddingTop: 12,
      paddingBottom: 12,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level1-heading, .e-level2-heading", {
      fontSize: 18,
      lineHeight: "24px",
      color: "#222222",
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level1-body-copy, .e-level2-body-copy", {
      opacity: 0,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level1-lv, .e-level2-lv", {
      backgroundColor: "#eeeeee",
      color: "#222222",
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level3-lv", {
      backgroundColor: "#AA399B",
      color: "#ffffff",
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    selectedLevel = "3";
    $(".in-game-level-copy").text("Level Three");
  }
}

$(".leveloneitem").on("click", function () {
  levelOneSelected();
  console.log(selectedLevel);
});

$(".leveltwoitem").on("click", function () {
  levelTwoSelected();
  console.log(selectedLevel);
});

$(".levelthreeitem").on("click", function () {
  levelThreeSelected();
  console.log(selectedLevel);
});

// close gameplay

/////Code for animating back to cat page/////

let nextPageLink;

$(".close-gameplay").on("click", function (e) {
  e.preventDefault();
  nextPageLink = $(this).attr("href");

  //AJAX code
  $.ajax({
    url: nextPageLink,
    success: function (response) {
      let element = $(response).find(".content-wrapper-categories");
      $("body").append(element);
    },
    complete: function () {
      pageTransition();
      catSwiper();
      $(".return-overlay").show();
    }
  });
});

function pageTransition() {
  let tl = gsap.timeline({
    onComplete: updatePage
  });
  tl.to("body", {
    backgroundColor: "#f094e4",
    duration: 0.8,
    ease: "power3.out"
  });
  tl.to(
    ".content-container",
    {
      y: "110vh",
      scale: 1,
      duration: 0.8,
      ease: "power3.out"
    },
    0
  );
  tl.to(
    ".content-wrapper-categories",
    {
      scale: 1,
      duration: 0.8,
      ease: "power3.out"
    },
    0
  );
  tl.to(
    ".return-overlay",
    {
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    },
    0
  );
  // tl.to(
  //   "body",
  //   {
  //     background: "#ffd0f9",
  //     duration: 0.8,
  //     ease: "power3.out"
  //   },
  //   0
  // );
}

function updatePage() {
  window.location = nextPageLink;
}

///code for cat swiper////

function catSwiper() {
  var swiper = new Swiper(".swiper.swiper-category", {
    //slidesPerView: 4,
    initialSlide: 0,
    loop: false,
    speed: 500,
    pagination: {
      el: ".swiper-dots",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "</span>";
      }
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: "auto",
        centeredSlides: true
      },
      // when window width is >= 640px
      640: {
        slidesPerView: "auto",
        centeredSlides: true
      }
    }
  });
}
