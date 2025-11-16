import React from "react";

const Education = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center">
      <div className="container mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Education & <span className="text-primary">Credentials</span>
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <EducationCard
            title="INNOVATION AND ENTREPRENEURSHIP"
            date="2023-2025"
            institution="Harvard University"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBVYFvBqAjlBNi3DYviBGa3zwby4LHI76M3lFTWIYdTuWiSlvn-ZBeIcz58DbeoawCFDk--8nOw5JlQZxHLYIGYIRQBmuSrKdpzTWuGRFELDzY0M8Bg1s3DhcrUUTwuc9ZACMDAyu9rOyzWK02LDYyFstAvNTUB4twFXnbPfvLY7PfKKm_nmT-tPzydGps6FrsYI_6pXVoBR88kSx0gLVmevyohjD_Jep5nAGEsMZKY3ZuAWxBbmpJA1ns-dHCpytf3IqoRp88CzZs"
          />
          <EducationCard
            title="Certified International Property Specialist"
            date="2015"
            institution="National Association of REALTORS®, California, United States"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuC0FVC7y5NlQT0Y4_H4qPympjCCeHSCrVrY1UATvx5AnCAed569Ok0SKKLnCo-Fft7ROCgvQjQltCIi7bEjUePeYeAIZtPzsjEIyP8hLKL64eAPhcrH_Gx6tK8NcVAiHiawTuG4JDSH5ZwuKC1RzGUT6Idy5zRZm8VcuAQ0w2iRxE_BENuW2ZlIjGDNOabGTqW0OneJXoRruUyuuOhZr_uFzoqJ1x5T3uzJ-iEHqU1szHpmuAQERiLNVTntYZkynABR4gmJB9nWTy8"
          />
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({ title, date, institution, image }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <span className="text-gray-400 font-semibold">{date}</span>
    </div>
    <p className="text-gray-400">{institution}</p>
    <img
      alt={`${title} certificate`}
      className="mt-4 rounded-lg"
      src={image}
    />
  </div>
);

export default Education;
