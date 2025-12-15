import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';
import Hero3D from './Hero3D';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, mirror: true, offset: 120 });
    }, []);

    return (
        <div className="plumber-shop-app">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <i className="bi bi-droplet-fill me-2 animate-float"></i>PlumberPro
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <Link to="/quote"><button className="btn btn-primary btn-glow ms-lg-3 rounded-pill px-4">Get a Quote</button></Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero-section" style={{ padding: 0 }}>
                <Hero3D
                    title="Building Trust, One Pipe at a Time"
                    subtitle="Your reliable partners in plumbing excellence. Committed to quality service and customer satisfaction for over 10 years."
                />
            </header>

            {/* About Content */}
            <section className="services-section">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6" data-aos="fade-right">
                            <h6 className="text-primary fw-bold text-uppercase tracking-wider">Our Story</h6>
                            <h2 className="mb-4 display-5 fw-bold">More Than Just Plumbers</h2>
                            <p className="lead text-white-50">
                                Founded in 2010, PlumberPro started with a simple mission: to provide reliable, high-quality plumbing services with transparent pricing.
                            </p>
                            <p className="text-white-50">
                                Over the years, we've grown from a single van operation to a full-service plumbing company capable of handling complex residential and commercial projects. Our success is built on trust, hard work, and a commitment to customer satisfaction.
                            </p>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="p-5 service-card rounded-3 shadow-lg text-center" style={{ transform: 'rotate(2deg)' }}>
                                <h3 className="fw-bold text-primary mb-3">Our Core Values</h3>
                                <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: '300px' }}>
                                    <li className="mb-2">✅ <strong>Integrity:</strong> Honest work, honest prices.</li>
                                    <li className="mb-2">✅ <strong>Quality:</strong> We do it right the first time.</li>
                                    <li className="mb-2">✅ <strong>Reliability:</strong> We show up on time.</li>
                                    <li>✅ <strong>Innovation:</strong> Using the latest tech.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Team Preview / Why Choose Us */}
                    <div className="row g-4 mt-5 text-center">
                        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
                            <div className="card service-card h-100 p-4">
                                <div className="service-icon display-4 text-primary mb-3">👨‍</div>
                                <h4>Expert Team</h4>
                                <p className="text-white-50 small">Certified professionals with years of hands-on experience.</p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
                            <div className="card service-card h-100 p-4">
                                <div className="service-icon display-4 text-primary mb-3">⚡</div>
                                <h4>Fast Response</h4>
                                <p className="text-white-50 small">We prioritize emergency calls to minimize damage.</p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
                            <div className="card service-card h-100 p-4">
                                <div className="service-icon display-4 text-primary mb-3">🛡️</div>
                                <h4>Guaranteed Work</h4>
                                <p className="text-white-50 small">We stand behind our work with a 100% satisfaction guarantee.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer" id="contact">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <h5>About PlumberPro</h5>
                            <p className="text-white-50">We are a dedicated team of certified plumbers providing top-notch residential and commercial plumbing solutions. We combine expertise with the latest technology.</p>
                            <div className="social-icons mt-4">
                                <a href="#"><i className="bi bi-facebook">Fb</i></a>
                                <a href="#"><i className="bi bi-twitter">Tw</i></a>
                                <a href="#"><i className="bi bi-instagram">In</i></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5>Quick Links</h5>
                            <ul className="footer-links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5>Our Services</h5>
                            <ul className="footer-links">
                                <li><a href="#">Leak Detection</a></li>
                                <li><a href="#">Drain Cleaning</a></li>
                                <li><a href="#">Water Heaters</a></li>
                                <li><a href="#">Toilet Repair</a></li>
                                <li><a href="#">Emergency 24/7</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5>Contact Info</h5>
                            <ul className="footer-links">
                                <li>📍 123 Plumber St, Water City</li>
                                <li>📞 (555) 123-4567</li>
                                <li>✉️ info@plumberpro.com</li>
                            </ul>
                            <div className="mt-4 p-3 rounded" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <h6 className="text-white mb-2">Business Hours</h6>
                                <p className="text-white-50 small mb-0">Mon - Fri: 8:00 AM - 6:00 PM</p>
                                <p className="text-white-50 small">Sat - Sun: Emergency Only</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="row align-items-center">
                            <div className="col-md-6 text-md-start">
                                <p className="mb-0">&copy; {new Date().getFullYear()} PlumberPro Shop. All Rights Reserved.</p>
                            </div>
                            <div className="col-md-6 text-md-end">
                                <a href="#" className="text-white-50 text-decoration-none me-3">Privacy Policy</a>
                                <a href="#" className="text-white-50 text-decoration-none">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default About;
