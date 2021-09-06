import Popup from "./Popup";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupCardImage = this._popupElement.querySelector(".popup__image");
    this._captionImage = this._popupElement.querySelector(".popup__preview-title");
  }
  
  open({ name, link }) {
    super.open();

    this._popupCardImage.src = link;
    this._popupCardImage.alt = name;
    this._captionImage.textContent = name;
  }
}

export default PopupWithImage;
