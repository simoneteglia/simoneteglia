import React, { useState } from "react";

const SkillPill = ({ skill, bgColor, icon }) => {
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
