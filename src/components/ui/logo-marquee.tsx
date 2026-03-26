import { trustedCompaniesLogo } from "@/contents/screens/home";

const LogoMarquee = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="sm:absolute left-0 top-0 bottom-0 w-75 bg-linear-to-r from-white to-transparent z-10" />
      <div className="sm:absolute right-0 top-0 bottom-0 w-75 bg-linear-to-l from-white to-transparent z-10" />

      <div className="flex animate-marquee">
        <div className="flex gap-18.75 py-8 md:py-3.75 shrink-0">
          {trustedCompaniesLogo.map((company, index) => (
            <img
              key={company.altText + index}
              src={company.defaultLogo}
              alt={company.altText}
              className="h-7.5 grayscale hover:grayscale-0 transition-all shrink-0"
            />
          ))}
        </div>
        <div className="flex gap-18.75 py-8 md:py-3.75 shrink-0">
          {trustedCompaniesLogo.map((company, index) => (
            <img
              key={company.altText + index + "dup"}
              src={company.defaultLogo}
              alt={company.altText}
              className="h-7.5 grayscale hover:grayscale-0 transition-all shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
