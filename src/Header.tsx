import React from "react";

const Header: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-50 ${
        isVisible ? "animate-slideDown" : "animate-slideUp"
      }`}
    >
      <div>JustJits</div>
      <nav>
        <a href="#description" className="mx-2">
          About
        </a>
        <a href="#features" className="mx-2">
          Features
        </a>
        <a href="#signup" className="mx-2">
          Sign Up
        </a>
      </nav>
    </div>
  );
};

export default Header;
