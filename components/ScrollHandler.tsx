"use client";
import { useEffect } from "react";

export default function ScrollHandler() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = 80; // Navbar height offset
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;

          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }, 300);
      }
    }
  }, []);

  return null; // This component doesn't render anything
}
