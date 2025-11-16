"use client";

import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background-dark"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="mt-4 max-w-lg mx-auto lg:mx-0 text-gray-400">
              Have a question, a project idea, or just want to discuss the
              future of real estate tech? Drop me a line. I'm always open to
              connecting with fellow innovators and industry leaders.
            </p>
            <div className="mt-10 space-y-6">
              <ContactInfo
                icon="email"
                title="Email"
                value="contact@example.com"
                href="mailto:contact@example.com"
              />
              <ContactInfo
                icon="phone"
                title="Phone"
                value="+1 (234) 567-890"
                href="tel:+1234567890"
              />
              <ContactInfo
                icon="calendar_today"
                title="Schedule a Meeting"
                value="Book a free strategy session"
                href="#"
              />
            </div>
          </div>
          <div>
            <div className="bg-[#10142A] p-8 rounded-2xl border border-gray-700">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-400"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <input
                      className="mt-1 block w-full bg-gray-800 border-gray-600 text-white rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-400"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      className="mt-1 block w-full bg-gray-800 border-gray-600 text-white rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-400"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    className="mt-1 block w-full bg-gray-800 border-gray-600 text-white rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"
                    id="subject"
                    name="subject"
                    placeholder="e.g., AI Integration Inquiry"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-400"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="mt-1 block w-full bg-gray-800 border-gray-600 text-white rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows="5"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="w-full bg-primary text-gray-900 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, value, href }) => (
  <div className="flex items-center">
    <div className="w-12 h-12 flex-shrink-0 bg-gray-800 rounded-lg flex items-center justify-center">
      <span className="material-icons-outlined text-primary text-2xl">
        {icon}
      </span>
    </div>
    <div className="ml-4">
      <p className="font-semibold text-white">{title}</p>
      <a
        className="text-gray-400 hover:text-primary transition-colors"
        href={href}
      >
        {value}
      </a>
    </div>
  </div>
);

export default Contact;
