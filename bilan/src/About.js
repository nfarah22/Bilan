import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 mb-4">
          <h2 className="text-center">About Us - Crafting Elegance in Plaster</h2>
          <p className="lead text-center">Professional craftsmanship delivered with passion and precision.</p>
        </div>
        
        <div className="col-lg-6">
          <h3>Our Expertise</h3>
          <p>
            Our team brings over a decade of experience to the table, specializing in both traditional and contemporary plastering techniques, including the luxurious Venetian plasterwork.
          </p>
          </div>
        
        <div className="col-lg-6">
          <h3>Our Promise</h3>
          <p>
            We commit to the highest quality in every project, ensuring durability and beauty in equal measure.
          </p>
        </div>
        
        <div className="col-12 mt-4">
          <h3>Areas We Serve 📍</h3>
          <p>
            We're proud to offer our services to a wide area, bringing expertise right to your doorstep:
          </p>
          <ul className="list-unstyled">
            <li> Glasgow</li>
            <li> Shawlands</li>
            <li> Clarkston</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
