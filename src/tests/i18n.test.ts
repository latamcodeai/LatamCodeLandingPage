import i18n from '../i18n';

describe('i18n configuration', () => {
  test('should initialize with English as default language', () => {
    expect(i18n.language.startsWith('en')).toBe(true);
  });

  test('should have all required languages configured', () => {
    const languages = Object.keys(i18n.options.resources || {});
    expect(languages).toContain('en');
    expect(languages).toContain('es');
    expect(languages).toContain('pt');
  });

  test('should have correct detection configuration', () => {
    expect(i18n.options.detection?.order).toEqual(['localStorage', 'navigator']);
    expect(i18n.options.detection?.caches).toEqual(['localStorage']);
    expect(i18n.options.detection?.lookupLocalStorage).toBe('i18nextLng');
  });

  test('should have interpolation disabled', () => {
    expect(i18n.options.interpolation?.escapeValue).toBe(false);
  });

  test('should change language successfully', async () => {
    await i18n.changeLanguage('es');
    expect(i18n.language).toBe('es');
    
    await i18n.changeLanguage('pt');
    expect(i18n.language).toBe('pt');
    
    // Reset to default
    await i18n.changeLanguage('en');
    expect(i18n.language.startsWith('en')).toBe(true);
  });
}); 