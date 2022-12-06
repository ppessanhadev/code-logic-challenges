const { calcularArea } = require('./area');

describe('Area do circulo', () => {
  it('ao executar, deverá retonar o valor da area corretamente para a entrada "2.00"', () => {
    const response = calcularArea(2.00);
    const expected = 12.5664;
    expect(response).toBe(expected);
  })

  it('ao executar, deverá retonar o valor da area corretamente para a entrada "100.00"', () => {
    const response = calcularArea(100.64);
    const expected = 31819.3103;
    expect(response).toBe(expected);
  })

  it('ao executar, deverá retonar o valor da area corretamente para a entrada "150.00"', () => {
    const response = calcularArea(150.00);
    const expected = 70685.7750;
    expect(response).toBe(expected);
  })
});