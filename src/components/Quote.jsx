import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';
import Hero3D from './Hero3D';

const Quote = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, mirror: true, offset: 120 });
    }, []);

    const [serviceType, setServiceType] = useState('inspection');
    const [urgency, setUrgency] = useState('standard');
    const [bathrooms, setBathrooms] = useState(1);
    const [totalPrice, setTotalPrice] = useState(500);

    // Pricing Logic
    const basePrices = {
        inspection: 500,
        leak: 1500,
        drain: 2000,
        pipe: 3000,
        heater: 5000,
        renovation: 10000
    };

    const urgencyMultipliers = {
        standard: 1,
        emergency: 1.5, // 50% extra for emergency
        weekend: 1.2
    };

    useEffect(() => {
        let price = basePrices[serviceType];

        // Adjust for quantity (e.g., more bathrooms = more potential work, though simplified here)
        // For renovation, bathrooms adds significantly. For others, maybe small increment.
        if (serviceType === 'renovation') {
            price = price * bathrooms;
        } else {
            price = price + ((bathrooms - 1) * 200); // Small add-on for extra bathrooms/complexity
        }

        price = price * urgencyMultipliers[urgency];
        setTotalPrice(price);
    }, [serviceType, urgency, bathrooms]);


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
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <Link to="/quote"><button className="btn btn-primary btn-glow ms-lg-3 rounded-pill px-4">Get a Quote</button></Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero-section" style={{ padding: 0 }}>
                <Hero3D title="Get Your Free Quote" subtitle="Transparent pricing. No hidden fees. Know exactly what you pay." />
            </header>

            {/* Quote Calculator Section */}
            <section className="services-section">
                <div className="container">
                    <div className="row g-5">

                        {/* Calculator Form */}
                        <div className="col-lg-7" data-aos="fade-right">
                            <div className="card service-card p-5 border-0 shadow-lg">
                                <h3 className="mb-4 fw-bold text-primary">Estimate Your Cost</h3>
                                <form>
                                    <div className="mb-4">
                                        <label className="form-label fw-bold">Select Service Needed</label>
                                        <select className="form-select form-select-lg" value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                                            <option value="inspection">Basic Inspection (₹500)</option>
                                            <option value="leak">Leak Repair (₹1,500)</option>
                                            <option value="drain">Drain Cleaning (₹2,000)</option>
                                            <option value="pipe">Pipe Replacement (₹3,000)</option>
                                            <option value="heater">Water Heater Installation (₹5,000)</option>
                                            <option value="renovation">Bathroom Renovation (₹10,000/bath)</option>
                                        </select>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="form-label fw-bold">Urgency</label>
                                            <select className="form-select" value={urgency} onChange={(e) => setUrgency(e.target.value)}>
                                                <option value="standard">Standard Service</option>
                                                <option value="weekend">Weekend Appointment (+20%)</option>
                                                <option value="emergency">Emergency Immediate (+50%)</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-bold">Number of Bathrooms</label>
                                            <input type="number" min="1" max="10" className="form-control" value={bathrooms} onChange={(e) => setBathrooms(parseInt(e.target.value) || 1)} />
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-3 text-center border border-primary border-opacity-25 mt-4" style={{ background: 'rgba(0, 243, 255, 0.05)' }}>
                                        <h5 className="text-white-50 mb-2">Estimated Total</h5>
                                        <h2 className="display-4 fw-bold text-primary mb-0">₹{totalPrice.toLocaleString()}</h2>
                                        <p className="small text-white-50 mt-2 mb-0">*This is an estimate. Final price may vary upon inspection.</p>
                                    </div>

                                    <button className="btn btn-primary btn-lg w-100 mt-4 btn-glow rounded-pill" type="button">Book Appointment Now</button>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar Info */}
                        <div className="col-lg-5" data-aos="fade-left">
                            <div className="ps-lg-4">
                                <h2 className="display-6 fw-bold mb-4">Why Choose Us?</h2>
                                <div className="d-flex align-items-start mb-4">
                                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                                        <span className="h3 mb-0">💰</span>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold">Upfront Pricing</h5>
                                        <p className="text-white-50">We believe in transparency. The price we quote is the price you pay.</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start mb-4">
                                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                                        <span className="h3 mb-0">⚡</span>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold">Fast Turnaround</h5>
                                        <p className="text-white-50">Emergency services available 24/7. We get there fast.</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start mb-4">
                                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                                        <span className="h3 mb-0">🛡️</span>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold">Warranty Included</h5>
                                        <p className="text-white-50">All our parts and labor come with a minimum 1-year warranty.</p>
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

export default Quote;
