import React, { useState } from 'react';
import Rating from '../Rating';

export default function Testimonial() {
  const [activeTab, setActiveTab] = useState(2);
  const handleTabClick = tabNumber => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="cs_tabs cs_style1">
      <ul className="cs_tab_links">
        <li className={activeTab === 1 ? 'active' : ''}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(1)}>
            <div className="cs_testimonial_1_avatar">
              {/* <img src="/images/home_1/avatar_1.png" alt="Avatar" /> */}
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">Himanshu Sharma</h3>
                <p className="cs_heading_color mb-0">Nagpur, Maharashtra</p>
              </div>
            </div>
          </div>
        </li>
        <li className={activeTab === 2 ? 'active' : ''}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(2)}>
            <div className="cs_testimonial_1_avatar">
              {/* <img src="/images/home_1/avatar_2.png" alt="Avatar" /> */}
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">Rohit Jain</h3>
                <p className="cs_heading_color mb-0">Nagpur, Maharashtra</p>
              </div>
            </div>
          </div>
        </li>
        <li className={activeTab === 3 ? 'active' : ''}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(3)}>
            <div className="cs_testimonial_1_avatar">
              {/* <img src="/images/home_1/avatar_3.png" alt="Avatar" /> */}
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">Aniket Deshmukh</h3>
                <p className="cs_heading_color mb-0">Nagpur, Maharashtra</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="cs_tab_body">
        {activeTab === 1 && (
          <div className="cs_testimonial cs_style_1">
            <img src="/images/icons/quote.svg" alt="Icon" />
            <p>
            The staff were incredibly kind, knowledgeable, and attentive to my needs. The facility itself is modern, clean, and well-equipped, I would highly recommend it to anyone in need of medical care.
            </p>
            <Rating ratingNumber={5} />
          </div>
        )}
        {activeTab === 2 && (
          <div className="cs_testimonial cs_style_1">
            <img src="/images/icons/quote.svg" alt="Icon" />
            <p>
            As a patient at Taywade Multispecialist Hospital, I was truly impressed by the exceptional level of care and compassion provided by the entire medical team. I am grateful for the personalized attention and outstanding medical care I received.

            </p>
            <Rating ratingNumber={4.5} />
          </div>
        )}
        {activeTab === 3 && (
          <div className="cs_testimonial cs_style_1">
            <img src="/images/icons/quote.svg" alt="Icon" />
            <p>
            From the moment I stepped into Taywade Multispecialist Hospital, I felt like more than just a patient—I felt like a valued individual. I received top-notch medical care with a human touch. I would highly recommend this hospital to anyone seeking compassionate, expert healthcare.
            </p>
            <Rating ratingNumber={4.5} />
          </div>
        )}
      </div>
    </div>
  );
}
