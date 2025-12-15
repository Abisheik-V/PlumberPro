import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';
import Hero3D from './Hero3D';
// Import Bootstrap JS explicitly if needed for toggler, or rely on index.html script tag. 
// For this setup, we assume bootstrap bundle is handled or we add a simple script import if we had a main entry. 
// Ideally in React we use react-bootstrap but we are using standard bootstrap classes as per request.

const Index = () => {
    useEffect(() => {
        // Initialize animations
        AOS.init({
            duration: 1000,
            once: false, // Allow animation to happen every time we scroll
            mirror: true,
            offset: 120,
        });
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
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
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
                <Hero3D />
            </header>

            {/* Services Preview */}
            <section id="services" className="services-section">
                <div className="container">
                    <div className="text-center mb-5" data-aos="fade-up">
                        <h6 className="text-primary fw-bold text-uppercase tracking-wider">What We Do</h6>
                        <h2 className="mb-3 display-5 fw-bold">Our Premium Services</h2>
                        <p className="text-white col-lg-6 mx-auto">From leaky faucets to complete bathroom renovations, our experienced team handles it all with precision and care.</p>
                    </div>
                    <div className="row g-4">
                        {/* Service 1 */}
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="service-card-wrapper h-100">
                                <div className="card service-card text-center">
                                    <div className="service-icon">🚰</div>
                                    <h4 className="card-title mb-3">Leak Repairs</h4>
                                    <p className="card-text text-white-50">Quick detection and repair of water leaks to prevent damage.</p>
                                </div>
                            </div>
                        </div>
                        {/* Service 2 */}
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-card-wrapper h-100">
                                <div className="card service-card text-center">
                                    <div className="service-icon">🚿</div>
                                    <h4 className="card-title mb-3">Bathroom Install</h4>
                                    <p className="card-text text-white-50">Complete bathroom installations and modern renovations.</p>
                                </div>
                            </div>
                        </div>
                        {/* Service 3 */}
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-card-wrapper h-100">
                                <div className="card service-card text-center">
                                    <div className="service-icon">🔧</div>
                                    <h4 className="card-title mb-3">Maintenance</h4>
                                    <p className="card-text text-white-50">Regular plumbing maintenance to keep your systems running.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About / Counters Section (New for 'Pro' feel) */}
            <section className="py-5" style={{ backgroundColor: 'var(--light-color)' }} data-aos="fade-up">
                <div className="container">
                    <div className="row text-center g-4">
                        <div className="col-md-3">
                            <h2 className="display-4 fw-bold text-primary">15+</h2>
                            <p className="text-uppercase fw-bold text-white-50">Years Experience</p>
                        </div>
                        <div className="col-md-3">
                            <h2 className="display-4 fw-bold text-primary">2k+</h2>
                            <p className="text-uppercase fw-bold text-white-50">Happy Clients</p>
                        </div>
                        <div className="col-md-3">
                            <h2 className="display-4 fw-bold text-primary">24/7</h2>
                            <p className="text-uppercase fw-bold text-white-50">Emergency Service</p>
                        </div>
                        <div className="col-md-3">
                            <h2 className="display-4 fw-bold text-primary">100%</h2>
                            <p className="text-uppercase fw-bold text-white-50">Satisfaction</p>
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

export default Index;
