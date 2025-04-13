// // Navbar.jsx
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "../Styles/Navbar.css";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//   <div className="navbar-container">
//     <Link to="/" className="navbar-logo">MA</Link>

//     <button className="navbar-toggle" onClick={toggleMenu}>
//       <span className="navbar-toggle-icon"></span>
//     </button>

//     <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
//       <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
//       <Link to="/journey" onClick={() => setIsMenuOpen(false)}>Journey</Link>
//       <Link to="/testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
//       <Link to="/bookingdemo" onClick={() => setIsMenuOpen(false)} className="cta-button">
//         Book Meeting
//       </Link>
//     </div>
//   </div>
// </nav>

//   );
// }

// export default Navbar;














// Navbar.jsx
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../Styles/Navbar.css";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Handle scroll to highlight active section
//   useEffect(() => {
//     const sections = [
//       "home",
//       "journey",
//       "services",
//       "features",
//       "perfect-candidate",
//       "candidate-insights",
//     ];
//     const observers = [];

//     const callback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     };

//     const options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.3, // Trigger when 30% of the section is visible
//     };

//     sections.forEach((section) => {
//       const element = document.getElementById(section);
//       if (element) {
//         const observer = new IntersectionObserver(callback, options);
//         observer.observe(element);
//         observers.push(observer);
//       }
//     });

//     // Cleanup observers on unmount
//     return () => {
//       observers.forEach((observer) => observer.disconnect());
//     };
//   }, []);

//   return (
//     <>
//       <nav className="navbar" style={{ position: "sticky", top: 0, zIndex: 1000 }}>
//         <div className="navbar-container">
//           <Link to="/" className="navbar-logo">
//             MA
//           </Link>

//           <button className="navbar-toggle" onClick={toggleMenu}>
//             <span className="navbar-toggle-icon"></span>
//           </button>

//           <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
//             <Link
//               to="/#home"
//               className={activeSection === "home" ? "active" : ""}
//               onClick={() => {
//                 setIsMenuOpen(false);
//                 setActiveSection("home");
//               }}
//             >
//               Home
//             </Link>
//             <Link
//               to="/#journey"
//               className={activeSection === "journey" ? "active" : ""}
//               onClick={() => {
//                 setIsMenuOpen(false);
//                 setActiveSection("journey");
//               }}
//             >
//               Journey
//             </Link>
           
//             <Link
//               to="/#perfect-candidate"
//               className={activeSection === "perfect-candidate" ? "active" : ""}
//               onClick={() => {
//                 setIsMenuOpen(false);
//                 setActiveSection("perfect-candidate");
//               }}
//             >
//               Perfect Candidate
//             </Link>
//             <Link
//               to="/#candidate-insights"
//               className={activeSection === "candidate-insights" ? "active" : ""}
//               onClick={() => {
//                 setIsMenuOpen(false);
//                 setActiveSection("candidate-insights");
//               }}
//             >
//               Candidate Insights
//             </Link>
//             <Link
//               to="/#services"
//               className={activeSection === "services" ? "active" : ""}
//               onClick={() => {
//                 setIsMenuOpen(false);
//                 setActiveSection("services");
//               }}
//             >
//               Services
//             </Link>
//             <Link
//               to="/#features"
//               className={activeSection === "features" ? "active" : ""}
//               onClick={() => {
//                 setIsMenuOpen(false);
//                 setActiveSection("features");
//               }}
//             >
//               Features
//             </Link>
//             <Link
//               to="/testimonials"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Testimonials
//             </Link>
//             <Link
//               to="/bookingdemo"
//               onClick={() => setIsMenuOpen(false)}
//               className="cta-button"
//             >
//               Book Meeting
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Dangling Billboard */}
    

//       {/* Inline CSS for Dangling Animation */}
//       <style>
//         {`
//           @keyframes dangle {
//             0% { transform: translateY(0); }
//             50% { transform: translateY(10px); }
//             100% { transform: translateY(0); }
//           }
//           @media (max-width: 768px) {
//             .billboard {
//               width: 90% !important; /* Adjust width for mobile */
//               font-size: 14px !important;
//             }
//           }
//         `}
//       </style>
//     </>
//   );
// }

// export default Navbar;















// Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll to highlight active section
  useEffect(() => {
    const sections = [
      "home",
      "journey",
      "services",
      "features",
      "perfect-candidate",
      "candidate-insights",
    ];
    const observers = [];

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(callback, options);
        observer.observe(element);
        observers.push(observer);
      }
    });

    // Cleanup observers on unmount
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "white",
          padding: "10px 20px",
          margin: "20px auto",
          width: "40%", //90
          maxWidth: "1200px",
          borderRadius: "50px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
            textDecoration: "none",
          }}
        >
          MA
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          onClick={toggleMenu}
          style={{
            display: "none", // Hidden on desktop, shown on mobile via media query
            background: "none",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#333",
          }}
          className="navbar-toggle"
        >
          <span className="navbar-toggle-icon">☰</span>
        </button>

        {/* Navlinks */}
        <div
          className={`navbar-links ${isMenuOpen ? "active" : ""}`}
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            flexWrap: "wrap", // Changed from nowrap to wrap for better mobile handling
            flexDirection: "row",
            backgroundColor: "transparent",
            position: isMenuOpen ? "absolute" : "static",
            top: isMenuOpen ? "60px" : "auto",
            left: 0,
            width: isMenuOpen ? "100%" : "auto",
            padding: isMenuOpen ? "20px" : "0",
            boxShadow: isMenuOpen ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none",
            borderRadius: isMenuOpen ? "0 0 20px 20px" : "0",
            justifyContent: "center",
          }}
        >
          <Link
            to="/#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={() => {
              setIsMenuOpen(false);
              setActiveSection("home");
            }}
            style={{
              padding: "8px 20px",
              borderRadius: "50px",
              textDecoration: "none",
              color: activeSection === "home" ? "white" : "#333",
              backgroundColor: activeSection === "home" ? "#007bff" : "transparent",
              fontWeight: "500",
              transition: "background-color 0.3s, color 0.3s",
              whiteSpace: "nowrap",
              display: "inline-block",
              opacity: 1,
            }}
          >
            Home
          </Link>
          {/* <Link
            to="/#journey"
            className={activeSection === "journey" ? "active" : ""}
            onClick={() => {
              setIsMenuOpen(false);
              setActiveSection("journey");
            }}
            style={{
              padding: "8px 20px",
              borderRadius: "50px",
              textDecoration: "none",
              color: activeSection === "journey" ? "white" : "#333",
              backgroundColor: activeSection === "journey" ? "#007bff" : "transparent",
              fontWeight: "500",
              transition: "background-color 0.3s, color 0.3s",
              whiteSpace: "nowrap",
              display: "inline-block",
              opacity: 1,
            }}
          >
            Journey
          </Link>
          <Link
            to="/#perfect-candidate"
            className={activeSection === "perfect-candidate" ? "active" : ""}
            onClick={() => {
              setIsMenuOpen(false);
              setActiveSection("perfect-candidate");
            }}
            style={{
              padding: "8px 20px",
              borderRadius: "50px",
              textDecoration: "none",
              color: activeSection === "perfect-candidate" ? "white" : "#333",
              backgroundColor: activeSection === "perfect-candidate" ? "#007bff" : "transparent",
              fontWeight: "500",
              transition: "background-color 0.3s, color 0.3s",
              whiteSpace: "nowrap",
              display: "inline-block",
              opacity: 1,
            }}
          >
            Perfect Candidate
          </Link>
          <Link
            to="/#candidate-insights"
            className={activeSection === "candidate-insights" ? "active" : ""}
            onClick={() => {
              setIsMenuOpen(false);
              setActiveSection("candidate-insights");
            }}
            style={{
              padding: "8px 20px",
              borderRadius: "50px",
              textDecoration: "none",
              color: activeSection === "candidate-insights" ? "white" : "#333",
              backgroundColor: activeSection === "candidate-insights" ? "#007bff" : "transparent",
              fontWeight: "500",
              transition: "background-color 0.3s, color 0.3s",
              whiteSpace: "nowrap",
              display: "inline-block",
              opacity: 1,
            }}
          >
            Candidate Insights
          </Link> */}
          {/* <Link
            to="/#services"
            className={activeSection === "services" ? "active" : ""}
            onClick={() => {
              setIsMenuOpen(false);
              setActiveSection("services");
            }}
            style={{
              padding: "8px 20px",
              borderRadius: "50px",
              textDecoration: "none",
              color: activeSection === "services" ? "white" : "#333",
              backgroundColor: activeSection === "services" ? "#007bff" : "transparent",
              fontWeight: "500",
              transition: "background-color 0.3s, color 0.3s",
              whiteSpace: "nowrap",
              display: "inline-block",
              opacity: 1,
            }}
          >
            Services
          </Link>
          <Link
            to="/#features"
            className={activeSection === "features" ? "active" : ""}
            onClick={() => {
              setIsMenuOpen(false);
              setActiveSection("features");
            }}
            style={{
              padding: "8px 20px",
              borderRadius: "50px",
              textDecoration: "none",
              color: activeSection === "features" ? "white" : "#333",
              backgroundColor: activeSection === "features" ? "#007bff" : "transparent",
              fontWeight: "500",
              transition: "background-color 0.3s, color 0.3s",
              whiteSpace: "nowrap",
              display: "inline-block",
              opacity: 1,
            }}
          >
            Features
          </Link> */}
          {/* Testimonials - Styled Differently */}
          <Link
            to="/testimonials"
            onClick={() => setIsMenuOpen(false)}
            style={{
              padding: "8px 20px",
              borderRadius: "50px",
              textDecoration: "none",
              color: "#333",
              backgroundColor: "#f1f1f1", // Light gray background to distinguish
              border: "1px solid #ddd", // Subtle border
              fontWeight: "500",
              transition: "background-color 0.3s, color 0.3s",
              whiteSpace: "nowrap",
              display: "inline-block",
              opacity: 1,
            }}
          >
            Testimonials
          </Link>
          {/* Book Meeting - Styled as a CTA Button */}
          <Link
            to="/bookingdemo"
            onClick={() => setIsMenuOpen(false)}
            className="cta-button"
            style={{
              padding: "8px 20px",
              borderRadius: "50px",
              textDecoration: "none",
              color: "white",
              backgroundColor: "#007bff", // Blue background to make it stand out
              fontWeight: "500",
              transition: "background-color 0.3s, color 0.3s",
              whiteSpace: "nowrap",
              display: "inline-block",
              opacity: 1,
            }}
          >
            Book Meeting
          </Link>
        </div>
      </nav>

      {/* Inline CSS for Dangling Animation, Responsiveness, and Hover Effects */}
      <style>
        {`
          @keyframes dangle {
            0% { transform: translateY(0); }
            50% { transform: translateY(10px); }
            100% { transform: translateY(0); }
          }
          /* Ensure active link text is visible */
          nav div.navbar-links a.active {
            color: white !important;
            visibility: visible !important;
            opacity: 1 !important;
          }
          /* Hover effect for Testimonials */
          .navbar-links a[href="/testimonials"]:hover {
            background-color: #e0e0e0 !important;
            color: #333 !important;
          }
          /* Hover effect for Book Meeting */
          .navbar-links a[href="/bookingdemo"]:hover {
            background-color: #0056b3 !important; /* Darker blue on hover */
            color: white !important;
          }
          /* Mobile Responsiveness */
          @media (max-width: 768px) {
            .billboard {
              width: 90% !important;
              font-size: 14px !important;
            }
            nav {
              width: 95% !important;
              padding: 8px 15px !important; /* Reduced padding for mobile */
              flex-wrap: wrap; /* Allow wrapping for better layout */
            }
            .navbar-links {
              display: ${isMenuOpen ? "flex" : "none"} !important;
              flex-direction: column !important; /* Stack links vertically on mobile */
              align-items: center;
              gap: 10px !important;
              width: 100%;
              background-color: white;
              border-radius: 0 0 20px 20px;
              padding: 15px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
            .navbar-links a {
              width: 100%; /* Full width for each link */
              text-align: center; /* Center the text */
              padding: 10px 15px !important; /* Adjusted padding for mobile */
              font-size: 16px; /* Slightly smaller font for mobile */
            }
            .navbar-toggle {
              display: block !important;
            }
            .navbar-links a[href="/testimonials"],
            .navbar-links a[href="/bookingdemo"] {
              width: 100%; /* Ensure full width for styled links */
            }
          }
          @media (min-width: 769px) {
            .navbar-links {
              display: flex !important;
              flex-wrap: wrap; /* Allow wrapping if needed on larger screens */
              gap: 10px !important;
            }
            .navbar-toggle {
              display: none !important;
            }
            .navbar-links a {
              padding: 8px 20px !important; /* Restore original padding */
            }
          }
        `}
      </style>
    </>
  );
}

export default Navbar;