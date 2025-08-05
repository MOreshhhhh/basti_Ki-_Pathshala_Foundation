import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { motion } from 'framer-motion';

const bgGradient =
  'radial-gradient(ellipse at bottom left, #ffd44790 0%, #f6f7f8 100%)';

function HomePage() {
  return (
    <section
      id="home"
      className="py-5"
      style={{ background: bgGradient, minHeight: '70vh', display: 'flex', alignItems: 'center' }}
    >
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <img
              src={require('../images/logo.jpg')}
              alt="Basti Ki Pathshala Logo"
              style={{
                width: '110px',
                marginBottom: '18px',
                boxShadow: '0 3px 22px #ffd44788',
                borderRadius: 16,
              }}
            />
            <h1
              className="fw-bold mb-3"
              style={{
                color: '#23395d',
                fontSize: '2.8rem',
                lineHeight: 1.18,
                fontFamily: "'Montserrat', Arial, sans-serif",
                letterSpacing: '.5px',
              }}
            >
              Where learning knows no boundaries
            </h1>
            <p className="lead mb-3" style={{ fontWeight: 600, color: '#444' }}>
              Empowering children in underserved communities.
              <br />
              Your support builds dreams!
            </p>
            <a
              href="#volunteer"
              className="btn btn-warning btn-lg mt-3 px-4 py-2 shadow-lg"
              style={{ letterSpacing: 1, fontWeight: 700, color: '#23395d' }}
            >
              Become a Volunteer
            </a>
          </motion.div>
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Carousel fade interval={2450} className="rounded-4 shadow-lg overflow-hidden">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('../images/img1.jpg')}
                  alt="Teaching children"
                  style={{ minHeight: '300px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('../images/img2.jpg')}
                  alt="Outdoor tuition"
                  style={{ minHeight: '300px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('../images/img3.jpg')}
                  alt="Group session"
                  style={{ minHeight: '300px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
