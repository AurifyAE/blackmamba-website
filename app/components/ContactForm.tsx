"use client"

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactForm() {
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    unitType: "",
    contactMode: "",
    privacyPolicy: false,
    newsletter: false
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

    const fieldName = (target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).name;
    const valueToSet =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    setFormData(prev => ({
      ...prev,
      [fieldName]: valueToSet
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prepare the email content
    const emailSubject = encodeURIComponent("Property Inquiry - Black Mamba");
    const emailBody = encodeURIComponent(`
Hello,

I am interested in learning more about your properties. Here are my details:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${phone}
Unit Type: ${formData.unitType}
Preferred Contact Mode: ${formData.contactMode}

Additional Information:
- Privacy Policy Accepted: ${formData.privacyPolicy ? 'Yes' : 'No'}
- Newsletter Subscription: ${formData.newsletter ? 'Yes' : 'No'}

Please contact me at your earliest convenience.

Best regards,
${formData.firstName} ${formData.lastName}
    `.trim());

    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@blackmamba.com&su=${emailSubject}&body=${emailBody}`;
    
    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
    
    // Optional: Show success message
    alert('Redirecting to Gmail to send your inquiry...');
  };

  return (
    <section className="px-4 sm:px-5 md:px-15 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:min-h-[600px]">
          {/* Left Side - Black Background with Centered Text */}
          <div className="flex-1 bg-black flex items-center justify-center px-6 sm:px-8 py-8 lg:py-0">
            <div className="text-center">
              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                WE'D LOVE TO<br />Secure Your Spot Now
              </h2>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 bg-white p-6 sm:p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 sm:space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:border-transparent text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Phone Number with Country Code */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <PhoneInput
                  country={'ae'} 
                  value={phone}
                  onChange={setPhone}
                  countryCodeEditable={false}
                  inputProps={{
                    name: 'phone',
                    required: true,
                  }}
                  containerStyle={{
                    width: '100%'
                  }}
                  inputStyle={{
                    width: '100%',
                    height: '44px',
                    paddingLeft: '48px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '16px'
                  }}
                  buttonStyle={{
                    border: '1px solid #d1d5db',
                    borderRight: 'none',
                    borderRadius: '6px 0 0 6px',
                    backgroundColor: '#f9fafb',
                    height: '44px'
                  }}
                  dropdownStyle={{
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                  searchStyle={{
                    padding: '8px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    margin: '4px'
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:border-transparent text-sm sm:text-base"
                />
              </div>

              {/* Unit Type */}
              <div>
                <label htmlFor="unitType" className="block text-sm font-medium text-gray-700 mb-2">
                  Unit Type *
                </label>
                <select
                  id="unitType"
                  name="unitType"
                  value={formData.unitType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:border-transparent text-sm sm:text-base"
                >
                  <option value="">Select Unit Type</option>
                  <option value="1-bedroom">1 Bedroom</option>
                  <option value="2-bedroom">2 Bedroom</option>
                  <option value="3-bedroom">3 Bedroom</option>
                  <option value="studio">Studio</option>
                  <option value="penthouse">Penthouse</option>
                </select>
              </div>

              {/* Preferred Mode of Contact */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Preferred Mode of Contact *
                </label>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMode"
                      value="phone"
                      checked={formData.contactMode === "phone"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-[#A97C50] focus:ring-[#A97C50] border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Phone</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMode"
                      value="email"
                      checked={formData.contactMode === "email"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-[#A97C50] focus:ring-[#A97C50] border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMode"
                      value="whatsapp"
                      checked={formData.contactMode === "whatsapp"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-[#A97C50] focus:ring-[#A97C50] border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">WhatsApp</span>
                  </label>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="privacyPolicy"
                    checked={formData.privacyPolicy}
                    onChange={handleInputChange}
                    required
                    className="h-4 w-4 text-[#A97C50] focus:ring-[#A97C50] border-gray-300 rounded mt-1"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    I've read and agree to the <a href="#" className="text-[#A97C50] underline">privacy policy</a>.
                  </span>
                </label>
                
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#A97C50] focus:ring-[#A97C50] border-gray-300 rounded mt-1"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    I'd like to hear about news and offers.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#A97C50] text-white py-3 sm:py-4 px-4 rounded-4xl hover:bg-[#8B6B42] focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:ring-offset-2 transition-colors duration-200 font-medium text-sm sm:text-base"
              >
                Submit
              </button>

              {/* reCAPTCHA Notice */}
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="#" className="text-[#A97C50] underline">Privacy Policy</a> and{' '}
                <a href="#" className="text-[#A97C50] underline">Terms of Service</a> apply.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
