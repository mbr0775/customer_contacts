"use client";

import { useContactForm } from './useContactForm';
import FormHeader from './FormHeader';
import ContactFormFields from './ContactFormFields';
import FormActions from './FormActions';

function ContactForm({ onSave, onCancel, contact = null }) {
  const { 
    formData, 
    handleSubmit, 
    handleChange, 
    selectedCountry, 
    phoneNumber, 
    onCancel: formOnCancel, 
    handlePhoneNumberChange,
    showCountryDropdown,
    setShowCountryDropdown,
    countrySearch,
    setCountrySearch,
    filteredCountries,
    handleCountrySelect 
  } = useContactForm({ onSave, onCancel, contact });

  return (
    <div className="min-h-screen bg-gray-50">
      <FormHeader onCancel={formOnCancel} contact={contact} />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <form onSubmit={handleSubmit}>
            <ContactFormFields
              formData={formData}
              handleChange={handleChange}
              selectedCountry={selectedCountry}
              phoneNumber={phoneNumber}
              handlePhoneNumberChange={handlePhoneNumberChange}
              showCountryDropdown={showCountryDropdown}
              setShowCountryDropdown={setShowCountryDropdown}
              countrySearch={countrySearch}
              setCountrySearch={setCountrySearch}
              filteredCountries={filteredCountries}
              handleCountrySelect={handleCountrySelect}
            />
            <FormActions onCancel={formOnCancel} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;