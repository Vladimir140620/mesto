let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__button-close');
let popupButton = popup.querySelector('.popup__button');
let name = document.querySelector('.profile__name');
let paragraph = document.querySelector('.profile__description');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_description');

let popupOpen = function () {
  popup.classList.toggle('popup_opened');
  nameInput.value=name.textContent;
  jobInput.value=paragraph.textContent;
}

let popupClose = function () {
  popup.classList.toggle('popup_opened');
}

let close = function (event) {
  if (event.target !== event.currentTarget) return
  popupClose();
}

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
popup.addEventListener('click', close);

let formElement = document.querySelector('.popup__container');

function formSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    paragraph.textContent = jobInput.value;
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);
