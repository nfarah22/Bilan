import React from 'react';
import logo from './ruug.JPG'; 
const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <img 
                src={logo} 
                alt="Ruug Tech Logo" 
                height="50" // Set the height according to your preference
              />
              <p className="mb-0">Designed by Ruug Tech</p>
            </div>
            <div className="col-lg-6 col-md-12 text-lg-end">
              <p className="mb-0">© {new Date().getFullYear()} Bilan. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

