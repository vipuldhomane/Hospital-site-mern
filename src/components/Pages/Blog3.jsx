import React from "react";

import Section from "../Section";
import Breadcrumb from "../Breadcrumb";

import Spacing from "../Spacing";
import Post from "../Post";
import Sidebar from "../Sidebar";

import { pageTitle } from "../../helpers/PageTitle";
import { relatedBlogData } from "./relatedBlogData";
const tags = [
  { tag: "Emergency", href: "/blog/blog-details" },
  { tag: "Pediatric", href: "/blog/blog-details" },
  { tag: "Cardiology", href: "/blog/blog-details" },
  { tag: "Psychiatry", href: "/blog/blog-details" },
  { tag: "Others", href: "/blog/blog-details" },
];
// const relatedBlog = [
//   {
//     title:
//       "The Importance of Mental Health: Understanding and Managing Anxiety Disorders",
//     thumbUrl: "/images/blog/post_1.jpeg",
//     date: "March 12",
//     btnText: "Learn More",
//     href: "/blog/blog-details",
//   },
//   {
//     title: `A Parent's Guide to Childhood Vaccinations: What You Need to Know`,
//     thumbUrl: "/images/blog/post_2.jpeg",
//     date: "March 11",
//     btnText: "Learn More",
//     href: "/blog/blog-details",
//   },
//   {
//     title: "Preventing Heart Disease: Tips for a Heart-Healthy Lifestyle",
//     thumbUrl: "/images/blog/post_3.jpeg",
//     date: "March 9",
//     btnText: "Learn More",
//     href: "/blog/blog-details",
//   },
// ];
const relatedBlog = relatedBlogData

export default function Blog3() {
  pageTitle("Blog Details");
  return (
    <>
      <Section topMd={170} bottomMd={54} bottomLg={54}>
        <Breadcrumb title="Nurturing Health from the Start: Understanding Pediatric Care" />
      </Section>
      <div className="container">
        <div className="cs_blog_details_info">
          <div className="cs_blog_details_info_left">
            <div className="cs_blog_details_tags">
              {/* {tags.map((item, index) => (
                <Link key={index} to={item.href}>
                  {item.tag}
                </Link>
              ))} */}
            </div>
            <div className="cs_blog_details_date">
              Taiwade Multispecialty Hospitals
            </div>
          </div>
          {/* <div className="cs_social_links_wrap">
            <h2>Share:</h2>
            <div className="cs_social_links">
              <Link to="/">
                <Icon icon="fa-brands:facebook-f" />
              </Link>
              <Link to="/">
                <Icon icon="fa-brands:linkedin-in" />
              </Link>
              <Link to="/">
                <Icon icon="fa-brands:twitter" />
              </Link>
            </div>
          </div> */}
        </div>
        <Spacing md="55" />
        <img
          src="/images/blog/blog_details_1.jpeg"
          alt="Blog Details"
          className="w-100 cs_radius_20"
        />
        <Spacing md="90" lg="50" />
        <div className="row">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h2>
                Nurturing Health from the Start: Understanding Pediatric Care
              </h2>
              <p>
                As parents and caregivers, we prioritize our children's health
                and well-being. Pediatric care is critical to our children's
                growth, development, and general well-being from infancy to
                adolescence. This blog will look at common pediatric symptoms,
                their underlying causes, and the significance of early detection
                and treatment.
              </p>

              <ol>
                <li>
                  <b>Fever:</b> <br />
                  is a frequent symptom in children and generally indicates that
                  the body is fighting an infection. Other symptoms may include
                  coughing, runny nose, sore throat, and exhaustion. While most
                  fevers subside with rest and drinks, persistent or severe
                  fevers may require medical intervention.
                </li>
                <li>
                  <b>Cough and Cold:</b> <br />
                  Cough and Cold: Respiratory illnesses, such as the common cold
                  or flu, are common among youngsters, especially during the
                  winter months. Cough, congestion, runny nose, sneezing, and a
                  sore throat are all possible symptoms. Treatment often
                  comprises supportive care, such as rest, fluids, and
                  over-the-counter drugs to ease symptoms.
                </li>
                <li>
                  <b>Gastrointestinal symptoms:</b> <br />
                  Diarrhea, vomiting, and abdominal discomfort are common
                  gastrointestinal problems in children. Food allergies, lactose
                  intolerance, bacterial or viral infections, and underlying
                  medical disorders can all contribute to these symptoms.
                  Rehydration, dietary changes, and, in certain situations,
                  medication are the mainstays of treatment to minimize symptoms
                  and avoid consequences.
                </li>
                <li>
                  <b>Skin Rashes and Irritations:</b> <br />
                  These conditions are common in youngsters and can be brought
                  on by several factors, such as insect bites, fungus
                  infections, eczema, and allergic reactions. The course of
                  treatment may include topical creams or ointments, depending
                  on the underlying cause.
                </li>
                <li>
                  <b>Behavioural and Developmental Concerns:</b> <br />
                  Learning difficulties, attention-deficit/hyperactivity
                  disorder (ADHD), and autism spectrum disorder (ASD) are
                  examples of behavioural and developmental problems that can
                  appear in childhood. Promoting healthy growth and treating
                  these issues require early detection and intervention.
                  Depending on the kid's individual needs, treatment may include
                  medication, behavioural therapy, and educational support.
                </li>
              </ol>

              <h2>The Value of Early Intervention in Pediatric Care</h2>
              <p>
                Monitoring children's growth and development, spotting possible
                health issues, and offering prompt interventions to support the
                best possible health outcomes are all made possible by pediatric
                care. Pediatricians can evaluate a child's physical, cognitive,
                and emotional development during routine well-child visits. They
                can also give immunizations and preventive treatment and handle
                any new problems. Early intervention is essential to treat
                pediatric symptoms and avoid complications. When symptoms
                appear, parents can ensure their kids get the right diagnosis
                and care by getting medical help as soon as possible.
                Paediatricians are educated to spot symptoms of underlying
                medical issues, consult with experts when necessary, and support
                and counsel families during therapy.
              </p>
              
              <h2>In summary</h2>
              <p>
                It is crucial for us as parents and other caregivers to
                prioritise pediatric care and watch out for any symptoms of
                illness or developmental issues in our kids. We can give our
                kids the best start by being aware of typical pediatric
                symptoms, getting immediate help, and working with
                paediatricians to promote health and well-being. Recall that
                promoting health from an early age lays the groundwork for
                success and well-being throughout one's lifetime.
              </p>
            </div>
            <Spacing md="85" />
            {/* <AuthorWidget
              imgUrl="/images/blog/author.png"
              name="Author Bio"
              description="John Smith is a freelance writer and content strategist with a passion for helping businesses tell their stories. With over 10 years of experience in the industry, John has worked with a wide range of clients, from startups to Fortune 500 companies. He holds a Bachelor's degree in English from the University of California, Los Angeles (UCLA), and is an avid reader and traveler in his free time. Follow him on Twitter @johnsmithwriter for the latest updates on his work."
            /> */}
            {/* <Spacing md="110" />
            <CommentsWidget title="Comments" />
            <Spacing md="92" />
            <ReplyWidget title="Leave a Reply" /> */}
          </div>
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>
        <Spacing md="135" lg="100" />
        <h2 className="mb-0 cs_fs_40 cs_medium">Related Articles</h2>
        <Spacing md="57" />
        <div className="row cs_gap_y_40">
          {relatedBlog?.map((item, index) => (
            <div className="col-xl-4 col-md-6" key={index}>
              <Post {...item} />
            </div>
          ))}
        </div>
      </div>
      {/* <Spacing md="200" xl="150" lg="110" /> */}
      {/* <Section className="cs_footer_margin_0">
        <BannerSectionStyle9
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          imgUrl="/images/doctors/banner_img_3.png"
        />
      </Section> */}
    </>
  );
}
