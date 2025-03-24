import "../Styles/AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Testimonials from "./about_testimonials.js";
import Footer from "./footer";
import VideoWithText from "./animated.js";
import StepCards from "./steps.js";

function AboutUsPage() {
  const cardData = [
    {
      img: "/Images/i1.svg",
      title: "Contextual Search Beyond Keywords",
      description:
        "Find candidates who align perfectly. Semantic search interprets the full context of your needs, offering smarter matches.",
      badges: ["Seniority", "Skills", "Career Path"],
      bgColor: "#f7f7fb",
    },
    {
      img: "/Images/i2.svg",
      title: "Match on Key Attributes",
      description:
        "Go beyond resumes. Understand candidates' full potential by evaluating attributes like career progression and impact.",
      badges: ["Experience", "Growth Potential"],
      bgColor: "#f9f5fe",
    },
    {
      img: "/Images/i3.svg",
      title: "AI-Driven Recommendations",
      description:
        "Let AI suggest the best-fit candidates by analyzing behavioral patterns and industry trends.",
      badges: ["AI Matching", "Data Insights"],
      bgColor: "#f3faff",
    },
    {
      img: "/Images/i4.svg",
      title: "Deep Candidate Insights",
      description:
        "Get a 360-degree view of candidates, including their soft skills, work ethic, and leadership potential.",
      badges: ["Behavioral Analysis", "Skill Assessment"],
      bgColor: "#f7f7fb",
    },
  ];

  const testimonials = [
    {
      stars: 5,
      quote: "The Perfect Way to Find Candidates",
      tagline: "Love it!",
      name: "Jim S.",
      company: "TJSS Podcast",
      avatar: "/Images/avatar-jim.png"
    },
    {
      stars: 5,
      quote: "The algorithm quickly and accurately identifies candidates, saving me hours of searching through various recruitment platforms.",
      name: "Julie S.",
      company: "Coralogix",
      avatar: "/Images/avatar-julie.png"
    },
    {
      stars: 5,
      quote: "It's like someone just heated up my cold calls. It's pretty perfect",
      name: "Anat M.",
      company: "Bringg",
      avatar: "/Images/avatar-anat.png"
    },
    {
      stars: 5,
      quote: "Find qualified candidates faster and streamline your sourcing and engagement.",
      name: "Yogi K.",
      company: "Reeco",
      avatar: "/Images/avatar-yogi.png"
    }
  ];

  const stats = [
    {
      value: "28%",
      title: "Outreach Reply Rate",
      subtitle: "Senior Chemist Role",
      company: "AlphaStaff",
      backgroundColor: "#ffebee"
    },
    {
      value: "59%",
      title: "Acceptance Rate",
      subtitle: "Tax Manager Role",
      company: "Tax Search",
      backgroundColor: "#ffebee"
    },
    {
      value: "+5",
      title: "Successful Hires",
      subtitle: "-50% Time-to-hire",
      company: "Mina Group",
      backgroundColor: "#ffebee"
    },
    {
      value: "+100",
      title: "Relevant Candidates",
      subtitle: "in under 90 minutes",
      company: "Reibus",
      backgroundColor: "#ffebee"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="about-hero main">
        <div className="row container  flex-column-reverse d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start">
          <div className="col-md-8 about-hero-text">
            <h1 className="about-hero-title">Mihir Amin</h1>
            <p className="about-hero-subtitle">
              Empowering Career Growth Through Guidance and Support
            </p>
            <p className="description">
              With over a decade of experience in career development and professional mentoring,
              I've helped hundreds of individuals navigate their career paths and achieve their professional goals.
              My approach combines strategic guidance with practical insights, enabling professionals to unlock their full potential.
            </p>
            <button className="about-hero-button">Connect with me</button>
          </div>
          <img
            src="/Images/mihir.jpg"
            alt="Mihir Amin"
            className="col-md-4 about-hero-image img-fluid my-5 mt-md-0"
          />
        </div>

        {/* Logo Slider */}
        <div className="logo-slider">
          <div className="slider-track">
            <img src="/Images/c1.svg" alt="Logo 1" className="logo" />
            <img src="/Images/c2.svg" alt="Logo 2" className="logo" />
            <img src="/Images/c1.svg" alt="Logo 3" className="logo" />
            <img src="/Images/c2.svg" alt="Logo 4" className="logo" />
            <img src="/Images/c1.svg" alt="Logo 1" className="logo" />
            <img src="/Images/c2.svg" alt="Logo 2" className="logo" />
            <img src="/Images/c1.svg" alt="Logo 3" className="logo" />
            <img src="/Images/c2.svg" alt="Logo 4" className="logo" />
            <img src="/Images/c1.svg" alt="Logo 1" className="logo" />
            <img src="/Images/c2.svg" alt="Logo 2" className="logo" />
            <img src="/Images/c1.svg" alt="Logo 3" className="logo" />
            <img src="/Images/c2.svg" alt="Logo 4" className="logo" />
          </div>
        </div>
      </section>
      <div className="main">
        {/* Card Section */}
        <div className="container-md py-5">
          <div className="row g-4">
            {cardData.map((card, index) => (
              <div className="col-md-6 col-lg-6" key={index}>
                <div className="card border-0 shadow-sm" style={{ backgroundColor: card.bgColor }}>
                  {/* Conditionally Render Image Above or Below Text */}
                  {index % 2 === 0 ? (
                    // For cards 1 and 3 (index 0 and 2) → Image on top
                    <>
                      <img src={card.img} alt={card.title} className="card-img-top mb-3" />
                      <div className="card-body">
                        <h4 className="heading">{card.title}</h4>
                        <p className="white-text">{card.description}</p>
                        <div className="mt-3">
                          {card.badges.map((badge, i) => (
                            <span key={i} className="badge bg-primary me-2">
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    // For cards 2 and 4 (index 1 and 3) → Image below text
                    <>
                      <div className="card-body">
                        <h4 className="heading">{card.title}</h4>
                        <p className="white-text">{card.description}</p>
                        <div className="mt-3">
                          {card.badges.map((badge, i) => (
                            <span key={i} className="badge bg-primary me-2">
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                      <img src={card.img} alt={card.title} className="card-img-top mt-3" />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="testimonial-container">
          <div className="testimonial-box">
            <div className="quote-mark">❝</div>
            <h2 className="testimonial-text">"The Recruiter's AI Sidekick"</h2>
            <p className="testimonial-author">Yogi Kidar <span>Founder @ Reeco</span></p>
            <p className="testimonial-company">Reeco</p>
          </div>
        </section>

        <section className="yourPerfect">
          <div className="textContent">
            <div className="head">
              <h1>Find Your Perfect</h1>
              <h1>Candidate - Every Time.</h1>
            </div>
            <div className="subtext">
              Find the right candidates effortlessly. Collaborate with your team and let AI handle the details. 50% faster hires!
            </div>
          </div>
          <img
            src="/Images/perfect.png"
            alt="Find Your Perfect Match"
            className="about-hero-image img-fluid"
          />
        </section>




        {/* Testimonials Section */}
        <Testimonials />
        <VideoWithText />
        <section className="banner-container my-5">
      <div className="banner-overlay">
        <img src="/Images/logo.png" alt="Logo" className="banner-logo" />
        <h1 className="banner-heading">Hire top global talent with the click of a button</h1>
        <div className="banner-buttons">
          <button className="banner-outline-btn">Create an account</button>
          <button className="banner-filled-btn">Book a demo</button>
        </div>
      </div>
    </section>

    {/* <div className="step-card">
      <div className="step-indicator">
        <div className="circle"></div>
        <div className="step-label">Step 1</div>
      </div>

      <div className="icon-container">
        <img
          className="icon-image"
          src="/Images/arrow.svg"
          alt="3D cube icon representing setup"
        />
      </div>

      <h2 className="step-title">Sign up & Profile</h2>

      <p className="step-description">
        Create your account with our guided setup process. Access your
        personalized dashboard instantly.
      </p>
    </div> */}

      <StepCards />

      </div>
        <Footer />

        
    </>
  );
}

export default AboutUsPage;