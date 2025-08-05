import React, { useEffect, useState } from "react";

const stats = [
  { label: "Children Educated", count: 500, color: "#44bba4" },
  { label: "Volunteers", count: 80, color: "#ffd447" },
  { label: "Communities Reached", count: 18, color: "#23395d" },
];

const testimonials = [
  {
    quote:
      "My child found confidence and hope through Basti Ki Pathshala. It's a blessing to our community.",
    author: "Priya (Parent)",
    themeColor: "#44bba4",
  },
  {
    quote: "Volunteering here changed my life—I learned, I taught, I grew!",
    author: "Amit (Volunteer)",
    themeColor: "#ffd447",
  },
];

// Animated number hook
function useAnimatedCount(endValue, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    if (endValue === 0) return;
    const increment = Math.ceil(endValue / (duration / 30));
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [endValue, duration]);
  return count;
}

// Create a child component for a single animated stat
function AnimatedStat({ label, count, color }) {
  const animatedCount = useAnimatedCount(count, 2000);
  return (
    <div
      className="p-4 h-100 rounded-4 shadow"
      style={{
        backgroundColor: "#fff",
        border: `3px solid ${color}`,
        minHeight: 160,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 0.2s",
      }}
    >
      <span
        style={{
          fontSize: "2rem",
          fontWeight: 900,
          color,
          fontFamily: "'Montserrat', sans-serif",
          userSelect: "none",
        }}
      >
        {animatedCount}+
      </span>
      <span
        style={{
          marginTop: 6,
          color: "#23395d",
          fontWeight: 700,
          fontSize: "1.1rem",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function ImpactStats() {
  return (
    <section
      id="impact-stats"
      style={{
        background: "linear-gradient(90deg, #f6f7f8 75%, #ffd44710 100%)",
        padding: "48px 0 32px",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <div className="container">
        {/* Stats */}
        <div className="row text-center mb-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="col-12 col-md-4 mb-4 mb-md-0"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s forwards",
                animationDelay: "0.2s",
              }}
            >
              <AnimatedStat {...stat} />
            </div>
          ))}
        </div>
        {/* Testimonials */}
        <div className="row justify-content-center">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="col-md-5 mb-3 mb-md-0"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s forwards",
                animationDelay: `${0.35 + idx * 0.15}s`,
              }}
            >
              <div
                className="p-4 rounded-4 shadow"
                style={{
                  backgroundColor: "#fffdfa",
                  borderLeft: `6px solid ${t.themeColor}`,
                  fontStyle: "italic",
                  color: "#23395d",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  userSelect: "text",
                }}
              >
                “{t.quote}”
                <br />
                <span
                  style={{
                    color: t.themeColor,
                    fontWeight: 800,
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "1rem",
                  }}
                >
                  — {t.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Simple fadeInUp animation keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translate3d(0, 30px, 0);
            }
            to {
              opacity: 1;
              transform: none;
            }
          }
        `}
      </style>
    </section>
  );
}
