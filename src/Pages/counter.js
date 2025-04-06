import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/counter.css";

const steps = [
  {
    title: "Sign up & Profile",
    description:
      "Create your account with our guided setup process. Access your personalized dashboard instantly.",
    targetCount: "100",
    step: "Step 1",
  },
  {
    title: "Choose a Plan",
    description:
      "Select the best plan that fits your needs. Upgrade anytime as you grow.",
    targetCount: "60+",
    step: "Step 2",
  },
  {
    title: "Customize Settings",
    description:
      "Personalize your experience with custom settings to match your workflow.",
    targetCount: "98%",
    step: "Step 3",
  },
  {
    title: "Get Started",
    description:
      "You're all set! Start using our platform and explore its full potential.",
    targetCount: "100",
    step: "Step 4",
  },
];

export default function StepCards() {
  return (
    <div className="container my-5">
      <div className="row">
        {steps.map((step, index) => (
          <div
            key={index}
            className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center"
          >
            <Counter step={step} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Counter({ step }) {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounter();
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounter = () => {
    const target = parseInt(step.targetCount) || 60;
    const duration = 2000;
    const increment = target / (duration / 50);
    let currentCount = 0;

    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.ceil(currentCount));
      }
    }, 50);
  };

  const displayCount = () => {
    if (step.targetCount.includes("+")) return `${count}+`;
    if (step.targetCount.includes("%")) return `${count}%`;
    return count;
  };

  return (
    <div ref={cardRef} className="step-card">
      {/* <div className="step-indicator">
        <div className="step-label">{step.step}</div>
      </div> */}

      <div className="count-container">
        <span className="counter">{displayCount()}</span>
      </div>

      <h2 className="step-title">{step.title}</h2>

      <p className="step-description">{step.description}</p>
    </div>
  );
}