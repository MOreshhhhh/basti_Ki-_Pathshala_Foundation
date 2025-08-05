import { motion } from "framer-motion";

export default function AnimatedBrand() {
  return (
    <motion.span
      style={{ display: "inline-block", fontWeight: "900", fontSize: "1.7rem", color: "#292b2c" }}
      initial={{ y: 0, color: "#292b2c", letterSpacing: "0px" }}
      animate={{ 
        y: [-7, 0, -7, 0, -2, 0], 
        color: ["#292b2c", "#F57F17", "#292b2c"],
        letterSpacing: ["0px", "2px", "0px"]
      }}
      transition={{ 
        duration: 2.4,
        times: [0, 0.15, 0.40, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatType: "mirror"
      }}
    >
      Basti Ki Pathshala
    </motion.span>
  );
}
