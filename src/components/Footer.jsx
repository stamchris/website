import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="text-lg font-medium mb-4">About Us</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada velit euismod, bibendum ipsum id, malesuada nulla.
            </p>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="text-gray-500">
              <li className="mb-2"><a href="#">Home</a></li>
              <li className="mb-2"><a href="#">Services</a></li>
              <li className="mb-2"><a href="#">Products</a></li>
              <li className="mb-2"><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="text-lg font-medium mb-4">Social</h3>
            <ul className="text-gray-500">
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-500">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-500">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-500">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="text-gray-500">
              <li className="mb-2">
                <i className="fas fa-map-marker-alt"></i> Location:
                <span className="ml-2">123 Main St, City, Country</span>
              </li>
              <li className="mb-2">
                <i className="fas fa-phone"></i> Phone:
                <span className="ml-2">+123 456 78 </span>
              </li>
            </ul>
         </div>
        </div>
    </div>
    </footer>
    
  )}


export default Footer