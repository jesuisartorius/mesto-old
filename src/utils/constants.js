export const defaultFormConfig = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_visible",
  };
  
  export const cardTemplate = "#cards-template";
  export const elementsList = ".elements__list";
  
  export const popupEditProfile = ".popup_type_edit-profile";
  export const popupPreview = ".popup_type_preview";
  export const popupAddCard = ".popup_type_add-card";
  export const popupConfirm = ".popup_type_confirm";
  export const popupProfileAvatar = ".popup_type_profile-avatar";
  
  // Buttons
  export const profileEditButton = document.querySelector(
    ".profile__edit-button"
  );
  export const addCardButton = document.querySelector(".profile__add-button");
  
  export const profileAvatarButton = document.querySelector(
    ".profile__avatar-overlay"
  );
  
  // Popup forms
  export const editFormElement = document.querySelector(
    ".popup__form_type_edit-profile"
  );
  export const cardFormElement = document.querySelector(
    ".popup__form_type_add-card"
  );
  export const profileAvatarElement = document.querySelector(
    ".popup__form_type_edit-profile-avatar"
  );
  
  export const profileName = document.querySelector(".profile__name");
  export const profileAbout = document.querySelector(".profile__job");
  export const profileAvatar = document.querySelector(".profile__avatar");
  
  export const profileFormNameInput = document.querySelector(
    ".popup__input_type_name"
  );
  export const profileFormJobInput = document.querySelector(
    ".popup__input_type_job"
  );
  