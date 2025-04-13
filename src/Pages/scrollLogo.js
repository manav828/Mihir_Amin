import React from 'react';
import { Wand2, Megaphone, LineChart } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Inline CSS for the slider animations and styling
const styles = `
  .slider-container {
    background-color: white;
    padding: 40px 0;
  }
  .slider-row {
    display: flex;
    overflow: hidden;
    white-space: nowrap;
  }
  .slider-row-1, .slider-row-2 {
    display: inline-flex;
    will-change: transform; /* Improves performance for animations */
  }
  .slider-row-1 {
    animation: slide-right-to-left 20s linear infinite;
  }
  .slider-row-2 {
    animation: slide-left-to-right 20s linear infinite;
  }
  .feature-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 10px 15px;
    padding: 10px 30px;
    background-color: #2a2a3c;
    border-radius: 50px;
    color: white;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    flex-shrink: 0; /* Prevents items from shrinking */
  }
  .feature-item svg {
    margin-right: 8px;
    color: #d4ff00;
  }
  @keyframes slide-right-to-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes slide-left-to-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
`;

const BrandingLogo = () => {
  const services = [
    {
      icon: <Wand2 size={24} />,
      title: 'Brand Magic',
      description:
        "We'll design or redesign your logo, figure out your brand's story, and make sure it looks great everywhere.",
    },
    {
      icon: <Megaphone size={24} />,
      title: 'Marketing Muscle',
      description:
        "We'll create eye-catching ads, manage your social media, and track what's working so you can see the results.",
    },
    {
      icon: <LineChart size={24} />,
      title: 'Data-Smart Marketing',
      description:
        "We'll track your campaigns, analyze the results, and give you practical advice on how to improve.",
    },
  ];

  const features = [
    { icon: <Wand2 size={20} />, label: 'Performance Analytics' },
    { icon: <Megaphone size={20} />, label: 'Custom Reports' },
    { icon: <LineChart size={20} />, label: 'Data Security' },
    { icon: <Wand2 size={20} />, label: 'Meeting Scheduler' },
    { icon: <Megaphone size={20} />, label: 'Resource Allocation' },
    { icon: <LineChart size={20} />, label: 'Shared Workflows' },
    { icon: <Wand2 size={20} />, label: 'Time Tracking' },
    { icon: <Megaphone size={20} />, label: 'Client Portal' },
    { icon: <LineChart size={20} />, label: 'File Sharing' },
    { icon: <Wand2 size={20} />, label: 'Goal Setting' },
    { icon: <Megaphone size={20} />, label: 'Team Chat' },
  ];

  // Split features into two rows
  const firstRowFeatures = features.slice(0, 5);
  const secondRowFeatures = features.slice(5);

  // Duplicate the features multiple times to ensure seamless scrolling
  const repeatedFirstRow = Array(3).fill(firstRowFeatures).flat();
  const repeatedSecondRow = Array(3).fill(secondRowFeatures).flat();

  return (
    <>
      {/* Inline styles for the slider */}
      <style>{styles}</style>

      {/* Slider Section */}
      <div className="slider-container">
        <div className="container text-center mb-4">
          <h2 className="display-6 fw-bold">
            Enhance your SaaS or startup site with powerful features using ScalePlus.
          </h2>
        </div>

        {/* First Row: Right to Left */}
        <div className="slider-row" style={{ marginBottom: '20px' }}>
          <div className="slider-row-1">
            {repeatedFirstRow.map((feature, index) => (
              <div key={index} className="feature-item">
                {feature.icon}
                {feature.label}
              </div>
            ))}
          </div>
        </div>

        {/* Second Row: Left to Right */}
        <div className="slider-row">
          <div className="slider-row-2">
            {repeatedSecondRow.map((feature, index) => (
              <div key={index} className="feature-item">
                {feature.icon}
                {feature.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Original BrandingLogo Content */}
      {/* <div className="d-flex flex-column min-vh-100 py-5 px-3">
        <div className="container">
          <div className="d-flex justify-content-center mb-4">
            <div className="d-flex align-items-center bg-light text-dark px-3 py-2 rounded-pill gap-2">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              Our Service
            </div>
          </div>

          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">
              Struggling to Stand Out?<br />
              Let's Make Your Brand a Star.
            </h1>
            <p className="text-muted mx-auto" style={{ maxWidth: '720px' }}>
              Tired of blending in? Our team of creative experts can help change that by providing you with:
            </p>
          </div>

          <div className="row g-4 mt-5 justify-content-center">
            {services.map((service, index) => (
              <div key={index} className="col-12 col-md-4">
                <div className="card h-100 text-center shadow-sm">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div
                      className="bg-light p-3 rounded-circle mb-3"
                      style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="h5 fw-medium mb-3">{service.title}</h3>
                    <p className="text-muted">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default BrandingLogo;