import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';
import Hero3D from './Hero3D';

const Contact = () => {
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
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <Link to="/quote"><button className="btn btn-primary btn-glow ms-lg-3 rounded-pill px-4">Get a Quote</button></Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero-section" style={{ padding: 0 }}>
                <Hero3D title="Contact Us" subtitle="We're here to help 24/7. Reach out for any plumbing needs or emergencies." />
            </header>

            {/* Contact Content */}
            <section className="services-section">
                <div className="container">
                    <div className="row g-5">
                        {/* Contact Form */}
                        <div className="col-lg-7" data-aos="fade-right">
                            <div className="card service-card p-4 border-0 shadow-lg">
                                <h3 className="mb-4 fw-bold">Send us a Message</h3>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary btn-glow px-5 py-3 rounded-pill w-100 fw-bold" type="button">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="col-lg-5" data-aos="fade-left">
                            <div className="h-100 d-flex flex-column justify-content-center">
                                <h2 className="display-6 fw-bold mb-4">Get in Touch</h2>
                                <p className="text-white-50 mb-5">Have a plumbing emergency or need a quote? Our team is ready to assist you. Visit our office or give us a call.</p>

                                <div className="d-flex mb-4">
                                    <div className="service-icon h2 text-primary me-3">📍</div>
                                    <div>
                                        <h5 className="fw-bold">Our Office</h5>
                                        <p className="text-white-50 mb-0">123 Plumber Street, Water City, ST 12345</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-4">
                                    <div className="service-icon h2 text-primary me-3">📞</div>
                                    <div>
                                        <h5 className="fw-bold">Phone Number</h5>
                                        <p className="text-white-50 mb-0">(555) 123-4567</p>
                                        <p className="text-white-50 small">Available 24/7 for Emergencies</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-4">
                                    <div className="service-icon h2 text-primary me-3">✉️</div>
                                    <div>
                                        <h5 className="fw-bold">Email Address</h5>
                                        <p className="text-white-50 mb-0">info@plumberpro.com</p>
                                    </div>
                                </div>
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

export default Contact;
