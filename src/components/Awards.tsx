"use client";

import React, { useState } from "react";

const Awards = () => {
  const [open, setOpen] = useState("Highest Number of Transactions – DLD (2017)");
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWQwoQz1K3Pi2J9Xgz-gHkKAJb_AVO8DJH8KemUTwEoOEcDFmL6m109OgTRCWPv1HHnlECGa2iWxcktXMVmU8VeufHylnlrUkbLMokP3VQ_8nlmy6kiZfqjedaH69k4Q6IxzZ8XvtHZcDNscOHlPHi0yP5S59OLuZDR190vSdrsVDR-TkAB_MsjMzfENq2hMq6Ji2k1bLBizXex-mefGEgd3ID2xOLzQosYbgB68cOLYN0yNlvrAQWdu5O1WNMkrTVg_4yvQzr3ow')",
      }}
    >
      <div className="absolute inset-0 bg-background-dark/80"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Awards & <span className="text-primary">Recognitions</span>
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          <AwardCard
            title="Highest Number of Transactions – DLD (2017)"
            description="Recognized for exceptional sales performance in a competitive market."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDb4TBXFmExDoHo2IhRzn79LXvCSXz4ye-IyrT26x16xun4KrbL1TYzgZGEh0EqQ6D1rL-iqZpfRuJM08KdVrRo5I262Ic9GQLIMC7qxg5alitZS_i0IKihoXkzIWRprL8KBMZLIqMpnDmJQEK_1vrE6dViu5OgBBEsuQdd4_sku2vOgGR_P5meGNGjL4gzoR9qd2iZe27oQyCnte9ijz46mbCkHZ95t4uzys1Wt-YTYDsEbnkcD09bmRv7p36hxiDADuY0Uhcr6FM"
            open={open}
            setOpen={setOpen}
          />
          <AwardCard
            title="Real Estate Excellence Award – DLD (2018)"
            description="Honored for industry leadership and client service excellence."
            open={open}
            setOpen={setOpen}
          />
        </div>
      </div>
    </section>
  );
};

const AwardCard = ({ title, description, image, open, setOpen }) => {
  const isOpen = open === title;

  return (
    <div
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
      onClick={() => setOpen(isOpen ? null : title)}
    >
      <div className="flex justify-between items-center cursor-pointer">
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-400 mt-1">{description}</p>
        </div>
        <span
          className={`material-icons-outlined text-primary transition-transform ${
            isOpen ? "transform rotate-90" : ""
          }`}
        >
          arrow_forward_ios
        </span>
      </div>
      {isOpen && image && (
        <img
          alt="Award ceremony"
          className="mt-4 rounded-lg w-full h-auto"
          src={image}
        />
      )}
    </div>
  );
};

export default Awards;
