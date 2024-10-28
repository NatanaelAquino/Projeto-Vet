import React from "react";
import { FaCalendarAlt, FaHome, FaUser } from "react-icons/fa";
import "./BottomNavigation.css";

export const BottomNavigation = () => {
  return (
    <nav className="bottom-navigation">
      <div id="nav">
        <FaCalendarAlt style={{ color: "#800000", fontSize: "24px" }} />
        <FaHome style={{ color: "#800000", fontSize: "24px" }} />
        <FaUser style={{ color: "#800000", fontSize: "24px" }} />
      </div>
    </nav>
  );
};
