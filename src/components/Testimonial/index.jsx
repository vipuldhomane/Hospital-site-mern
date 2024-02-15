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
            Choosing Taywade Multispeciality Hospital for my healthcare needs was the best decision I've made. From the moment I walked in, I felt welcomed and cared for. The staff were incredibly kind, knowledgeable, and attentive to my needs. The doctors took the time to listen to my concerns and provided me with thorough explanations and treatment options. The facility itself is modern, clean, and well-equipped, which gave me confidence in the quality of care I was receiving. Overall, my experience at Taywade Multispeciality Hospital was exceptional, and I would highly recommend it to anyone in need of medical care.
            </p>
            <Rating ratingNumber={5} />
          </div>
        )}
        {activeTab === 2 && (
          <div className="cs_testimonial cs_style_1">
            <img src="/images/icons/quote.svg" alt="Icon" />
            <p>
            As a patient at Taywade Multispecialist Hospital, I was truly impressed by the exceptional level of care and compassion provided by the entire medical team. From the moment I walked through the doors, I was greeted with warmth and kindness, instantly putting me at comfort during a stressful time. The doctors, nurses, and support staff went above and beyond to ensure that my needs were met, taking the time to listen to my concerns and explain every aspect of my treatment plan in a way that I could understand. Their expertise and dedication were evident at every step of my journey, instilling confidence in the care I received. I am immensely grateful for the personalized attention and outstanding medical care I received at Taywade Multispecialist Hospital, and I wouldn't hesitate to recommend this hospital to anyone in need of exceptional healthcare.
            </p>
            <Rating ratingNumber={4.5} />
          </div>
        )}
        {activeTab === 3 && (
          <div className="cs_testimonial cs_style_1">
            <img src="/images/icons/quote.svg" alt="Icon" />
            <p>
            From the moment I stepped into Taywade Multispecialist Hospital, I felt like more than just a patient—I felt like a valued individual. The entire staff, from the receptionists to the doctors, treated me with genuine care and empathy throughout my stay. Dr. Patel, in particular, took the time to listen to my concerns, explain my treatment options, and reassure me every step of the way. The nursing staff, including Nurse Sarah and Nurse Raj, provided exceptional care with kindness and professionalism. The hospital's facilities were modern, clean, and comfortable, creating a reassuring environment during my recovery. Thanks to the dedicated team at Taywade Multispecialist Hospital, I received top-notch medical care with a human touch. I'm truly grateful for their support and would highly recommend this hospital to anyone seeking compassionate, expert healthcare.
            </p>
            <Rating ratingNumber={4.5} />
          </div>
        )}
      </div>
    </div>
  );
}
