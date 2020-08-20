let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__button-close');
let popupButton = popup.querySelector('.popup__button');
let name = document.querySelector('.profile__name');
let paragraph = document.querySelector('.profile__description');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-description');


let popupToggle = function () {
  popup.classList.toggle('popup_opened');
  nameInput.value=name.textContent;
  jobInput.value=paragraph.textContent;
}

let closePopup = function (event) {
  if (event.target !== event.currentTarget) return
  popupToggle();
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popup.addEventListener('click', closePopup);

let formElement = document.querySelector('.popup__container');

function formSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    paragraph.textContent = jobInput.value;
    popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);
