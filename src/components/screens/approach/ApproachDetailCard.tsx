import type { ApproachDetailCardProps } from "@/types";

const ApproachDetailCard = ({
  title,
  description,
  points,
}: ApproachDetailCardProps) => {
  return (
    <div className="bg-bg-cream  border border-border-light rounded-3xl px-12 py-8 space-y-6 h-full lg:py-6">
      <h3 className="font-urbanist font-medium text-2xl text-primary">
        {title}
      </h3>
      <p className="text-accent-one">{description}</p>

      {points && (
        <ul className="list-none space-y-3">
          {points.map((point, index) => (
            <li key={index} className="flex items-center gap-4">
              <div className="size-1.25 rounded-full bg-primary" />
              <p className="text-accent-one">{point}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApproachDetailCard;
