import React from 'react';

// Import the SVG images for social media icons
// import LinkedInIcon from '/Images/linkdin.svg';
// import InstagramIcon from '/Images/insta.svg';
// import XIcon from '/Images/x.svg';

// Import the background image
// import BackgroundImage from '/Image/fbg.svg';

const ReplexPage = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundImage: `url("/Images/fbg.svg")`, // Use the new background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 1, // Full opacity as requested
        fontFamily: 'Arial, sans-serif',
        color: '#333',
      }}
    >
      {/* Header Section */}
      <div style={{ textAlign: 'center', paddingTop: '50px' }}>
        {/* Logo Placeholder */}
        <div
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#6b5b95',
            margin: '0 auto',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
          }}
        >
          🦋 {/* Replace with your logo */}
        </div>
        <h1 style={{ fontSize: '18px', margin: '20px 0' }}>
          Replex, your automated response solution for seamless interactions.
        </h1>

        {/* Social Media Icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <div
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src="/Images/linkdin.svg"
                alt="LinkedIn"
                style={{ width: '20px', height: '20px' }}
              />
            </div>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <div
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src="/Images/x.svg"
                alt="X"
                style={{ width: '20px', height: '20px' }}
              />
            </div>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <div
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src="/Images/insta.svg"
                alt="Instagram"
                style={{ width: '20px', height: '20px' }}
              />
            </div>
          </a>
        </div>
      </div>

      {/* Main Buttons Section */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '30px' }}>
        <button
          style={{
            padding: '15px 30px',
            backgroundColor: '#fff',
            border: 'none',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            fontSize: '16px',
            cursor: 'pointer',
            color: 'black',
          }}
        >
          Email
          <br />
          <span style={{ color: '#6b5b95' }}>hello@weblisty.com</span>
        </button>
        <button
          style={{
            padding: '15px 30px',
            backgroundColor: '#fff',
            border: 'none',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            fontSize: '16px',
            cursor: 'pointer',
            color: 'black',
          }}
        >
          Call
          <br />
          <span style={{ color: '#6b5b95' }}>Schedule a call</span>
        </button>
        <button
          style={{
            padding: '15px 30px',
            backgroundColor: '#fff',
            border: 'none',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            fontSize: '16px',
            cursor: 'pointer',
            color: 'black',
          }}
        >
          Location
          <br />
          <span style={{ color: '#6b5b95' }}>Get Direction</span>
        </button>
      </div>

      {/* Navigation Bar */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', padding: '20px' }}>
        {['Hero', 'Benefits', 'Our Team', 'Milestones', 'Testimonial'].map((item) => (
          <button
            key={item}
            style={{
              padding: '10px 20px',
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '20px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              fontSize: '14px',
              cursor: 'pointer',
              color : '#381f74',
            }}
          >
            {item}
          </button>
        ))}
      </div>


      {/* Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end', // Align the profile image to the right
          alignItems: 'center',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* <div
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#6b5b95',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
          }}
        >
          👤  Replace with actual profile image 
        </div> */}
      </div>
    </div>
  );
};

export default ReplexPage;