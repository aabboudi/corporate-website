"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Breadcrumbs } from "@/components/breadcrumbs-builder";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { debounce } from "@/lib/utils";
import { get_all_faqs } from "@/lib/fetch";

type FAQItem = {
  question: string;
  answer: string;
  keywords: string[];
};

export default function FAQ() {
  const [faqData, setFaqData] = useState<FAQItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    async function fetchFAQs() {
      try {
        const faqs = await get_all_faqs();

        setFaqData(faqs);
      } catch (error) {
        // REMOVE IN PROD
        // console.error("Error fetching FAQs: ", error);
      }
    }
    fetchFAQs();
  }, []);

  // Debounce the search input by 300ms
  useEffect(() => {
    const debounced = debounce(
      (value: string) => setDebouncedSearchTerm(value),
      300,
    );

    debounced(searchTerm);
  }, [searchTerm]);

  // Memoize the filtered FAQs to avoid unnecessary re-computation
  const filteredFAQs = useMemo(() => {
    const searchTerms = debouncedSearchTerm.split(" ").filter((term) => term);

    return faqData.filter((faq) =>
      searchTerms.every(
        (term) =>
          faq.question.toLowerCase().includes(term.toLowerCase()) ||
          faq.answer.toLowerCase().includes(term.toLowerCase()) ||
          faq.keywords.some((keyword) =>
            keyword.toLowerCase().includes(term.toLowerCase()),
          ),
      ),
    );
  }, [debouncedSearchTerm, faqData]);

  return (
    <>
      <Breadcrumbs current="FAQ" path={[{ label: "Home", href: "/" }]} />

      <main className="container max-w-8xl px-8 mx-auto">
        <h2 className="text-center text-3xl font-semibold my-8">
          Frequently Asked Questions
        </h2>
        <section className="max-w-3xl space-y-6 mx-auto">
          <div className="relative mb-6">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              aria-label="Search questions, answers, and keywords"
              className="pl-10"
              placeholder="Search questions, answers, and keywords..."
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <Button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400"
                type="button"
                variant="ghost"
                onClick={() => setSearchTerm("")}
              >
                <X />
              </Button>
            )}
          </div>

          <Accordion collapsible type="single">
            {filteredFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">{faq.answer}</p>
                  <div className="flex flex-wrap gap-2">
                    {faq.keywords.map((keyword, kwIndex) => (
                      <Badge
                        key={kwIndex}
                        className="cursor-pointer"
                        variant="secondary"
                        onClick={() =>
                          setSearchTerm(searchTerm + " " + keyword)
                        }
                      >
                        {keyword.toSentenceCase()}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredFAQs.length === 0 && (
            <p className="text-center text-gray-500">No matching FAQs found.</p>
          )}
        </section>
      </main>
    </>
  );
}
