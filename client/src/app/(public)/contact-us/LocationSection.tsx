"use client";

import React from "react";
import styles from "./LocationSection.module.css";

export default function LocationSection() {
  const directionsUrl = "https://www.google.com/maps/dir//Sonatek+Steels+%E2%80%93+CR+%26+HR+Steel+Sheets+Supplier,+X-7,+Loha+Mandi,+Delhi,+New+Delhi,+Delhi+110028/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390d031f41d3f835:0x83ddffc0dd8683a1?sa=X&ved=1t:57443&ictx=111";

  return (
    <section className={styles.section} id="location">
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <span className={styles.label}>Our Location</span>
          <h2 className={styles.headline}>Visit Our Office &amp; Warehouse</h2>
          <p className={styles.subtext}>
            We are located in Loha Mandi, Naraina, Delhi's prominent steel trading hub, with warehousing that
            supports dispatch across Delhi NCR, Punjab, Haryana, Uttar Pradesh, and Rajasthan. Stop by our
            office and warehouse or reach out to discuss your requirements.
          </p>

          <div className={styles.infoBlock}>
            <div className={styles.infoItem}>
              <h4 className={styles.infoTitle}>Address</h4>
              <p className={styles.infoText}>
                X-7, Loha Mandi, Naraina,<br />
                New Delhi, Delhi 110028
              </p>
            </div>

            <div className={styles.infoItem}>
              <h4 className={styles.infoTitle}>Phone</h4>
              <p className={styles.infoText}>
                <a href="tel:+919891998846">+91 98919 98846</a>
              </p>
            </div>

            <div className={styles.infoItem}>
              <h4 className={styles.infoTitle}>Email</h4>
              <p className={styles.infoText}>
                <a href="mailto:sonateksteels@gmail.com">sonateksteels@gmail.com</a>
              </p>
            </div>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionsBtn}
          >
            Get Directions
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4428054452033!2d77.13524957616641!3d28.646452975657375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031f41d3f835%3A0x83ddffc0dd8683a1!2sSonatek%20Steels!5e0!3m2!1sen!2sin!4v1717900000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sonatek Steels Location Map"
              className={styles.iframe}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
