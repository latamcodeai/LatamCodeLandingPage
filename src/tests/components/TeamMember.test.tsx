import { render, screen } from '@testing-library/react';
import { TeamMember } from '../../components/TeamMember';
import { TeamMemberType } from '../../types/TeamMember';

const mockMember: TeamMemberType = {
  name: 'Test User',
  experience: 5,
  role: 'Frontend Developer',
  image: '',
  skills: ['React', 'CSS'],
  linkedin: 'https://linkedin.com/in/test',
  github: 'https://github.com/test'
};

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
