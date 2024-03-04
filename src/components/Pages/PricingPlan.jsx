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
    btnText: "Get Details on WhatsApp",
    btnUrl: "https://wa.me/919422334702",
    iconUrl: "images/mainUpload/DeptLogo/mediLogo.png",
    featureList: [
      "CBC",
      "FBS",
      "PPBS",
      "HbA1C",
      "Albumin Creat Ratio",
      "Microalbumin",
      "Urine Routine",
      "Lipid Profile [F]",
      "Thyroid Profile",
      "KFT With Uric Acid",
      "LFT",
      "ECG",
      "Chest X-Ray",
      "TMT or 2D Echo",
      "USG (Sonography) Abdomen",
      "Fundus Examination",
      "Consultation With Doctor",
    ],
    subTitle:
      "Specialized care for seniors. Benefit from tailored assessments, fall prevention, and support for your golden years.",
  },

  {
    title: "Cardiac Health Check-up",
    btnText: "Get Details on WhatsApp",
    btnUrl: "https://wa.me/919422334702",
    iconUrl: "images/mainUpload/DeptLogo/mediLogo.png",
    featureList: [
      "FBS",
      "PPBS",
      "HbA1C",
      "Lipid Profile",
      "Liver Profile",
      "TSH",
      "KFT With Uric Acid",
      "CBC With ESR",
      "Urine Routine",
      "Chest X-Ray",
      "ECG",
      "TMT or 2D Echo",
    ],
    subTitle:
      "Specialized care for seniors. Benefit from tailored assessments, fall prevention, and support for your golden years.",
  },

  {
    title: "Routine Check-up",
    btnText: "Get Details on WhatsApp",
    btnUrl: "https://wa.me/919422334702",
    iconUrl: "images/mainUpload/DeptLogo/mediLogo.png",
    featureList: [
      "CBC",
      "Serum Creatinine",
      "Random Blood Sugar",
      "Serum Cholesterol",
      "TSH",
      "SGPT",
      "Serum Bilirubin",
      "Urine Routine",
      "ECG",
      "Chest X-Ray",
      "Consultation With Doctor",
    ],
    subTitle:
      "Specialized care for seniors. Benefit from tailored assessments, fall prevention, and support for your golden years.",
  },
  {
    title: "Complete Health Check-up",
    btnText: "Get Details on WhatsApp",
    btnUrl: "https://wa.me/919422334702",
    iconUrl: "images/mainUpload/DeptLogo/mediLogo.png",
    featureList: [
      "FBS",
      "PPBS",
      "HBA1C",
      "CBC With ESR",
      "KFT with Uric Acid",
      "LFT",
      "Lipid Profile (F)",
      "Thyroid Profile",
      "HbsAg",
      "Urine Routine",
      "Vit B12",
      "Vit D3",
      "PSA (Male)/ PAP Smear (Female)",
      "Chest X-Ray",
      "ECG TMT or 2D Echo",
      "USG (Sonography) Abdomen With Pelvis",
      "Consultation With Doctor",
      "Consultation With Gynecologist",
      "Consultation With Physiotherapist",
    ],
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
        <PricingSection
          sectionTitle="Choose the Plans that Fits for you"
          data={pricingData}
        />
      </Section>
      {/* <Section
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
      </Section> */}
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
