/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import ContactForm from "../ContactForm";
import Section from "../Section";
import ContactInfoSection from "../Section/ContactInfoSection";
import { pageTitle } from "../../helpers/PageTitle";

export default function Contact() {
  pageTitle("Contact");
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/contact/banner_bg.svg"
        imgUrl="/images/mainUpload/contact.jpg"
        title="Contact Us"
        subTitle="Kindly reach us to get the fastest response and treatment"
      />
      {/* <div className="container cs_mt_minus_110">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <ContactForm />
          </div>
        </div>
      </div> */}
      {/* <div className="container cs_mt_minus_110">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452.02710800674345!2d79.08795086416096!3d21.105385557899638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bfbddfe40439%3A0xcaf4e0dd1cb1386f!2sTaywade%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1708604933192!5m2!1sen!2sin"
              width="700"
              height="959"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div> */}

      <Section
        topMd={200}
        topLg={150}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <ContactInfoSection sectionTitle="Find Us Here" />
      </Section>
    </>
  );
}
