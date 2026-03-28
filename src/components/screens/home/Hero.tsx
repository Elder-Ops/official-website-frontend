import heroVideo from "@/assets/video/home-hero-video.mp4";
import Button from "@/components/ui/button";
import { Animated } from "@/components/ui/animated";
import { heroText } from "@/contents/screens/home";
import buttonBg from "@/assets/svg/button-bg.svg";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    void video.play().catch(() => {});
  }, []);

  return (
    <div className="relative h-dvh flex flex-col items-center justify-center bg-primary">
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        preload="auto"
        poster="/images/hero-fallback.jpg"
        disablePictureInPicture
        className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
      />

      <section className="container hero-space-block relative z-10 w-full text-white text-center md:px-0! md:max-w-189">
        <Animated variant="slideUp" type="animate">
          <h1 className="font-medium font-urbanist text-[38px] leading-11.5 mb-4 md:leading-19 md:text-[68px]">
            {heroText.title}
          </h1>
        </Animated>

        <Animated variant="slideUp" type="animate" delay={0.2}>
          <p className="mb-10">{heroText.subtext}</p>
        </Animated>

        <Animated variant="slideUp" type="animate" delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate("/talent")}
              className="relative cursor-pointer font-medium w-69.5 sm:w-fit px-6 py-3 rounded-full overflow-hidden text-white transition-transform duration-200 hover:-translate-y-1 "
            >
              <img
                src={buttonBg}
                alt="bg"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="relative z-10">Our hiring process</span>
            </button>

            <Button
              variant="link"
              to="/solutions"
              className="bg-white text-primary font-medium py-3 px-6 transition-transform duration-200 hover:-translate-y-1 w-69.5 sm:w-fit"
            >
              Explore Solutions
            </Button>
          </div>
        </Animated>
      </section>
    </div>
  );
};

export default Hero;
