import { useTranslation } from 'react-i18next';

import './App.css';
import { TeamMember } from './components/TeamMember';
import { teamMembers } from './data/team';
import LanguageSelector from './components/LanguageSelector';
import { useState } from 'react';

const App: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <nav className="navbar">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Logo" width={50} height={50} />
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
                <li><a href="#home">{t('nav.home')}</a></li>
                <li><a href="#services">{t('nav.services')}</a></li>
                <li><a href="#about">{t('nav.about')}</a></li>
                <li><a href="#contact">{t('nav.contact')}</a></li>
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
          <button className="cta-button">{t('hero.cta')}</button>
        </div>
      </section>

      <section id="services" className="services">
        <h2>{t('services.title')}</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>{t('services.web.title')}</h3>
            <p>{t('services.web.description')}</p>
          </div>
          <div className="service-card">
            <h3>{t('services.mobile.title')}</h3>
            <p>{t('services.mobile.description')}</p>
          </div>
          <div className="service-card">
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
        <div className="contact-form">
          <input type="text" placeholder={t('contact.name')} />
          <input type="email" placeholder={t('contact.email')} />
          <textarea placeholder={t('contact.message')}></textarea>
          <button className="submit-button">{t('contact.submit')}</button>
        </div>
      </section>

      <footer className="footer">
        <p>{t('footer.copyright')}</p>
      </footer>
    </div>
  );
}

export default App;
