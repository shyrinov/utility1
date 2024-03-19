# Data Validator

A simple data validation library for JavaScript, allowing you to validate various types of data easily.

## Installation

You can install the `data-validator` package via npm:

```bash
npm install data-validator
```

## Usage

First, import the `DataValidator` class into your JavaScript file:

```javascript
const DataValidator = require('data-validator');
```

Then, create a new instance of `DataValidator` with your data object:

```javascript
const userData = {
  username: 'john_doe',
  email: 'john@example.com',
  age: 30
};

const validator = new DataValidator(userData);
```

Now, use the validation methods provided by the `DataValidator` class:

```javascript
validator
  .required('username')
  .minLength('username', 3)
  .isEmail('email')
  .isNumeric('age');
```

You can check if the data is valid using the `isValid()` method:

```javascript
if (validator.isValid()) {
  console.log('Data is valid');
} else {
  console.log('Validation errors:', validator.getErrors());
}
```

## Validation Methods

- `required(fieldName, errorMessage)`: Validates that a field is present.
- `minLength(fieldName, minLength, errorMessage)`: Validates that a string field has a minimum length.
- `isEmail(fieldName, errorMessage)`: Validates that a field is a valid email address.
- `isNumeric(fieldName, errorMessage)`: Validates that a field is a numeric value.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or pull requests, please feel free to open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
