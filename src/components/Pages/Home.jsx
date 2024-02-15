import React from "react";
import Hero from "../Hero";
import AboutSection from "../Section/AboutSection";
import BrandsSection from "../Section/BrandsSection";
import Banner from "../Section/BannerSection";
import Section from "../Section";
import FeaturesSection from "../Section/FeaturesSection";
import TestimonialSection from "../Section/TestimonialSection";
import BlogSection from "../Section/BlogSection";
import AppointmentSection from "../Section/AppointmentSection";
import FaqSection from "../Section/FaqSection";
import AwardSection from "../Section/AwardSection";
import DepartmentSection from "../Section/DepartmentSection";
import { pageTitle } from "../../helpers/PageTitle";

// Feature list Data
const featureListData = [
  {
    iconSrc: "/images/home_1/compassion.svg",
    title: "Compassion",
    subTitle:
      "At Taywade Multispeciality Hospital, We acknowledge the significance of compassion in the healing process and approach healthcare with respect and understanding. We treat each patient with compassion, decency, and respect to lessen pain and offer consolation during illness.",
  },
  {
    iconSrc: "/images/home_1/excellence.svg",
    title: "Excellence",
    subTitle:
      " From clinical treatment to customer service, we are dedicated to excellence in every business facet. To provide the greatest results for our patients, our team of healthcare professionals respects the highest quality standards and always looks for ways to innovate and improve.",
  },
  {
    iconSrc: "/images/home_1/integrity.svg",
    title: "Integrity",
    subTitle: `Our relationships with patients, coworkers, and the community are built on integrity. Our commitment to integrity in every choice and action has allowed us to gain the trust and confidence of those we serve. We conduct ourselves with honesty, transparency, and ethical integrity.
    `,
  },
  {
    iconSrc: "/images/home_1/respect.svg",
    title: "Innovation",
    subTitle:
      "Innovation drives progress in healthcare, and at Taywade Multispeciality Hospital, We welcome innovation as a way to improve patient outcomes and care. We invest in the newest technology, research, and evidence-based methods to maintain our position at the forefront of medical innovations and continuously improve our services.",
  },
  {
    iconSrc: "/images/home_1/teamwork.svg",
    title: "Patient-centred Care",
    subTitle:
      "Our commitment to patient-centred care is the foundation of our principles. We make sure that every person receives individualized attention, respect, and the best possible care throughout their healthcare journey by putting their needs, preferences, and well-being first in all we do.",
  },
];

const brandData = [
  { imgUrl: "images/brand_1.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_2.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_3.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_4.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_5.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_6.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_7.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_8.png", imgAlt: "Brand" },
];
const faqData = [
  {
    title: "Is hospital open 24*7 ?",
    content:
      "Yes we are available 24*7 for emergencies and non life threatening conditions.",
  },
  {
    title: "Does Hospital have inhouse pharmacy?    ",
    content:
      "Yes Hospital have a 24*7 pharmacy in its premises for the convenience of patients       ",
  },
  {
    title: "Do you accept insurance?",
    content:
      "Yes we accept wide range of health insurance ",
  },
  {
    title: "What should I bring to my appointment?",
    content:
      "When preparing for your appointment at our multispeciality hospital, it's essential to carry Photo ID,Insurance Information,Medical Records,List of Medications",
  },
  
];
const blogData = [
  {
    title: "The Benefits of Mindfulness Meditation for Stress and Anxiety",
    thumbUrl: "images/home_1/post_1.jpeg",
    date: "May 1, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
  {
    title: "Healthy Eating on a Budget: Tips and Strategies",
    thumbUrl: "images/home_1/post_2.jpeg",
    date: "May 4, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
  {
    title: "The Importance of Regular Cancer Screenings and Early Detection",
    thumbUrl: "images/home_1/post_3.jpeg",
    date: "May 1, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
];
const awardData = [
  {
    title: "Malcolm Baldrige National Quality Award",
    subTitle:
      "This award recognizes healthcare organizations that have demonstrated excellence in leadership, strategic planning, customer and employee satisfaction, and operational efficiency.",
    iconUrl: "images/icons/award.svg",
  },
  {
    title: "HIMSS Davies Award",
    subTitle:
      "This award recognizes healthcare organizations that have used health information technology to improve patient outcomes and reduce costs.",
    iconUrl: "images/icons/award.svg",
  },
  {
    title: "Healthgrades National’s Best Hospital",
    subTitle:
      "This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.",
    iconUrl: "images/icons/award.svg",
  },
  {
    title: "Joint Commission Gold Seal of Approval",
    subTitle:
      "This recognition is given to hospitals that have met rigorous standards for patient safety and quality of care.",
    iconUrl: "images/icons/award.svg",
  },
];
const departmentData = [
  {
    title: "Emergency",
    iconUrl: "images/home_1/department_icon_1.svg",
    href: "/departments/department-details",
  },
  {
    title: "Pediatric",
    iconUrl: "images/home_1/department_icon_2.svg",
    href: "/departments/department-details",
  },
  {
    title: "Gynecology",
    iconUrl: "images/home_1/department_icon_3.svg",
    href: "/departments/department-details",
  },
  {
    title: "Cardiology",
    iconUrl: "images/home_1/department_icon_4.svg",
    href: "/departments/department-details",
  },
  {
    title: "Neurology",
    iconUrl: "images/home_1/department_icon_5.svg",
    href: "/departments/department-details",
  },
  {
    title: "Orthopaedics",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/department-details",
  },
  {
    title: "Ear, Nose & Throat",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/department-details",
  },
  {
    title: "Urology",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/department-details",
  },
  
];
// Edit here for contact details and services 
const infoList = [
  {
    title: "Hotline",
    subTitle: "+91 9730014161",
    iconUrl: "/images/contact/icon_1.svg",
  },
  
  {
    title: "Location",
    subTitle: "Shatabdi Sq, Manewada Ring Road, Nagpur",
    iconUrl: "/images/icons/pin.svg",
  },
];
const aboutFeatureList = [
  {
    featureListTitle:
      "Taywade MultiSpecialty Hospital is a team of experienced medical professionals",
    featureListSubTitle:
      "At Taywade MultiSpecialty Hospital, we provide extensive medical treatments customized to meet your needs. We put your health and well-being first, with cutting-edge facilities and a committed team of professionals. Taywade Multispeciality Hospital offers excellent care that is delivered with compassion. Your dependable healthcare partner.",
  },
];
export default function Home() {
  pageTitle("Home");
  return (
    <>
      <Hero
        title="Your Partner in Health and Wellness"
        subTitle="We are committed to providing you with the best medical and healthcare services to help you live healthier and happier."
        bgUrl="/images/home_1/hero_bg.jpeg"
        imgUrl="/images/home_1/hero_img.png"
        // below 2 feilds are not needed
        videoBtnText="See how we work"
        videoUrl="https://www.youtube.com/embed/VcaAVWtP48A"
        infoList={infoList}
        btnText="Book Now"
        btnUrl="/appointments"
      />

      {/* Start Feature Section */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <FeaturesSection sectionTitle="Our Values" data={featureListData} />
      </Section>
      {/* End Feature Section */}

      {/* Start About Section */}
      <Section>
        <AboutSection
          imgUrl="/images/home_1/about.png"
          spiningImgUrl="/images/home_1/about_mini.svg"
          title="About Us"
          subTitle="Taywade Multispeciality Hospital"
          featureList={aboutFeatureList}
        />
      </Section>
      {/* End About Section */}

      {/* Start Departments Section */}
      <Section topMd={185} topLg={150} topXl={110}>
        <DepartmentSection
          sectionTitle="Departments"
          bgUrl="images/home_1/department_bg.svg"
          data={departmentData}
        />
      </Section>

      {/* End Departments Section */}
      {/* Start Award Section */}
      <Section topMd={185} topLg={140} topXl={100}>
        <AwardSection sectionTitle="Awards" data={awardData} />
      </Section>
      {/* End Award Section */}

      {/* Start Testimonial */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSection
          sectionTitle="Some Reviews"
          sectionTitleDown="Of our clients"
        />
      </Section>
      {/* End Testimonial */}

      {/* Start Banner Section */}
      <Section>
        <Banner
          bgUrl="images/home_1/cta_bg.svg"
          imgUrl="images/home_1/cta_img.png"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced medical professionals today!"
        />
      </Section>
      {/* End Banner Section */}

      {/* Start Blog Section */}
      {/* <Section topMd={190} topLg={145} topXl={105}>
        <BlogSection
          sectionTitle="Latest Update"
          sectionTitleUp="BLOG POSTS"
          data={blogData}
        />
      </Section> */}
      {/* End Blog Section */}

      {/* Start Appointment Section */}
      {/* <Section topMd={190} topLg={145} topXl={105} id="appointment">
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl="/images/home_1/appointment.jpeg"
        />
      </Section> */}
      {/* End Appointment Section */}
      
      {/* Start FAQ Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSection
          data={faqData}
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
        />
      </Section>
      {/* End FAQ Section */}

      {/* Start Brand Section */}
      {/* <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BrandsSection data={brandData} />
      </Section> */}
      {/* End Brand Section */}
    </>
  );
}
