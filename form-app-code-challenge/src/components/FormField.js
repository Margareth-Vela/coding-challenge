import React from 'react';

// This component should handle different types of form fields
// Props:
// - label: The label for the field
// - type: The type of input (text, email, select, checkbox, radio, textarea, etc.)
// - name: The name attribute for the input
// - value: The current value of the input
// - onChange: Function to handle changes
// - required: Whether the field is required
// - error: Error message to display
// - options: Options for select and radio inputs
// - placeholder: Placeholder text

const FormField = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  required = false, 
  error = '', 
  options = [], 
  placeholder = '' 
}) => {
  // TODO: Implement the FormField component
  // 1. Create a function to render different input types based on the 'type' prop
  // 2. Handle validation and error display
  // 3. Implement proper styling for different states (focus, error, etc.)
  
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}{required && <span className="required">*</span>}</label>
      
      {/* Render the appropriate input based on type */}
      {type === 'text' && (
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={error ? 'error' : ''}
        />
      )}

      {type === 'select' && (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          {
            options.map(
              opt => (
                <option value={opt}>{opt}</option>
              )
            )
          }
        </select>
      )}


      {type === 'text-area' && (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}

      {type === 'checkbox' && (
        <div>
          <p>Accept terms and conditions</p>
          <input
            type='checkbox'
            id={name}
            name={name}
            value={!!value}
            onChange={onChange}
            required={required}
          />
          </div>
      )}
      
      {/* TODO: Add support for other input types */}
      
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FormField;
