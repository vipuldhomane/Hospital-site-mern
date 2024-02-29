import React from "react";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";

import Section from "../Section";
import DepartmentSectionStyle2 from "../Section/DepartmentSection/DepartmentSectionStyle2";
import FeaturesSectionStyle2 from "../Section/FeaturesSection/FeaturesSectionStyle2";

import { pageTitle } from "../../helpers/PageTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const departmentData = [
  {
    title: "Diagnostic testing",
    subTitle:
      "Blood tests, imaging studies, and other tests to diagnose health conditions",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Orthopedic Services",
    subTitle:
      "offer expert care for injuries and conditions, prioritizing mobility, pain relief, and recovery      ",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Preventive care",
    subTitle:
      "Annual checkups, immunizations, and health screenings care preventive",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Treatment for acute and chronic conditions",
    subTitle:
      "Medication management, disease management, and other treatments to improve health outcomes",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Casualty 24 x 7    ",
    subTitle:
      "Round-the-clock casualty services, ensuring prompt and expert care for emergencies at any hour      ",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
];

const featureListData = [
  {
    title: "All-inclusive Care",
    subTitle:
      "Our comprehensive medical specializations and services are provided under one roof, guaranteeing comprehensive and integrated healthcare for all your requirements. ",
    iconUrl: "images/icons/professional.svg",
  },
  {
    title: "Expert Team",
    subTitle:
      "Our hospital is home to highly skilled medical professionals and other healthcare workers committed to offering the best possible treatment.",
    iconUrl: "images/icons/comprehensive.svg",
  },
  {
    title: "Modern Technology:",
    subTitle:
      "To provide accurate diagnoses and efficient treatments, we use cutting-edge medical equipment and technologies",
    iconUrl: "images/icons/patient.svg",
  },
  {
    title: "Patient-Centered Approach",
    subTitle: `We aim to deliver individualized care for each patient's needs and preferences. Patient comfort, safety, and satisfaction are our top priorities at our hospital.`,
    iconUrl: "images/icons/facilities.svg",
  },
];

export default function About() {
  pageTitle("About");
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl="/images/mainUpload/taywadeBuild.png"
        title="Welcome to <br />Taywade MultiSpecialty Hospital"
        subTitle="Your Partner in Health and Wellness"
      />
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Provides Our Best Services"
          sectionTitleUp="SERVICES"
          data={departmentData}
        />
      </Section>

      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="Why Choose Us"
          imgUrl="images/mainUpload/taywadeImg1.jpg"
          data={featureListData}
        />
      </Section>
      {/* <Section>
        <FunFactSection
          bgUrl="images/about/fun_fact_bg.jpeg"
          data={funFactData}
        />
      </Section> */}
      {/* <Section topMd={190} topLg={145} topXl={105}>
        <TeamSection
          sectionTitle="Experts Doctor"
          sectionTitleUp="MEET OUR"
          data={teamData}
        />
      </Section>

      <Section topMd={170} topLg={120} topXl={80}>
        <GallerySection
          sectionTitle="Our Facilities and <br />Latest Activities"
          sectionTitleUp="HAVE A LOOK AT"
          data={galleryData}
        />
      </Section> */}

      {/* <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="images/about/banner_bg_2.jpeg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          center
        />
      </Section> */}
    </>
  );
}
