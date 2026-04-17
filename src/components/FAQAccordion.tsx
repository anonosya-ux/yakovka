'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  schemaId?: string;
}

export default function FAQAccordion({ items, schemaId }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Generate FAQPage Schema.org markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Embedded Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 ${
              openIndex === idx
                ? 'bg-white border-primary/20 shadow-premium'
                : 'bg-white/60 border-stone-200/60 hover:border-stone-300'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
              aria-expanded={openIndex === idx}
            >
              <span className={`font-heading text-lg md:text-xl font-semibold tracking-tight transition-colors pr-4 ${
                openIndex === idx ? 'text-primary' : 'text-stone-800 group-hover:text-primary'
              }`}>
                {item.question}
              </span>
              <ChevronDown
                size={22}
                className={`shrink-0 text-stone-400 transition-transform duration-300 ${
                  openIndex === idx ? 'rotate-180 text-primary' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <div className="w-full h-px bg-gradient-to-r from-primary/20 via-primary/10 to-transparent mb-6" />
                <p className="text-stone-600 leading-relaxed text-base md:text-lg">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
