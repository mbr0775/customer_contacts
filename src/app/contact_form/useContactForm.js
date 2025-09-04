import { useState } from 'react';
import { useCountrySelector } from './useCountrySelector';

export const useContactForm = ({ onSave, onCancel, contact = null }) => {
  const [formData, setFormData] = useState({
    name: contact?.name || '',
    phone: contact?.phone || '',
    business_type: contact?.business_type || 'Other',
    status: contact?.status || 'Active',
    address: contact?.address || ''
  });

  const { selectedCountry, phoneNumber } = useCountrySelector({ contact });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && (selectedCountry.code + phoneNumber)) {
      onSave({
        ...formData,
        phone: selectedCountry.code + phoneNumber,
        id: contact?.id
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return {
    formData,
    handleSubmit,
    handleChange,
    selectedCountry,
    phoneNumber,
    onCancel
  };
};