var modalOverlay = document.querySelector(".modal__overlay");
var logIn = document.querySelector(".auth-form__logIn");
var registration = document.querySelector(".auth-form__registration");
var modal = document.querySelector(".modal");

// xử lý khi ấn đăng nhập
var dangNhap = function () {
  modal.style.display = "flex";
  modalOverlay.style.display = "block";
  logIn.style.display = "block";
  registration.style.display = "none";
};

// xử lý khi ấn đăng ký
var dangKy = function () {
  modal.style.display = "flex";
  modalOverlay.style.display = "block";
  registration.style.display = "block";
  logIn.style.display = "none";
};

var formOff = function () {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
  registration.style.display = "none";
  logIn.style.display = "none";
};



