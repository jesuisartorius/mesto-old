class Card {
  constructor(
    data,
    { handleCardClick, handleDeleteClick, handleLikeClick },
    userData,
    cardSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._creatorId = data.owner._id;
    this._likes = data.likes;

    this._userId = userData;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
  }

  _getId() {
    return this._id;
  }

  handleLikeCard() {
    const likeButton = this._element.querySelector(".element__like-button");
    [...this._likes].forEach((like) => {
      if (like._id === this._userId) {
        likeButton.classList.add("element__like-button_active");
      }
    });
  }

  handleLikeButtonToggle(likeButton) {
    likeButton.classList.toggle("element__like-button_active");
  }

  handleLikeCount(totalLikes) {
    this._element.querySelector(".element__like-count").textContent =
      totalLikes;
  }

  handleDeleteCard() {
    this._element.remove();
  }

  _hideBinIcon() {
    if (this._userId !== this._creatorId) {
      this._element
        .querySelector(".element__delete-button")
        .classList.add("element__delete-button_type_hidden");
    }
  }

  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();

    this.handleLikeCount(this._likes.length);
    this.handleLikeCard();
    this._hideBinIcon();

    this._element.querySelector(
      ".element__image"
    ).style.backgroundImage = `url(${this._link})`;
    this._element.querySelector(".element__text").textContent = this._name;

    return this._element;
  }

  _setEventListeners() {
    const popupImagePreview = this._element.querySelector(".element__image");
    const deleteButton = this._element.querySelector(".element__delete-button");
    const likeButton = this._element.querySelector(".element__like-button");

    likeButton.addEventListener("click", () =>
      this._handleLikeClick(this._getId(), likeButton)
    );

    deleteButton.addEventListener("click", () =>
      this._handleDeleteClick(this._getId())
    );

    popupImagePreview.addEventListener("click", () =>
      this._handleCardClick({
        name: this._name,
        link: this._link,
      })
    );
  }
}

export default Card;
