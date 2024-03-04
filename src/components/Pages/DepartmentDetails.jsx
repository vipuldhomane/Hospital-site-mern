import React, { useEffect, useState } from "react";

import Section from "../Section";

import BreadcrumbStyle2 from "../Breadcrumb/BreadcrumbStyle2";
import AboutSectionStyle2 from "../Section/AboutSection/AboutSectionStyle2";

import { pageTitle } from "../../helpers/PageTitle";
import { useParams } from "react-router-dom";
import Team from "../Team";
import SectionHeading from "../SectionHeading";
import AwardSectionStyle2 from "../Section/AwardSection/AwardSectionStyle2";

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
        "Head of Orthopaedics and Joint Replacement with extensive experience in leading orthopaedic teams and spearheading innovative approaches to joint replacement specialities",
    },
    specialities: [
      // Joint Replacement Surgery
      {
        title: "Total Knee Replacement",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Total Hip Replacement",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Total Shoulder Replacement",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },

      // Arthroscopic Knee & Shoulder Surgery
      {
        title: "ACL/PCL Reconstruction Surgery",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Meniscus Repair Surgery",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "MCL/LCL Surgery",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Multi-ligament Surgery",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Rotator Cuff Repair",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Bankart Repair",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Frozen Shoulder",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },

      // Spine Surgery
      {
        title: "Prolapsed Intervertebral disc",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Lumbar Canal Stenosis",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Spine Fixation Surgery",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },

      // Complex Fracture Fixation Surgeries
      {
        title: "Complex Fracture Fixation Surgery",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Frozen Shoulder",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Knee Replacement",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Hip Replacement",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Tennis Elbow",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Plantar Fasciitis",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Lumbar and Cervical Spondylosis",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Hip Pain, Knee pain",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Sports Injury",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      { title: "Sprain", iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png" },
      { title: "Strain", iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png" },
      {
        title: "Ligament Injury",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Twisting Injury",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Joint Preservation Surgery",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "HTO (High Tibial Osteotomy)",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Femoral Osteotomy",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "ACL with internal Bracing",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Arthroscopy",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "USG Guided Joint Injections",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Knee pain",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Shoulder Pain",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Digital X-ray Facilities",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Tennis Elbow",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Plantar Fasciitis / Heel Pain",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
    ],
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
    deptImg: "/images/mainUpload/DeptPhotos/radioDept.jpg",
    doctor: {
      imgUrl: "/images/mainUpload/docStock.jpg",
      name: "Dr. Ankita Taywade",
      designation: "Consultant Radiologist",
      description:
        "Esteemed Head of the Radiology Department, expertly orchestrating advanced imaging services and fostering excellence in diagnostics",
    },
    specialities: [
      {
        title: "32 SLICE GE REVOLUTION CT SCAN",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Head to Toe Spiral CT Scan on Advanced Machine",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title:
          "CT Angiography and Perfusion Studies of Head / Neck / Body / Extremities",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Virtual Bronchoscopy & Colonoscopy",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "CT Urography/Dual/Triple Phase Organ Imaging",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Oncology and Cancer Imaging",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "HRCT Chest/Temporal Bone (Cochlear Imaging)/PNS",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Skeletal and Spine Scanning with Advanced 3D Reconstruction",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Pediatric Low Dose Radiation Scan",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "3D/4D/5D SONOGRAPHY",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Panoramic Organ Imaging",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Targeted Obstetric Imaging",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "High Resolution Abdominal USG",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Small Parts / Transvaginal / Transrectal USG",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Musculoskeletal & Neurosonography",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Sonomammography",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Shear wave/strain Elastography for Liver. Breast, Thyroid etc.",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "COLOUR DOPPLER Peripheral Arterial & Venous",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Carotid/Renal / Abdominal Obstetric & Gynaec",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "2D ECHO Cardiography",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "DIGITAL X-RAY Conventional Radiography",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Radiological Procedures (Barium Studies, IVU/MCU/RGU/HSG)",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
    ],
  },

  {
    title: "Critical care medicine/ICU",
    id: "criticalcare",
    iconUrl: "images/home_1/department_icon_1.svg",
    href: "/departments/criticalcare",
    subTitle:
      "In our advanced ICU facility, Taywade Hospital delivers exceptional critical care medicine, catering to patients with life-threatening conditions. Our multidisciplinary team of intensivists, nurses, and support staff is dedicated to providing round-the-clock monitoring, advanced interventions, and compassionate support to ensure the best possible outcomes for every patient.",
    deptImg: "/images/mainUpload/DeptPhotos/icuDept.jpg",
    doctor: {
      imgUrl: "/images/mainUpload/docStock.jpg",
      name: "Dr. Anupama Zade",
      designation: "Consultant Intensivist, CriticalCare Physician",
      description:
        "Experienced Intensivist and Critical Care Physician adept at providing expert care for critically ill patients in intensive care settings",
    },
    specialties: [
      {
        title:
          "Critical Care/Intensive Care (Septic shock, Cardiogenic shock, Multiorgan Failure, Respiratory Failure/ARDS, etc)",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },

      {
        title:
          "Management of Onco-emergencies / Post Solid Organ Transplant / Post Bone Marrow Transplant patients",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title:
          "Artificial lung and heart support (Extracorporeal membrane Oxygenation) ECMO provider",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title:
          "Management of acute and chronic complications in Diabetes mellitus",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Management of various infections",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Drug overdose and poisoning",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
      {
        title: "Post ICU/Hospital discharge rehabilitation",
        iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
      },
    ],
  },
  {
    title: "General Surgery",
    id: "GeneralSurgery",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/GeneralSurgery",
    subTitle:
      "Experience superior surgical care at Taywade Hospital's general surgery department. Our skilled surgeons perform a variety of procedures with precision and compassion, ranging from routine specialities to complex interventions. With state-of-the-art facilities and a patient-centered approach, we ensure excellent outcomes and utmost comfort throughout your surgical journey.",
    deptImg: "/images/mainUpload/DeptPhotos/genserDept.jpg",
  },

  {
    title: "Pediatrics",
    id: "pediatrics",
    iconUrl: "images/home_1/department_icon_2.svg",
    href: "/departments/pediatrics",
    subTitle:
      "At Taywade Hospital, our pediatric department specializes in providing holistic care for infants, children, and adolescents. With a child-friendly environment and experienced pediatricians, we offer preventive care, vaccinations, developmental screenings, and treatment for a wide range of pediatric conditions, ensuring the health and happiness of your little ones.",
    deptImg: "/images/mainUpload/DeptPhotos/pediDept.jpg",
  },
  {
    title: "Obstetrics and Gynecology",
    id: "Gynecology",
    iconUrl: "images/home_1/department_icon_3.svg",
    href: "/departments/Gynecology",
    subTitle:
      "Experience exceptional care for women's health at Taywade Hospital's obstetrics and gynecology department. From prenatal care to childbirth, gynecological screenings, and reproductive health services, our compassionate team provides comprehensive support at every stage of life, ensuring the well-being of both mother and baby.",
    deptImg: "/images/mainUpload/DeptPhotos/gynoDept.jpg",
  },
  {
    title: "Oral & Maxillofacial",
    id: "oral",
    iconUrl: "images/home_1/department_icon_3.svg",
    href: "/departments/oral",
    subTitle:
      "Trust Taywade Hospital's oral and maxillofacial department for expert care in treating conditions affecting the mouth, jaw, and facial regions. From dental implants and corrective jaw surgery to facial trauma care and oral pathology management, our skilled specialists deliver personalized treatment plans to restore function and aesthetics with precision and compassion.",
    deptImg: "/images/mainUpload/DeptPhotos/dentalDept.jpg",
  },
  {
    title: "Anaesthesia",
    id: "Anaesthesia",
    iconUrl: "images/home_1/department_icon_3.svg",
    href: "/departments/Anaesthesia",
    subTitle:
      "Experience safe and effective anesthesia care at Taywade Hospital. Our skilled anesthesiologists provide comprehensive preoperative evaluation, intraoperative management, and postoperative pain relief, ensuring comfort and safety throughout your surgical experience.",
    deptImg: "/images/mainUpload/DeptPhotos/anestesiaDept.jpg",
  },
  {
    title: "Cardiology",
    id: "Cardiology",
    iconUrl: "images/home_1/department_icon_4.svg",
    href: "/departments/Cardiology",
    subTitle:
      "Experience top-notch cardiac care at Taywade Hospital's cardiology department. Our renowned cardiologists specialize in the diagnosis, treatment, and management of heart conditions, offering a full spectrum of services, including cardiac screenings, interventional procedures, and cardiac rehabilitation, to ensure optimal heart health for every patient.",
    deptImg: "/images/mainUpload/DeptPhotos/cardioDept.jpg",
  },
  {
    title: "Neurosurgery",
    id: "Neurosurgery",
    iconUrl: "images/home_1/department_icon_5.svg",
    href: "/departments/Neurosurgery",
    subTitle:
      "In Taywade Hospital's neurosurgery department, our expert neurosurgeons specialize in treating disorders of the brain, spine, and nervous system. From complex brain specialities to minimally invasive spinal procedures, we employ advanced techniques and technology to deliver exceptional care and improve patient outcomes.",
    deptImg: "/images/mainUpload/DeptPhotos/nuroDept.jpg",
  },

  {
    title: "Urology",
    id: "Urology",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/Urology",
    subTitle:
      "Trust Taywade Hospital's urology department for comprehensive care of urological conditions affecting both men and women. From kidney stones and urinary tract infections to prostate disorders and urologic cancers, our skilled urologists offer personalized treatment plans utilizing the latest advancements in medical and surgical therapies.",
    deptImg: "/images/mainUpload/DeptPhotos/uroDept.jpg",
  },
  {
    title: "Pathology",
    id: "Pathology",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/Pathology",
    subTitle:
      "Experience precise diagnostic services at Taywade Hospital's pathology department. Our skilled pathologists utilize cutting-edge techniques to analyze tissue samples, blood tests, and other specimens with accuracy and efficiency. From cancer screenings to infectious disease detection, we provide vital information to guide treatment decisions and promote better patient outcomes. With a commitment to excellence and attention to detail, trust our pathology team to deliver timely and reliable results, supporting the overall health and well-being of our patients",
    deptImg: "/images/mainUpload/DeptPhotos/pathoDept.jpg",
  },
  {
    title: "Plastic surgery",
    id: "Plasticsurgery",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/Plasticsurgery",
    subTitle:
      "Discover personalized aesthetic and reconstructive solutions at Taywade Hospital's plastic surgery department. Our board-certified plastic surgeons specialize in a wide range of procedures, from cosmetic enhancements to complex reconstructive specialities, utilizing advanced techniques and innovative approaches to help you achieve your desired look and improve your quality of life.",
    deptImg: "/images/mainUpload/DeptPhotos/plasticDept.jpg",
  },
  {
    title: "Gastroenterology",
    id: "Gastroenterology",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/Gastroenterology",
    subTitle:
      "Trust Taywade Hospital's gastroenterology department for expert diagnosis and treatment of digestive disorders. Our experienced gastroenterologists offer comprehensive care for conditions such as acid reflux, inflammatory bowel disease, liver diseases, and gastrointestinal cancers, using state-of-the-art technology and evidence-based therapies to optimize patient outcomes and quality of life.",
    deptImg: "/images/mainUpload/DeptPhotos/gastroDept.jpg",
  },
];
const pricingData = [
  {
    title: "Diagnostic Testing",
    btnText: "Get Details on WhatsApp",
    btnUrl: "https://wa.me/919422334702",
    iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",

    subTitle:
      "Specialized care for seniors. Benefit from tailored assessments, fall prevention, and support for your golden years.",
  },

  {
    title: "Preventive Check-up",
    btnText: "Get Details on WhatsApp",
    btnUrl: "https://wa.me/919422334702",
    iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
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
    iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
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
    title: "Expert Consultation",
    btnText: "Get Details on WhatsApp",
    btnUrl: "https://wa.me/919422334702",
    iconUrl: "/images/mainUpload/DeptLogo/mediLogo.png",
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
      {/* <BreadcrumbStyle2 /> */}
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
      {dept.specialities && (
        <Section
          topMd={185}
          topLg={140}
          topXl={100}
          bottomMd={200}
          bottomLg={150}
          bottomXl={110}
        >
          <AwardSectionStyle2
            sectionTitle=""
            sectionTitleUp="Services & Specialties"
            sectionSubTitle=""
            data={dept.specialities}
          />
        </Section>
      )}
      {dept.doctor && (
        <>
          <SectionHeading
            title="Consultant Doctor"
            titleUp=""
            subTitle=""
            center
          />
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
        </>
      )}
    </>
  );
}
