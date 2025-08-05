import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";

const images = [
  require("../images/img1.jpg"),
  require("../images/img2.jpg"),
  require("../images/img3.jpg"),
  require("../images/img4.jpg"),
];

export default function AboutUs() {
  return (
    <section
      id="about"
      style={{ background: "#f6f7f8", padding: "54px 0" }}
    >
      <div className="container">
        <motion.div
          className="row align-items-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.74, ease: "easeOut" }}
          style={{
            background: "rgba(255,255,255,0.96)",
            boxShadow: "0 8px 32px #44bba419",
            borderRadius: 19,
            padding: "38px 18px 33px 18px",
          }}
        >
          <div className="col-md-5 mb-4 mb-md-0">
            <Carousel controls={false} indicators={false} interval={3500} fade>
              {images.map((img, idx) => (
                <Carousel.Item key={idx}>
                  <motion.img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="d-block w-100 rounded-4 shadow"
                    style={{
                      border: "5px solid #ffd447",
                      maxHeight: 280,
                      objectFit: "cover",
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="col-md-7">
            <motion.h2
              className="mb-3"
              style={{
                color: "#44bba4",
                fontWeight: 900,
                fontFamily: "'Montserrat', Arial, sans-serif",
                fontSize: "2.1rem",
                letterSpacing: "1px",
              }}
            >
              About Us
            </motion.h2>
            <motion.h4
              className="mb-4"
              style={{
                fontWeight: 600,
                color: "#23395d",
                fontFamily: "'Nunito', sans-serif",
                fontStyle: "italic",
              }}
            >
              Lighting the Path to Change with Basti Ki Pathshala Foundation
            </motion.h4>
            <motion.p
              className="lead mb-3"
              style={{
                color: "#23395d",
                fontSize: "1.13rem",
                lineHeight: 1.7,
                fontWeight: "500",
              }}
            >
              At Basti Ki Pathshala Foundation, we are more than just an organization – we are a movement, driven by the belief that education is the cornerstone of empowerment. Established under the Indian Societies Act of 1860, we stand as a beacon of hope in underserved communities, dedicated to breaking the chains of poverty through the transformative power of learning.
            </motion.p>
            <motion.p
              className="lead mb-1"
              style={{
                color: "#23395d",
                fontSize: "1.13rem",
                lineHeight: 1.7,
                fontWeight: "500",
              }}
            >
              Join us in our quest to rewrite the narrative of education, one success story at a time. Together, let’s build a world where every child has the opportunity to dream, to learn, and to soar. Welcome to Basti Ki Pathshala Foundation – where hope is our currency, and education is our legacy.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
