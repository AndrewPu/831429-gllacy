var for_feedback = document.querySelector(".for-feedback");
var feedback_container = document.querySelector(".feedback-container");
var box_close = document.querySelector(".box-close");
var form_feedback = document.querySelector(".form-feedback");
var name_feedback = document.querySelector(".name-feedback");
var femail_feedback = document.querySelector(".email-feedback");
var textarea_feedback = document.querySelector(".textarea-feedback");


if (feedback_container) {
  for_feedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback_container.classList.add("popup-show");
});

  box_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback_container.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     if (feedback_container.classList.contains("popup-show")) {
        feedback_container.classList.remove("popup-show");
    }
  }
});

form_feedback.addEventListener("submit", function (evt) {
  if (!name_feedback.value || !email_feedback.value || !textarea_feedback.value) {
    evt.preventDefault();
    feedback_container.classList.remove("popup-error");
    feedback_container.offsetWidth = feedback_popup.offsetWidth;
    feedback_container.classList.add("popup-error");
  }
});
};