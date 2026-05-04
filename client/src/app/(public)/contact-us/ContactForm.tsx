'use client';

import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { publicApi } from '@/lib/publicApi';

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  companyWebsite: string;
  businessEmail: string;
  mobileNumber: string;
  country: string;
  enquiryType: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    companyWebsite: '',
    businessEmail: '',
    mobileNumber: '',
    country: '',
    enquiryType: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Invalid email address';
    }
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile number is required';
    if (!formData.country) newErrors.country = 'Please select a country';
    if (!formData.enquiryType) newErrors.enquiryType = 'Please select an enquiry type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.consent) newErrors.consent = 'You must consent to proceed';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: val
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      // Find the first error field and scroll to it
      setTimeout(() => {
        const firstErrorField = document.querySelector(`.${styles.error}, .${styles.errorMessage}`);
        if (firstErrorField) {
          firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 0);
      return;
    }

    setIsSubmitting(true);
    try {
      await publicApi.post('/enquiries', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        companyName: formData.companyName,
        companyWebsite: formData.companyWebsite,
        businessEmail: formData.businessEmail,
        mobileNumber: formData.mobileNumber,
        country: formData.country,
        enquiryType: formData.enquiryType,
        message: formData.message,
      });
      setIsSubmitted(true);
    } catch {
      setErrors({ form: 'Something went wrong. Please try again or contact us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };


  if (isSubmitted) {
    return (
      <section className={styles.section}>
        <div className={styles.container} style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>
              <CheckIcon />
            </div>
            <h2 className={styles.headline}>Thank You!</h2>
            <p className={styles.subtext}>Your enquiry has been received. Our team will get back to you shortly.</p>
            <button className={styles.submitBtn} onClick={() => setIsSubmitted(false)} style={{ margin: '32px auto 0' }}>
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <span className={styles.label}>How can we help?</span>
          <h2 className={styles.headline}>Customer Enquiries</h2>
          <p className={styles.subtext}>
            Complete the form alongside and we&apos;ll get in touch with you shortly.
          </p>
        </div>

        <div className={styles.rightSide}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>First Name<span>*</span></label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.firstName ? styles.error : ''}`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <span className={styles.errorMessage}>{errors.firstName}</span>}
              </div>
              <div className={styles.field}>
                <label>Last Name<span>*</span></label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.lastName ? styles.error : ''}`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <span className={styles.errorMessage}>{errors.lastName}</span>}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Company Name<span>*</span></label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.companyName ? styles.error : ''}`}
                  placeholder="Enter company name"
                />
                {errors.companyName && <span className={styles.errorMessage}>{errors.companyName}</span>}
              </div>
              <div className={styles.field}>
                <label>Company Website</label>
                <input
                  type="text"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="e.g. www.example.com"
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Business Email<span>*</span></label>
                <input
                  type="email"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.businessEmail ? styles.error : ''}`}
                  placeholder="Enter your business email"
                />
                {errors.businessEmail && <span className={styles.errorMessage}>{errors.businessEmail}</span>}
              </div>
              <div className={styles.field}>
                <label>Mobile Number<span>*</span></label>
                <div className={`${styles.phoneInputWrapper} ${errors.mobileNumber ? styles.error : ''}`}>
                  <div className={styles.countryCode}>
                    <img src="https://flagcdn.com/w20/in.png" alt="India" width="20" />
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className={styles.phoneInput}
                    placeholder="081234 56789"
                  />
                </div>
                {errors.mobileNumber && <span className={styles.errorMessage}>{errors.mobileNumber}</span>}
              </div>
            </div>

            <div className={styles.field}>
              <label>Select Country<span>*</span></label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`${styles.select} ${errors.country ? styles.error : ''}`}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="UAE">United Arab Emirates</option>
                <option value="UK">United Kingdom</option>
                <option value="USA">USA</option>
              </select>
              {errors.country && <span className={styles.errorMessage}>{errors.country}</span>}
            </div>

            <div className={styles.field}>
              <label>Select Enquiry Type<span>*</span></label>
              <select
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                className={`${styles.select} ${errors.enquiryType ? styles.error : ''}`}
              >
                <option value="">Select Enquiry Type</option>
                <option value="Sales">Sales Enquiry</option>
                <option value="Support">Technical Support</option>
                <option value="Partnership">Partnership</option>
                <option value="Other">Other</option>
              </select>
              {errors.enquiryType && <span className={styles.errorMessage}>{errors.enquiryType}</span>}
            </div>

            <div className={styles.field}>
              <label>Message<span>*</span></label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
                placeholder="How can we help you?"
              />
              {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
            </div>

            <div className={styles.consentWrapper}>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className={styles.checkbox}
                id="consent-check"
              />
              <label htmlFor="consent-check" className={styles.consentText}>
                I consent to Sonatek Steels collecting and using my personal data to send me marketing communications about its logistics, products and services by electronic or analogue communication, via our apps or social media. I understand that I can withdraw my consent at any time.
                <br /><br />
                For more information on how Sonatek Steels uses your personal data, please see our <a href="/privacy">Privacy Notice</a>.<span>*</span>
              </label>
            </div>
            {errors.consent && <span className={styles.errorMessage}>{errors.consent}</span>}

            <div className={styles.footer}>

              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit'} <ArrowRightIcon />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
