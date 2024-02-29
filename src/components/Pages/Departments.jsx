import React from "react";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import Section from "../Section";
import DepartmentSectionStyle3 from "../Section/DepartmentSection/DepartmentSectionStyle3";
import BannerSectionStyle6 from "../Section/BannerSection/BannerSectionStyle6";
import { pageTitle } from "../../helpers/PageTitle";
import { departmentData } from "./departmentsData";

let deptData = departmentData;

export default function Departments() {
  pageTitle("Departments");
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/departments/banner_bg.svg"
        imgUrl="/images/mainUpload/taywadeBuild.png"
        title="Taywade MultiSpecialty Hospital <br/> Departments"
        subTitle="At Taywade MultiSpecialty Hospital, we offer a wide range of medical and healthcare services that are designed to meet your individual needs and help you achieve optimal health."
      />
      <Section
        topMd={200}
        topLg={160}
        topXl={140}
        bottomMd={140}
        bottomLg={100}
        bottomXl={60}
      >
        <DepartmentSectionStyle3 data={deptData} />
      </Section>
      {/* <Section className="cs_footer_margin_0">
        <BannerSectionStyle6
          imgUrl="/images/departments/banner_img_2.png"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our <br />experienced medical professionals today!"
        />
      </Section> */}
    </>
  );
}
