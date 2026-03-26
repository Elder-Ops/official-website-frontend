import handshake from "@/assets/svg/handshake.svg";

interface MissionVisionCardProps {
  variant: "who-we-are" | "mission";
  badge: string;
  title: string;
  description: string;
  points?: string[];
}

const MissionVisionCard = ({
  variant,
  badge,
  title,
  description,
  points,
}: MissionVisionCardProps) => {
  const isMission = variant === "mission";

  return (
    <div
      className={`h-full ${
        isMission ? "bg-primary" : "bg-bg-light space-y-6"
      } border border-border-light p-10 rounded-2xl`}
    >
      <h2
        className={`uppercase font-bold text-sm ${
          isMission ? "text-border-light mb-6" : ""
        }`}
      >
        {badge}
      </h2>

      <div>
        <h3
          className={`font-medium font-urbanist text-[30px] ${
            isMission ? "text-white" : "text-primary"
          } mb-2.5`}
        >
          {title}
        </h3>
        <p
          className={`sm:leading-6 ${isMission ? "text-white" : "text-accent-two"}`}
        >
          {description}
        </p>
      </div>

      {isMission ? (
        <>
          <div className="h-px bg-linear-to-r from-success to-success/0 my-7.5" />
          <div className="flex items-center gap-4">
            <img src={handshake} alt="" aria-hidden="true" />
            <p className="text-[#F1F5F9] font-medium text-sm">
              Commitment to Total IP Ownership for Clients
            </p>
          </div>
        </>
      ) : (
        points && (
          <ul className="list-none space-y-2.5">
            {points.map((point, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="bg-primary size-1.5 rounded-full shrink-0" />
                <p>{point}</p>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};
export default MissionVisionCard;
