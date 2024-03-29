import React from "react";
import parse from "html-react-parser";
import VideoModal from "../VideoModal";
import { Link } from "react-router-dom";

export default function Hero({
  title,
  subTitle,
  bgUrl,
  imgUrl,
  videoBtnText,
  videoUrl,
  infoList,
  btnText,
  btnUrl,
}) {
  return (
    <section className="cs_hero cs_style_1">
      <div className="">
        <video
          src="\images\mainUpload\taywadeWebHeaderVideo.mp4"
          preload="metadata"
          loop
          autoPlay
          muted
          className="cs_headerVideo"
        ></video>
        <div className="container">
          {/* <div className="cs_hero_text">
            <h1 className="cs_hero_title cs_fs_94">{parse(title)}</h1>
            <p className="cs_hero_subtitle cs_fs_20 cs_heading_color">
              {parse(subTitle)}
            </p>
          </div> */}

          <div className="cs_hero_info_wrap cs_shadow_1 cs_white_bg cs_radius_15 ">
            {infoList.map((item, index) => (
              <div className="cs_hero_info_col" key={index}>
                <div className="cs_hero_info d-flex align-items-center">
                  <div className="cs_hero_info_icon cs_center rounded-circle cs_accent_bg">
                    <img src={item.iconUrl} alt="Icon" />
                  </div>
                  <div className="cs_hero_info_right">
                    <h3 className="cs_hero_info_title cs_semibold">
                      {item.title}
                    </h3>
                    <p className="cs_hero_info_subtitle cs_fs_20">
                      {item.subTitle}
                    </p>
                    <p className="cs_hero_info_subtitle cs_fs_20">
                      {item.sub_subTitle}
                    </p>
                    <p className="cs_hero_info_subtitle cs_fs_20">{item.ph1}</p>
                    <p className="cs_hero_info_subtitle cs_fs_20">{item.ph2}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="cs_hero_info_col">
              <div className="cs_btn cs_style_1">
                <span>
                  {/* <img
                    src="/images/contact/icon_1.svg"
                    alt="Icon"
                    style={{ height: "25px", margin: "auto" }}
                  /> */}

                  <a href="tel:919422334702">Click & Book Appointment </a>
                </span>
              </div>
              <div className="cs_btn cs_style_1 m-3 cs_stickybutton">
                <span>
                  <a
                    href="https://wa.me/919422334702"
                    aria-label="Chat on WhatsApp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book on WhatsApp
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="cs_hero cs_style_1">
    //   <div
    //     className="cs_hero_wrap cs_bg_filed"
    //     style={{ backgroundImage: `url(${bgUrl})` }}
    //   >
    //     <div className="container">
    //       <div className="cs_hero_text">
    //         <h1 className="cs_hero_title cs_fs_94">{parse(title)}</h1>
    //         <p className="cs_hero_subtitle cs_fs_20 cs_heading_color">
    //           {parse(subTitle)}
    //         </p>
    //       </div>

    //       <img src={imgUrl} alt="Hero" className="cs_hero_img" />
    //       <div className="cs_hero_info_wrap cs_shadow_1 cs_white_bg cs_radius_15">
    //         {infoList.map((item, index) => (
    //           <div className="cs_hero_info_col" key={index}>
    //             <div className="cs_hero_info d-flex align-items-center">
    //               <div className="cs_hero_info_icon cs_center rounded-circle cs_accent_bg">
    //                 <img src={item.iconUrl} alt="Icon" />
    //               </div>
    //               <div className="cs_hero_info_right">
    //                 <h3 className="cs_hero_info_title cs_semibold">
    //                   {item.title}
    //                 </h3>
    //                 <p className="cs_hero_info_subtitle cs_fs_20">
    //                   {item.subTitle}
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //         <div className="cs_hero_info_col">
    //           <Link to={btnUrl} className="cs_btn cs_style_1">
    //             <span>Visit Now</span>
    //             <i>
    //               <img src="/images/icons/arrow_white.svg" alt="Icon" />
    //               <img src="/images/icons/arrow_white.svg" alt="Icon" />
    //             </i>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
