"use client";

import React, { useState } from "react";

const SolutionsEcosystem = () => {
  const [selected, setSelected] = useState([
    "Asset Tokenization",
    "AI-Powered Brokerage",
  ]);

  const toggleSolution = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-dark">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-800 text-gray-300 px-4 py-1.5 rounded-full text-sm font-medium">
            <span className="material-symbols-outlined text-primary text-base">
              hub
            </span>
            <span>INTERACTIVE SOLUTIONS PLATFORM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Intelligent <span className="text-primary">Solutions</span>{" "}
            Ecosystem
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-400">
            An interactive dashboard showcasing our AI and Blockchain solutions.
            Select solutions to compare them side-by-side, view performance
            data, and understand how each transforms your real estate
            operations.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <SolutionCard
              icon="token"
              title="Asset Tokenization"
              description="Unlock Liquidity & Global Capital"
              selected={selected.includes("Asset Tokenization")}
              onClick={() => toggleSolution("Asset Tokenization")}
            />
            <SolutionCard
              icon="smart_toy"
              title="AI-Powered Brokerage"
              description="Automate Operations & Boost Sales"
              selected={selected.includes("AI-Powered Brokerage")}
              onClick={() => toggleSolution("AI-Powered Brokerage")}
            />
            <SolutionCard
              icon="data_thresholding"
              title="Predictive Analytics"
              description="Data-Driven Market Domination"
              selected={selected.includes("Predictive Analytics")}
              onClick={() => toggleSolution("Predictive Analytics")}
            />
            <div className="text-center">
              <button className="bg-gray-700/50 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600/50 transition-colors w-full flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">
                  compare_arrows
                </span>
                Compare Selected ({selected.length})
              </button>
            </div>
          </div>
          <div className="lg:col-span-2 bg-gray-800/50 p-1 rounded-2xl border border-gray-700">
            <div className="bg-gray-900/40 rounded-t-xl py-4 px-6 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">
                Solution Comparison
              </h3>
              <button className="flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/30 transition-colors">
                <span className="material-symbols-outlined text-base">
                  bookmark_add
                </span>{" "}
                Save Comparison
              </button>
            </div>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-700 min-w-[600px]">
                {selected.map((solution) => (
                  <ComparisonCard key={solution} solution={solution} />
                ))}
              </div>
            </div>
            <div className="bg-gray-900/40 rounded-b-xl py-4 px-6 border-t border-gray-700 flex justify-center items-center gap-2 text-green-400">
              <span className="material-symbols-outlined">check_circle</span>
              <span className="text-sm font-medium">
                Comparison saved successfully! View in 'My Saved Comparisons'.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionCard = ({ icon, title, description, selected, onClick }) => (
  <div
    className={`group cursor-pointer bg-gray-900/60 p-6 rounded-xl border-2 ${
      selected
        ? "border-primary ring-2 ring-primary/20"
        : "border-gray-700 hover:border-primary/50"
    } transition-all duration-300`}
    onClick={onClick}
  >
    <div className="flex items-center space-x-4">
      <div
        className={`p-3 rounded-lg ${
          icon === "token"
            ? "bg-blue-900/50"
            : icon === "smart_toy"
            ? "bg-purple-900/50"
            : "bg-green-900/50"
        }`}
      >
        <span
          className={`material-symbols-outlined text-3xl ${
            icon === "token"
              ? "text-blue-400"
              : icon === "smart_toy"
              ? "text-purple-400"
              : "text-green-400"
          }`}
        >
          {icon}
        </span>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <div
        className={`ml-auto flex items-center justify-center w-6 h-6 rounded-full ${
          selected
            ? "bg-primary"
            : "bg-gray-700 group-hover:bg-primary/50"
        }`}
      >
        <span
          className={`material-symbols-outlined text-base ${
            selected
              ? "text-gray-900"
              : "text-gray-400 group-hover:text-white"
          }`}
        >
          {selected ? "check" : "add"}
        </span>
      </div>
    </div>
  </div>
);

const ComparisonCard = ({ solution }) => {
  const data = {
    "Asset Tokenization": {
      icon: "token",
      color: "blue",
      description:
        "Transform illiquid assets into digital tokens to unlock global capital.",
      metrics: [
        { name: "Efficiency Gain", value: "+70%" },
        { name: "Cost Savings", value: "~15%" },
        { name: "Market Adoption", value: "2.5x YoY" },
      ],
      features: [
        "Fractional Ownership",
        "Smart Contract Automation",
        "Global Investor Access",
      ],
    },
    "AI-Powered Brokerage": {
      icon: "smart_toy",
      color: "purple",
      description:
        "Automate 80% of admin tasks, and triple agent productivity.",
      metrics: [
        { name: "Efficiency Gain", value: "+80%" },
        { name: "Cost Savings", value: "~30%" },
        { name: "Lead Conversion", value: "+200%" },
      ],
      features: [
        "Automated Lead Nurturing",
        "AI-driven Market Analysis",
        "Intelligent Task Management",
      ],
    },
    "Predictive Analytics": {
      icon: "data_thresholding",
      color: "green",
      description: "Data-driven market domination.",
      metrics: [
        { name: "Efficiency Gain", value: "+60%" },
        { name: "Cost Savings", value: "~20%" },
        { name: "Market Adoption", value: "3x YoY" },
      ],
      features: [
        "Predictive Market Trends",
        "Automated Property Valuation",
        "Targeted Investor Matching",
      ],
    },
  };

  const { icon, color, description, metrics, features } = data[solution];

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-start gap-4">
        <div className={`bg-${color}-900/50 p-3 rounded-lg mt-1`}>
          <span className={`material-symbols-outlined text-${color}-400 text-2xl`}>
            {icon}
          </span>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">{solution}</h4>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-400 font-medium mb-2">Key Metrics</p>
        <div className="space-y-3">
          {metrics.map((metric) => (
            <div
              key={metric.name}
              className="flex justify-between items-center bg-gray-900/60 p-3 rounded-lg"
            >
              <span>{metric.name}</span>
              <span className="font-bold text-primary flex items-center gap-1">
                <span className="material-symbols-outlined text-green-400 text-lg">
                  trending_up
                </span>
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-400 font-medium mb-2">Core Features</p>
        <ul className="space-y-2 text-sm">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-base mt-0.5">
                check_circle
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-4">
        <a
          className="inline-flex items-center text-primary font-semibold text-sm hover:underline"
          href="#"
        >
          View Full Dashboard
          <span className="material-symbols-outlined text-base ml-1">
            arrow_right_alt
          </span>
        </a>
      </div>
    </div>
  );
};

export default SolutionsEcosystem;
