import checkIcon from "@/assets/svg/check-icon.svg";

type SimpleServiceCardProps = {
  title: string;
  list: string[];
  image: string;
};

const SimpleServiceCard = ({ title, list, image }: SimpleServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-[20px] mb-8">
      <div>
        <h3 className="font-medium font-urbanist text-2xl text-[#01170B] leading-8 mb-4">
          {title}
        </h3>

        {list && (
          <ul className="mt-2 space-y-3">
            {list.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <img src={checkIcon} alt="check icon" aria-hidden={true} />
                <span className="text-accent-two">{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div
          className="my-4 h-px max-w-62 mx-auto"
          style={{
            borderBottom: "1px solid",
            borderImageSource:
              "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)",
            borderImageSlice: 1,
          }}
        />
      </div>

      <div className="rounded-2xl overflow-hidden mt-4">
        <img src={image} alt="" className="w-full h-55 object-cover" />
      </div>
    </div>
  );
};

export default SimpleServiceCard;
