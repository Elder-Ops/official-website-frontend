import { trustedCompaniesText } from "@/contents/screens/home";
import LogoMarquee from "@/components/ui/logo-marquee";

const TrustedCompanies = () => {
  return (
    <section className="bg-white md:pt-20">
      <div className="container md:grid md:grid-cols-[220px_1fr] md:items-center md:gap-10">
        <h2 className="text-[#01170B] text-sm bg-[#E6EBE8] px-4 py-1 rounded-b-lg w-fit font-medium mx-auto md:text-xl md:bg-transparent md:p-0">
          {trustedCompaniesText.title}
        </h2>

        <LogoMarquee />
      </div>
    </section>
  );
};

export default TrustedCompanies;
