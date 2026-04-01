interface MatchingApproachCardProps {
  step: string;
  title: string;
  description: string;
}

const MatchingApproachCard = ({
  step,
  title,
  description,
}: MatchingApproachCardProps) => {
  return (
    <div className="bg-bg-cream max-sm:p-10 rounded-3xl border border-border-light h-full flex flex-col sm:pt-10 sm:pb-13 sm:px-6">
      <div>
        <p
          className="text-[#557866] font-medium mb-5"
          aria-label={`Step ${step}`}
        >
          Step
        </p>
        <p
          className="text-[140px] font-urbanist font-semibold text-bg-light leading-19"
          aria-hidden="true"
        >
          {step}
        </p>
      </div>

      <div className="mt-10 md:mt-8">
        <h3 className="text-primary text-2xl leading-8 font-urbanist font-semibold mb-1.5">
          {title}
        </h3>
        <p className="text-accent-one leading-6">{description}</p>
      </div>
    </div>
  );
};
export default MatchingApproachCard;
