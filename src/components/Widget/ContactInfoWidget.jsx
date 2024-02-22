import { Icon } from "@iconify/react";
import React from "react";

export default function ContactInfoWidget() {
  return (
    <ul className="cs_contact_widget">
      <li>
        <i className="cs_accent_bg">
          <Icon icon="ep:location" />
        </i>
        Shatabdi Chowk, Manewada Ring Road to Beltarodi Road Chowk, Babulkheda,
        Nagpur-440027.
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="fluent:call-24-regular" />
        </i>
        +91 9422334702, 0712-2992211, 2992210
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="bi:envelope" />
        </i>
        <a href="mailto:timsnagpur@gmail.com">timsnagpur@gmail.com</a>
      </li>
    </ul>
  );
}
