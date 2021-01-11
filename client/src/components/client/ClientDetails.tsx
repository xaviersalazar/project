import React from "react";
import "./ClientDetails.css";

type Props = {
  label: string;
  info: any;
};

export const ClientDetails: React.FC<Props> = ({ label, info }) => (
  <div className="client-details">
    <p className="client-info-label">{label}</p>
    <h3 className="client-info">{info}</h3>
  </div>
);
