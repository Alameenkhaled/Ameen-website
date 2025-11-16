"use client";

import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-8 bg-background-dark/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-800/50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-primary">A.A.</div>
        <nav className="hidden lg:flex items-center space-x-8">
          <a className="hover:text-primary transition-colors" href="#">
            Home
          </a>
          <a className="hover:text-primary transition-colors" href="#solutions">
            Solutions
          </a>
          <a
            className="hover:text-primary transition-colors"
            href="#innovation-lab"
          >
            Innovation Lab
          </a>
          <a className="hover:text-primary transition-colors" href="#articles">
            Articles
          </a>
          <a className="hover:text-primary transition-colors" href="#contact">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <a
            className="bg-primary text-gray-900 px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            href="#"
          >
            Download Profile
          </a>
          <button className="lg:hidden text-white">
            <span className="material-icons-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
