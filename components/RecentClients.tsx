import Image from "next/image";
import { RECENT_CLIENTS } from "@/data/clients";

export default function RecentClients() {
  // Continuous smooth marquee loop ke liye exact array duplication
  const duplicatedClients = [
    ...RECENT_CLIENTS,
    ...RECENT_CLIENTS,
    ...RECENT_CLIENTS,
  ];

  // Specific logo visibility & size balancing helper
  const getLogoStyle = (logoPath: string) => {
    // Chote PNG logos jin mein excess margins hain unko boost sizing dena
    if (logoPath.includes("jeem") || logoPath.includes("mahnoorsahi")) {
      return "scale-[1.6]"; 
    }
    if (logoPath.includes("deep-ai")) {
      return "scale-[1.1]";
    }
    // White text SVG logo (vape_uk) ko dark text vectors mein transform karna
    if (logoPath.endsWith(".svg")) {
      return "brightness-0 opacity-80 hover:opacity-100";
    }
    return "";
  };

  return (
    <section className="w-full py-8 sm:py-12 bg-white text-slate-900 select-none overflow-hidden border-t border-slate-100">
      <div className="w-full mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#8fa0b5] uppercase">
            COMPANIES WE'VE WORKED WITH
          </h2>
        </div>

        {/* Marquee Outer Container */}
        <div className="relative overflow-hidden w-full max-w-375 mx-auto py-2">
          
          {/* Infinite Marquee Track */}
          <div className="animate-marquee flex items-center gap-12 sm:gap-16 md:gap-20 cursor-pointer">
            {duplicatedClients.map((client, index) => {
              const customStyle = getLogoStyle(client.logo);

              return (
                <div
                  key={`${client.name}-${index}`}
                  className="flex items-center justify-center shrink-0 min-w-[130px] sm:min-w-[160px] h-12 transition-transform duration-300 hover:scale-105"
                >
                  {/* Dynamic Scaled Image Wrapper */}
                  <div
                    className={`relative w-28 sm:w-36 h-9 sm:h-11 flex items-center justify-center transition-all duration-300 ${customStyle}`}
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      sizes="(max-width: 640px) 112px, 144px"
                      className="object-contain pointer-events-none opacity-90 hover:opacity-100 transition-opacity"
                      priority={index < RECENT_CLIENTS.length}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}