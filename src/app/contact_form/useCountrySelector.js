import { useState, useEffect } from 'react';
import { countryCodes } from './countryCodes';

export const useCountrySelector = ({ contact }) => {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes.find(c => c.country === 'QA') || countryCodes[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');

  useEffect(() => {
    if (contact?.phone) {
      const phone = contact.phone.toString();
      const detectedCountry = detectCountryCode(phone);
      if (detectedCountry) {
        setSelectedCountry(detectedCountry);
        setPhoneNumber(phone.replace(detectedCountry.code, ''));
      } else {
        setPhoneNumber(phone);
      }
    }
  }, [contact]);

  const detectCountryCode = (phoneInput) => {
    if (!phoneInput.startsWith('+')) return null;

    const sortedCodes = [...countryCodes].sort((a, b) => b.code.length - a.code.length);

    for (const country of sortedCodes) {
      if (phoneInput.startsWith(country.code)) {
        return country;
      }
    }
    return null;
  };

  const filteredCountries = countryCodes.filter(country =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch) ||
    country.country.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const handlePhoneChange = (e) => {
    let input = e.target.value;

    if (input.startsWith('+')) {
      const detected = detectCountryCode(input);
      if (detected) {
        setSelectedCountry(detected);
        setPhoneNumber(input.replace(detected.code, ''));
        return;
      }
    }

    const cleanedInput = input.replace(/[^\d\s\-\(\)]/g, '');
    setPhoneNumber(cleanedInput);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
    setCountrySearch('');
  };

  return {
    selectedCountry,
    setSelectedCountry,
    phoneNumber,
    setPhoneNumber,
    showCountryDropdown,
    setShowCountryDropdown,
    countrySearch,
    setCountrySearch,
    filteredCountries,
    handlePhoneChange,
    handleCountrySelect
  };
};