import React, { useState, useEffect } from "react";

const VideoWithText = () => {
  const [stage, setStage] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev === 3 ? 1 : prev + 1));
    }, 3000); // Change stage every 3 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const textStages = {
    1: "Stage 1: Introduction",
    2: "Stage 2: Main Content",
    3: "Stage 3: Conclusion"
  };

  return (
    <div className="row ">
      {/* Animated Video Section */}
 {/* Text Boxes */}

    
      <video  height="500px" muted autoPlay playsInline loop >
        <source src="Images/v.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
 
     
    </div>
  );
};

export default VideoWithText;
