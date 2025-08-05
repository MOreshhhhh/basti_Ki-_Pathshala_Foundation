import React from "react";
import { motion } from "framer-motion";

export default function HeroCTA() {
  return (
    <motion.section
      style={{
        background: "linear-gradient(100deg, #23395d 70%, #44bba4 100%)",
        padding: "52px 0 38px 0",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring" }}
    >
      <div className="container text-center">
        <motion.h2
          style={{
            color: "#ffd447",
            fontWeight: 900,
            fontSize: "2.5rem",
            fontFamily: "'Montserrat', Arial, sans-serif",
            letterSpacing: "1px",
            marginBottom: "16px",
          }}
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8, type: "spring" }}
        >
          Where learning knows no boundaries
        </motion.h2>
        <motion.p
          style={{
            color: "#f6f7f8",
            fontSize: "1.20rem",
            maxWidth: 600,
            margin: "0 auto 24px auto",
          }}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          Empowering children in underserved communities. Your support builds dreams!
        </motion.p>
        <motion.a
          href="#volunteer"
          className="btn"
          style={{
            backgroundColor: "#ffd447",
            color: "#23395d",
            fontWeight: "bold",
            borderRadius: 18,
            padding: "12px 42px",
            fontSize: "1.1rem",
            boxShadow: "0 3px 16px #ffd44735",
            letterSpacing: 1,
          }}
          whileHover={{ scale: 1.06, backgroundColor: "#44bba4", color: "#fff" }}
          whileTap={{ scale: 0.98 }}
        >
          Become a Volunteer
        </motion.a>
      </div>
    </motion.section>
  );
}
