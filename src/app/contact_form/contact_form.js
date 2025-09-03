"use client";
import { useState, useEffect } from 'react';

function contact_form({ onSave, onCancel, contact = null }) {
  // Country codes data
  const countryCodes = [
    { code: '+1', country: 'US', name: 'United States', flag: '🇺🇸' },
    { code: '+1', country: 'CA', name: 'Canada', flag: '🇨🇦' },
    { code: '+44', country: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: '+91', country: 'IN', name: 'India', flag: '🇮🇳' },
    { code: '+86', country: 'CN', name: 'China', flag: '🇨🇳' },
    { code: '+81', country: 'JP', name: 'Japan', flag: '🇯🇵' },
    { code: '+49', country: 'DE', name: 'Germany', flag: '🇩🇪' },
    { code: '+33', country: 'FR', name: 'France', flag: '🇫🇷' },
    { code: '+39', country: 'IT', name: 'Italy', flag: '🇮🇹' },
    { code: '+34', country: 'ES', name: 'Spain', flag: '🇪🇸' },
    { code: '+7', country: 'RU', name: 'Russia', flag: '🇷🇺' },
    { code: '+55', country: 'BR', name: 'Brazil', flag: '🇧🇷' },
    { code: '+52', country: 'MX', name: 'Mexico', flag: '🇲🇽' },
    { code: '+61', country: 'AU', name: 'Australia', flag: '🇦🇺' },
    { code: '+82', country: 'KR', name: 'South Korea', flag: '🇰🇷' },
    { code: '+31', country: 'NL', name: 'Netherlands', flag: '🇳🇱' },
    { code: '+46', country: 'SE', name: 'Sweden', flag: '🇸🇪' },
    { code: '+47', country: 'NO', name: 'Norway', flag: '🇳🇴' },
    { code: '+45', country: 'DK', name: 'Denmark', flag: '🇩🇰' },
    { code: '+41', country: 'CH', name: 'Switzerland', flag: '🇨🇭' },
    { code: '+43', country: 'AT', name: 'Austria', flag: '🇦🇹' },
    { code: '+32', country: 'BE', name: 'Belgium', flag: '🇧🇪' },
    { code: '+351', country: 'PT', name: 'Portugal', flag: '🇵🇹' },
    { code: '+30', country: 'GR', name: 'Greece', flag: '🇬🇷' },
    { code: '+48', country: 'PL', name: 'Poland', flag: '🇵🇱' },
    { code: '+420', country: 'CZ', name: 'Czech Republic', flag: '🇨🇿' },
    { code: '+36', country: 'HU', name: 'Hungary', flag: '🇭🇺' },
    { code: '+40', country: 'RO', name: 'Romania', flag: '🇷🇴' },
    { code: '+359', country: 'BG', name: 'Bulgaria', flag: '🇧🇬' },
    { code: '+385', country: 'HR', name: 'Croatia', flag: '🇭🇷' },
    { code: '+386', country: 'SI', name: 'Slovenia', flag: '🇸🇮' },
    { code: '+421', country: 'SK', name: 'Slovakia', flag: '🇸🇰' },
    { code: '+372', country: 'EE', name: 'Estonia', flag: '🇪🇪' },
    { code: '+371', country: 'LV', name: 'Latvia', flag: '🇱🇻' },
    { code: '+370', country: 'LT', name: 'Lithuania', flag: '🇱🇹' },
    { code: '+358', country: 'FI', name: 'Finland', flag: '🇫🇮' },
    { code: '+353', country: 'IE', name: 'Ireland', flag: '🇮🇪' },
    { code: '+354', country: 'IS', name: 'Iceland', flag: '🇮🇸' },
    { code: '+356', country: 'MT', name: 'Malta', flag: '🇲🇹' },
    { code: '+357', country: 'CY', name: 'Cyprus', flag: '🇨🇾' },
    { code: '+377', country: 'MC', name: 'Monaco', flag: '🇲🇨' },
    { code: '+378', country: 'SM', name: 'San Marino', flag: '🇸🇲' },
    { code: '+380', country: 'UA', name: 'Ukraine', flag: '🇺🇦' },
    { code: '+375', country: 'BY', name: 'Belarus', flag: '🇧🇾' },
    { code: '+373', country: 'MD', name: 'Moldova', flag: '🇲🇩' },
    { code: '+381', country: 'RS', name: 'Serbia', flag: '🇷🇸' },
    { code: '+382', country: 'ME', name: 'Montenegro', flag: '🇲🇪' },
    { code: '+383', country: 'XK', name: 'Kosovo', flag: '🇽🇰' },
    { code: '+387', country: 'BA', name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
    { code: '+389', country: 'MK', name: 'North Macedonia', flag: '🇲🇰' },
    { code: '+355', country: 'AL', name: 'Albania', flag: '🇦🇱' },
    { code: '+20', country: 'EG', name: 'Egypt', flag: '🇪🇬' },
    { code: '+27', country: 'ZA', name: 'South Africa', flag: '🇿🇦' },
    { code: '+234', country: 'NG', name: 'Nigeria', flag: '🇳🇬' },
    { code: '+254', country: 'KE', name: 'Kenya', flag: '🇰🇪' },
    { code: '+233', country: 'GH', name: 'Ghana', flag: '🇬🇭' },
    { code: '+212', country: 'MA', name: 'Morocco', flag: '🇲🇦' },
    { code: '+213', country: 'DZ', name: 'Algeria', flag: '🇩🇿' },
    { code: '+216', country: 'TN', name: 'Tunisia', flag: '🇹🇳' },
    { code: '+218', country: 'LY', name: 'Libya', flag: '🇱🇾' },
    { code: '+220', country: 'GM', name: 'Gambia', flag: '🇬🇲' },
    { code: '+221', country: 'SN', name: 'Senegal', flag: '🇸🇳' },
    { code: '+222', country: 'MR', name: 'Mauritania', flag: '🇲🇷' },
    { code: '+223', country: 'ML', name: 'Mali', flag: '🇲🇱' },
    { code: '+224', country: 'GN', name: 'Guinea', flag: '🇬🇳' },
    { code: '+225', country: 'CI', name: 'Ivory Coast', flag: '🇨🇮' },
    { code: '+226', country: 'BF', name: 'Burkina Faso', flag: '🇧🇫' },
    { code: '+227', country: 'NE', name: 'Niger', flag: '🇳🇪' },
    { code: '+228', country: 'TG', name: 'Togo', flag: '🇹🇬' },
    { code: '+229', country: 'BJ', name: 'Benin', flag: '🇧🇯' },
    { code: '+230', country: 'MU', name: 'Mauritius', flag: '🇲🇺' },
    { code: '+231', country: 'LR', name: 'Liberia', flag: '🇱🇷' },
    { code: '+232', country: 'SL', name: 'Sierra Leone', flag: '🇸🇱' },
    { code: '+235', country: 'TD', name: 'Chad', flag: '🇹🇩' },
    { code: '+236', country: 'CF', name: 'Central African Republic', flag: '🇨🇫' },
    { code: '+237', country: 'CM', name: 'Cameroon', flag: '🇨🇲' },
    { code: '+238', country: 'CV', name: 'Cape Verde', flag: '🇨🇻' },
    { code: '+239', country: 'ST', name: 'São Tomé and Príncipe', flag: '🇸🇹' },
    { code: '+240', country: 'GQ', name: 'Equatorial Guinea', flag: '🇬🇶' },
    { code: '+241', country: 'GA', name: 'Gabon', flag: '🇬🇦' },
    { code: '+242', country: 'CG', name: 'Republic of the Congo', flag: '🇨🇬' },
    { code: '+243', country: 'CD', name: 'Democratic Republic of the Congo', flag: '🇨🇩' },
    { code: '+244', country: 'AO', name: 'Angola', flag: '🇦🇴' },
    { code: '+245', country: 'GW', name: 'Guinea-Bissau', flag: '🇬🇼' },
    { code: '+246', country: 'IO', name: 'British Indian Ocean Territory', flag: '🇮🇴' },
    { code: '+247', country: 'AC', name: 'Ascension Island', flag: '🇦🇨' },
    { code: '+248', country: 'SC', name: 'Seychelles', flag: '🇸🇨' },
    { code: '+249', country: 'SD', name: 'Sudan', flag: '🇸🇩' },
    { code: '+250', country: 'RW', name: 'Rwanda', flag: '🇷🇼' },
    { code: '+251', country: 'ET', name: 'Ethiopia', flag: '🇪🇹' },
    { code: '+252', country: 'SO', name: 'Somalia', flag: '🇸🇴' },
    { code: '+253', country: 'DJ', name: 'Djibouti', flag: '🇩🇯' },
    { code: '+255', country: 'TZ', name: 'Tanzania', flag: '🇹🇿' },
    { code: '+256', country: 'UG', name: 'Uganda', flag: '🇺🇬' },
    { code: '+257', country: 'BI', name: 'Burundi', flag: '🇧🇮' },
    { code: '+258', country: 'MZ', name: 'Mozambique', flag: '🇲🇿' },
    { code: '+260', country: 'ZM', name: 'Zambia', flag: '🇿🇲' },
    { code: '+261', country: 'MG', name: 'Madagascar', flag: '🇲🇬' },
    { code: '+262', country: 'RE', name: 'Réunion', flag: '🇷🇪' },
    { code: '+263', country: 'ZW', name: 'Zimbabwe', flag: '🇿🇼' },
    { code: '+264', country: 'NA', name: 'Namibia', flag: '🇳🇦' },
    { code: '+265', country: 'MW', name: 'Malawi', flag: '🇲🇼' },
    { code: '+266', country: 'LS', name: 'Lesotho', flag: '🇱🇸' },
    { code: '+267', country: 'BW', name: 'Botswana', flag: '🇧🇼' },
    { code: '+268', country: 'SZ', name: 'Eswatini', flag: '🇸🇿' },
    { code: '+269', country: 'KM', name: 'Comoros', flag: '🇰🇲' },
    { code: '+290', country: 'SH', name: 'Saint Helena', flag: '🇸🇭' },
    { code: '+291', country: 'ER', name: 'Eritrea', flag: '🇪🇷' },
    { code: '+297', country: 'AW', name: 'Aruba', flag: '🇦🇼' },
    { code: '+298', country: 'FO', name: 'Faroe Islands', flag: '🇫🇴' },
    { code: '+299', country: 'GL', name: 'Greenland', flag: '🇬🇱' },
    { code: '+350', country: 'GI', name: 'Gibraltar', flag: '🇬🇮' },
    { code: '+590', country: 'GP', name: 'Guadeloupe', flag: '🇬🇵' },
    { code: '+591', country: 'BO', name: 'Bolivia', flag: '🇧🇴' },
    { code: '+592', country: 'GY', name: 'Guyana', flag: '🇬🇾' },
    { code: '+593', country: 'EC', name: 'Ecuador', flag: '🇪🇨' },
    { code: '+594', country: 'GF', name: 'French Guiana', flag: '🇬🇫' },
    { code: '+595', country: 'PY', name: 'Paraguay', flag: '🇵🇾' },
    { code: '+596', country: 'MQ', name: 'Martinique', flag: '🇲🇶' },
    { code: '+597', country: 'SR', name: 'Suriname', flag: '🇸🇷' },
    { code: '+598', country: 'UY', name: 'Uruguay', flag: '🇺🇾' },
    { code: '+599', country: 'CW', name: 'Curaçao', flag: '🇨🇼' },
    { code: '+670', country: 'TL', name: 'East Timor', flag: '🇹🇱' },
    { code: '+672', country: 'AQ', name: 'Antarctica', flag: '🇦🇶' },
    { code: '+673', country: 'BN', name: 'Brunei', flag: '🇧🇳' },
    { code: '+674', country: 'NR', name: 'Nauru', flag: '🇳🇷' },
    { code: '+675', country: 'PG', name: 'Papua New Guinea', flag: '🇵🇬' },
    { code: '+676', country: 'TO', name: 'Tonga', flag: '🇹🇴' },
    { code: '+677', country: 'SB', name: 'Solomon Islands', flag: '🇸🇧' },
    { code: '+678', country: 'VU', name: 'Vanuatu', flag: '🇻🇺' },
    { code: '+679', country: 'FJ', name: 'Fiji', flag: '🇫🇯' },
    { code: '+680', country: 'PW', name: 'Palau', flag: '🇵🇼' },
    { code: '+681', country: 'WF', name: 'Wallis and Futuna', flag: '🇼🇫' },
    { code: '+682', country: 'CK', name: 'Cook Islands', flag: '🇨🇰' },
    { code: '+683', country: 'NU', name: 'Niue', flag: '🇳🇺' },
    { code: '+684', country: 'AS', name: 'American Samoa', flag: '🇦🇸' },
    { code: '+685', country: 'WS', name: 'Samoa', flag: '🇼🇸' },
    { code: '+686', country: 'KI', name: 'Kiribati', flag: '🇰🇮' },
    { code: '+687', country: 'NC', name: 'New Caledonia', flag: '🇳🇨' },
    { code: '+688', country: 'TV', name: 'Tuvalu', flag: '🇹🇻' },
    { code: '+689', country: 'PF', name: 'French Polynesia', flag: '🇵🇫' },
    { code: '+690', country: 'TK', name: 'Tokelau', flag: '🇹🇰' },
    { code: '+691', country: 'FM', name: 'Micronesia', flag: '🇫🇲' },
    { code: '+692', country: 'MH', name: 'Marshall Islands', flag: '🇲🇭' },
    { code: '+850', country: 'KP', name: 'North Korea', flag: '🇰🇵' },
    { code: '+852', country: 'HK', name: 'Hong Kong', flag: '🇭🇰' },
    { code: '+853', country: 'MO', name: 'Macao', flag: '🇲🇴' },
    { code: '+855', country: 'KH', name: 'Cambodia', flag: '🇰🇭' },
    { code: '+856', country: 'LA', name: 'Laos', flag: '🇱🇦' },
    { code: '+880', country: 'BD', name: 'Bangladesh', flag: '🇧🇩' },
    { code: '+886', country: 'TW', name: 'Taiwan', flag: '🇹🇼' },
    { code: '+960', country: 'MV', name: 'Maldives', flag: '🇲🇻' },
    { code: '+961', country: 'LB', name: 'Lebanon', flag: '🇱🇧' },
    { code: '+962', country: 'JO', name: 'Jordan', flag: '🇯🇴' },
    { code: '+963', country: 'SY', name: 'Syria', flag: '🇸🇾' },
    { code: '+964', country: 'IQ', name: 'Iraq', flag: '🇮🇶' },
    { code: '+965', country: 'KW', name: 'Kuwait', flag: '🇰🇼' },
    { code: '+966', country: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+967', country: 'YE', name: 'Yemen', flag: '🇾🇪' },
    { code: '+968', country: 'OM', name: 'Oman', flag: '🇴🇲' },
    { code: '+970', country: 'PS', name: 'Palestine', flag: '🇵🇸' },
    { code: '+971', country: 'AE', name: 'United Arab Emirates', flag: '🇦🇪' },
    { code: '+972', country: 'IL', name: 'Israel', flag: '🇮🇱' },
    { code: '+973', country: 'BH', name: 'Bahrain', flag: '🇧🇭' },
    { code: '+974', country: 'QA', name: 'Qatar', flag: '🇶🇦' },
    { code: '+975', country: 'BT', name: 'Bhutan', flag: '🇧🇹' },
    { code: '+976', country: 'MN', name: 'Mongolia', flag: '🇲🇳' },
    { code: '+977', country: 'NP', name: 'Nepal', flag: '🇳🇵' },
    { code: '+992', country: 'TJ', name: 'Tajikistan', flag: '🇹🇯' },
    { code: '+993', country: 'TM', name: 'Turkmenistan', flag: '🇹🇲' },
    { code: '+994', country: 'AZ', name: 'Azerbaijan', flag: '🇦🇿' },
    { code: '+995', country: 'GE', name: 'Georgia', flag: '🇬🇪' },
    { code: '+996', country: 'KG', name: 'Kyrgyzstan', flag: '🇰🇬' },
    { code: '+998', country: 'UZ', name: 'Uzbekistan', flag: '🇺🇿' },
    { code: '+60', country: 'MY', name: 'Malaysia', flag: '🇲🇾' },
    { code: '+62', country: 'ID', name: 'Indonesia', flag: '🇮🇩' },
    { code: '+63', country: 'PH', name: 'Philippines', flag: '🇵🇭' },
    { code: '+64', country: 'NZ', name: 'New Zealand', flag: '🇳🇿' },
    { code: '+65', country: 'SG', name: 'Singapore', flag: '🇸🇬' },
    { code: '+66', country: 'TH', name: 'Thailand', flag: '🇹🇭' },
    { code: '+84', country: 'VN', name: 'Vietnam', flag: '🇻🇳' },
    { code: '+90', country: 'TR', name: 'Turkey', flag: '🇹🇷' },
    { code: '+92', country: 'PK', name: 'Pakistan', flag: '🇵🇰' },
    { code: '+93', country: 'AF', name: 'Afghanistan', flag: '🇦🇫' },
    { code: '+94', country: 'LK', name: 'Sri Lanka', flag: '🇱🇰' },
    { code: '+95', country: 'MM', name: 'Myanmar', flag: '🇲🇲' },
    { code: '+98', country: 'IR', name: 'Iran', flag: '🇮🇷' }
  ];
  const [formData, setFormData] = useState({
    name: contact?.name || '',
    phone: contact?.phone || '',
    business_type: contact?.business_type || 'Other',
    status: contact?.status || 'Active',
    address: contact?.address || ''
  });
  const [selectedCountry, setSelectedCountry] = useState(countryCodes.find(c => c.country === 'QA') || countryCodes[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  // Parse existing phone number on component mount
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
  // Auto-detect country code when user types
  const detectCountryCode = (phoneInput) => {
    if (!phoneInput.startsWith('+')) return null;
   
    // Sort by code length (longest first) to match more specific codes first
    const sortedCodes = [...countryCodes].sort((a, b) => b.code.length - a.code.length);
   
    for (const country of sortedCodes) {
      if (phoneInput.startsWith(country.code)) {
        return country;
      }
    }
    return null;
  };
  // Filter countries based on search
  const filteredCountries = countryCodes.filter(country =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch) ||
    country.country.toLowerCase().includes(countrySearch.toLowerCase())
  );
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
  const handlePhoneChange = (e) => {
    let input = e.target.value;
   
    // If user starts typing with +, try to detect country code
    if (input.startsWith('+')) {
      const detected = detectCountryCode(input);
      if (detected) {
        setSelectedCountry(detected);
        setPhoneNumber(input.replace(detected.code, ''));
        return;
      }
    }
   
    // Only allow numbers, spaces, hyphens, and parentheses
    const cleanedInput = input.replace(/[^\d\s\-\(\)]/g, '');
    setPhoneNumber(cleanedInput);
  };
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
    setCountrySearch('');
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-green-400 px-4 py-6">
        <div className="max-w-2xl mx-auto flex items-center">
          <button
            onClick={onCancel}
            className="text-white hover:text-gray-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <h1 className="flex-1 text-2xl font-bold text-white text-center">
            {contact ? 'Edit Contact' : 'Add New Contact'}
          </h1>
        </div>
      </div>
      {/* Form */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Contact/Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact/Company Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder:text-gray-700"
                  required
                />
              </div>
              {/* Phone Number with Country Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative flex">
                  {/* Country Code Selector */}
                  <button
                    type="button"
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    className="flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-l-lg bg-gray-50 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  >
                    <span className="text-lg">
                      {selectedCountry?.flag || '🌐'}
                    </span>
                    <span className="text-gray-900 font-medium">{selectedCountry?.country} {selectedCountry?.code}</span>
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Phone Number Input */}
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="Enter phone number..."
                    className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder:text-gray-700"
                    required
                  />
                  {/* Country Dropdown */}
                  {showCountryDropdown && (
                    <div className="absolute top-full left-0 z-50 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
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
                  )}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Business Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type
                </label>
                <select
                  name="business_type"
                  value={formData.business_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white text-gray-900"
                >
                  <option value="Restaurant/Cafe">Restaurant/Cafe</option>
                  <option value="Shop/Retail">Shop/Retail</option>
                  <option value="Service Provider">Service Provider</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Individual">Individual</option>
                  <option value="Perfume/Cosmetics">Perfume/Cosmetics</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white text-gray-900"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter full address..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none text-gray-900 placeholder:text-gray-700"
              />
            </div>

            {/* Form Actions */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Save Contact
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default contact_form;