import React, { useState } from 'react';
import FormSection from './FormSection';
import FormField from './FormField';
import SubmissionStatus from './SubmissionStatus';

// This is the main container component for the form
// It should handle:
// - Form state management
// - Form validation
// - Form submission
// - Conditional rendering

const FormContainer = () => {
  // TODO: Implement state management for the form
  // 1. Create state for form data
  // 2. Create state for form errors
  // 3. Create state for submission status
  // 4. Create state for loading state during submission
  
  // Example initial state structure
  const [formData, setFormData] = useState({
    // Personal Information section
    personalInfo: {
      name: '',
      email: '',
      phone: ''
    },
    // Add more sections as needed
    experienceInfo: {
      company: '',
      role: '',
    },
    optionalInfo: {
      observations: '',
      terms: '',
    },
    
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  
  // TODO: Implement form validation
  // Create a function to validate the form fields

  const validation = (data) => {

  }
  
  // TODO: Implement form submission
  // Create a function to handle form submission
  // This should include:
  // - Preventing default form behavior
  // - Validating the form
  // - Setting loading state
  // - Simulating an API call
  // - Handling success/error states
  
  // Example handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO: Add validation logic
    if(validation()){
      setSubmissionStatus({
        success: false,
        message: 'Form submitted failed validation'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Simulate successful submission
      setSubmissionStatus({
        success: true,
        message: 'Form submitted successfully!'
      });
      
      setIsSubmitting(false);
    }, 2000);
  };
  
  // TODO: Implement form reset
  // Create a function to reset the form after submission
  
  const handleReset = () => {
    // TODO: Reset form state and submission status
    setSubmissionStatus(null);
  };
  
  // TODO: Implement change handlers
  // Create functions to handle changes to form fields
  
  const handleChange = (fieldId, e) => {
    // TODO: Update form data based on input changes
    setFormData((prev) => ({
      ...prev,
      [fieldId]: e,
    }))
  };

  // If we have a submission status, show only that
  if (submissionStatus) {
    return <SubmissionStatus status={submissionStatus} onReset={handleReset} />;
  }
  
  return (
    <div className="form-container">
      <h2>Form Application</h2>
      <p className="form-description">
        Please fill out the form below. Fields marked with an asterisk (*) are required.
      </p>
      
      <form onSubmit={handleSubmit} noValidate>
        {/* TODO: Add form sections and fields */}
        <FormSection title="Personal Information">
          {/* Example form field */}
          <FormField
            label="Name"
            name="name"
            value={formData.personalInfo.name}
            onChange={handleChange}
            required
            error={errors.name}
            placeholder="John Doe"
          />

          <FormField
            label="Email"
            name="email"
            value={formData.personalInfo.email}
            onChange={handleChange}
            required
            error={errors.email}
            placeholder="john@example.com"
          />

          <FormField
            label="Phone"
            name="phone"
            value={formData.personalInfo.phone}
            onChange={handleChange}
            required
            error={errors.phone}
            placeholder="123-456-7894"
          />
          
          {/* TODO: Add more form fields */}
        </FormSection>

        <FormSection title="Work Experience">
          {/* Example form field */}
          <FormField
            label="Company"
            name="company"
            value={formData.experienceInfo.company}
            onChange={handleChange}
            error={errors.company}
            placeholder="Company INC"
          />

          <FormField
            label="Role"
            name="role"
            type='select'
            options={['Role Number 1','Role Number 2']}
            value={formData.experienceInfo.role}
            onChange={handleChange}
            required
            error={errors.role}
          />
          
          {/* TODO: Add more form fields */}
        </FormSection>

      {/*Conditional Section */}
        <FormSection title="Optional Information">
          {/* Example form field */}
          <FormField
            label="Observations"
            name="observations"
            value={formData.optionalInfo.observations}
            type='text-area'
            onChange={handleChange}
            required
            error={errors.observations}
          />

          <FormField
            label="Terms"
            name="terms"
            value={formData.optionalInfo.terms}
            type='checkbox'
            onChange={handleChange}
            required
            error={errors.terms}
          />
          
          {/* TODO: Add more form fields */}
        </FormSection>
        
        <div className="form-actions">
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Form'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContainer;
