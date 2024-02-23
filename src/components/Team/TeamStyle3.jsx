import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

export default function TeamStyle3({
  imgUrl,
  name,
  designation,
  description,
  social,
  availableUrl,
  callUrl,
  chatUrl,
  btnText,
  btnUrl,
}) {
  return (
    <div className="cs_doctor_profile cs_style_1">
      <div className="cs_doctor_img">
        <img src={imgUrl} alt={name} className="cs_radius_25" />
      </div>
      <div className="cs_doctor_profile_right">
        <div className="cs_doctor_info cs_radius_25 cs_white_bg overflow-hidden">
          <div className="cs_doctor_info_in">
            <h3 className="cs_fs_40 cs_semibold">{name}</h3>
            <p className="cs_fs_20 cs_heading_color mb-0">{designation}</p>
            {/* <div className="cs_height_9" />
            <p className="mb-0">{parse(description)}</p>
            <div className="cs_height_28" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
