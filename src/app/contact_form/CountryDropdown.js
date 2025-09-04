"use client";

function CountryDropdown({ 
  countrySearch, 
  setCountrySearch, 
  filteredCountries, 
  handleCountrySelect,
  className 
}) {
  return (
    <div className={`absolute top-full left-0 z-50 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 ${className}`}>
      <div className="p-3 border-b border-gray-200">
        <input
          type="text"
          placeholder="Search countries..."
          value={countrySearch}
          onChange={(e) => setCountrySearch(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder:text-gray-700"
        />
      </div>
      <ul className="max-h-64 overflow-y-auto">
        {filteredCountries.map((country, index) => (
          <li
            key={index}
            onClick={() => handleCountrySelect(country)}
            className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer"
          >
            <span className="text-2xl">{country.flag}</span>
            <div>
              <span className="font-medium text-gray-900">{country.name} ({country.country})</span>
              <span className="text-sm text-gray-900 ml-2">{country.code}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryDropdown;