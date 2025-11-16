import React from "react";

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Industry <span className="text-primary">Recognition</span>
          </h2>
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <TestimonialCard
            quote="Al Ameen's insights into blockchain applications in real estate have been transformative for our investment strategy. His ability to demystify complex technologies is unparalleled."
            author="Michael Chen"
            title="CEO, Global Property Investments"
            initials="MC"
          />
          <TestimonialCard
            quote="Working with Al Ameen on our AI implementation strategy yielded results beyond our expectations. His deep understanding of both technology and real estate is rare and valuable."
            author="Sarah Johnson"
            title="CTO, Premium Developments"
            initials="SJ"
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, author, title, initials }) => (
  <div className="bg-[#10142A] dark:bg-[#10142A] text-white p-8 rounded-2xl">
    <p className="text-4xl text-primary">"</p>
    <blockquote className="text-xl italic text-gray-300">{quote}</blockquote>
    <div className="mt-6 flex items-center">
      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center font-bold text-lg">
        {initials}
      </div>
      <div className="ml-4">
        <p className="font-bold">{author}</p>
        <p className="text-sm text-gray-400">{title}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;
