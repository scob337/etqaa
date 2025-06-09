import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      const formPayload = new FormData();
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('phone', formData.phone);
      formPayload.append('message', formData.message);
  
      const response = await fetch('https://divaniworld.com/api/contact', {
        method: 'POST',
        body: formPayload,
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
  
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        // Display the backend validation error message (e.g., message length too short)
        if (result.message) {
          setError(result.message); // Show the specific error message from the backend
        } else {
          setError('Form submission failed. Please try again later.');
        }
      }
    } catch (err) {
      console.error('Failed to send message:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 p-8" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="bg-[#061224] p-6 md:p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <h3 className="text-2xl font-bold mb-6 text-white">
          {t('contact.form.title')}
        </h3>

        {success && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-md text-green-100">
            {t('contact.form.success')}
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-md text-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
              {t('contact.form.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#0A162C] border border-gray-700 rounded-md focus:outline-none text-white"
              placeholder={t('contact.form.name')}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              {t('contact.form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#0A162C] border border-gray-700 rounded-md focus:outline-none text-white"
              placeholder={t('contact.form.email')}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">
              {t('contact.form.phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-[#0A162C] border border-gray-700 rounded-md focus:outline-none text-white"
              placeholder={t('contact.form.phone')}
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 bg-[#0A162C] border border-gray-700 rounded-md focus:outline-none text-white"
              placeholder={t('contact.form.message')}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 bg-white text-[#0A162C] font-medium rounded-md hover:bg-zinc-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? t('contact.form.sending') : t('contact.form.submit')}
          </button>
        </form>
      </div>
    </div>
  );
}
