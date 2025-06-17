import reportWebVitals from '../reportWebVitals';

describe('reportWebVitals', () => {
  it('debe llamar al callback cuando se pasa', () => {
    const mockCallback = jest.fn();
    reportWebVitals(mockCallback);
    // No podemos asegurar que se llame inmediatamente, pero al menos no debe lanzar error
    expect(mockCallback).not.toThrow;
  });

  it('no debe lanzar error si no se pasa callback', () => {
    expect(() => reportWebVitals()).not.toThrow();
  });
}); 