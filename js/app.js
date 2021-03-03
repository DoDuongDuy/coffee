// A base class is defined using the new reserved 'class' keyword

eventListener();
function eventListener() {
  const ui = new UI();
  // window event list
  window.addEventListener("load", function () {
    ui.hidePreloader();
  });
  // nav Btn
  document.querySelector(".navBtn").addEventListener("click", function () {
    ui.showNav();
  });
  // control the video
  document.querySelector(".video__switch").addEventListener("click", function () {
    ui.videoControl();
  });
}
// constructer function
function UI() {}
// hide preloader
UI.prototype.hidePreloader = function () {
     document.querySelector(".preloader").style.display = "none";
};
// show nav
UI.prototype.showNav = function () {
    document.querySelector(".nav").classList.toggle("nav--show");
};
UI.prototype.videoControl = function () {
    let btn = document.querySelector(".video__switch-btn");
    if(!btn.classList.contains('btnSlide')){
        btn.classList.add("btnSlide");
        document.querySelector(".video__item").pause();
    }else{
        btn.classList.remove("btnSlide");
        document.querySelector(".video__item").play();
    }
}