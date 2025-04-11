import React, { useEffect, useRef } from 'react';

const WhiteLabelBranding = () => {
  const sectionRef = useRef(null);
  const leftCardsRef = useRef(null);
  const rightCardsRef = useRef(null);

  useEffect(() => {
    console.log("in use effect");

    // Define variables that will be used in the IntersectionObserver callback
    let lastScrollTop = window.scrollY;
    let isSectionVisible = false;
    let lastOpacity = 1; // Track the last opacity value to ensure smooth transitions

    // Calculate initial positions to align with the middle card
    const middleCard = document.querySelector('.middle-card');
    const leftCards = leftCardsRef.current;
    const rightCards = rightCardsRef.current;

    if (!middleCard || !leftCards || !rightCards) {
      console.error("One or more elements not found:", { middleCard, leftCards, rightCards });
      return;
    }

    const middleCardRect = middleCard.getBoundingClientRect();
    const leftCardsRect = leftCards.getBoundingClientRect();
    const rightCardsRect = rightCards.getBoundingClientRect();

    const initialTranslateLeft = (middleCardRect.left + middleCardRect.width / 2) - (leftCardsRect.left + leftCardsRect.width / 2);
    const initialTranslateRight = (middleCardRect.left + middleCardRect.width / 2) - (rightCardsRect.left + rightCardsRect.width / 2);

    // Set initial positions
    leftCards.style.transform = `translateX(${initialTranslateLeft}px)`;
    rightCards.style.transform = `translateX(${initialTranslateRight}px)`;
    leftCards.dataset.offset = initialTranslateLeft;
    rightCards.dataset.offset = initialTranslateRight;

    // Calculate container boundaries to limit movement
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const maxLeftTranslate = -(leftCardsRect.left - containerRect.left); // Max left movement
    const maxRightTranslate = (containerRect.right - rightCardsRect.right); // Max right movement

    // Use IntersectionObserver to detect when the section enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isSectionVisible = true;
          } else {
            isSectionVisible = false;
            // Reset the cards to the middle position when the section is out of view
            if (leftCardsRef.current && rightCardsRef.current) {
              leftCardsRef.current.style.transform = `translateX(${initialTranslateLeft}px)`;
              rightCardsRef.current.style.transform = `translateX(${initialTranslateRight}px)`;
              leftCardsRef.current.style.opacity = 1;
              rightCardsRef.current.style.opacity = 1;
              leftCardsRef.current.dataset.offset = initialTranslateLeft;
              rightCardsRef.current.dataset.offset = initialTranslateRight;
              lastOpacity = 1; // Reset opacity
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (!isSectionVisible) return; // Only animate when the section is visible

      const scrollTop = window.scrollY;
      const scrollDown = scrollTop > lastScrollTop;
      const movement = Math.min(Math.abs(scrollTop - lastScrollTop), 40); // Max pixel movement per scroll
      const directionMultiplier = scrollDown ? 1 : -1; // Reverse direction for moving outward/inward

      const leftCurrent = parseFloat(leftCards.dataset.offset || initialTranslateLeft);
      const rightCurrent = parseFloat(rightCards.dataset.offset || initialTranslateRight);

      // Calculate new offsets, clamping within container boundaries
      let newLeftOffset = leftCurrent + directionMultiplier * movement;
      let newRightOffset = rightCurrent - directionMultiplier * movement;

      // Clamp the movement to stay within the container
      newLeftOffset = Math.max(Math.min(newLeftOffset, 0), maxLeftTranslate); // From middle to original (0) and not beyond container
      newRightOffset = Math.min(Math.max(newRightOffset, 0), maxRightTranslate); // From middle to original (0) and not beyond container

      leftCards.style.transform = `translateX(${newLeftOffset}px)`;
      rightCards.style.transform = `translateX(${newRightOffset}px)`;

      leftCards.dataset.offset = newLeftOffset;
      rightCards.dataset.offset = newRightOffset;

      // Calculate opacity based on scroll direction
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const relativeScroll = Math.max(0, Math.min(scrollTop - sectionTop, sectionHeight)); // Clamp scroll position within section
      const scrollFraction = relativeScroll / sectionHeight; // Fraction of the section scrolled (0 to 1)

      const maxOpacity = 1;
      const minOpacity = 0.8;
      const opacityRange = maxOpacity - minOpacity;

      // Adjust opacity based on scroll direction
      let newOpacity;
      if (scrollDown) {
        // When scrolling down, opacity decreases from 1 to 0.8
        newOpacity = maxOpacity - (scrollFraction * opacityRange);
        console.log("Scrolling down, opacity:", newOpacity, "scrollFraction:", scrollFraction);
      } else {
        // When scrolling up, opacity increases from 0.8 to 1
        newOpacity = minOpacity + ((1 - scrollFraction) * opacityRange);
        console.log("Scrolling up, opacity:", newOpacity, "scrollFraction:", scrollFraction);
      }

      // Ensure the opacity doesn't jump abruptly
      newOpacity = Math.max(minOpacity, Math.min(maxOpacity, newOpacity));

      leftCards.style.opacity = newOpacity;
      rightCards.style.opacity = newOpacity;
      lastOpacity = newOpacity; // Update the last opacity value

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: 'linear-gradient(to bottom right, #e6f0fa, #f0e7fa, #fae6f0)',
        minHeight: '200vh',
      }}
    >
      <div className="text-center mb-5">
        <h3 className="display-6 fw-bold text-dark mb-3">
          Delivering tailored white-label and branding options to fit your business.
        </h3>
        <p className="text-muted">
          Customized options designed to elevate your brand, effectively communicating your unique value proposition to the market.
        </p>
      </div>

      <div className="container" ref={sectionRef}>
        <div className="row align-items-start">
          {/* Left Column */}
          <div
            className="col-md-4 left-cards"
            ref={leftCardsRef}
            style={{ transition: 'transform 1.3s ease-out, opacity 0.3s' }}
            data-offset="0"
          >
            <div className="card mb-4 p-4 shadow-sm">
              <div
                className="d-flex align-items-center justify-content-center bg-light rounded-circle mb-3"
                style={{ width: '3rem', height: '3rem' }}
              >
                ⏰
              </div>
              <h3 className="h5 fw-semibold text-dark mb-2">Time tracking and reporting</h3>
              <p className="text-muted">
                Also to image Sea's Great day sea don't creature creatures land you're morning.
              </p>
            </div>
            <div className="card p-4 shadow-sm">
              <div
                className="d-flex align-items-center justify-content-center bg-light rounded-circle mb-3"
                style={{ width: '3rem', height: '3rem' }}
              >
                🖥️
              </div>
              <h3 className="h5 fw-semibold text-dark mb-2">Drag-&-Drop functionality</h3>
              <p className="text-muted">
                User-Friendly Interface: Enhancing Task Automation with Drag-&-Drop.
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="col-md-4 middle-card position-sticky" style={{ top: '100px' }}>
            <div
              className="card p-4 shadow-sm text-center"
              style={{ height: '500px' }}
            >
              <div
                className="d-flex align-items-center justify-content-center bg-light rounded-circle mb-3 mx-auto"
                style={{ width: '3rem', height: '3rem' }}
              >
                📈
              </div>
              <h3 className="h5 fw-semibold text-dark mb-2">Performance Management</h3>
              <p className="text-muted mb-3">
                Boost Productivity with Accurate Time Tracking and Comprehensive Reporting.
              </p>
              <div
                className="bg-light d-flex align-items-center justify-content-center mb-3"
                style={{ height: '150px' }}
              >
                [Graph Placeholder]
              </div>
              <div className="display-6 fw-bold text-dark">34,042</div>
              <p className="text-muted">Sales this month</p>
              <div className="d-flex justify-content-center gap-2 mt-3">
                <div
                  className="bg-light rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '2rem', height: '2rem' }}
                >
                  👤
                </div>
                <div
                  className="bg-light rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '2rem', height: '2rem' }}
                >
                  👤
                </div>
                <div
                  className="bg-light rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '2rem', height: '2rem' }}
                >
                  👤
                </div>
              </div>
              <div className="mt-2 text-muted small">
                <p>Billy Vasquez 5' 7"</p>
                <p>Gang trip</p>
                <p>Amanda Reed Only today</p>
                <p>health is not good</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="col-md-4 right-cards"
            ref={rightCardsRef}
            style={{ transition: 'transform 1.3s ease-out, opacity 0.3s' }}
            data-offset="0"
          >
            <div className="card mb-4 p-4 shadow-sm">
              <div
                className="d-flex align-items-center justify-content-center bg-light rounded-circle mb-3"
                style={{ width: '3rem', height: '3rem' }}
              >
                🔒
              </div>
              <h3 className="h5 fw-semibold text-dark mb-2">Role-Based access control</h3>
              <p className="text-muted">
                Implementing Role-Based Access Control for Better Security.
              </p>
            </div>
            <div className="card p-4 shadow-sm">
              <div
                className="d-flex align-items-center justify-content-center bg-light rounded-circle mb-3"
                style={{ width: '3rem', height: '3rem' }}
              >
                📱
              </div>
              <h3 className="h5 fw-semibold text-dark mb-2">Mobile responsive design</h3>
              <p className="text-muted">
                Ensuring a Seamless User Experience Across All Mobile Devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteLabelBranding;