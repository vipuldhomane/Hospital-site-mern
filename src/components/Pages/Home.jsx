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
import AwardSectionStyle2 from "../Section/AwardSection/AwardSectionStyle2";
import Slider from "react-slick";
import TeamSection from "../Section/TeamSection";
import { departmentData } from "./departmentsData";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
var settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};
const galleryData = [
  { imgUrl: "/images/mainUpload/carausalImg/img10.jpg" },
  { imgUrl: "/images/mainUpload/carausalImg/img9.jpg" },
  { imgUrl: "/images/mainUpload/carausalImg/img2.jpg" },
  { imgUrl: "/images/mainUpload/carausalImg/img5.jpg" },
  // { imgUrl: "/images/mainUpload/carausalImg/img3.jpg" },
  { imgUrl: "/images/mainUpload/carausalImg/img4.jpg" },
  { imgUrl: "/images/mainUpload/carausalImg/img1.jpg" },
  { imgUrl: "/images/mainUpload/carausalImg/img6.jpg" },
  { imgUrl: "/images/mainUpload/carausalImg/img7.jpg" },
  { imgUrl: "/images/mainUpload/carausalImg/img8.jpg" },
];
// Feature list Data
const featureListData = [
  // {
  //   iconSrc: "/images/home_1/compassion.svg",
  //   title: "Compassion",
  //   subTitle:
  //     "At Taywade Multispeciality Hospital, We acknowledge the significance of compassion in the healing process and approach healthcare with respect and understanding. We treat each patient with compassion, decency, and respect to lessen pain and offer consolation during illness.",
  // },
  {
    iconSrc: "/images/home_1/excellence.svg",
    title: "Excellence",
    subTitle:
      " From clinical treatment to customer service, we are dedicated to excellence in every business facet. To provide the greatest results for our patients, our team of healthcare professionals respects the highest quality standards and always looks for ways to innovate and improve.",
  },
  // {
  //   iconSrc: "/images/home_1/integrity.svg",
  //   title: "Integrity",
  //   subTitle: `Our relationships with patients, coworkers, and the community are built on integrity. Our commitment to integrity in every choice and action has allowed us to gain the trust and confidence of those we serve. We conduct ourselves with honesty, transparency, and ethical integrity.
  //   `,
  // },
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
    content: "Yes we accept wide range of health insurance ",
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
const deptData = departmentData;
// Edit here for contact details and services
const infoList = [
  {
    title: "Contact Number",
    subTitle: "+91 9422334702",
    iconUrl: "/images/contact/icon_1.svg",
  },
  {
    title: "LandLine",
    subTitle: "0712-2992211",
    ph1: "  0712-2992210",
    iconUrl: "/images/contact/icon_1.svg",
  },

  {
    title: "Location",
    subTitle: "Shatabdi Square,",
    sub_subTitle: "Manewada Ring Road, Nagpur",
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
const teamData = [
  {
    imgUrl: "images/mainUpload/docStock.jpg",
    name: "Dr. Shounak Taywade",
    designation: "Consultant Orthopaedics and Joint Replacement Surgeon",
    description:
      "Head of Orthopaedics and Joint Replacement with extensive experience in leading orthopaedic teams and spearheading innovative approaches to joint replacement surgeries",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  {
    imgUrl: "images/mainUpload/docStock.jpg",
    name: "Dr. Ankita Taywade",
    designation: "Consultant Radiologist",
    description:
      "Esteemed Head of the Radiology Department, expertly orchestrating advanced imaging services and fostering excellence in diagnostics",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  // {
  //   imgUrl: "images/mainUpload/docStock.jpg",
  //   name: "Dr.  Paras Zunke",
  //   designation: "Consultant General medicine and Diabetologist",
  //   description:
  //     "Experienced Diabetologist and General Medicine specialist dedicated to providing comprehensive care and management for diabetes and general health concerns.",
  // },
  // {
  //   imgUrl: "images/mainUpload/docStock.jpg",
  //   name: "Dr. Anupama Zade",
  //   designation: "Consultant Intensivist, CriticalCare Physician",
  //   description:
  //     "Experienced Intensivist and Critical Care Physician adept at providing expert care for critically ill patients in intensive care settings",
  // },
];
const social = [
  { icon: "fa6-brands:facebook-f", href: "/about" },
  { icon: "fa6-brands:linkedin-in", href: "/about" },
  { icon: "fa6-brands:twitter", href: "/about" },
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
      {/* Start Facilities Section   */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AwardSectionStyle2
          sectionTitle="State of the Art Facilities"
          sectionTitleUp="Facilities"
          sectionSubTitle=""
          data={awardData}
        />
      </Section>
      {/* End Facilities Section   */}

      {/* Sample Carousal */}

      <Section bottomMd={185} bottomLg={140} bottomXl={100}>
        <Slider {...settings} className="cs_carausel">
          {galleryData.map((image, index) => {
            return (
              <img
                src={image.imgUrl}
                alt="hospital"
                key={index}
                className="cs_carau_img "
              />
            );
          })}
        </Slider>
      </Section>
      {/* Sample Carousal */}

      {/* Start About Section */}
      <Section>
        <AboutSection
          imgUrl="/images/mainUpload/taywadeBuild.png"
          spiningImgUrl="/images/home_1/about_mini.svg"
          title="About Us"
          subTitle="Taywade Multispeciality Hospital"
          featureList={aboutFeatureList}
        />
      </Section>
      {/* End About Section */}
      {/*  Start Doctors Section  */}
      <Section topMd={190} topLg={145} topXl={105}>
        <TeamSection
          sectionTitle="Experts Doctor"
          sectionTitleUp="MEET OUR"
          data={teamData}
        />
      </Section>
      {/* End Doctors Section  */}

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
      {/* <Section topMd={185} topLg={140} topXl={100}>
        <AwardSection sectionTitle="Awards" data={awardData} />
      </Section> */}
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
        <div class="iframe-container">
          <h3>See what our patients say about us</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=sVXI7lEuwvPPeJz5&amp;list=PLEVkQGIATCXIBlDXgfCz-p7b0OJNBgULN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Section>
      {/* End Testimonial */}
      {/* Start Testimonial */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <div className="socialLinks">
          <h3>Follow us for Latest Updates on HealthCare</h3>
          <div className="cs_social_links">
            {social?.map((item, index) => (
              <Link to={item.href} key={index}>
                <Icon icon={item.icon} />
              </Link>
            ))}
          </div>
        </div>
      </Section>
      {/* End Testimonial */}

      {/* Start Banner Section */}
      <Section>
        <Banner
          bgUrl="images/home_1/cta_bg.svg"
          imgUrl="images/mainUpload/taywadeLogo.jpg"
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
