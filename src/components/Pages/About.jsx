import React from "react";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import Section from "../Section";
import DepartmentSectionStyle2 from "../Section/DepartmentSection/DepartmentSectionStyle2";
import FeaturesSectionStyle2 from "../Section/FeaturesSection/FeaturesSectionStyle2";
import FunFactSection from "../Section/FunFactSection";
import TeamSection from "../Section/TeamSection";
import GallerySection from "../Section/GallerySection";
import AwardSectionStyle2 from "../Section/AwardSection/AwardSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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

const funFactData = [
  { number: "20+", title: "Years of experience" },
  { number: "95%", title: "Patient satisfaction rating" },
  { number: "5000+", title: "Patients served annually" },
  { number: "10+", title: "Healthcare providers on staff" },
  { number: "22+", title: "Convenient locations in the area" },
];

const teamData = [
  {
    imgUrl: "images/about/doctor_1.png",
    name: "Dr. James Lee, MD",
    designation: "Head of Cardiologist",
    description:
      "With expertise in managing complex heart conditions and performing advanced cardiac procedures",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  {
    imgUrl: "images/about/doctor_2.png",
    name: "Dr. John Smith, MD",
    designation: "Emergency Medicine Physician",
    description:
      "With expertise in treating acute illnesses and injuries in medicine physician",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  {
    imgUrl: "images/about/doctor_3.png",
    name: "Dr. Susan Bones, MD",
    designation: "Board-certified Pediatrician",
    description:
      "With experience in managing complex medical conditions in children",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
];

const galleryData = [
  // { imgUrl: "/images/about/portfolio_2_lg.jpeg" },
  // { imgUrl: "/images/about/portfolio_2_lg.jpeg" },
  // {
  //   imgUrl:
  //     "https://res.cloudinary.com/dumvmogj6/image/upload/v1708511080/Taiwade/Telzon/ov5hqj2xg5vqkql7illx.jpg",
  // },
  // {
  //   imgUrl:
  //     "https://res.cloudinary.com/dumvmogj6/image/upload/v1708511080/Taiwade/Telzon/ov5hqj2xg5vqkql7illx.jpg",
  // },
  // {
  //   imgUrl:
  //     "https://res.cloudinary.com/dumvmogj6/image/upload/v1708511080/Taiwade/Telzon/ov5hqj2xg5vqkql7illx.jpg",
  // },
  // {
  //   imgUrl:
  //     "https://res.cloudinary.com/dumvmogj6/image/upload/v1708511080/Taiwade/Telzon/ov5hqj2xg5vqkql7illx.jpg",
  // },
  // { imgUrl: "/images/about/portfolio_3_lg.jpeg" },
  // { imgUrl: "/images/about/portfolio_1_lg.jpeg" },
  { imgUrl: "/images/about/portfolio_4_lg.jpeg" },
  { imgUrl: "/images/carausalImg/img1.jpg" },
];
const awardData = [
  {
    iconUrl: "/images/icons/award.svg",
    title: "100 Bed Hospital",
  },
  {
    iconUrl: "/images/icons/award.svg",
    title: "3 State of Art Modular Operation Theatres",
  },
  {
    iconUrl: "/images/icons/award.svg",
    title: "20 Bed ICU",
  },
  {
    iconUrl: "/images/icons/award.svg",
    title: "2 Minor Operation Theatres",
  },
  {
    iconUrl: "/images/icons/award.svg",
    title: "Diagnostic Centre with Latest Equipment",
  },
  {
    iconUrl: "/images/icons/award.svg",
    title: "Advanced Pathology lab",
  },
  {
    iconUrl: "/images/icons/award.svg",
    title: "24 hrs Casualty and Pharmacy",
  },
  {
    iconUrl: "/images/icons/award.svg",
    title: "Physiotherapy Setup",
  },
];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
};
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
