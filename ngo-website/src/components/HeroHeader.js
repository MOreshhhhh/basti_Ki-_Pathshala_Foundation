import React from "react";
import { motion } from "framer-motion";
import brandLogo from "../images/logo.jpg";

export default function HeroHeader() {
  return (
    <motion.section
      style={{
        width: "100%",
        background: "linear-gradient(90deg, #ffd447 70%, #44bba4 100%)",
        padding: "48px 0 36px 0",
        boxShadow: "0 8px 30px #ffd44744",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, type: "spring" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "38px",
          flexWrap: "wrap",
        }}
      >
        <motion.img
          src={brandLogo}
          style={{
            width: 115,
            height: 115,
            borderRadius: "30px",
            boxShadow: "0 4px 32px #23395d35",
            background: "#fff",
            objectFit: "cover",
          }}
          alt="Basti Ki Pathshala Logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        />
        <span
          style={{
            fontSize: "3.25rem",
            fontWeight: 900,
            color: "#23395d",
            fontFamily: "'Montserrat', Arial, sans-serif",
            letterSpacing: "1.5px",
            textShadow: "0 3px 12px #23395d15",
            lineHeight: 1.05,
          }}
        >
          Basti Ki Pathshala
        </span>
      </div>
    </motion.section>
  );
}
