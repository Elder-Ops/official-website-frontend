import type { HowWeDeliverCardProps } from "@/types";

const HowWeDeliverCard = ({
  image,
  title,
  description,
}: HowWeDeliverCardProps) => {
  return (
    <article className="bg-bg-cream px-6 py-12 border border-[#E6EBE8] rounded-3xl flex flex-col justify-between items-center text-center gap-16 sm:max-w-75 max-h-89.5 shrink-0">
      <img src={image} alt="" aria-hidden="true" />

      <div>
        <h3 className="font-medium text-primary text-2xl mb-1">{title}</h3>
        <p className="text-[#464646]">{description}</p>
      </div>
    </article>
  );
};

export default HowWeDeliverCard;
