"use client";

import PhoneInput from './PhoneInput';

function ContactFormFields({ formData, handleChange, selectedCountry, phoneNumber }) {
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
        <PhoneInput selectedCountry={selectedCountry} phoneNumber={phoneNumber} />
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
    </>
  );
}

export default ContactFormFields;