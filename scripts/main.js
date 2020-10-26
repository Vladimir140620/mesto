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

let popupAddOpenButton = document.querySelector('.profile__add-button');
let popupAdd = document.querySelector('.popup-add');
let popupAddCloseButton = popupAdd.querySelector('.popup-add__button-close');

let popupAddOpen = function () {
  popupAdd.classList.toggle('popup-add_opened');
}

popupAddOpenButton.addEventListener('click', popupAddOpen);

 let popupAddClose = function () {
   popupAdd.classList.toggle('popup-add_opened');
}

popupAddCloseButton.addEventListener('click', popupAddClose);

const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const form = document.querySelector('.popup-add__container');
const list = document.querySelector('.elements');
const template = document.querySelector('.template');
const inputName = document.querySelector('.popup-add__input_name');
const inputLink = document.querySelector('.popup-add__input_link');

const popupPicture = document.querySelector(".popup-picture");
const imagePopupPicture = popupPicture.querySelector(".popup-picture__image");
const headerPopupPicture = popupPicture.querySelector(".popup-picture__image-name");
const popupPictureClose = document.querySelector(".popup-picture");

const popupToggle = function () {
  popupPicture.classList.toggle('popup-picture_opened');
};

popupPictureClose.addEventListener('click', popupToggle);

function renderList() {
  const items = initialCards.map((place) => getPlace(place));
  list.append(...items);
}

function onCreateHandler(){
  const place = getPlace({
    name: inputName.value,
    link: inputLink.value
  });

  inputName.value = '';
  inputLink.value = '';

  list.prepend(place);
}

function getPlace(place) {
  const cardElement = template.content.cloneNode(true);
  const name = cardElement.querySelector('.item__text');
  const link = cardElement.querySelector('.item__image');

  cardElement.querySelector('.item__button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('item__button_active');
  });

  const trashButton = cardElement.querySelector('.item__button-recyle');

  link.addEventListener("click", () => handleImagePreview(place));

  trashButton.addEventListener('click', function () {
    const item = trashButton.closest('.item');
    item.remove();
  });

  name.textContent = place.name;
  link.src = place.link;

  return cardElement;
};

const handleImagePreview = (details) => {
  imagePopupPicture.src = details.link;
  imagePopupPicture.alt = `Изображение ${details.title}`;
  headerPopupPicture.textContent = details.name;

  popupToggle(popupPicture);
};

function onSubmitForm(event){
  event.preventDefault();
  onCreateHandler();
  popupAddClose();
};

function bindListeners() {
  form.addEventListener('submit', onSubmitForm);
}

renderList();
bindListeners();
