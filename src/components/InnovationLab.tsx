import React from "react";

const InnovationLab = () => {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#10142A] dark:bg-[#10142A]"
      id="innovation-lab"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Innovation <span className="text-primary">Lab</span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-400">
          Research, insights, and perspectives shaping the future of real estate
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <LabCard
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCcPmtHroSFZjCvRy2cEOJMXxlU4gK0qy8LSZp4HHcv9WcRc-WRjqSGKya614eo7M7iDxCmGg_M_abzmLRyVQnlf8JTZULUrNSKijWsBgyPnZ0NFM5U9U5HW9lW33jWwfNHO6mqSqMAYd8_wm6dJmHY8QQ6y2gUap7xNQpgK3ryG1sdVRol1cCXXE7vVAiDH46vK_1v4g3cLQpexAfbBEudbBMJSzQH8p9QAQ-LZrVAi452ZtcwxcieSlFl51h2Z3AgKRVlyTj_QzM"
            category="FEATURED BOOK"
            title="Tokens and Towers"
            subtitle="From Blueprint to Blockchain, Reimagining Real Estate"
            description="This book provides the blueprint for the next generation of real estate, making property fast, fluid, and open to everyone."
            primaryAction="Download Book"
            secondaryAction="View Cover"
          />
          <LabCard
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBrMOVWHN_so83v0Drx8kC5AIaz_-nuv52ssAvyxtTafDsyXtqfrGT0JvQC48Azkb7fXCNdfjL-a0OmC7T8tENVc8sYBr1WI5x2k54fZ2NWrI2m33KWGIfG4YhVb5kUrx2w5WiqpCmoW6ygo67fdJ4wc-lJ_o2Ltf8Y9vQ4DxbC_klgL54M8faSvwQGYxV_eunhHY-B5bxnaTCtJ4iBpAYEXMpHoen4VVEOtXbMmawFMv7Yr4wiBovbQ62KvOinLVlHj5LccmcqmrY"
            category="FEATURED RESEARCH"
            title="The $952 Billion Opportunity"
            subtitle="Unlocking Value in Real Estate"
            description="An in-depth analysis of the untapped potential in real estate markets and how digital transformation can unlock trillions in value."
            primaryAction="Download Book"
            secondaryAction="View Cover"
          />
          <LabCard
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuD2cxDqYre_Yn8tvX1otFS7L2qQcTqfUP81d8aiZq0yWqgYy1U_R_4HXP-xnriyNguSnmzUm4BH5-pMyzGJl6dykyL4-Oe9A0d3Jff1a_QMFeLietQ2YYkGFC1E6sG8XqORqcI7VHMInx2-a84Z6k65YFA3eI3H-kDZ22B9in0Beq3HbGXaDYOT1y2JtXlKiTt2A77uHLB5-HN70nCMNSayL7uvgNKRODM_lYgM_esUaV75UJ13hjytjr6TaeC0345JZSEsFkw3YaI"
            category="FEATURED REPORT"
            title="Atlanta Smart Token"
            subtitle="Revolutionizing Property Investment"
            description="A comprehensive guide to tokenizing real estate assets and creating new investment opportunities in the Atlanta market."
            primaryAction="Download Report"
            secondaryAction="View Cover"
          />
        </div>
      </div>
    </section>
  );
};

const LabCard = ({
  image,
  category,
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
}) => (
  <div className="bg-gray-800/50 dark:bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden">
    <img
      alt={`${title} cover`}
      className="w-full h-56 object-cover"
      src={image}
    />
    <div className="p-6">
      <span className="text-xs font-semibold text-blue-400 bg-blue-900/50 px-2 py-1 rounded">
        {category}
      </span>
      <h3 className="text-2xl font-bold text-white mt-3">{title}</h3>
      <p className="text-gray-400 mt-1">{subtitle}</p>
      <p className="text-sm mt-3 text-gray-500">{description}</p>
      <div className="mt-6 flex gap-4">
        <a
          className="bg-primary text-gray-900 px-6 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          href="#"
        >
          {primaryAction}
        </a>
        <a
          className="bg-gray-700/50 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-gray-600/50 transition-colors"
          href="#"
        >
          {secondaryAction}
        </a>
      </div>
    </div>
  </div>
);

export default InnovationLab;
