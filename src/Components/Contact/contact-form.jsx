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
      formPayload.append('_subject', 'New Contact Form Submission from Etqaa Website');
      formPayload.append('_captcha', 'false');
      formPayload.append('_template', 'table');
  
      const response = await fetch('https://formsubmit.co/abudaih@etqaa.com', {
        method: 'POST',
        body: formPayload,
        headers: {
          'Accept': 'application/json'
        }
      });
  
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
  
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        const result = await response.text();
        console.error('Form submission failed:', result);
        setError(t('contact.form.error') || 'Form submission failed. Please try again later.');
      }
    } catch (err) {
      console.error('Failed to send message:', err);
      setError(t('contact.form.error') || 'Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-cyber-primary  p-8" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="bg-cyber-secondary  p-6 md:p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <h3 className="text-2xl font-bold mb-6 text-main-text">
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
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-main-text">
              {t('contact.form.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-cyber-primary border border-gray-700 rounded-md focus:outline-none text-main-text"
              placeholder={t('contact.form.name')}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-main-text">
              {t('contact.form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-cyber-primary border border-gray-700 rounded-md focus:outline-none text-main-text"
              placeholder={t('contact.form.email')}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-main-text">
              {t('contact.form.phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-cyber-primary border border-gray-700 rounded-md focus:outline-none text-main-text"
              placeholder={t('contact.form.phone')}
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-main-text">
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 bg-cyber-primary border border-gray-700 rounded-md focus:outline-none text-main-text"
              placeholder={t('contact.form.message')}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 rounded-cyber bg-cyber-gradient text-cyber-dark font-bold flex items-center justify-center shadow-cyber hover:shadow-cyber-lg border border-cyber-accent/30 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? t('contact.form.sending') : t('contact.form.submit')}
          </button>
        </form>
      </div>
    </div>
  );
}
