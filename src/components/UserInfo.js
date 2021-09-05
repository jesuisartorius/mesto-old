class UserInfo {
  constructor({ name, about, avatar }) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
    };
  }

  // takes new user data and adds it on the page
  setUserInfo({ name, about }) {
    this._name.textContent = name;
    this._about.textContent = about;
  }

  getAvatarInfo() {
    return { avatar: this._avatar.src };
  }

  setAvatarInfo({ avatar }) {
    this._avatar.src = avatar;
  }
}

export default UserInfo;
