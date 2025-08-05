import React, { useState } from "react";
import { motion } from "framer-motion";

function VolunteerForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.section
      id="volunteer"
      className="py-5"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: .7, delay:.3 }}
      viewport={{ once: true }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="card shadow-lg border-0 px-4 py-5" style={{background:"rgba(255,251,201,0.98)"}}>
            <h2 className="mb-4 fw-bold text-center" style={{color:"#ffd600"}}>Volunteer With Us</h2>
            {submitted ? (
              <div className="alert alert-success text-center">
                Thank you for volunteering! Our team will get in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Why do you want to volunteer?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="4"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Share your motivation or message"
                  />
                </div>
                <button type="submit" className="btn btn-lg btn-dark w-100 shadow-sm mt-2 fw-bold">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
export default VolunteerForm;

