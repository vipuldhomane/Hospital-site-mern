import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Team({
  imgUrl,
  name,
  designation,
  description,
  social,
  degree,
}) {
  return (
    <div className="cs_team cs_style_1 text-center cs_radius_20 cs_type_1">
      <div className="cs_member_img">
        <img src={imgUrl} alt={name} />
      </div>
      <div className="cs_team_meta">
        <div>
          <h3 className="cs_member_name cs_semibold cs_fs_40">{name}</h3>
          <p className="cs_member_designation cs_fs_20 cs_heading_color">
            {designation}
          </p>
          <p className="cs_member_designation cs_fs_20 cs_heading_color">
            {degree}
          </p>
          <p className="cs_member_description">{description}</p>
        </div>
        <div>
          <div className="cs_social_links">
            {social?.map((item, index) => (
              <Link to={item.href} key={index}>
                <Icon icon={item.icon} />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="cs_btn cs_style_1 m-3 cs_stickybutton">
            <span>
              <a
                href="https://wa.me/919422334702"
                aria-label="Chat on WhatsApp"
                target="_blank"
                rel="noreferrer"
              >
                Book Appointment
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
