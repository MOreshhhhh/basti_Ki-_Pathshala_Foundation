import React from "react";

export default function Footer() {
  return (
    <footer
      className="text-center py-4"
      style={{
        background: "#23395d",
        color: "#ffd447",
        borderTopLeftRadius: "32px",
        borderTopRightRadius: "32px",
        marginTop: 40,
      }}
    >
      <div className="container mb-2">
        <span style={{ fontWeight: 700 }}>
          &copy; {new Date().getFullYear()} Basti Ki Pathshala Foundation
        </span>
        <br />
        <small style={{ color: "#fffdd6" }}>
          Where hope is our currency, and education is our legacy.
        </small>
      </div>
      <div className="d-flex justify-content-center gap-3 mt-2">
        <a
          href="https://wa.me/91xxxxxxxxxx" // your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#44bba4", fontSize: 25 }}
        >
          <i className="bi bi-whatsapp"></i>
        </a>
        <a
          href="https://instagram.com/YOUR_HANDLE"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ffd447", fontSize: 25 }}
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="mailto:info@bastikipathshala.org"
          style={{ color: "#fffdd6", fontSize: 25 }}
        >
          <i className="bi bi-envelope-paper"></i>
        </a>
      </div>
    </footer>
  );
}
