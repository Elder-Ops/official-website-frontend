import SectionTitle from "@/components/ui/section-title";
import { Animated, Stagger, StaggerItem } from "@/components/ui/animated";
import ApproachDetailCard from "./ApproachDetailCard";
import { ourApproachText, ourApproachData } from "@/contents/screens/about";
import equalSign from "@/assets/svg/equal-sign.svg";
import plusSign from "@/assets/svg/plus-sign.svg";

const OurApproach = () => {
  return (
    <section className="bg-linear-to-b from-bg-light to-bg-light/0">
      <div className="container section-space-block">
        <Animated
          variant="slideUp"
          className="max-w-161 mb-16 mx-auto text-center md:mx-0 md:text-start"
        >
          <SectionTitle>{ourApproachText.title}</SectionTitle>
        </Animated>

        <Stagger className="relative grid grid-cols-1 max-lg:gap-6 sm:grid-cols-2 lg:grid-cols-[1fr_44px_1fr_92px_1fr]">
          <img
            src={plusSign}
            alt="Plus"
            className="absolute hidden lg:block pointer-events-none w-7"
            style={{
              left: "calc((100% - 44px - 92px) / 3 + 22px)",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          <img
            src={equalSign}
            alt="Equals"
            className="absolute hidden lg:block pointer-events-none w-7"
            style={{
              left: "calc(((100% - 44px - 92px) / 3) * 2 + 44px + 46px)",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          {ourApproachData.map((approach, index) => (
            <StaggerItem
              key={approach.id}
              variant="slideUp"
              className={[
                index === 1 ? "lg:col-start-3" : "",
                index === 2 ? "lg:col-start-5" : "",
              ].join(" ")}
            >
              <ApproachDetailCard {...approach} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default OurApproach;
