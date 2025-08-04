import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs = [
    {
      question: "How often is The Digest sent?",
      answer: "The Digest is delivered every Tuesday morning at 8 AM EST. We maintain a consistent schedule so you can plan your week around our insights."
    },
    {
      question: "Can I unsubscribe at any time?",
      answer: "Absolutely! You can unsubscribe at any time by clicking the unsubscribe link at the bottom of any email, or by contacting us directly. No questions asked."
    },
    {
      question: "Will my email be shared with third parties?",
      answer: "Never. We respect your privacy and will never share, sell, or rent your email address to anyone. Your information is safe with us."
    },
    {
      question: "Is The Digest free?",
      answer: "Yes, The Digest is completely free. We believe in providing value to our community without barriers."
    },
    {
      question: "How long does it take to read each issue?",
      answer: "Each issue is designed to be read in 5-7 minutes. We respect your time and focus on delivering concise, actionable content."
    },
    {
      question: "Can I access past issues?",
      answer: "Yes! All subscribers have access to our complete archive of past issues. Simply sign in to your account to browse our collection."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about The Digest
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-border">
              <Collapsible
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
              >
                <CollapsibleTrigger className="w-full">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-left font-semibold text-foreground">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`h-5 w-5 text-muted-foreground transition-transform ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </CardContent>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0 pb-6">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;