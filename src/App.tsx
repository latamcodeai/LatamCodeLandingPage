import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

import './App.css';
import { TeamMember } from './components/TeamMember';
import { teamMembers } from './data/team';
import LanguageSelector from './components/LanguageSelector';

const App: React.FC = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    // Scroll animation observer
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('.services, .about, .contact');
        sections.forEach(section => {
            section.classList.add('animate-on-scroll');
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // Close mobile menu when clicking on a link
    const handleNavClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="App">
            <nav className="navbar">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src="/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        style={{
                            borderRadius: '50%',
                            marginRight: '10px',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(360deg) scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1)'}
                    />
                    <a href="#home" className="logo">LatamCodeAI</a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="toggle-button"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        <svg className="toggle-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
                <div className="nav-right">
                    <ul className="nav-links">
                        <li><a href="#home">{t('nav.home')}</a></li>
                        <li><a href="#services">{t('nav.services')}</a></li>
                        <li><a href="#about">{t('nav.about')}</a></li>
                        <li><a href="#contact">{t('nav.contact')}</a></li>
                    </ul>
                    <LanguageSelector />
                </div>
                {
                    isOpen && (
                        <div className="nav-right-mobile">
                            <ul className="nav-links">
                                <li><a href="#home" onClick={handleNavClick}>{t('nav.home')}</a></li>
                                <li><a href="#services" onClick={handleNavClick}>{t('nav.services')}</a></li>
                                <li><a href="#about" onClick={handleNavClick}>{t('nav.about')}</a></li>
                                <li><a href="#contact" onClick={handleNavClick}>{t('nav.contact')}</a></li>
                            </ul>
                            <LanguageSelector />
                        </div>
                    )
                }
            </nav>

            <section id="home" className="hero">
                <div className="hero-content">
                    <h1>{t('hero.title')}</h1>
                    <p>{t('hero.subtitle')}</p>
                    <button
                        className="cta-button"
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        {t('hero.cta')}
                    </button>
                </div>
            </section>

            <section id="services" className="services">
                <h2>{t('services.title')}</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💻</div>
                        <h3>{t('services.web.title')}</h3>
                        <p>{t('services.web.description')}</p>
                    </div>
                    <div className="service-card">
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                        <h3>{t('services.mobile.title')}</h3>
                        <p>{t('services.mobile.description')}</p>
                    </div>
                    <div className="service-card">
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                        <h3>{t('services.consulting.title')}</h3>
                        <p>{t('services.consulting.description')}</p>
                    </div>
                </div>
            </section>

            <section id="about" className="about">
                <h2>{t('about.title')}</h2>
                <p className="about-description">{t('about.description')}</p>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} member={member} />
                    ))}
                </div>
            </section>

            <section id="contact" className="contact">
                <h2>{t('contact.title')}</h2>
                <form className="contact-form" onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thank you for your message! We will get back to you soon.');
                }}>
                    <input
                        type="text"
                        placeholder={t('contact.name')}
                        required
                    />
                    <input
                        type="email"
                        placeholder={t('contact.email')}
                        required
                    />
                    <textarea
                        placeholder={t('contact.message')}
                        required
                    ></textarea>
                    <button type="submit" className="submit-button">
                        {t('contact.submit')}
                    </button>
                </form>
            </section>

            <footer className="footer">
                <p>{t('footer.copyright')}</p>
                <div style={{
                    marginTop: '1rem',
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                }}>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'var(--text-secondary)',
                            transition: 'all 0.3s ease',
                            display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--accent-primary)';
                            e.currentTarget.style.transform = 'translateY(-3px) scale(1.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--text-secondary)';
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        }}
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'var(--text-secondary)',
                            transition: 'all 0.3s ease',
                            display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#0a66c2';
                            e.currentTarget.style.transform = 'translateY(-3px) scale(1.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--text-secondary)';
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        }}
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        href="mailto:info@latamcodeai.com"
                        style={{
                            color: 'var(--text-secondary)',
                            transition: 'all 0.3s ease',
                            display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--accent-secondary)';
                            e.currentTarget.style.transform = 'translateY(-3px) scale(1.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--text-secondary)';
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        }}
                    >
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default App;
