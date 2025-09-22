"use client";
import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqData: FAQItem[] = [
  {
    question: "What are you signing up for?",
    answer: (
      <p>
        You’re joining a waitlist for a first-of-its-kind, business goal-oriented
        workflow automation platform.
      </p>
    ),
  },
  {
    question: "What is workflow automation?",
    answer: (
      <p>
        Think about the repetitive tasks in your business, such as sending
        marketing emails, following up with sales leads, tracking employee
        attendance, updating invoices, or checking inventory.{" "}
        <strong>Workflow automation</strong> is like having a very reliable
        assistant who handles these tasks automatically every day once you show
        it what to do, without you having to remind it.
      </p>
    ),
  },
  {
    question: "What makes our approach business goal–oriented?",
    answer: (
      <div className="space-y-3 leading-relaxed">
        <p>
          The problem is that most business owners do not know where to start
          with automation. It can be hard to figure out which tasks are worth
          automating, and most tools expect you to already know that.
        </p>
        <p>
          Our approach is different:{" "}
          <strong>we start with your business goals</strong>. We work with you to
          understand the outcomes you want to achieve, both overall and for each
          department. Once we know your priorities, we identify the tasks AI can
          handle and set them up to run automatically.
        </p>
      </div>
    ),
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto py-8 text-left">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-300 py-5"
        >
          {/* Question */}
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full text-left text-lg font-semibold focus:outline-none"
          >
            <span>{item.question}</span>
            <span className="text-2xl font-bold">
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>

          {/* Answer */}
          {activeIndex === index && (
            <div className="mt-4 text-gray-700 leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
