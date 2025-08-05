import React from "react";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.section 
      id="about"
      className="py-5"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: .7, delay:.2 }}
      viewport={{ once: true }}
    >
      <div 
        className="row align-items-center"
        style={{
          background: "rgba(255,255,255,0.74)",
          boxShadow: "0 3px 30px #ffd60033",
          borderRadius: "26px",
          padding: "35px"
        }}
      >
        <div className="col-md-7">
          <h2 className="mb-3 fw-bold" style={{color:"#ffb300",fontWeight:900}}>About Us</h2>
          <p>
            <b>Basti Ki Pathshala Foundation</b> is a registered NGO dedicated to providing quality education to underserved children living in slum areas, helping them break the cycle of poverty and dream big.
          </p>
          <ul style={{fontSize:"1.12rem",lineHeight:1.8}}>
            <li><b>Breaking the Cycle of Poverty:</b> Education opens doors.</li>
            <li><b>Empowerment:</b> We build confidence, self-worth, and vision for a brighter tomorrow.</li>
            <li><b>Hope:</b> Opportunities that go beyond boundaries and challenge circumstances.</li>
          </ul>
          <blockquote className="blockquote mt-3 ps-2 border-start border-warning border-4">
            <span className="fst-italic text-secondary">
              "Education is the cornerstone of empowerment. Together, we rewrite the future one success story at a time."
            </span>
          </blockquote>
        </div>
        <div className="col-md-5 text-center mt-4 mt-md-0">
          <img
            src={require("../images/img3.jpg")}
            alt="Children group"
            className="img-fluid rounded-4 shadow-lg"
            style={{ maxWidth: "370px", border:"5px solid #ffe082" }}
          />
        </div>
      </div>
    </motion.section>
  );
}
export default AboutUs;
