import Star from "@/assets/tsxSvg/star";

type LevelCardProps = {
  level: string;
  title: string;
  description: string;
  experience: string;
};

const LevelCard = ({
  level,
  title,
  description,
  experience,
}: LevelCardProps) => {
  return (
    <div className="p-6 border border-border-light rounded-2xl bg-bg-light text-primary flex flex-col h-full lg:p-10">
      <h2 className="text-sm font-bold uppercase mb-6 text-primary">{level}</h2>

      <div className="mb-6 grow">
        <h3 className="font-urbanist font-semibold text-2xl mb-2.5">{title}</h3>
        <p className="text-sm text-accent-two leading-5.5">{description}</p>
      </div>

      <div className="flex items-center gap-1 text-xs">
        <span className="size-4 inline-block text-primary">
          <Star />
        </span>
        <p className="text-primary">{experience}</p>
        <div className="h-px flex-1 bg-linear-to-r from-primary to-success/0" />
      </div>
    </div>
  );
};

export default LevelCard;
