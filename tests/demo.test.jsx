describe('Prueba de component', () => {
  test('test demo component', () => {
    const name = 'Patricio';
    const name2 = `${name.trim()}`;

    expect(name).toBe(name2);
  });
});
