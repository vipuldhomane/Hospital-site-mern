import React from "react";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import { pageTitle } from "../../helpers/PageTitle";
import Section from "../Section";
import PricingSection from "../Section/PricingSection";
import FaqSectionStyle4 from "../Section/FaqSection/FaqSectionStyle4";
import BannerSectionStyle10 from "../Section/BannerSection/BannerSectionStyle10";
import AwardSectionStyle2 from "../Section/AwardSection/AwardSectionStyle2";
const pricingData = [
  {
    title: "Diabetic Health Check-up",
    iconUrl: "images/mainUpload/DeptLogo/mediLogo.png",
    subTitle:
      "Specialized care for seniors. Benefit from tailored assessments, fall prevention, and support for your golden years.",
  },

  {
    title: "Cardiac Health Check-up",
    iconUrl: "images/mainUpload/DeptLogo/mediLogo.png",
    subTitle:
      "Specialized care for seniors. Benefit from tailored assessments, fall prevention, and support for your golden years.",
  },
  {
    title: "Complete Health Check-up",
    iconUrl: "images/mainUpload/DeptLogo/mediLogo.png",
    subTitle:
      "Specialized care for seniors. Benefit from tailored assessments, fall prevention, and support for your golden years.",
  },
  {
    title: "Routine Check-up",
    iconUrl: "images/mainUpload/DeptLogo/mediLogo.png",
    subTitle:
      "Specialized care for seniors. Benefit from tailored assessments, fall prevention, and support for your golden years.",
  },
];

export default function PricingPlan() {
  pageTitle("Health Plans");
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/pricing_plan/banner_bg.svg"
        imgUrl="/images/mainUpload/taywadeHealthPlan.jpg"
        title="Find the Right Plan <br>for You"
        subTitle="Explore Our Membership Options and Start Your Journey to Better Health"
        btnText="Get Starter"
        btnUrl="/contact"
      />

      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AwardSectionStyle2
          sectionTitle="Choose the Plans that Fits for you"
          sectionTitleUp="Health Plans"
          sectionSubTitle=""
          data={pricingData}
        />
      </Section>
      {/* <Section
        topMd={185}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
        className="cs_gray_bg_1"
      >
        <FaqSectionStyle4
          sectionTitle="Frequently Asked <br />Questions"
          data={faqData}
          faqImgUrl="/images/home_4/faq_img.jpeg"
          spiningImgUrl="/images/home_1/about_mini.svg"
        />
      </Section>
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        className="cs_footer_margin_0"
      >
        <BannerSectionStyle10
          imgUrl="/images/pricing_plan/banner_img_2.png"
          title="Choose Your Plan and Invest in Your Health Today!"
        />
      </Section> */}
    </>
  );
}
