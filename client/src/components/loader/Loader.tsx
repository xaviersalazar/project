import React from "react";
import "./Loader.css";

export const Loader: React.FC = () => (
  <React.Fragment>
    <div className="sk-folding-cube">
      <div className="sk-cube1 sk-cube"></div>
      <div className="sk-cube2 sk-cube"></div>
      <div className="sk-cube4 sk-cube"></div>
      <div className="sk-cube3 sk-cube"></div>
    </div>
  </React.Fragment>
);
