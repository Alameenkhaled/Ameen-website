import React from "react";

const Hero = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWQwoQz1K3Pi2J9Xgz-gHkKAJb_AVO8DJH8KemUTwEoOEcDFmL6m109OgTRCWPv1HHnlECGa2iWxcktXMVmU8VeufHylnlrUkbLMokP3VQ_8nlmy6kiZfqjedaH69k4Q6IxzZ8XvtHZcDNscOHlPHi0yP5S59OLuZDR190vSdrsVDR-TkAB_MsjMzfENq2hMq6Ji2k1bLBizXex-mefGEgd3ID2xOLzQosYbgB68cOLYN0yNlvrAQWdu5O1WNMkrTVg_4yvQzr3ow')",
          opacity: 0.1,
        }}
      ></div>
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center bg-gray-800/50 text-xs px-3 py-1 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
            ARCHITECT OF DUBAI'S AED 90B PROPTECH INITIATIVE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Turn Real Estate Complexity Into{" "}
            <span className="text-primary">Competitive Advantage</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
            I help real estate leaders, developers, and brokerages deploy AI and
            blockchain to increase asset values by 20-40%, reduce operational
            costs by 30-50%, and dominate their markets.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              className="bg-primary text-gray-900 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              href="#"
            >
              Book Free Strategy Session
            </a>
            <a
              className="bg-gray-700/50 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600/50 transition-colors"
              href="#"
            >
              See Solutions
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-white">167%</p>
              <p className="text-sm text-gray-400">Revenue Growth</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">$545M</p>
              <p className="text-sm text-gray-400">Asset Monetized</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">420%</p>
              <p className="text-sm text-gray-400">ROI Achieved</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            alt="Portrait of the real estate technology expert"
            className="rounded-2xl shadow-2xl w-full max-w-md"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnfSiIkqjUFIdhge0AaaDBvMCZ0mnx4D353Fb19GGl2FoGk_wtC3G1YSE0bX21mXNR8lHyai8DtrvIvXF7rvOxxnXeXZPf1a65DUX6xZDnPkyB1LkBxlwXaffPCJIQt6RkzptOgM_cQoTjYHu3TqSexCghc8t6JXLaO3NdK9yGeVKaRhYgAtch9p8fadh_7T07PVRFlWuRQI0ZZ79X8wFcpZJOBcA1fCij1D28PKDcY2xnuwX2CTv6LHNBUlAehX01pRo1bYEn-nA"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
