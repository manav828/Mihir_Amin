import React from "react";
import "../Styles/about_testimonials.css"; // Custom styles

const testimonials = [
  {
    stars: 5,
    quote: "The Perfect Way to Find Candidates",
    tagline: "Love it!",
    name: "Jim S.",
    company: "TJSS Podcast",
    avatar: "/Images/avatar-jim.png",
  },
  {
    stars: 5,
    quote:
      "The algorithm quickly and accurately identifies candidates, saving me hours of searching through various recruitment platforms.",
    name: "Julie S.",
    company: "Coralogix",
    avatar: "/Images/avatar-julie.png",
  },
  {
    stars: 5,
    quote: "It's like someone just heated up my cold calls. It's pretty perfect",
    name: "Anat M.",
    company: "Bringg",
    avatar: "/Images/avatar-anat.png",
  },
  {
    stars: 5,
    quote:
      "Find qualified candidates faster and streamline your sourcing and engagement.",
    name: "Yogi K.",
    company: "Reeco",
    avatar: "/Images/avatar-yogi.png",
  },
  {
    stars: 5,
    quote: "The Perfect Way to Find Candidates",
    tagline: "Love it!",
    name: "Jim S.",
    company: "TJSS Podcast",
    avatar: "/Images/avatar-jim.png",
  },
  {
    stars: 5,
    quote:
      "The algorithm quickly and accurately identifies candidates, saving me hours of searching through various recruitment platforms.",
    name: "Julie S.",
    company: "Coralogix",
    avatar: "/Images/avatar-julie.png",
  },
  {
    stars: 5,
    quote: "It's like someone just heated up my cold calls. It's pretty perfect",
    name: "Anat M.",
    company: "Bringg",
    avatar: "/Images/avatar-anat.png",
  },
  {
    stars: 5,
    quote:
      "Find qualified candidates faster and streamline your sourcing and engagement.",
    name: "Yogi K.",
    company: "Reeco",
    avatar: "/Images/avatar-yogi.png",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      {/* Heading */}

      <div className="test_content">

      <h1 className="test_head">Users Delivering Real Results</h1>
      <p className="test_p">Real stories from teams achieving more with Perfect.</p>
      </div>

      {/* Testimonial Cards */}
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => {
          // Determine row index (0-based) and column index (0-based)
          const rowIndex = Math.floor(index / 4);
          const columnIndex = index % 4;

          // Alternating Background Colors Based on Row and Column Index
          let bgClass;
          if (rowIndex % 2 === 0) {
            bgClass = columnIndex % 2 === 0 ? "bg-light" : "bg-pink";
          } else {
            bgClass = columnIndex % 2 === 0 ? "bg-pink" : "bg-light";
          }

          return (
            <div key={index} className={`testimonial-card ${bgClass}`}>
              {/* Stars */}
              <div className="stars">{"★".repeat(testimonial.stars)}</div>

              {/* Quote */}
              <p className="quote">{testimonial.quote}</p>

              {/* Tagline */}
              {testimonial.tagline && <p className="tagline">{testimonial.tagline}</p>}

              {/* Avatar & Name */}
              <div className="testimonial-footer">
                {/* <img src={testimonial.avatar} alt={testimonial.name} className="avatar" /> */}
                <div>
                  <strong>{testimonial.name}</strong>
                  <p className="company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
