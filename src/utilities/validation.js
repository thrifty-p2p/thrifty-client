
const Validation = {
  // User Validation
  isUserValid: (account) => {
    const hasValidFirstName = typeof account.first_name == "string" && account.first_name.trim() != '';
    const hasValidLastName = typeof account.last_name == "string" && account.last_name.trim() != '';
    const hasValidEmail = this.validEmailAddress(account.email);
    const hasValidPassword = this.validPassword(account.password)
    return hasValidEmail && hasValidFirstName && hasValidLastName && hasValidPassword;
  },
  // Validation for Login
  isLoginValid: (account) => {
    const hasValidEmail = this.validEmailAddress(account.email);
    const hasValidPassword = this.validPassword(account.password);
    return hasValidEmail && hasValidPassword;
  },
  // Validation for email address
  validEmailAddress: (useremail) => {
    const filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (filter.test(useremail)) {
      return true;
    } else {
      return false;
    }
  },
  // Validation for password, Password must contain be 8-16 charachters, contain 1 upper and lower case, 1 numeric and a special character
  validPassword: (userPassword) => {
    const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
    if (userPassword.match(password)) {
      return true;
    } else {
      return false;
    }
  }
}

export default Validation;
