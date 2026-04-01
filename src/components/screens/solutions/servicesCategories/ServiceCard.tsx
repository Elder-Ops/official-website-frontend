import { Stagger, StaggerItem } from "@/components/ui/animated";
import checkIcon from "@/assets/svg/check-icon.svg";
interface ServiceCardProps {
  title: string;
  list: string[];
  image: string;
}
const ServiceCard = ({ title, list, image }: ServiceCardProps) => {
  return (
    <div className="grid grid-cols-2 bg-white rounded-[20px] overflow-hidden">
      <Stagger
        staggerDelay={0.12}
        className="p-10 md:p-14 lg:p-16 flex flex-col justify-center border border-[#f3f3ea] rounded-bl-[20px]"
      >
        <StaggerItem>
          <h3 className="font-medium font-urbanist text-[38px] text-[#01170B] leading-11.5">
            {title}
          </h3>
        </StaggerItem>

        <StaggerItem>
          <ul className="mt-6 space-y-3">
            {list.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <img src={checkIcon} alt="check icon" aria-hidden={true} />
                <span className="text-accent-two">{item}</span>
              </li>
            ))}
          </ul>
        </StaggerItem>
      </Stagger>

      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
  );
};

export default ServiceCard;
