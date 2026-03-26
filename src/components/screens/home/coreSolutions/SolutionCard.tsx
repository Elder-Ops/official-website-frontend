interface SolutionCardProps {
  image: string;
  title: string;
  description: string;
}

const SolutionCard = ({ image, title, description }: SolutionCardProps) => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden h-100 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-[#01190C80] to-[#01190CCC]"></div>
      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
        <h3 className="text-[30px] font-medium font-urbanist">{title}</h3>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
