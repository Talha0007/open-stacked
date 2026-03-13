// components/Navbar.tsx
import { User, Mail, FileText } from "lucide-react";
import NavContent from "./ui/NavContent"; // We will create this client component

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "Testimonials", href: "/#testimonials" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about", icon: <User size={14} /> },
    { name: "Contact Us", href: "/contact", icon: <Mail size={14} /> },
    { name: "Request a Quote", href: "/quote", icon: <FileText size={14} /> },
  ];

  return (
    <nav className="fixed w-full z-[100]">
      {/* Google Crawlers specifically look for <Link> or <a> tags. 
         By passing them to a client component, we maintain SEO 
         while keeping interactivity.
      */}
      <NavContent navLinks={navLinks} companyLinks={companyLinks} />
    </nav>
  );
}
