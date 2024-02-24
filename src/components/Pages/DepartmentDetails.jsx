import React, { useEffect, useState } from "react";
import BannerSectionStyle7 from "../Section/BannerSection/BannerSectionStyle7";
import Section from "../Section";
import AppointmentSection from "../Section/AppointmentSection";
import BreadcrumbStyle2 from "../Breadcrumb/BreadcrumbStyle2";
import AboutSectionStyle2 from "../Section/AboutSection/AboutSectionStyle2";
import FeaturesSectionStyle3 from "../Section/FeaturesSection/FeaturesSectionStyle3";
import TeamSectionStyle3 from "../Section/TeamSection/TeamSectionStyle3";
import { pageTitle } from "../../helpers/PageTitle";
import { useParams } from "react-router-dom";
import Team from "../Team";

const departmentData = [
  {
    title: "Orthopaedics",
    id: "Orthopaedics",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/Orthopaedics",
    subTitle:
      "Welcome to Taywade Hospital, where orthopedic excellence meets compassionate care. Our dedicated orthopedic team specializes in restoring mobility and improving quality of life. From fractures to joint replacements, we offer comprehensive treatments tailored to your needs. At Taywade Hospital, we utilize cutting-edge technology and advanced surgical techniques to ensure optimal outcomes for our patients. Whether you're suffering from sports injuries, arthritis, or spinal conditions, trust our experienced orthopedic specialists to provide personalized care every step of the way. Your journey to better musculoskeletal health starts here. Discover the difference at Taywade Hospital – where your well-being is our priority.",
    deptImg: "/images/mainUpload/DeptPhotos/orthoDept.jpg",
    doctor: {
      imgUrl: "/images/mainUpload/docStock.jpg",
      name: "Dr. Shounak Taywade",
      designation: "Consultant Orthopaedics and Joint Replacement Surgeon",
      description:
        "Head of Orthopaedics and Joint Replacement with extensive experience in leading orthopaedic teams and spearheading innovative approaches to joint replacement surgeries",
    },
  },
  {
    title: "General Medicine",
    id: "GeneralMedicine",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/GeneralMedicine",
    subTitle:
      "At Taywade Hospital, our general medicine department provides comprehensive care for a wide range of medical conditions. Our expert physicians offer personalized treatment plans to address your health concerns, focusing on preventive care, diagnosis, and management of various illnesses. Whether you're seeking routine check-ups or specialized care, trust our experienced team to prioritize your well-being and guide you towards optimal health.",
    deptImg: "/images/mainUpload/DeptPhotos/generalMedDept.jpg",

    doctor: {
      imgUrl: "/images/mainUpload/docStock.jpg",
      name: "Dr.  Paras Zunke",
      designation: "Consultant General medicine and Diabetologist",
      description:
        "Experienced Diabetologist and General Medicine specialist dedicated to providing comprehensive care and management for diabetes and general health concerns.",
    },
  },
  {
    title: "Radiology",
    id: "radiology",
    iconUrl: "images/home_1/department_icon_1.svg",
    href: "/departments/radiology",
    subTitle:
      "At Taywade Hospital, our radiology department offers cutting-edge diagnostic imaging services to aid in accurate disease detection and treatment planning. With state-of-the-art equipment and experienced radiologists, we provide a comprehensive range of imaging modalities, including X-rays, MRIs, CT scans, and ultrasounds, ensuring precise and timely diagnosis for optimal patient care.",
    deptImg: "",
    doctor: {
      imgUrl: "/images/mainUpload/docStock.jpg",
      name: "Dr. Ankita Taywade",
      designation: "Consultant Radiologist",
      description:
        "Esteemed Head of the Radiology Department, expertly orchestrating advanced imaging services and fostering excellence in diagnostics",
    },
  },

  {
    title: "Critical care medicine/ICU",
    id: "criticalcare",
    iconUrl: "images/home_1/department_icon_1.svg",
    href: "/departments/criticalcare",
    subTitle:
      "In our advanced ICU facility, Taywade Hospital delivers exceptional critical care medicine, catering to patients with life-threatening conditions. Our multidisciplinary team of intensivists, nurses, and support staff is dedicated to providing round-the-clock monitoring, advanced interventions, and compassionate support to ensure the best possible outcomes for every patient.",
    deptImg: "",
    doctor: {
      imgUrl: "/images/mainUpload/docStock.jpg",
      name: "Dr. Anupama Zade",
      designation: "Consultant Intensivist, CriticalCare Physician",
      description:
        "Experienced Intensivist and Critical Care Physician adept at providing expert care for critically ill patients in intensive care settings",
    },
  },
  {
    title: "General Surgery",
    id: "GeneralSurgery",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/GeneralSurgery",
    subTitle:
      "Experience superior surgical care at Taywade Hospital's general surgery department. Our skilled surgeons perform a variety of procedures with precision and compassion, ranging from routine surgeries to complex interventions. With state-of-the-art facilities and a patient-centered approach, we ensure excellent outcomes and utmost comfort throughout your surgical journey.",
    deptImg: "",
  },

  {
    title: "Pediatrics",
    id: "pediatrics",
    iconUrl: "images/home_1/department_icon_2.svg",
    href: "/departments/pediatrics",
    subTitle:
      "At Taywade Hospital, our pediatric department specializes in providing holistic care for infants, children, and adolescents. With a child-friendly environment and experienced pediatricians, we offer preventive care, vaccinations, developmental screenings, and treatment for a wide range of pediatric conditions, ensuring the health and happiness of your little ones.",
    deptImg: "",
  },
  {
    title: "Obstetrics and Gynecology",
    id: "Gynecology",
    iconUrl: "images/home_1/department_icon_3.svg",
    href: "/departments/Gynecology",
    subTitle:
      "Experience exceptional care for women's health at Taywade Hospital's obstetrics and gynecology department. From prenatal care to childbirth, gynecological screenings, and reproductive health services, our compassionate team provides comprehensive support at every stage of life, ensuring the well-being of both mother and baby.",
    deptImg: "",
  },
  {
    title: "Oral & Maxillofacial",
    id: "oral",
    iconUrl: "images/home_1/department_icon_3.svg",
    href: "/departments/oral",
    subTitle:
      "Trust Taywade Hospital's oral and maxillofacial department for expert care in treating conditions affecting the mouth, jaw, and facial regions. From dental implants and corrective jaw surgery to facial trauma care and oral pathology management, our skilled specialists deliver personalized treatment plans to restore function and aesthetics with precision and compassion.",
    deptImg: "",
  },
  {
    title: "Anaesthesia",
    id: "Anaesthesia",
    iconUrl: "images/home_1/department_icon_3.svg",
    href: "/departments/Anaesthesia",
    subTitle:
      "Experience safe and effective anesthesia care at Taywade Hospital. Our skilled anesthesiologists provide comprehensive preoperative evaluation, intraoperative management, and postoperative pain relief, ensuring comfort and safety throughout your surgical experience.",
    deptImg: "",
  },
  {
    title: "Cardiology",
    id: "Cardiology",
    iconUrl: "images/home_1/department_icon_4.svg",
    href: "/departments/Cardiology",
    subTitle:
      "Experience top-notch cardiac care at Taywade Hospital's cardiology department. Our renowned cardiologists specialize in the diagnosis, treatment, and management of heart conditions, offering a full spectrum of services, including cardiac screenings, interventional procedures, and cardiac rehabilitation, to ensure optimal heart health for every patient.",
    deptImg: "",
  },
  {
    title: "Neurosurgery",
    id: "Neurosurgery",
    iconUrl: "images/home_1/department_icon_5.svg",
    href: "/departments/Neurosurgery",
    subTitle:
      "In Taywade Hospital's neurosurgery department, our expert neurosurgeons specialize in treating disorders of the brain, spine, and nervous system. From complex brain surgeries to minimally invasive spinal procedures, we employ advanced techniques and technology to deliver exceptional care and improve patient outcomes.",
    deptImg: "",
  },

  {
    title: "Urology",
    id: "Urology",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/Urology",
    subTitle:
      "Trust Taywade Hospital's urology department for comprehensive care of urological conditions affecting both men and women. From kidney stones and urinary tract infections to prostate disorders and urologic cancers, our skilled urologists offer personalized treatment plans utilizing the latest advancements in medical and surgical therapies.",
    deptImg: "",
  },
  {
    title: "Pathology",
    id: "Pathology",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/Pathology",
    subTitle:
      "Experience precise diagnostic services at Taywade Hospital's pathology department. Our skilled pathologists utilize cutting-edge techniques to analyze tissue samples, blood tests, and other specimens with accuracy and efficiency. From cancer screenings to infectious disease detection, we provide vital information to guide treatment decisions and promote better patient outcomes. With a commitment to excellence and attention to detail, trust our pathology team to deliver timely and reliable results, supporting the overall health and well-being of our patients",
    deptImg: "",
  },
  {
    title: "Plastic surgery",
    id: "Plasticsurgery",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/Plasticsurgery",
    subTitle:
      "Discover personalized aesthetic and reconstructive solutions at Taywade Hospital's plastic surgery department. Our board-certified plastic surgeons specialize in a wide range of procedures, from cosmetic enhancements to complex reconstructive surgeries, utilizing advanced techniques and innovative approaches to help you achieve your desired look and improve your quality of life.",
    deptImg: "",
  },
  {
    title: "Gastroenterology",
    id: "Gastroenterology",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/Gastroenterology",
    subTitle:
      "Trust Taywade Hospital's gastroenterology department for expert diagnosis and treatment of digestive disorders. Our experienced gastroenterologists offer comprehensive care for conditions such as acid reflux, inflammatory bowel disease, liver diseases, and gastrointestinal cancers, using state-of-the-art technology and evidence-based therapies to optimize patient outcomes and quality of life.",
    deptImg: "",
  },
];

export default function DepartmentDetail() {
  const params = useParams();
  const [dept, setDept] = useState("");

  function filerDept(dept) {
    const department = dept.find((item) => item.id === params.departmentId);
    setDept(department);
  }
  useEffect(() => {
    filerDept(departmentData);
  }, []);

  pageTitle(dept.title);
  return (
    <>
      <BreadcrumbStyle2 />
      <Section
        topMd={135}
        topLg={100}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AboutSectionStyle2
          title={dept.title}
          subTitle={dept.subTitle}
          imgUrl={dept.deptImg}
        />
      </Section>

      {/* <Section topMd={170} topLg={145} topXl={90}>
        <FeaturesSectionStyle3
          sectionTitle="Treatments"
          sectionTitleUp="MORE TYPE OF"
          data={featureData}
        />
      </Section> */}
      {/* <Section topMd={200} topLg={150} topXl={100}>
        <TeamSectionStyle3 sectionTitle="Related Doctor" data={doctorData} />
      </Section> */}
      {dept.doctor && (
        <Section
          topMd={200}
          topLg={150}
          topXl={100}
          bottomMd={200}
          bottomLg={150}
          bottomXl={110}
        >
          <div className="col-lg-4 mx-auto ">
            <Team
              imgUrl={dept.doctor.imgUrl}
              name={dept.doctor.name}
              designation={dept.doctor.designation}
              description={dept.doctor.description}
            />
          </div>
        </Section>
      )}

      {/* Start Appointment Section */}
      {/* <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={190}
        bottomLg={145}
        bottomXl={110}
        id="appointment"
      >
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl="/images/home_1/appointment.jpeg"
        />
      </Section> */}
      {/* End Appointment Section */}
      {/* <Section className="cs_footer_margin_0">
        <BannerSectionStyle7
          imgUrl="/images/departments/banner_img_3.png"
          bgUrl="/images/departments/banner_bg_3.svg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
      </Section> */}
    </>
  );
}
