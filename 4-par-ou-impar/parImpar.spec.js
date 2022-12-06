const { parOuImpar } = require('./parImpar');

describe('4. Par ou impar', () => {
  const erro = 'Valor inválido, deve inserir uma entrada númerica maior a 0.';
  const erroNumerico = 'Valor númerico inferior a 1, deve inserir uma entrada maior que 0.'

  beforeEach(() => {
    console.log = jest.fn();
    jest.spyOn(global.console, 'log');
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('ao executar, caso o valor seja 1, deverá retornar "O número 1 é impar."', () => {
    parOuImpar(1);
    expect(console.log).toHaveBeenCalledWith('O número 1 é impar.');
    expect(console.log).toHaveBeenCalledTimes(1);
  })

  it('ao executar, caso o valor seja 5, deverá retornar 120', () => {
    parOuImpar(5);
    expect(console.log).toHaveBeenCalledWith('O número 5 é impar.');
    expect(console.log).toHaveBeenCalledTimes(1);
  })

  it('ao executar, caso o valor seja 8, deverá retornar 40320', () => {
    parOuImpar(8);
    expect(console.log).toHaveBeenCalledWith('O número 8 é par.');
    expect(console.log).toHaveBeenCalledTimes(1);
  })

  it('caso o valor inserido seja um número menor que 1, deverá mostrar o erro na tela e parar a execução nesse ponto', () => {
    parOuImpar(0);
    expect(console.log).toHaveBeenCalledWith(erroNumerico);
    expect(console.log).toHaveBeenCalledTimes(1);
  })

  it('caso o valor inserido seja uma string, deverá mostrar o erro na tela e parar a execução nesse ponto', () => {
    parOuImpar('teste');
    expect(console.log).toHaveBeenCalledWith(erro);
    expect(console.log).toHaveBeenCalledTimes(1);
  })
});