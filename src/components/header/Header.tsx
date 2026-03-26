import { Link, useLocation } from "react-router";
import elderOpsLogo from "@/assets/svg/elderOps-white-logo.svg";
import elderOpsLogoGreen from "@/assets/svg/elderOps-green-logo.svg";
import menuIcon from "@/assets/svg/menu.svg";
import closeIcon from "@/assets/svg/cancel-icon.svg";
import { useScrollDetection } from "@/hooks/useScrollDetection";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useGlobalStore } from "@/store/useGlobalStore";
import Button from "../ui/button";
import Navbar from "../navbar/Navbar";
import CalendlyCTA from "../contactUs/react-calendly";

const Header = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const isScrolled = useScrollDetection(50);
  const isVisible = useScrollDirection();
  const { isMobileMenuOpen, toggleMobileMenu } = useGlobalStore();

  const showWhiteBg = isScrolled;
  const showDarkContent = !isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-7.5 transition-all duration-300 ${showWhiteBg ? "bg-white" : ""} ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/">
          {showWhiteBg || showDarkContent ? (
            <img src={elderOpsLogoGreen} alt="elderOps logo" />
          ) : (
            <img src={elderOpsLogo} alt="elderOps logo" />
          )}
        </Link>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden z-50 relative"
          aria-label="Toggle menu"
        >
          <img
            src={isMobileMenuOpen ? closeIcon : menuIcon}
            alt=""
            className={`size-6 ${showWhiteBg || showDarkContent || isMobileMenuOpen ? "invert" : ""}`}
          />
        </button>

        <Navbar isHomePage={!showWhiteBg && !showDarkContent} />
        <div className="md:flex hidden items-center gap-4">
<CalendlyCTA shouldRenderOnMobile={false} />
        {isHomePage ? (
          <Button
            variant={showWhiteBg ? "glass-link" : "link"}
            to="/contact-us"
            className={` ${showWhiteBg ? "" : "bg-white text-primary"}`}
          >
            Contact Us
          </Button>
        ) : (
          <Button
            variant="glass-link"
            to="/contact-us"
          >
            Contact Us
          </Button>
        )}

         
        </div>
      </div>
    </header>
  );
};

export default Header;
