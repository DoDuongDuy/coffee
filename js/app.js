const work_data = [
  {id:1},
  {id:2},
  {id:3},
  {id:4},
  {id:5},
  {id:6},
  {id:7},
  {id:8},
  {id:9}
];
const workContainer = document.querySelector('.work-container');
// A base class is defined using the new reserved 'class' keyword

eventListener();
function eventListener() {
  const ui = new UI();
  // window event list
  window.addEventListener("load", function () {
    ui.hidePreloader();
    showWork(work_data);
  });
  // nav Btn
  document.querySelector(".navBtn").addEventListener("click", function () {
    ui.showNav();
  });
  // control the video
  document
    .querySelector(".video__switch")
    .addEventListener("click", function () {
      ui.videoControl();
    });
  //submit the form
  document
    .querySelector(".drink-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.querySelector(".input-name").value.trim();
      const lastname = document.querySelector(".input-lastname").value.trim();
      const email = document.querySelector(".input-email").value.trim();
      let value = ui.checkEmpty(name, lastname, email);
      if(value){
        let customer = new Customer(name, lastname, email);
        ui.addCustomer(customer);
        ui.showFeedback('customer added to the list', 'sucess');
        ui.clearFields();
      }else{
        ui.showFeedback('Some form values empty','error');
      }
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
  if (!btn.classList.contains("btnSlide")) {
    btn.classList.add("btnSlide");
    document.querySelector(".video__item").pause();
  } else {
    btn.classList.remove("btnSlide");
    document.querySelector(".video__item").play();
  }
};
// check emptyValue
UI.prototype.checkEmpty = function (name, lastname, email) {
  let result;
  if (name === "" || lastname === "" || email === "") {
    result = false;
  } else {
    result = true;
  }
  return result;
};
// show feedback
UI.prototype.showFeedback = function(text, type){
  if(type === "sucess"){
    let feedback = document.querySelector('.drink-form__feedback');
    feedback.classList.add('sucess');
    feedback.innerText = text;
    this.removeAlert('sucess');
  }else if(type === "error"){
    let feedback = document.querySelector('.drink-form__feedback');
    feedback.classList.add('error');
    feedback.innerText = text;
    this.removeAlert('error');
  }
}
UI.prototype.removeAlert = function(type){
  setTimeout(() => {
    document.querySelector('.drink-form__feedback').classList.remove(type);
  }, 3000);
}
// add customer
UI.prototype.addCustomer = function(customer){
  const images = [1,2,3,4,5];
  let random = Math.floor(Math.random() * images.length);
  const div = document.createElement('div');
  div.classList.add('person');
  div.innerHTML = `<img src="img/person-${random}.jpeg" alt="persion" class="person_thumbnail">
  <h4 class="persion__name">${customer.name}</h4>
  <h4 class="persion__last-name">${customer.lastname}</h4>`
  document.querySelector('.drink-card__list').appendChild(div);
  
}
// clear Fields 
UI.prototype.clearFields = function(){
  document.querySelector('.input-name').value = '';
  document.querySelector('.input-lastname').value = '';
  document.querySelector('.input-email').value = '';
}







function Customer(name, lastname, email){
  this.name = name;
  this.lastname = lastname;
  this.email = email;
}
// show work
function showWork(data){
  let display = data.map(function(item){
    return `<article class="work-item item-${item.id}">
    <img src="./img/work-${item.id}.jpeg" alt="" class="work-item__img">
    <a href="#" class="work-item__icon" data-id='${item.id}'>
      <i class="fas fa-search"></i>
    </a>
</article>`
  });
  display = display.join('');
  workContainer.innerHTML = display;  
  links = document.querySelectorAll('.work-item__icon');
}
