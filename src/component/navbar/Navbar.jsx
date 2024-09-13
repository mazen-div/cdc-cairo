import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../assets/images/Logo.png";

const NavBar = () => {
    const [navBackground, setNavBackground] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const history = useNavigate();

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setNavBackground(true);
        } else {
            setNavBackground(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(entry.target);
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    const handleNavClick = (path) => {
        history(path);

        setTimeout(() => {
            const element = document.getElementById(path.split('#')[1]);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100); // Adjust timeout if necessary
    };

    return (
        <Navbar 
            bg={"transparent"} 
            expand="lg" 
            fixed="top"
            className={ "navbar-scroll" }
        >
            <Container>
                <Navbar.Brand href="/#home"><img id='navimg' src={Logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
                    <span className="custom-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <Nav.Link 
                                onClick={() => handleNavClick('/#home')} 
                                className={`nav-link-custom ${activeSection === 'home' ? 'active' : ''}`}
                            >
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                                onClick={() => handleNavClick('/#about')} 
                                className={`nav-link-custom ${activeSection === 'about' ? 'active' : ''}`}
                            >
                                About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                                onClick={() => handleNavClick('/#services')} 
                                className={`nav-link-custom ${activeSection === 'services' ? 'active' : ''}`}
                            >
                                Services
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                                onClick={() => handleNavClick('/#cases')} 
                                className={`nav-link-custom ${activeSection === 'cases' ? 'active' : ''}`}
                            >
                                Cases
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                                onClick={() => handleNavClick('/#team')} 
                                className={`nav-link-custom ${activeSection === 'team' ? 'active' : ''}`}
                            >
                                Team
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                                onClick={() => handleNavClick('/#testimonials')} 
                                className={`nav-link-custom ${activeSection === 'testimonials' ? 'active' : ''}`}
                            >
                                Testimonials
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                                onClick={() => handleNavClick('/#contact')} 
                                className={`nav-link-custom ${activeSection === 'contact' ? 'active' : ''}`}
                            >
                                Contact
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
