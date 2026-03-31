import { statsData } from "@/contents/screens/home";
import StatCard from "./StatCard";
import dotParticle from "@/assets/svg/stats-dots.svg";

const Stats = () => {
  return (
    <section
      className="container section-space-top md:pb-8 relative grid grid-cols-2 lg:grid-cols-4"
      aria-label="Company statistics"
    >
      <img
        src={dotParticle}
        alt="Decorative pattern"
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 sm:hidden"
      />

      {statsData.map((stat, index) => (
        <StatCard
          key={stat.id}
          stat={stat}
          index={index}
          isLast={index === statsData.length - 1}
        />
      ))}
    </section>
  );
};

export default Stats;
