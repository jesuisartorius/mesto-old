import Popup from "./Popup";

class PopupWithImage extends Popup {
  open({ name, link }) {
    super.open();

    const image = this._popupElement.querySelector(".popup__image");
    const text = this._popupElement.querySelector(".popup__preview-title");
    image.src = link;
    image.alt = name;
    text.textContent = name;
  }
}

export default PopupWithImage;
