// data-validator.js

class DataValidator {
  constructor(data) {
    this.data = data;
    this.errors = {};
  }

  required(fieldName, errorMessage = `${fieldName} is required`) {
    if (!this.data[fieldName]) {
      this.errors[fieldName] = errorMessage;
    }
    return this;
  }

  minLength(fieldName, minLength, errorMessage = `${fieldName} must be at least ${minLength} characters long`) {
    if (this.data[fieldName] && this.data[fieldName].length < minLength) {
      this.errors[fieldName] = errorMessage;
    }
    return this;
  }

  isEmail(fieldName, errorMessage = `${fieldName} must be a valid email address`) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (this.data[fieldName] && !emailRegex.test(this.data[fieldName])) {
      this.errors[fieldName] = errorMessage;
    }
    return this;
  }

  isNumeric(fieldName, errorMessage = `${fieldName} must be a numeric value`) {
    if (this.data[fieldName] && isNaN(this.data[fieldName])) {
      this.errors[fieldName] = errorMessage;
    }
    return this;
  }

  isValid() {
    return Object.keys(this.errors).length === 0;
  }

  getErrors() {
    return this.errors;
  }
}

module.exports = DataValidator;
