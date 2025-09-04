"use client";

import CountryDropdown from './CountryDropdown';

function PhoneInput({ 
  selectedCountry, 
  phoneNumber, 
  handlePhoneNumberChange,
  showCountryDropdown,
  setShowCountryDropdown,
  countrySearch,
  setCountrySearch,
  filteredCountries,
  handleCountrySelect 
}) {
  const handleInputChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, ''); // Allow only digits
    
    // Call the shared handler with filtered value (handles country detection if needed)
    handlePhoneNumberChange({ ...e, target: { ...e.target, value: numericValue } });
    
    // Removed: handleChange(syntheticEvent) - not needed, as explained
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Phone Number *
      </label>
      <div className="relative flex flex-col sm:flex-row w-full">
        {/* Country Code Selector */}
        <button
          type="button"
          onClick={() => setShowCountryDropdown(!showCountryDropdown)}
          className="flex items-center justify-between gap-2 px-3 py-3 border border-gray-300 rounded-t-lg sm:rounded-t-none sm:rounded-l-lg bg-gray-50 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors w-full sm:w-auto"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">
              {selectedCountry?.flag || '🌐'}
            </span>
            <span className="text-gray-900 font-medium">{selectedCountry?.country} {selectedCountry?.code}</span>
          </div>
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {/* Phone Number Input */}
        <input
          type="tel"
          name="phone"
          value={phoneNumber}
          onChange={handleInputChange}
          placeholder="Enter phone number..."
          className="flex-1 px-4 py-3 border border-t-0 sm:border-t sm:border-l-0 border-gray-300 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder:text-gray-700 w-full"
          required
        />
        {/* Country Dropdown */}
        {showCountryDropdown && (
          <CountryDropdown 
            countrySearch={countrySearch}
            setCountrySearch={setCountrySearch}
            filteredCountries={filteredCountries}
            handleCountrySelect={handleCountrySelect}
            className="absolute top-full left-0 w-full sm:w-auto z-10" 
          />
        )}
      </div>
    </div>
  );
}

export default PhoneInput;