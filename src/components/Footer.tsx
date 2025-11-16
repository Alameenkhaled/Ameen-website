import React from "react";

const Footer = () => {
  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 bg-[#10142A] dark:bg-[#10142A]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready to Transform Your{" "}
          <span className="text-primary">Real Estate Business?</span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-400">
          Schedule a complimentary 30-minute strategy session to identify your
          biggest opportunities for AI and blockchain transformation.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <FooterLink
            icon="schedule"
            color="blue"
            title="No Obligation"
            description="Free consultation with no commitment"
          />
          <FooterLink
            icon="checklist"
            color="purple"
            title="Actionable Insights"
            description="Leave with 3-5 specific recommendations"
          />
          <FooterLink
            icon="flash_on"
            color="green"
            title="Proven Results"
            description="267% average ROI for clients"
          />
          <FooterLink
            icon="military_tech"
            color="yellow"
            title="Proven Expertise"
            description="Led Dubai's proptech initiative"
          />
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
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
            Email Directly
          </a>
        </div>
        <div className="mt-20 border-t border-gray-800 pt-8">
          <p className="text-2xl font-bold text-white">Al Ameen Al Majali</p>
          <p className="text-gray-400">
            Digital Transformation Expert | AI & Blockchain Real Estate
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-gray-400">
            <SocialLink
              href="#"
              path="M12 2C6.477 2 2 6.477 2 12c0 4.286 2.73 7.91 6.502 9.234.48.09.654-.21.654-.467 0-.23-.008-.84-.012-1.64-2.65.575-3.21-1.28-3.21-1.28-.436-1.107-1.066-1.402-1.066-1.402-.87-.595.066-.583.066-.583.96.068 1.465.986 1.465.986.854 1.464 2.24 1.04 2.784.795.087-.618.334-1.04.608-1.278-2.125-.24-4.36-1.062-4.36-4.73 0-.96.34-1.748.92-2.36-.09-.24-.4-1.12.08-2.32 0 0 .8-.258 2.62.978A9.15 9.15 0 0112 7.79c.795.004 1.59.108 2.34.316 1.82-1.236 2.62-.978 2.62-.978.48 1.2.17 2.08.08 2.32.58.612.92 1.4.92 2.36 0 3.678-2.235 4.49-4.36 4.73.344.295.65.877.65 1.77 0 1.278-.012 2.31-.012 2.62 0 .26.174.56.654.467C19.27 19.91 22 16.285 22 12c0-5.523-4.477-10-10-10z"
            />
            <SocialLink
              href="#"
              path="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
            />
          </div>
          <p className="mt-8 text-sm text-gray-500">
            © 2024 Al Ameen Al Majali. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Digital Transformation Expert in Real Estate | AI & Blockchain
            Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ icon, color, title, description }) => (
  <div>
    <div
      className={`w-16 h-16 mx-auto rounded-full border-2 border-${color}-500 flex items-center justify-center`}
    >
      <span className={`material-icons-outlined text-${color}-500 text-3xl`}>
        {icon}
      </span>
    </div>
    <h4 className="mt-4 font-bold text-white">{title}</h4>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

const SocialLink = ({ href, path }) => (
  <a className="hover:text-primary" href={href}>
    <svg
      aria-hidden="true"
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path clipRule="evenodd" d={path} fillRule="evenodd"></path>
    </svg>
  </a>
);

export default Footer;
