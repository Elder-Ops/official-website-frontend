import { solutionsCTAText } from "@/contents/screens/solutions";
import CTACard from "./cta-card";
import { useLocation } from "react-router";
import { talentsCTAText } from "@/contents/screens/talents";
import { aboutCTAText } from "@/contents/screens/about";

const CTASection = () => {
  const { pathname } = useLocation();

  type ctaContent = {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };

  type CtaMap = {
    [key: string]: ctaContent;
  };

  const CTA_MAP: CtaMap = {
    "/solutions": {
      title: solutionsCTAText.title,
      description: solutionsCTAText.description,
      buttonText: solutionsCTAText.buttonText,
      buttonLink: solutionsCTAText.buttonLink,
    },
    "/talent": {
      title: talentsCTAText.title,
      description: talentsCTAText.description,
      buttonText: talentsCTAText.buttonText,
      buttonLink: talentsCTAText.buttonLink,
    },
    "/about": {
      title: aboutCTAText.title,
      description: aboutCTAText.description,
      buttonText: aboutCTAText.buttonText,
      buttonLink: aboutCTAText.buttonLink,
    },
  };

  const content = CTA_MAP[pathname];

  if (!content) return null;

  const isAboutPage = pathname === "/about";

  return (
    <section className="container section-space-block">
      <CTACard
        buttonVariant="glass-link"
        title={content.title}
        description={content.description}
        buttonText={content.buttonText}
        buttonLink={content.buttonLink}
        maxWidth={isAboutPage ? "max-w-[640px]" : "max-w-[528px]"}
      />
    </section>
  );
};

export default CTASection;
