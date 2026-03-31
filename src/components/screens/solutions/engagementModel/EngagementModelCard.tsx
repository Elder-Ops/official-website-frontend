interface EngagementModelCardProps {
  title: string;
  description: string;
  bestFor: string;
}

const EngagementModelCard = ({
  title,
  description,
  bestFor,
}: EngagementModelCardProps) => {
  return (
    <article className="border border-[#EEEEEE] rounded-3xl p-4 flex flex-col h-full sm:p-6 lg:p-10">
      <div
        className="h-1 bg-primary max-w-12 rounded-lg mb-10"
        aria-hidden="true"
      />

      <div className="mb-8 flex-1">
        <h3 className="font-medium font-urbanist text-2xl mb-2">{title}</h3>
        <p className="text-[#7A7A7A]">{description}</p>
      </div>

      <div className="mt-auto">
        <div className="mb-1 flex items-center gap-2">
          <p className="font-bold text-xs text-primary">Best for:</p>
          <div
            className="h-px flex-1 bg-linear-to-r from-primary to-success/0"
            aria-hidden="true"
          />
        </div>

        <p className="text-[#7A7A7A] text-sm">{bestFor}</p>
      </div>
    </article>
  );
};

export default EngagementModelCard;
