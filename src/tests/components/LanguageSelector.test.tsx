import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import LanguageSelector from '../../components/LanguageSelector';

const renderWithI18n = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>
  );
};

describe('LanguageSelector', () => {
  beforeEach(() => {
    i18n.changeLanguage('en');
  });

  test('renders all language buttons', () => {
    renderWithI18n(<LanguageSelector />);
    
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('ES')).toBeInTheDocument();
    expect(screen.getByText('PT')).toBeInTheDocument();
  });

  test('shows active class for current language', () => {
    renderWithI18n(<LanguageSelector />);
    
    const enButton = screen.getByText('EN');
    expect(enButton.className).toContain('active');
  });

  test('changes language when clicking buttons', async () => {
    renderWithI18n(<LanguageSelector />);
    
    // Click Spanish button
    await act(async () => {
      fireEvent.click(screen.getByText('ES'));
    });
    expect(i18n.language).toBe('es');
    expect(screen.getByText('ES').className).toContain('active');
    
    // Click Portuguese button
    await act(async () => {
      fireEvent.click(screen.getByText('PT'));
    });
    expect(i18n.language).toBe('pt');
    expect(screen.getByText('PT').className).toContain('active');
    
    // Click English button
    await act(async () => {
      fireEvent.click(screen.getByText('EN'));
    });
    expect(i18n.language).toBe('en');
    expect(screen.getByText('EN').className).toContain('active');
  });

  test('updates active button when language changes externally', async () => {
    renderWithI18n(<LanguageSelector />);
    
    await act(async () => {
      await i18n.changeLanguage('es');
    });
    expect(screen.getByText('ES').className).toContain('active');
    
    await act(async () => {
      await i18n.changeLanguage('pt');
    });
    expect(screen.getByText('PT').className).toContain('active');
  });
}); 