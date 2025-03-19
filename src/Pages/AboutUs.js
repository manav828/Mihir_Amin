import "../Styles/AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";

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

  return (
    <>

 
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start">
          <div className="about-hero-text">
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
            src="/Images/avatar.svg"
            alt="Mihir Amin"
            className="about-hero-image img-fluid"
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
              <div className="card border-0  shadow-sm" style={{ backgroundColor: card.bgColor }}>
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
        {/* <img src="quote.png" alt="Quote Mark" class="quote-mark"/> */}
        </div>
      </div>
      <section class="testimonial-container">
    <div class="testimonial-box">
        <div class="quote-mark">❝</div>
        <h2 class="testimonial-text">"The Recruiter’s AI Sidekick"</h2>
        <p class="testimonial-author">Yogi Kidar <span>Founder @ Reeco</span></p>
        <p class="testimonial-company">Reeco</p>
    </div>
</section>


      </div>
    </>
  );
}

export default AboutUsPage;
