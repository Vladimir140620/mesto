let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__button-close');
let popupButton = popup.querySelector('.popup__button');

let popupToggle = function () {
  popup.classList.toggle('popup_opened');
}

let closePopup = function () {
  if (event.target !== event.currentTarget) return
  popupToggle();
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popup.addEventListener('click', closePopup);


let inputs = document.querySelectorAll('input');


let savePopup = function () {
  let name = document.querySelector('.profile__name');
  let paragraph = document.querySelector('.profile__description');
  name.textContent = inputs[0].value;
  paragraph.textContent = inputs[1].value;
  closePopup();
}

popupButton.addEventListener('click', savePopup);


