const { fatorial } = require('./fatorial');

describe('2. Contagem', () => {
  const erro = 'Valor inválido, deve inserir uma entrada númerica maior ou igual a 0.';

  beforeEach(() => {
    console.log = jest.fn();
    jest.spyOn(global.console, 'log');
  })

  it('ao executar, caso o valor seja 0, deverá retornar 1', () => {
    const response = fatorial(0);
    expect(response).toBe(1);
  })

  it('ao executar, caso o valor seja 5, deverá retornar 120', () => {
    const response = fatorial(5);
    expect(response).toBe(120);
  })

  it('ao executar, caso o valor seja 8, deverá retornar 40320', () => {
    const response = fatorial(8);
    expect(response).toBe(40320);
  })

  it('caso o valor inserido seja um número menor que 0, deverá mostrar o erro na tela', () => {
    fatorial(-1);
    expect(console.log).toHaveBeenCalledWith(erro);
  })

  it('caso o valor inserido seja uma string, deverá mostrar o erro na tela', () => {
    fatorial('teste');
    expect(console.log).toHaveBeenCalledWith(erro);
  })
});