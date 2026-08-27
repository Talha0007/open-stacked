"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.94,
          }}
          className="
            fixed
            bottom-6
            right-6
            z-[100]
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-cyan-400/40
            bg-[#061b2b]
            text-cyan-400
            shadow-[0_8px_30px_rgba(0,0,0,0.25)]
            transition-colors
            duration-300
            hover:border-cyan-400
            hover:bg-[#08263a]
            hover:text-cyan-300
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-400/50
          "
        >
          <ArrowUp size={19} strokeWidth={2.2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
