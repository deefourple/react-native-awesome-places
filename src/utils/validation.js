const validate = (val, rules, connectedValue) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case "isEmail":
        isValid = isValid && emailValidator(val);
        break;
      case "minLength":
        isValid = isValid && minLengthValidator(val, rules[rule]);
        break;
      case "equalTo":
        isValid = isValid && equalToValidator(val, connectedValue[rule]);
        break;
      default:
        isValid = true;
    }
  }
  return isValid;
};

const emailValidator = val => {
  const RE = /\S+@\S+\.\S+/;
  return RE.test(val);
}

const minLengthValidator = (val, minLength) => {
  return val.length >= minLength;
}

const equalToValidator = (val, comparisonValue) => {
  return val === comparisonValue;
}

export default validate;
