const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__button-close');
const popupButton = popup.querySelector('.popup__button');
const name = document.querySelector('.profile__name');
const paragraph = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_description');

const togglePopup = (popup) => {
  popup.classList.toggle('popup_opened');
}

const popupOpen = function () {
  togglePopup(popup);
  nameInput.value=name.textContent;
  jobInput.value=paragraph.textContent;
}

const popupClose = function () {
  togglePopup(popup);
}

const close = function (event) {
  if (event.target !== event.currentTarget) return
  popupClose();
}

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
popup.addEventListener('click', close);

const formElement = document.querySelector('.popup__container');

function formSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    paragraph.textContent = jobInput.value;
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);

const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_new-card');
const popupAddCloseButton = popupAdd.querySelector('.popup__button-close');

const openAddPopup = function () {
  togglePopup(popupAdd);
}

popupAddOpenButton.addEventListener('click', openAddPopup);

 const closeAddPopup = function () {
  togglePopup(popupAdd);
}

popupAddCloseButton.addEventListener('click', closeAddPopup);

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

const form = document.querySelector('.popup_type_new-card__container');
const list = document.querySelector('.elements');
const template = document.querySelector('.template');
const inputName = document.querySelector('.popup_type_new-card__input_name');
const inputLink = document.querySelector('.popup_type_new-card__input_link');

const popupPicture = document.querySelector(".popup_type_image");
const imagePopupPicture = popupPicture.querySelector(".popup_type_image__image");
const headerPopupPicture = popupPicture.querySelector(".popup_type_image__image-name");
const popupPictureClose = document.querySelector(".popup_type_image__close");

const openPopupPicture = function () {
  togglePopup(popupPicture);
};

popupPictureClose.addEventListener('click', openPopupPicture);

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
  const cardImage = cardElement.querySelector('.item__image');

  cardElement.querySelector('.item__button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('item__button_active');
  });

  const trashButton = cardElement.querySelector('.item__button-recyle');

  cardImage.addEventListener("click", () => handleImagePreview(place));

  trashButton.addEventListener('click', function () {
    const item = trashButton.closest('.item');
    item.remove();
  });

  name.textContent = place.name;
  cardImage.src = place.link;
  cardImage.alt = `Изображение ${place.name}`;

  return cardElement;
};

const handleImagePreview = (details) => {
  imagePopupPicture.src = details.link;
  imagePopupPicture.alt = `Изображение ${details.name}`;
  headerPopupPicture.textContent = details.name;

  openPopupPicture(popupPicture);
};

function onSubmitForm(event){
  event.preventDefault();
  onCreateHandler();
  closeAddPopup();
};

function bindListeners() {
  form.addEventListener('submit', onSubmitForm);
}

renderList();
bindListeners();
