"use client";

import React, { useState } from "react";

const Articles = () => {
  const [filter, setFilter] = useState("All");

  const articles = [
    {
      category: "PropTech",
      date: "Oct 26, 2023",
      title:
        "AED 7 Million Invisible Expense in Every Dubai Real Estate Transaction",
      description:
        "Discover the hidden costs plaguing the Dubai property market and how technology can create transparency and efficiency.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDb4TBXFmExDoHo2IhRzn79LXvCSXz4ye-IyrT26x16xun4KrbL1TYzgZGEh0EqQ6D1rL-iqZpfRuJM08KdVrRo5I262Ic9GQLIMC7qxg5alitZS_i0IKihoXkzIWRprL8KBMZLIqMpnDmJQEK_1vrE6dViu5OgBBEsuQdd4_sku2vOgGR_P5meGNGjL4gzoR9qd2iZe27oQyCnte9ijz46mbCkHZ95t4uzys1Wt-YTYDsEbnkcD09bmRv7p36hxiDADuY0Uhcr6FM",
    },
    {
      category: "Market Analysis",
      date: "Oct 15, 2023",
      title: "Borderless Property: Why Dubai is Poised to Become a Global Hub",
      description:
        "An analysis of the factors making Dubai an attractive hub for global real estate investment and technological innovation.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBVYFvBqAjlBNi3DYviBGa3zwby4LHI76M3lFTWIYdTuWiSlvn-ZBeIcz58DbeoawCFDk--8nOw5JlQZxHLYIGYIRQBmuSrKdpzTWuGRFELDzY0M8Bg1s3DhcrUUTwuc9ZACMDAyu9rOyzWK02LDYyFstAvNTUB4twFXnbPfvLY7PfKKm_nmT-tPzydGps6FrsYI_6pXVoBR88kSx0gLVmevyohjD_Jep5nAGEsMZKY3ZuAWxBbmpJA1ns-dHCpytf3IqoRp88CzZs",
    },
    {
      category: "Blockchain",
      date: "Sep 28, 2023",
      title:
        "Your AI Intern: The Autonomous Team You Need to Scale Your Brokerage",
      description:
        "Exploring how AI-powered autonomous agents can handle administrative tasks, allowing your team to focus on closing deals.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC0FVC7y5NlQT0Y4_H4qPympjCCeHSCrVrY1UATvx5AnCAed569Ok0SKKLnCo-Fft7ROCgvQjQltCIi7bEjUePeYeAIZtPzsjEIyP8hLKL64eAPhcrH_Gx6tK8NcVAiHiawTuG4JDSH5ZwuKC1RzGUT6Idy5zRZm8VcuAQ0w2iRxE_BENuW2ZlIjGDNOabGTqW0OneJXoRruUyuuOhZr_uFzoqJ1x5T3uzJ-iEHqU1szHpmuAQERiLNVTntYZkynABR4gmJB9nWTy8",
    },
  ];

  const filteredArticles =
    filter === "All"
      ? articles
      : articles.filter((article) => article.category === filter);

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark"
      id="articles"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Recent Articles <span className="text-primary">&amp; Analysis</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Stay ahead of the curve with the latest insights on PropTech,
            blockchain applications, and market-shifting trends in the real
            estate industry.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {["All", "Blockchain", "PropTech", "Market Analysis"].map((item) => (
            <button
              key={item}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                filter === item
                  ? "bg-primary text-gray-900"
                  : "bg-gray-200 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600/50"
              }`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ArticleCard = ({ image, date, category, title, description }) => (
  <a
    className="group block bg-white dark:bg-[#10142A] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    href="#"
  >
    <img
      alt="Abstract image of digital currency and real estate"
      className="w-full h-48 object-cover"
      src={image}
    />
    <div className="p-6">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {date} • {category}
      </p>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">
        {title}
      </h3>
      <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
        {description}
      </p>
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-primary font-semibold">
        <span>Read More</span>
        <span className="material-symbols-outlined ml-1">arrow_right_alt</span>
      </div>
    </div>
  </a>
);

export default Articles;
