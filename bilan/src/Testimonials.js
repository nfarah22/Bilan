import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "The attention to detail was remarkable. Our living room has never looked better!",
    author: "Jamie & Alex Thompson",
    location: "Glasgow"
  },
  {
    id: 2,
    quote: "Professional from start to finish. The Venetian plasterwork in our hallway is a true masterpiece.",
    author: "Samantha Clark",
    location: "Bearsden"
  },
  {
    id: 3,
    quote: "They transformed our office space with incredible skill. Quick, clean, and exceeded all our expectations.",
    author: "Derek Robertson",
    location: "Hillington"
  }

];

const Testimonials = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-4">
          <h2 style={{ color: '#6C4A4A' }}>What Our Customers Say...</h2>
        </div>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#6C4A4A' }}>🌟 {testimonial.author}</h5>
                <p className="card-text">{testimonial.quote}</p>
                <footer className="blockquote-footer">{testimonial.location}</footer>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
