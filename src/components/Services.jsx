import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';
import Hero3D from './Hero3D';
import { Link } from 'react-router-dom';

const Services = () => {
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
                                <Link className="nav-link active" to="/services">Services</Link>
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
                <Hero3D title="Our Premium Services" subtitle="Comprehensive plumbing solutions tailored to your needs." />
            </header>

            {/* Detailed Services */}
            <section className="services-section">
                <div className="container">
                    <div className="row g-5">
                        {/* Service Item 1 */}
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="card service-card h-100 text-start">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="service-icon display-4 me-3">🚰</div>
                                    <h3 className="card-title mb-0">Leak Detection & Repair</h3>
                                </div>
                                <p className="card-text text-white-50">
                                    Hidden leaks can cause significant damage. Our advanced detection technology pinpoints leaks behind walls and underground without destruction. We fix them fast to save you money.
                                </p>
                                <ul className="list-unstyled mt-3 text-white-50">
                                    <li>✓ Electronic leak detection</li>
                                    <li>✓ Pipe repair and replacement</li>
                                    <li>✓ Slab leak repair</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service Item 2 */}
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="card service-card h-100 text-start">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="service-icon display-4 me-3">🚿</div>
                                    <h3 className="card-title mb-0">Bathroom Renovations</h3>
                                </div>
                                <p className="card-text text-white-50">
                                    Upgrade your bathroom with modern fixtures and efficient plumbing. From installing new showers to complete remodels, we handle everything from start to finish.
                                </p>
                                <ul className="list-unstyled mt-3 text-white-50">
                                    <li>✓ Shower & Bathtub installation</li>
                                    <li>✓ Toilet replacement</li>
                                    <li>✓ Faucet upgrades</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service Item 3 */}
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="card service-card h-100 text-start">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="service-icon display-4 me-3">🔥</div>
                                    <h3 className="card-title mb-0">Water Heaters</h3>
                                </div>
                                <p className="card-text text-white-50">
                                    Never run out of hot water again. We install, repair, and maintain tankless and traditional water heaters to ensure your comfort.
                                </p>
                                <ul className="list-unstyled mt-3 text-white-50">
                                    <li>✓ Tankless water heater installation</li>
                                    <li>✓ Routine maintenance & flush</li>
                                    <li>✓ Emergency repair</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service Item 4 */}
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="card service-card h-100 text-start">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="service-icon display-4 me-3">🔧</div>
                                    <h3 className="card-title mb-0">Emergency Plumbing</h3>
                                </div>
                                <p className="card-text text-white-50">
                                    Plumbing disasters don't wait for business hours. Our 24/7 emergency team is ready to tackle burst pipes, clogged drains, and overflows anytime.
                                </p>
                                <ul className="list-unstyled mt-3 text-white-50">
                                    <li>✓ 24/7 Availability</li>
                                    <li>✓ Rapid Response Team</li>
                                    <li>✓ Fully equipped vans</li>
                                </ul>
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

export default Services;
