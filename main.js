window.onload = function () {
  const loaderContainer =
    document.getElementsByClassName("loader-container")[0];
  loaderContainer.classList.add("hidden");
};

function zoomImg() {
  let img = document.getElementById("tv-image");
  img.classList.add("zoom-in-tv");
}
window.addEventListener("scroll", function (e) {
  if (window.scrollY > 330) {
    zoomImg();
  }
});

const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const indicatorParents = document.querySelector(".controls ul");
let sectionIndex = 0;

function setIndex() {
  document.querySelector(".controls .selected").classList.remove("selected");
  slider.style.transform = "translate(" + sectionIndex * -33.33 + "%)";
}

function moveSlider(direction) {
  if (direction === "left") {
    sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add("selected");
  } else if (direction === "right") {
    sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 2;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add("selected");
  }
}

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", () => {
    sectionIndex = ind;
    setIndex();
    indicator.classList.add("selected");
  });
});

leftArrow.addEventListener("click", () => {
  moveSlider("left");
});

rightArrow.addEventListener("click", () => {
  moveSlider("right");
});

const carousel = document.querySelector(".carousel");
let initialPosition = null;
let moving = false;

function gestureDown(e) {
  initialPosition = e.pageX;
  moving = true;
}
function gestureMove(e) {
  if (moving) {
    const currentPosition = e.pageX;
    const diff = currentPosition - initialPosition;
    if (diff < 0) {
      moveSlider("right");
    } else {
      moveSlider("left");
    }
    moving = false;
  }
}

if (window.PointerEvent) {
  slider.addEventListener("pointerdown", gestureDown);
  slider.addEventListener("pointermove", gestureMove);
} else {
  slider.addEventListener("touchdown", gestureDown);
  slider.addEventListener("touchmove", gestureMove);
  slider.addEventListener("mousedown", gestureDown);
  slider.addEventListener("mousemove", gestureMove);
}

const burger = document.getElementById("check");

const home = document.getElementById("js-home");

const about = document.getElementById("js-about");

const services = document.getElementById("js-services");

const tariffs = document.getElementById("js-tariffs");

const payments = document.getElementById("js-payments");

const contact = document.getElementById("js-contact");

// console.log(burger);

// burger.addEventListener("change",(event) => {
//   console.log(event.currentTarget.checked);

// })

home.addEventListener("click", (event) => {
  // console.log("test");
  burger.checked = false;
});

about.addEventListener("click", (event) => {
  burger.checked = false;
});

services.addEventListener("click", (event) => {
  burger.checked = false;
});

tariffs.addEventListener("click", (event) => {
  burger.checked = false;
});

payments.addEventListener("click", (event) => {
  burger.checked = false;
});

contact.addEventListener("click", (event) => {
  burger.checked = false;
});

const inputName = document.querySelector("#name")
const inputTel = document.querySelector("#tel")

function sendMessage() {
  (function () {
    emailjs.init("Z_VvQcFgUWF6vEA9t");
  })();
  
  var serviceID = "service_h67glix";
  var templateID = "template_gmg938v";

  var params = {
    sendername: document.querySelector("#name").value,
    sendertel: document.querySelector("#tel").value,
    subject: document.querySelector("#message").value,
  };

  if (params.sendertel.length > 6 && params.sendername.length > 1){
    emailjs.send(serviceID, templateID, params).then( 
      res => {
       document.querySelector("#name").value = "";
       document.querySelector("#tel").value = "";
       document.querySelector("#message").value = "";
 
       document.querySelector("#reply-alert").classList.add("show-alert");
       setTimeout( () => document.querySelector("#reply-alert").classList.remove("show-alert"), 3000);
      },
   )
  }else{ 
    emailjs.send(serviceID, templateID, params).then(
    error => {
    document.querySelector("#name").value = "";
    document.querySelector("#tel").value = "";
    document.querySelector("#message").value = "";

    document.querySelector("#error-alert").classList.add("show-error");
    setTimeout(() =>
        document.querySelector("#error-alert").classList.remove("show-error"),
      3000);
    }
    )
  }
}


