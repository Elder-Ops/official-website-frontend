import { trustedCompaniesLogo } from "@/contents/screens/home";

const LogoMarquee = () => {
  const logos = [...trustedCompaniesLogo, ...trustedCompaniesLogo];

  return (
    <div className="relative overflow-hidden">
      <div className="sm:absolute left-0 top-0 bottom-0 w-75 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="sm:absolute right-0 top-0 bottom-0 w-75 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex gap-15 w-max animate-marquee">
        {logos.map((company, index) => (
          <div
            key={`${company.altText}-${index}`}
            className="shrink-0 px-9.375 py-8 md:py-3.75"
          >
            <img
              src={company.defaultLogo}
              alt={company.altText}
              className="h-7.5 grayscale hover:grayscale-0 transition-all shrink-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
