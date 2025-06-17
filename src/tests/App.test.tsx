import '../tests/test-i18n';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { TeamMember } from '../components/TeamMember';
import { TeamMemberType } from '../types/TeamMember';

const mockMember: TeamMemberType = {
  name: 'Test User',
  experience: 5,
  role: 'Frontend Developer',
  image: '',
  skills: ['React', 'CSS'],
  linkedin: 'https://linkedin.com/in/test',
  github: 'https://github.com/test'
};

describe('App', () => {
  test('renderiza el nombre de la empresa en el navbar', () => {
    render(<App />);
    const logo = document.querySelector('.logo');
    expect(logo).toBeInTheDocument();
    expect(logo?.textContent).toMatch(/LatamCodeAI/i);
  });

  test('renderiza la sección de servicios', () => {
    render(<App />);
    expect(screen.getByText('services.title')).toBeInTheDocument();
    expect(screen.getByText('services.web.title')).toBeInTheDocument();
    expect(screen.getByText('services.mobile.title')).toBeInTheDocument();
    expect(screen.getByText('services.consulting.title')).toBeInTheDocument();
  });

  test('renderiza el título de la sección de contacto', () => {
    render(<App />);
    // Buscar el h2 de la sección de contacto
    const headings = screen.getAllByRole('heading', { level: 2 });
    const contactoHeading = headings.find(h => h.textContent === 'contact.title');
    expect(contactoHeading).toBeInTheDocument();
    expect(screen.getByPlaceholderText('contact.name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('contact.email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('contact.message')).toBeInTheDocument();
  });
});

describe('TeamMember', () => {
  test('muestra el nombre, rol y experiencia', () => {
    render(<TeamMember member={mockMember} />);
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('5 años de exp')).toBeInTheDocument();
  });

  test('muestra las skills', () => {
    render(<TeamMember member={mockMember} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
  });

  test('muestra los enlaces sociales', () => {
    render(<TeamMember member={mockMember} />);
    expect(screen.getAllByRole('link').length).toBeGreaterThanOrEqual(2);
  });
});
