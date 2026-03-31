import React from "react";
import dotParticle from "@/assets/svg/dots-three.svg";
import SectionTitle from "@/components/ui/section-title";
import { Animated } from "@/components/ui/animated";
import { comparisonData, whyWeStandApartText } from "@/contents/screens/home";

const WhyWeStandApart = () => {
  return (
    <section className="bg-bg-cream section-space-block hidden md:block">
      <div className="container relative">
        <img
          src={dotParticle}
          alt="Decorative pattern"
          aria-hidden="true"
          className="absolute right-16 top-0"
        />

        <Animated variant="slideUp" className="max-w-177.5">
          <SectionTitle className="mb-2.5 text-secondary">
            {whyWeStandApartText.title}
          </SectionTitle>
          <p className="text-accent-one mb-16">{whyWeStandApartText.subtext}</p>
        </Animated>

        <Animated variant="slideUp" delay={0.2}>
          <table className="w-full text-accent-four">
            <caption className="sr-only">
              {whyWeStandApartText.title}: {whyWeStandApartText.subtext}
            </caption>
            <thead>
              <tr>
                <th className="py-7 px-6">
                  <span className="sr-only">Comparison criteria</span>
                </th>
                {comparisonData.headers.map((header, index) => (
                  <th
                    key={header + index}
                    className={`pl-8 pr-4 py-7 uppercase text-sm text-left ${
                      index === 3 ? "font-bold text-primary" : "font-normal"
                    }`}
                  >
                    {index === 3 && (
                      <div className="flex items-center gap-2.5">
                        <div className="size-2.5 rounded-full bg-[#FF9900]"></div>
                        {header}
                      </div>
                    )}
                    {index !== 3 && header}
                  </th>
                ))}
              </tr>
              <tr>
                <td colSpan={5} className="border-b border-border-light"></td>
              </tr>
            </thead>
            <tbody>
              {comparisonData.rows.map((row, rowIndex) => (
                <React.Fragment key={row.label}>
                  <tr>
                    <th
                      scope="row"
                      className="text-[#01170B] py-13 px-6 font-bold text-left"
                    >
                      {row.label}
                    </th>
                    {row.values.map((value, index) => (
                      <td
                        key={index}
                        className={`py-13 pl-8 pr-4 ${
                          index === 3
                            ? "font-medium text-primary"
                            : index > 0
                              ? "font-medium"
                              : ""
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                  {rowIndex < comparisonData.rows.length && (
                    <tr>
                      <td
                        colSpan={5}
                        className="border-b border-border-light"
                      ></td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </Animated>
      </div>
    </section>
  );
};

export default WhyWeStandApart;
