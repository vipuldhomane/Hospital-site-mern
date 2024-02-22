import React from "react";
import BannerSectionStyle9 from "../Section/BannerSection/BannerSectionStyle9";
import Section from "../Section";
import BlogSectionStyle2 from "../Section/BlogSection/BlogSectionStyle2";
import Breadcrumb from "../Breadcrumb";
import { pageTitle } from "../../helpers/PageTitle";
const blogData = [
  {
    title:
      "Managing Your Medical Travels: An Overview of Multispecialty Hospitals",
    thumbUrl: "images/mainUpload/BlogHomeImg/multimini.jpg",
    date: "March 12",
    btnText: "Learn More",
    href: "/blog/blog1",
    socialShare: true,
  },
  {
    title: `Understand Orthopedic Care: Symptoms and Treatment`,
    thumbUrl: "images/mainUpload/BlogHomeImg/orthomini.jpg",
    date: "March 11",
    btnText: "Learn More",
    href: "/blog/blog2",
    socialShare: true,
  },
  {
    title: "Nurturing Health from the Start: Understanding Pediatric Care",
    thumbUrl: "images/mainUpload/BlogHomeImg/pediatricmini.jpg",
    date: "March 9",
    btnText: "Learn More",
    href: "/blog/blog3",
    socialShare: true,
  },
  {
    title: "Understanding Cardiology Care",
    thumbUrl: "images/mainUpload/BlogHomeImg/cardiomini.jpg",
    date: "March 8",
    btnText: "Learn More",
    href: "/blog/blog4",
    socialShare: true,
  },
  {
    title: `Empowering Women's Health: Navigating Gynecology Care`,
    thumbUrl: "/images/mainUpload/BlogHomeImg/gynomini.jpg",
    date: "March 5",
    btnText: "Learn More",
    href: "/blog/blog5",
    socialShare: true,
  },
  {
    title: "Neurology Care: Understanding Symptoms and Treatment",
    thumbUrl: "/images/mainUpload/BlogHomeImg/nueromini.jpg",
    date: "March 2",
    btnText: "Learn More",
    href: "/blog/blog6",
    socialShare: true,
  },
];

export default function Blog() {
  pageTitle("Blog");
  return (
    <>
      <Section topMd={170} bottomMd={96} bottomLg={70}>
        <Breadcrumb title="Psychology and Life Style" />
      </Section>
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <BlogSectionStyle2 data={blogData} />
      </Section>
    </>
  );
}
