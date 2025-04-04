// import React, { useEffect, useRef, useState } from 'react';
// import '../Styles/timeline.css';

// const TimelineDesign = () => {
//   const [activeStep, setActiveStep] = useState(1);
//   const boxRefs = useRef([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;

//       boxRefs.current.forEach((box, index) => {
//         if (box) {
//           const boxTop = box.offsetTop;
//           const boxHeight = box.offsetHeight;

//           if (
//             scrollPosition >= boxTop - window.innerHeight / 2 &&
//             scrollPosition < boxTop + boxHeight - window.innerHeight / 2
//           ) {
//             setActiveStep(index + 1);
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="timeline-container">
//       {/* Left Side - Timeline */}
//       <div className="timeline-left">
//         <div className="timeline">
//           {[1, 2, 3, 4].map((step) => (
//             <div
//               key={step}
//               className={`timeline-step ${activeStep === step ? 'active' : ''}`}
//             >
//               <div className="timeline-dot"></div>
//               <div className="timeline-line"></div>
//               <span>Step {step}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Side - Boxes */}
//       <div className="boxes-right">
//         {[1, 2, 3, 4].map((box, index) => (
//           <div
//             key={box}
//             ref={(el) => (boxRefs.current[index] = el)}
//             className="box"
//           >
//             <h2>Box {box}</h2>
//             <p>Content for box {box} goes here</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TimelineDesign;



































// import React, { useEffect, useRef, useState } from 'react';
// import '../Styles/timetemp.css';

// const Timeline = () => {
//   const [activeStep, setActiveStep] = useState(1);
//   const boxRefs = useRef([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;

//       boxRefs.current.forEach((box, index) => {
//         if (box) {
//           const boxTop = box.offsetTop;
//           const boxHeight = box.offsetHeight;

//           if (
//             scrollPosition >= boxTop - window.innerHeight / 2 &&
//             scrollPosition < boxTop + boxHeight - window.innerHeight / 2
//           ) {
//             setActiveStep(index + 1);
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="timeline-container">
//       {/* Left Side - Timeline */}
//       <div className="timeline-left">
//         <div className="timeline">
//           {[1, 2, 3, 4].map((step) => (
//             <div
//               key={step}
//               className={`timeline-step ${activeStep === step ? 'active' : ''}`}
//             >
//               <div className="timeline-dot"></div>
//               <div className="timeline-line"></div>
//               <span>Step {step}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Side - Boxes */}
//       <div className="boxes-right">
//         {[1, 2, 3, 4].map((box, index) => (
//           <div
//             key={box}
//             ref={(el) => (boxRefs.current[index] = el)}
//             className={`box ${activeStep === box ? 'active-box' : ''}`}
//           >
//             <h2>Box {box}</h2>
//             <p>Content for box {box} goes here.</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Timeline;



















import React, { useEffect, useRef, useState } from 'react';
import '../Styles/timeline.css';

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(1);
  const boxRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      boxRefs.current.forEach((box, index) => {
        if (box) {
          const boxTop = box.offsetTop;
          const boxHeight = box.offsetHeight;

          if (
            scrollPosition >= boxTop - window.innerHeight / 2 &&
            scrollPosition < boxTop + boxHeight - window.innerHeight / 2
          ) {
            setActiveStep(index + 1);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineContent = [
    {
      step: 1,
      heading: "Career Assessment",
      paragraph: "We begin by evaluating your skills, experience, and goals to create a personalized career roadmap tailored to your aspirations."
    },
    {
      step: 2,
      heading: "Skill Development",
      paragraph: "Enhance your expertise with targeted training and resources designed to bridge gaps and boost your professional capabilities."
    },
    {
      step: 3,
      heading: "Opportunity Matching",
      paragraph: "Our AI-driven tools connect you with opportunities that align perfectly with your profile and career objectives."
    },
    {
      step: 4,
      heading: "Ongoing Support",
      paragraph: "Receive continuous guidance and mentorship to navigate challenges and achieve long-term success in your career journey."
    }
  ];

  return (
    <div className="timeline-container">
      {/* Left Side - Timeline */}
      <div className="timeline-left">
        <div className="timeline">
          {timelineContent.map((item) => (
            <div
              key={item.step}
              className={`timeline-step ${activeStep === item.step ? 'active' : ''}`}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
              <span>Step {item.step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Boxes */}
      <div className="boxes-right">
        {timelineContent.map((item, index) => (
          <div
            key={item.step}
            ref={(el) => (boxRefs.current[index] = el)}
            className={`box ${activeStep === item.step ? 'active-box' : ''}`}
          >
            <h2>{item.heading}</h2>
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;