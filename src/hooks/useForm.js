import { useState, useCallback } from 'react';
import useAppStore from '../store/appStore';

/**
 * Custom hook for form handling
 * @param {Object} initialValues - Initial form values
 * @param {Function} validateFn - Validation function
 * @param {Function} onSubmitFn - Submit function
 * @param {String} formId - Unique form identifier for tracking
 * @returns {Object} Form handling methods and state
 */
const useForm = (initialValues = {}, validateFn = () => ({}), onSubmitFn = async () => {}, formId = 'default-form') => {
  // Form state
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  
  // Get form tracking from global store
  const trackFormSubmission = useAppStore((state) => state.trackFormSubmission);
  
  // Handle input change
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle different input types
    const inputValue = type === 'checkbox' ? checked : value;
    
    setValues((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
    
    // Mark field as touched
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  }, []);
  
  // Handle input blur for validation
  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    
    // Mark field as touched
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    
    // Validate the field
    const fieldErrors = validateFn({ [name]: values[name] });
    setErrors((prev) => ({
      ...prev,
      ...fieldErrors,
    }));
  }, [values, validateFn]);
  
  // Set a specific field value programmatically
  const setFieldValue = useCallback((name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);
  
  // Set multiple field values programmatically
  const setMultipleValues = useCallback((newValues) => {
    setValues((prev) => ({
      ...prev,
      ...newValues,
    }));
  }, []);
  
  // Reset form to initial values
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setSubmitSuccess(false);
    setSubmitError(null);
  }, [initialValues]);
  
  // Validate all form fields
  const validateForm = useCallback(() => {
    const formErrors = validateFn(values);
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  }, [values, validateFn]);
  
  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    if (e) e.preventDefault();
    
    // Validate all fields
    const isValid = validateForm();
    
    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);
    
    if (!isValid) return;
    
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);
    
    try {
      // Call the submit function
      await onSubmitFn(values);
      
      // Track form submission
      trackFormSubmission(formId);
      
      // Set success state
      setSubmitSuccess(true);
      
      // Reset form after successful submission (optional)
      // resetForm();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error.message || 'An error occurred during form submission');
    } finally {
      setIsSubmitting(false);
    }
  }, [values, validateForm, onSubmitFn, resetForm, trackFormSubmission, formId]);
  
  return {
    values,
    errors,
    touched,
    isSubmitting,
    submitSuccess,
    submitError,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setMultipleValues,
    resetForm,
    validateForm,
  };
};

export default useForm;
