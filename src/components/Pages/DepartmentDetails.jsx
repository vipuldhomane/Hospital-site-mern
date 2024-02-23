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
    subTitle: "Sample text",
    deptImg: "",
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
    subTitle: "Sample text",
    deptImg: "",
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
    subTitle: "Sample text",
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
    subTitle: "Sample text",
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
    subTitle: "Sample text",
    deptImg: "",
  },

  {
    title: "Pediatrics",
    id: "pediatrics",
    iconUrl: "images/home_1/department_icon_2.svg",
    href: "/departments/pediatrics",
    subTitle: "Sample text",
    deptImg: "",
  },
  {
    title: "Obstetrics and Gynecology",
    id: "Gynecology",
    iconUrl: "images/home_1/department_icon_3.svg",
    href: "/departments/Gynecology",
    subTitle: "Sample text",
    deptImg: "",
  },
  {
    title: "Oral & Maxillofacial",
    id: "oral",
    iconUrl: "images/home_1/department_icon_3.svg",
    href: "/departments/oral",
    subTitle: "Sample text",
    deptImg: "",
  },
  {
    title: "Anaesthesia",
    id: "Anaesthesia",
    iconUrl: "images/home_1/department_icon_3.svg",
    href: "/departments/Anaesthesia",
    subTitle: "Sample text",
    deptImg: "",
  },
  {
    title: "Cardiology",
    id: "Cardiology",
    iconUrl: "images/home_1/department_icon_4.svg",
    href: "/departments/Cardiology",
    subTitle: "Sample text",
    deptImg: "",
  },
  {
    title: "Neurosurgery",
    id: "Neurosurgery",
    iconUrl: "images/home_1/department_icon_5.svg",
    href: "/departments/Neurosurgery",
    subTitle: "Sample text",
    deptImg: "",
  },

  {
    title: "Urology",
    id: "Urology",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/Urology",
    subTitle: "Sample text",
    deptImg: "",
  },
  {
    title: "Pathology",
    id: "Pathology",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/Pathology",
    subTitle: "Sample text",
    deptImg: "",
  },
  {
    title: "Plastic surgery",
    id: "Plasticsurgery",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/Plasticsurgery",
    subTitle: "Sample text",
    deptImg: "",
  },
  {
    title: "Gastroenterology",
    id: "Gastroenterology",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/Gastroenterology",
    subTitle: "Sample text",
    deptImg: "",
  },
];
const teamData = [
  {
    imgUrl: "images/mainUpload/docStock.jpg",
    name: "Dr. Anupama Zade",
    designation: "Consultant Intensivist, CriticalCare Physician",
    description:
      "Experienced Intensivist and Critical Care Physician adept at providing expert care for critically ill patients in intensive care settings",
  },
];
export default function DepartmentDetail() {
  const params = useParams();
  const [dept, setDept] = useState("");
  console.log(params);
  pageTitle("Department Details");
  function filerDept(dept) {
    const department = dept.find((item) => item.id === params.departmentId);
    setDept(department);
  }
  useEffect(() => {
    filerDept(departmentData);
  }, []);

  console.log(dept);
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
          imgUrl="/images/departments/department_img_1.png"
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
