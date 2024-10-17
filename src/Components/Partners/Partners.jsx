import React from "react";
import "./Partners.css";
import partner_1 from "../../assets/partner-1.png";
import partner_2 from "../../assets/partner-2.png";
import partner_3 from "../../assets/partner-3.png";
import partner_4 from "../../assets/partner-4.png";
import partner_5 from "../../assets/partner-5.png";

const Partners = () => {
  return (
    <div className="partners">
      <img src={partner_1} alt="" />
      <img src={partner_2} alt="" />
      <img src={partner_3} alt="" />
      <img src={partner_4} alt="" />
      <img src={partner_5} alt="" />
    </div>
  );
};

export default Partners;
