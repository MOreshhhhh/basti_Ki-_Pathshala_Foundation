import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VolunteerForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.section
      id="volunteer"
      className="py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        background: "linear-gradient(90deg, #fffbe6 80%, #ffd44727 100%)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="card border-0 shadow-lg"
        style={{
          borderRadius: "34px",
          maxWidth: "480px",
          minWidth: "320px",
          background: "rgba(255,255,255,0.86)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 12px 34px #44bba444, 0 2px 8px #0001",
          padding: "44px 30px",
          zIndex: 2,
        }}
      >
        <motion.h2
          className="mb-4 fw-bold text-center"
          style={{
            color: "#44bba4",
            letterSpacing: ".5px",
            fontFamily: "'Montserrat', Arial, sans-serif",
          }}
          initial={{ opacity: 0, y: -22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.11, duration: 0.8, type: "spring" }}
        >
          <i className="bi bi-people-fill me-2" style={{ fontSize: "1.1em" }}></i>
          Volunteer With Us
        </motion.h2>
        <AnimatePresence>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.6 }}
              className="text-center py-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 350, damping: 20, delay: 0.1 }}
                style={{
                  display: "inline-block",
                  marginBottom: "13px",
                  background: "#44bba4",
                  borderRadius: "47%",
                  width: "58px",
                  height: "58px",
                  lineHeight: "58px",
                }}
              >
                <i className="bi bi-check2-circle" style={{ color: "#fff", fontSize: "2em", verticalAlign: "middle" }}></i>
              </motion.div>
              <div style={{ fontWeight: 600, color: "#23395d", fontSize: "1.13em" }}>
                Thank you for volunteering! <br />
                Our team will get in touch soon.
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold" style={{ color: "#23395d" }}>
                  Full Name
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-transparent">
                    <i className="bi bi-person text-secondary"></i>
                  </span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold" style={{ color: "#23395d" }}>
                  Email
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-transparent">
                    <i className="bi bi-envelope text-secondary"></i>
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold" style={{ color: "#23395d" }}>
                  Why do you want to volunteer?
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="3"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Share your motivation or message"
                />
              </div>
              <motion.button
                type="submit"
                className="btn w-100 mt-2 fw-bold"
                style={{
                  background: "linear-gradient(90deg, #44bba4, #ffd447 85%)",
                  color: "#23395d",
                  border: "none",
                  fontSize: "1.09em",
                  borderRadius: "18px",
                  boxShadow: "0 3px 11px #44bba441",
                  fontWeight: 700,
                }}
                whileHover={{ scale: 1.04, backgroundColor: "#ffd447", color: "#23395d" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                Submit <i className="bi bi-send ms-1" />
              </motion.button>
            </form>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
