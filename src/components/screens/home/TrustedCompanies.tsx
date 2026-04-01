import { trustedCompaniesText } from "@/contents/screens/home";
import LogoMarquee from "@/components/ui/logo-marquee";

const TrustedCompanies = () => {
  return (
    <section className="md:py-12">
      <div className="container md:grid md:grid-cols-[220px_1fr] md:items-center md:gap-10">
        <h2 className="text-[#5B5B5B] text-sm p-4 rounded-b-lg w-fit font-bold mx-auto md:text-[#01170B] md:font-medium md:text-xl md:bg-transparent md:p-0">
          {trustedCompaniesText.title}
        </h2>

        <LogoMarquee />
      </div>
    </section>
  );
};

export default TrustedCompanies;
