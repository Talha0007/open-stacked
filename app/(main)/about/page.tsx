import { Metadata } from "next";
import AboutContent from "@/components/ui/AboutContent";

export const metadata: Metadata = {
  title: "About Open Stacked | Engineering Scalable Digital Systems",
  description:
    "Learn about Open Stacked's mission to bridge the gap between complex hardware and intuitive user experiences through MERN stack mastery and resilient infrastructure.",
  keywords: [
    "About Open Stacked",
    "Software Engineering Philosophy",
    "MERN Stack Experts",
    "IT Infrastructure Strategy",
    "About us",
    "Open stacked",
    "Open Stack",
    "Openstack",
    "Openstacked",
    "Open stacked about us",
    "Open stacked About us",
  ],
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 min-h-screen">
      <AboutContent />
    </main>
  );
}
