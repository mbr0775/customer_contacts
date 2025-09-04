"use client";

import PhoneInput from './PhoneInput';

function ContactFormFields({ 
  formData, 
  handleChange, 
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
  // Debug log to check if the function is being passed
  console.log('handlePhoneNumberChange type:', typeof handlePhoneNumberChange);
  
  return (
    <>
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
        <PhoneInput 
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
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        
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
              <option value="Aerospace/Defense">Aerospace/Defense</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Animals Farming">Animals Farming</option>
              <option value="Artist/Creative">Artist/Creative</option>
              <option value="Automotive">Automotive</option>
              <option value="Aviation & Airlines">Aviation & Airlines</option>
              <option value="Banking">Banking</option>
              <option value="Beauty/Wellness">Beauty/Wellness</option>
              <option value="Biotechnology">Biotechnology</option>
              <option value="Business Type">Business Type</option>
              <option value="Childcare/Education">Childcare/Education</option>
              <option value="Construction">Construction</option>
              <option value="Consulting">Consulting</option>
              <option value="Cybersecurity & IT Services">Cybersecurity & IT Services</option>
              <option value="E-commerce & Retail">E-commerce & Retail</option>
              <option value="Education">Education</option>
              <option value="Energy Sector">Energy Sector</option>
              <option value="Energy/Utilities">Energy/Utilities</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Environmental Services">Environmental Services</option>
              <option value="Event Management">Event Management</option>
              <option value="Fashion/Apparel">Fashion/Apparel</option>
              <option value="Finance">Finance</option>
              <option value="Fisheries & Aquaculture">Fisheries & Aquaculture</option>
              <option value="Food/Beverage">Food/Beverage</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Government">Government</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Home Services">Home Services</option>
              <option value="Hotels">Hotels</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Individual/ Freelancer">Individual/ Freelancer</option>
              <option value="Industrial Automation">Industrial Automation</option>
              <option value="Insurance">Insurance</option>
              <option value="Legal & Consultancy Services">Legal & Consultancy Services</option>
              <option value="Legal Services">Legal Services</option>
              <option value="Logistics/Supply Chain">Logistics/Supply Chain</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Media/Digital Marketing">Media/Digital Marketing</option>
              <option value="Mining & Metals">Mining & Metals</option>
              <option value="Non-Governmental Organization (NGO)">Non-Governmental Organization (NGO)</option>
              <option value="Non-Profit">Non-Profit</option>
              <option value="Other">Other</option>
              <option value="Perfume/Cosmetics">Perfume/Cosmetics</option>
              <option value="Pet Services">Pet Services</option>
              <option value="Pharmaceuticals">Pharmaceuticals</option>
              <option value="Political">Political</option>
              <option value="Printing & Publishing">Printing & Publishing</option>
              <option value="Public Sector">Public Sector</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Religious Organization">Religious Organization</option>
              <option value="Research/Development">Research/Development</option>
              <option value="Restaurant/Cafe">Restaurant/Cafe</option>
              <option value="Service Provider">Service Provider</option>
              <option value="Senior Care">Senior Care</option>
              <option value="Shop/Retail">Shop/Retail</option>
              <option value="Social Enterprise">Social Enterprise</option>
              <option value="Sports/Recreation">Sports/Recreation</option>
              <option value="Stock Market">Stock Market</option>
              <option value="Technology">Technology</option>
              <option value="Telecommunications">Telecommunications</option>
              <option value="Transportation/Logistics">Transportation/Logistics</option>
              <option value="Travel/Tourism">Travel/Tourism</option>
              <option value="Waste Management">Waste Management</option>
              <option value="Water Management">Water Management</option>
            </select>
          </div>
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
              <option value="Popular">Popular</option>
              <option value="Well Settled">Well Settled</option>
              <option value="New">New</option>
              <option value="Verified">Verified</option>
              <option value="Unverified">Unverified</option>
              <option value="Blocked">Blocked</option>
              <option value="Suspended">Suspended</option>
              <option value="Archived">Archived</option>
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
    </>
  );
}

export default ContactFormFields;