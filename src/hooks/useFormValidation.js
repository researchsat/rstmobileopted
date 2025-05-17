/**
 * Custom hook for form validation
 * @param {Object} rules - Validation rules for each field
 * @returns {Function} - Validation function
 */
const useFormValidation = (rules = {}) => {
  /**
   * Validate form values against rules
   * @param {Object} values - Form values to validate
   * @returns {Object} - Validation errors
   */
  const validate = (values) => {
    const errors = {};
    
    // Loop through each field in the values object
    Object.keys(values).forEach(field => {
      // Skip validation if no rules for this field
      if (!rules[field]) return;
      
      const value = values[field];
      const fieldRules = rules[field];
      
      // Required validation
      if (fieldRules.required && (!value || value.trim() === '')) {
        errors[field] = fieldRules.requiredMessage || `${field} is required`;
        return; // Skip other validations if required fails
      }
      
      // Minimum length validation
      if (fieldRules.minLength && value && value.length < fieldRules.minLength) {
        errors[field] = fieldRules.minLengthMessage || 
          `${field} must be at least ${fieldRules.minLength} characters`;
      }
      
      // Maximum length validation
      if (fieldRules.maxLength && value && value.length > fieldRules.maxLength) {
        errors[field] = fieldRules.maxLengthMessage || 
          `${field} must be less than ${fieldRules.maxLength} characters`;
      }
      
      // Pattern validation (regex)
      if (fieldRules.pattern && value && !fieldRules.pattern.test(value)) {
        errors[field] = fieldRules.patternMessage || `${field} is invalid`;
      }
      
      // Email validation
      if (fieldRules.isEmail && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errors[field] = fieldRules.emailMessage || 'Invalid email address';
        }
      }
      
      // Number validation
      if (fieldRules.isNumber && value) {
        if (isNaN(Number(value))) {
          errors[field] = fieldRules.numberMessage || `${field} must be a number`;
        }
      }
      
      // Minimum value validation
      if (fieldRules.min !== undefined && value && Number(value) < fieldRules.min) {
        errors[field] = fieldRules.minMessage || 
          `${field} must be at least ${fieldRules.min}`;
      }
      
      // Maximum value validation
      if (fieldRules.max !== undefined && value && Number(value) > fieldRules.max) {
        errors[field] = fieldRules.maxMessage || 
          `${field} must be less than ${fieldRules.max}`;
      }
      
      // Custom validation function
      if (fieldRules.validate && typeof fieldRules.validate === 'function') {
        const customError = fieldRules.validate(value, values);
        if (customError) {
          errors[field] = customError;
        }
      }
    });
    
    return errors;
  };
  
  return validate;
};

export default useFormValidation;
