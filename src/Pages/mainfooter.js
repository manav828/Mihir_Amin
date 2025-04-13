// import React from 'react';



// const ReplexPage = () => {
//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         backgroundImage: `url("/Images/fbg.svg")`, // Use the new background image
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         opacity: 1, // Full opacity as requested
//         fontFamily: 'Arial, sans-serif',
//         color: '#333',
//       }}
//     >
//       {/* Header Section */}
//       <div style={{ textAlign: 'center', paddingTop: '50px' }}>
//         {/* Logo Placeholder */}
//         <div
//           style={{
//             width: '50px',
//             height: '50px',
//             backgroundColor: '#6b5b95',
//             margin: '0 auto',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             color: 'white',
//             fontSize: '24px',
//           }}
//         >
//           🦋 {/* Replace with your logo */}
//         </div>
//         <h1 style={{ fontSize: '18px', margin: '20px 0' }}>
//           Replex, your automated response solution for seamless interactions.
//         </h1>

//         {/* Social Media Icons */}
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <div
//               style={{
//                 width: '40px',
//                 height: '40px',
//                 backgroundColor: '#fff',
//                 borderRadius: '50%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//               }}
//             >
//               <img
//                 src="/Images/linkdin.svg"
//                 alt="LinkedIn"
//                 style={{ width: '20px', height: '20px' }}
//               />
//             </div>
//           </a>
//           <a href="https://x.com" target="_blank" rel="noopener noreferrer">
//             <div
//               style={{
//                 width: '40px',
//                 height: '40px',
//                 backgroundColor: '#fff',
//                 borderRadius: '50%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//               }}
//             >
//               <img
//                 src="/Images/x.svg"
//                 alt="X"
//                 style={{ width: '20px', height: '20px' }}
//               />
//             </div>
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//             <div
//               style={{
//                 width: '40px',
//                 height: '40px',
//                 backgroundColor: '#fff',
//                 borderRadius: '50%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//               }}
//             >
//               <img
//                 src="/Images/insta.svg"
//                 alt="Instagram"
//                 style={{ width: '20px', height: '20px' }}
//               />
//             </div>
//           </a>
//         </div>
//       </div>

//       {/* Main Buttons Section */}
//       <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '30px' }}>
//         <button
//           style={{
//             padding: '15px 30px',
//             backgroundColor: '#fff',
//             border: 'none',
//             borderRadius: '10px',
//             boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//             fontSize: '16px',
//             cursor: 'pointer',
//             color: 'black',
//           }}
//         >
//           Email
//           <br />
//           <span style={{ color: '#6b5b95' }}>hello@weblisty.com</span>
//         </button>
//         <button
//           style={{
//             padding: '15px 30px',
//             backgroundColor: '#fff',
//             border: 'none',
//             borderRadius: '10px',
//             boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//             fontSize: '16px',
//             cursor: 'pointer',
//             color: 'black',
//           }}
//         >
//           Call
//           <br />
//           <span style={{ color: '#6b5b95' }}>Schedule a call</span>
//         </button>
//         <button
//           style={{
//             padding: '15px 30px',
//             backgroundColor: '#fff',
//             border: 'none',
//             borderRadius: '10px',
//             boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//             fontSize: '16px',
//             cursor: 'pointer',
//             color: 'black',
//           }}
//         >
//           Location
//           <br />
//           <span style={{ color: '#6b5b95' }}>Get Direction</span>
//         </button>
//       </div>

//       {/* Navigation Bar */}
//       <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', padding: '20px' }}>
//         {['Hero', 'Benefits', 'Our Team', 'Milestones', 'Testimonial'].map((item) => (
//           <button
//             key={item}
//             style={{
//               padding: '10px 20px',
//               backgroundColor: '#fff',
//               border: 'none',
//               borderRadius: '20px',
//               boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//               fontSize: '14px',
//               cursor: 'pointer',
//               color : '#381f74',
//             }}
//           >
//             {item}
//           </button>
//         ))}
//       </div>


//       {/* Footer */}
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'flex-end', // Align the profile image to the right
//           alignItems: 'center',
//           padding: '20px',
//           backgroundColor: 'rgba(255, 255, 255, 0.2)',
//         }}
//       >
//         {/* <div
//           style={{
//             width: '40px',
//             height: '40px',
//             backgroundColor: '#6b5b95',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             color: '#fff',
//           }}
//         >
//           👤  Replace with actual profile image 
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default ReplexPage;
















import React from 'react';
import { Link } from "react-router-dom";
const ReplexPage = () => {
  return (
    <div
      style={{
        minHeight: '100vh', // Changed from 100vh to adapt to content
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundImage: `url("/Images/fbg.svg")`, // Inline background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        width: '100%',
        maxWidth: '100vw', // Prevent horizontal overflow
        overflowX: 'hidden', // Explicitly prevent horizontal overflow
        boxSizing: 'border-box',
        padding: '0 10px', // Add padding for mobile
      }}
    >
      {/* Header Section */}
      <div
        style={{
          textAlign: 'center',
          paddingTop: '50px',
        }}
      >
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
        <h1
          style={{
            fontSize: '18px',
            margin: '20px 0',
            padding: '0 15px', // Prevent text overflow
          }}
        >
          Empowering Career Growth Through Guidance and Support
        </h1>

        {/* Social Media Icons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
          }}
        >
          <a href="https://www.linkedin.com/in/mihir-amin-433103187" target="_blank" rel="noopener noreferrer">
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
          <a href="https://x.com/MihirAmin323" target="_blank" rel="noopener noreferrer">
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
          <a href="https://www.instagram.com/mihir_amin219/" target="_blank" rel="noopener noreferrer">
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          padding: '30px 15px',
          flexWrap: 'wrap', // Allow wrapping on small screens
        }}
      >
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
            width: '100%',
            maxWidth: '300px', // Cap width on mobile
          }}
        >
          Email
          <br />
          <span style={{ color: '#6b5b95' }}>mihir.amin323@gmail.com</span>
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
            width: '100%',
            maxWidth: '300px',
          }}
        >
          Call
          <br />
          <span style={{ color: '#6b5b95' }}><Link
            to="/bookingdemo"
            // onClick={() => setIsMenuOpen(false)}
            className=""
            style={{textDecoration: "none"}}
            
          >
            <span style={{ color: '#6b5b95',textDecoration: "none", }}>Book Meeting</span>
          </Link></span>
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
            width: '100%',
            maxWidth: '300px',
          }}
        >
          Location
          <br />
          <span style={{ color: '#6b5b95' }}>50 STONE Mill DR SE, Cartersville, Georgia, 30121</span>
        </button>
      </div>

      {/* Navigation Bar */}
      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          padding: '20px 15px',
          flexWrap: 'wrap', // Allow wrapping on small screens
        }}
      >
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
              color: '#381f74',
              width: '100%',
              maxWidth: '200px', // Cap width on mobile
            }}
          >
            {item}
          </button>
        ))}
      </div> */}

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Uncomment and replace with actual profile image if needed */}
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
          👤
        </div> */}
      </div>
    </div>
  );
};

export default ReplexPage;