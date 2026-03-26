import { Link, useLocation } from "react-router";
import footerLogo from "@/assets/svg/elderOps-footer-logo.svg";
import SectionTitle from "../ui/section-title";
import Navbar from "../navbar/Navbar";
import { footerText } from "@/contents/footer";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";

  return (
    <footer className="bg-linear-to-b from-[#EFF2CD00] to-[#EFF2CD]">
      <div
        className={`container ${isHomePage ? "section-space-block" : "section-space-bottom"} `}
      >
        {isHomePage && (
          <div className="max-w-242.5 mx-auto text-center">
            <SectionTitle className="font-semibold mb-4">
              {footerText.title}
            </SectionTitle>
            <p className="text-[#979797] mb-10">{footerText.subtext}</p>

            <Link
              to="/contact-us"
              className="btn-glass-effect font-medium py-3 px-6 rounded-[36px] text-white inline-block mb-16"
            >
              Get started
            </Link>
          </div>
        )}

        <div className="bg-white p-10 rounded-3xl shadow-[0px_4px_50px_0px_#02361B1A]">
          <img
            src={footerLogo}
            alt="elder ops logo"
            className="mb-12 mx-auto"
          />

          <div className="flex flex-col items-center justify-between mb-10">
            <Navbar
              className="text-[#5B5B5B] font-medium grid sm:flex text-center sm:text-start"
              isFooter
            />
          </div>

          <div className="border-t border-t-[#EAEAEA] pt-4 text-xs font-medium">
            <div className="flex flex-col items-center justify-between gap-5 w-full xl:flex-row">
              <div className="flex items-center flex-wrap justify-center gap-4 text-xs text-[#8BA396] font-bold lg:justify-start sm:gap-12 lg:gap-16">
                <a href="mailto:contact@elderops.net">
                  Email:{" "}
                  <span className="text-accent-one">contact@elderops.net</span>
                </a>

                <a href="mailto:contact@elderops.net">
                  Contact enquiries:{" "}
                  <span className="text-accent-one">contact@elderops.net</span>
                </a>
                <a href="tel:+16285550147">
                  Phone:{" "}
                  <span className="text-accent-one">+1 (628) 555-0147</span>
                </a>
              </div>

              <div className="text-[#767676] flex items-center gap-4">
                <p>© {currentYear} ElderOps</p>

                <div className="bg-[#767676] size-1 rounded-full" />

                <a href="/">Terms</a>

                <div className="bg-[#767676] size-1 rounded-full" />

                <a href="/">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
