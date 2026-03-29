import { Metadata } from "next";
import QuoteForm from "@/components/ui/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Technical Quote | Open Stacked",
  description:
    "Get a customized quote for Web Development, Cloud Infrastructure, or DevOps automation. Start your enterprise project with Open Stacked today.",
  openGraph: {
    title: "Request a Quote | Open Stacked",
    description:
      "Enterprise IT and Software Solutions. Let's build your next project.",
  },
  keywords: ["Web Development", "Cloud Infrastructure", "DevOps automation"],
};

export default function QuotePage() {
  return (
    <main className="pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6 relative">
        <QuoteForm />
      </div>
    </main>
  );
}
