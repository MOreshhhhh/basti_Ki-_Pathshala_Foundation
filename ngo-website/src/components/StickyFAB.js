import React from "react";

export default function StickyFAB() {
  return (
    <>
      {/* Inline CSS styles for Bootstrap Icons to ensure font renders properly */}
      <style>{`
        .bi {
          font-family: "Bootstrap Icons" !important;
          font-style: normal;
          font-weight: normal;
          speak: none;
          display: inline-block;
          text-decoration: inherit;
          text-align: center;
          vertical-align: -.125em;
          line-height: 1;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>

      <a
        href="#volunteer"
        style={{
          position: "fixed",
          bottom: 22,
          right: 22,
          background: "linear-gradient(90deg, #ffd447, #44bba4 85%)",
          color: "#23395d",
          fontWeight: 700,
          borderRadius: "50%",
          boxShadow: "0 5px 18px #44bba433",
          width: 64,
          height: 64,
          fontSize: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 999,
          textDecoration: "none",
          transition: "box-shadow 0.18s ease, transform 0.15s ease",
        }}
        className="fab-volunteer"
        title="Volunteer Now"
        aria-label="Volunteer Now"
      >
        <i className="bi bi-hands-heart"></i>
      </a>
    </>
  );
}
