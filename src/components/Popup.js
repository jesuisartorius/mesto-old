class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // close the Popup by Pressing Escape key
  _handleEscClose(e) {
    if (e.key === "Escape") this.close();
  }

  open() {
    this._popupElement.classList.add("popup_opened");

    if (this._popupElement.classList.contains("popup_opened")) {
      document.addEventListener("keydown", this._handleEscClose);
    }
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup__close-button") || // close icon of the popup
        evt.target.classList.contains("popup") // outside click
      ) {
        this.close();
      }
    });
  }
}

export default Popup;
