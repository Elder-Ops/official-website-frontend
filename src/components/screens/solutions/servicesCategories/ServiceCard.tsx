import { Stagger, StaggerItem } from "@/components/ui/animated";
import checkIcon from "@/assets/svg/check-icon.svg";
interface ServiceCardProps {
  title: string;
  list: string[];
  image: string;
}
const ServiceCard = ({ title, list, image }: ServiceCardProps) => {
  return (
    <div className="service-card grid grid-cols-2 bg-[#036331] backdrop-blur-md rounded-[20px]">
      <Stagger
        staggerDelay={0.12}
        className="p-10 md:p-14 lg:p-16 flex flex-col justify-center"
      >
        <StaggerItem>
          <h3 className="font-medium font-urbanist text-[38px] text-white leading-11.5">
            {title}
          </h3>
        </StaggerItem>

        <StaggerItem>
          <ul className="mt-6 space-y-3">
            {list.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <img src={checkIcon} alt="check icon" aria-hidden={true} />
                <span className="text-white">{item}</span>
              </li>
            ))}
          </ul>
        </StaggerItem>
      </Stagger>

      <div className="overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ServiceCard;
