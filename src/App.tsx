import { useTranslation } from 'react-i18next';

import './App.css';
import { TeamMember } from './components/TeamMember';
import { teamMembers } from './data/team';
import LanguageSelector from './components/LanguageSelector';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">LatamCodeAI</div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ul className="nav-links">
            <li><a href="#inicio">{t('nav.home')}</a></li>
            <li><a href="#servicios">{t('nav.services')}</a></li>
            <li><a href="#nosotros">{t('nav.about')}</a></li>
            <li><a href="#contacto">{t('nav.contact')}</a></li>
          </ul>
          <LanguageSelector />
        </div>
      </nav>

      <section id="inicio" className="hero">
        <div className="hero-content">
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>
          <button className="cta-button">{t('hero.cta')}</button>
        </div>
      </section>

      <section id="servicios" className="services">
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

      <section id="nosotros" className="about">
        <h2>{t('about.title')}</h2>
        <p className="about-description">{t('about.description')}</p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </section>

      <section id="contacto" className="contact">
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
