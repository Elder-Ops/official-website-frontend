import { Link, useLocation } from "react-router";
import elderOpsLogo from "@/assets/svg/elderOps-white-logo.svg";
import elderOpsLogoGreen from "@/assets/svg/elderOps-green-logo.svg";
import menuIcon from "@/assets/svg/menu.svg";
import closeIcon from "@/assets/svg/cancel-icon.svg";
import { useScrollDetection } from "@/hooks/useScrollDetection";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useGlobalStore } from "@/store/useGlobalStore";
// import Button from "../ui/button";
import Navbar from "../navbar/Navbar";
import CalendlyCTA from "../contactUs/react-calendly";

const Header = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const isScrolled = useScrollDetection(50);
  const isVisible = useScrollDirection();
  const { isMobileMenuOpen, isNavbarRevealBlocked, toggleMobileMenu } =
    useGlobalStore();

  const showWhiteBg = isScrolled;
  const showDarkContent = !isHomePage && !isScrolled;
  const shouldShowHeader = !isNavbarRevealBlocked && isVisible;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-7.5 transition-all duration-300 ${showWhiteBg ? "bg-white" : ""} ${shouldShowHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container grid grid-cols-[1fr_auto] gap-2 md:grid-cols-[1fr_auto_1fr] items-center">
        <Link to="/">
          {showWhiteBg || showDarkContent ? (
            <img
              src={elderOpsLogoGreen}
              alt="elderOps logo"
              className="w-10 md:w-13.5"
            />
          ) : (
            <img
              src={elderOpsLogo}
              alt="elderOps logo"
              className="w-10 md:w-13.5"
            />
          )}
        </Link>

        <div className="flex md:hidden items-center justify-center">
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
        </div>

        <Navbar isHomePage={!showWhiteBg && !showDarkContent} />
        <div className="md:flex hidden items-center justify-end gap-4 text-nowrap">
          {/* {isHomePage ? (
            <Button
              variant={showWhiteBg ? "glass-link" : "link"}
              to="/contact-us"
              className={` hover:-translate-y-1 border  transition-transform duration-200  h-10! ${showWhiteBg ? "" : "bg-white text-primary"}`}
            >
              Contact Us
            </Button>
          ) : (
            <Button variant="glass-link" to="/contact-us">
              Contact Us
            </Button>
          )} */}

          <CalendlyCTA shouldRenderOnMobile={false} />
        </div>
      </div>
    </header>
  );
};

export default Header;
