import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

export default function SocialWidget() {
  return (
    <div className="cs_social_links_wrap">
      <h2>Follow Us</h2>
      <div className="cs_social_links">
        {/* <Link to="/">
          <Icon icon="fa-brands:facebook-f" />
        </Link> */}
        <Link to="https://www.youtube.com/channel/UCYbKx2CbGOth1eJnE9eZVkA">
          <Icon icon="fa-brands:youtube" />
        </Link>
        {/* <Link to="/">
          <Icon icon="fa-brands:linkedin-in" />
        </Link>
        <Link to="/">
          <Icon icon="fa-brands:twitter" />
        </Link> */}
        <Link to="https://www.instagram.com/taywadehospitalnagpur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          <Icon icon="fa-brands:instagram" />
        </Link>
      </div>
    </div>
  );
}
