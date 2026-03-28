import enterpriseImg from "@/assets/svg/enterprise-ready-feature-imge.svg";
import SectionTitle from "@/components/ui/section-title";
import { Animated } from "@/components/ui/animated";
import FeatureListItem from "@/components/ui/feature-list-item";
import check from "@/assets/svg/check.svg";
import {
  enterpriseReadyText,
  enterpriseReadyData,
} from "@/contents/screens/talents";

const EnterpriseReady = () => {
  return (
    <section className="container section-space-top flex flex-col justify-between gap-16 overflow-x-hidden lg:flex-row lg:items-center lg:gap-20 xl:max-w-304 xl:mx-auto">
      <Animated variant="slideRight" className="max-w-115">
        <SectionTitle className="mb-1 md:mb-2.5">
          {enterpriseReadyText.title}
        </SectionTitle>
        <p className="text-accent-one text-sm md:text-base">
          {enterpriseReadyText.description}
        </p>

        <ul className="mt-10 space-y-6 list-none xl:mt-22">
          {enterpriseReadyData.map((item, index) => (
            <FeatureListItem
              key={item.id}
              icon={check}
              title={item.title}
              description={item.description}
              delay={index * 0.1}
            />
          ))}
        </ul>
      </Animated>

      <Animated
        variant="slideLeft"
        delay={0.2}
        className="relative flex-1 rounded-2xl min-h-93 sm:min-h-149"
      >
        <img
          src={enterpriseImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="glass-card rounded-2xl p-10 max-w-117.5 text-white">
            <h3 className="text-[56px] font-semibold font-urbanist mb-4 lg:mb-6 xl:text-[68px]">
              {enterpriseReadyText.statTitle}
            </h3>
            <h4 className="text-2xl font-semibold font-urbanist mb-2 md:text-3xl">
              {enterpriseReadyText.statSubtitle}
            </h4>
            <p className="text-sm md:text-base">
              {enterpriseReadyText.statDescription}
            </p>
          </div>
        </div>
      </Animated>
    </section>
  );
};

export default EnterpriseReady;
