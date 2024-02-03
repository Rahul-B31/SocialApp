function isValidURL(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }

  export default isValidURL;