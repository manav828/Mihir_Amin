import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/StepCard.css"; // Keep CSS for styling

const steps = [
  {
    title: "Sign up & Profile",
    description:
      "Create your account with our guided setup process. Access your personalized dashboard instantly.",
    image: "/Images/arrow.svg",
    step: "Step 1",
  },
  {
    title: "Choose a Plan",
    description:
      "Select the best plan that fits your needs. Upgrade anytime as you grow.",
    image: "/Images/arrow.svg",
    step: "Step 2",
  },
  {
    title: "Customize Settings",
    description:
      "Personalize your experience with custom settings to match your workflow.",
    image: "/Images/arrow.svg",
    step: "Step 3",
  },
  {
    title: "Get Started",
    description:
      "You're all set! Start using our platform and explore its full potential.",
    image: "/Images/arrow.svg",
    step: "Step 4",
  },
];

export default function StepCards() {
  return (
    <div className="container my-5">
      <div className="row">
        {steps.map((step, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="step-card">
              <div className="step-indicator">
                {/* <div className="circle"></div> */}
                <div className="step-label">{step.step}</div>
              </div>

              <div className="icon-container">
                <img className="icon-image" src={step.image} alt="Step Icon" />
              </div>

              <h2 className="step-title">{step.title}</h2>

              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}































