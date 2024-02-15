import React from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import ContactForm from '../ContactForm';
import Section from '../Section';
import ContactInfoSection from '../Section/ContactInfoSection';
import { pageTitle } from '../../helpers/PageTitle';

export default function Contact() {
  pageTitle('Contact');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/contact/banner_bg.svg"
        imgUrl="/images/contact/banner_img.png"
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
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScAv1KT1rdulSIcDH5ckTwPxup2RnQ3VFs6q_sajZ_K2I3uDA/viewform?embedded=true" width="700" height="959" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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
