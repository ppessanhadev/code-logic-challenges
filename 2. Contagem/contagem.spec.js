const { contagem } = require('./contagem');

describe('2. Contagem', () => {
  const erro = 'Valor inválido, deve inserir uma entrada númerica maior que 1.';

  beforeEach(() => {
    console.log = jest.fn();
    jest.spyOn(global.console, 'log');
  })

  it('ao executar, deverá contar até 5 corretamente', () => {
    contagem(5);
    expect(console.log).toHaveBeenCalledTimes(5);

    for (let count = 1; count <= 6; count++) {
      if (count > 5) {
        expect(console.log).not.toHaveBeenCalledWith(count);
      } else {
        expect(console.log).toHaveBeenCalledWith(count);
      }
    }
  })

  it('ao executar, deverá contar até 100 corretamente', () => {
    contagem(100);
    expect(console.log).toHaveBeenCalledTimes(100);

    for (let count = 1; count <= 101; count++) {
      if (count > 100) {
        expect(console.log).not.toHaveBeenCalledWith(count);
      } else {
        expect(console.log).toHaveBeenCalledWith(count);
      }
    }
  })

  it('caso o valor inserido seja um número menor que 1, deverá mostrar o erro na tela', () => {
    contagem(0);
    expect(console.log).toHaveBeenCalledWith(erro);
  })

  it('caso o valor inserido seja uma string, deverá mostrar o erro na tela', () => {
    contagem('teste');
    expect(console.log).toHaveBeenCalledWith(erro);
  })
});