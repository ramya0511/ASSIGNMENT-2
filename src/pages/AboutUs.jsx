import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="about-section">
        <h2>About Our Cake Shop</h2>
        <p>
          Welcome to our Cake Shop! Established in 2024, our bakery has been
          dedicated to creating beautiful, delicious cakes for every occasion.
          From classic chocolate and fruit cakes to custom designs, we pride
          ourselves on quality ingredients and a passion for baking.
        </p>
        <p>
          Our mission is to make every celebration memorable with a touch of
          sweetness. Whether you're looking for a simple treat or an elaborate
          cake masterpiece, we're here to bring your cake dreams to life.
        </p>
      </section>

      <section className="contact-section">
        <h3>Contact Us</h3>
        <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" placeholder="Your email" required />
          </label>
          <label>
            Message:
            <textarea name="message" placeholder="Your message" required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-details">
          <p><strong>Phone:</strong> (123) 123-456-7890</p>
          <p><strong>Email:</strong> cakeshop@gmail.com</p>
          <p><strong>Address:</strong> 123 Cake Street, Mangalore,Karnataka 12345</p>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
