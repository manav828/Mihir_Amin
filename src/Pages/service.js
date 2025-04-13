import React from 'react';
import { Wand2, Megaphone, LineChart } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BrandingHero = () => {
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

  return (
    <div className="d-flex flex-column  py-5 px-3">
      <div className="container">
        <div className="d-flex justify-content-center mb-4">
          <div className="d-flex align-items-center bg-light text-dark px-3 py-2 rounded-pill gap-2">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            Our Service
          </div>
        </div>

        <div className="text-center ">
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
              <div className="card h-100 text-center  border-0">
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="bg-light p-3 rounded-circle mb-3" style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
    </div>
  );
};

export default BrandingHero;