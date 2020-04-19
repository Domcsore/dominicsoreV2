export function validate(value, validations) {
    let result = [];
    for (let vIndex = 0; vIndex < validations.length; vIndex++) {
        let validation = validations[vIndex];
        result.push({name: validation.name, valid: validation.valid(value), message: validation.message});
    }
    return result;
}

function Required(message) {
    this.name = 'required';
    this.valid = function (value) {
        return !(value == null || value === '');
    };
    this.message = message;
}

export const validations = {
  Required: Required
};