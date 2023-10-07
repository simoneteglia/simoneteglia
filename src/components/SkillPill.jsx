import React, { useState } from "react";

const SkillPill = ({ skill, bgColor, icon, color = "#000" }) => {
  const styles = {
    container: {
      padding: "5px 10px",
      borderRadius: "100px",
      backgroundColor: bgColor,
      fontSize: "20px",
      width: "fit-content",
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: color,
    },
  };
  return (
    <div style={styles.container}>
      {icon}
      <div>{skill}</div>
    </div>
  );
};

export default SkillPill;
