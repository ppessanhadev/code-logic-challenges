const { sayHello } = require('./hello');

describe('0. Hello', () => {
  const erro = 'Valor inválido, deve inserir uma mensagem do tipo string.';

  beforeEach(() => {
    console.log = jest.fn();
    jest.spyOn(global.console, 'log');
  })

  it('ao executar, deve retornar a mensagem corretamente caso a entrada seja "feijao"', () => {
    sayHello('feijao');
    expect(console.log).toHaveBeenCalledWith('Hello feijao');
    expect(console.log).toHaveBeenCalledTimes(1);
  })

  it('ao executar, deve retornar a mensagem corretamente caso a entrada seja "carlao"', () => {
    sayHello('carlao');
    expect(console.log).toHaveBeenCalledWith('Hello carlao');
    expect(console.log).toHaveBeenCalledTimes(1);
  })

  it('ao executar, deve retornar a mensagem corretamente caso a entrada seja "marcos"', () => {
    sayHello('marcos');
    expect(console.log).toHaveBeenCalledWith('Hello marcos');
    expect(console.log).toHaveBeenCalledTimes(1);
  })

  it('caso o valor inserido seja um valor númerico, deverá mostrar o erro na tela', () => {
    sayHello(5);
    expect(console.log).toHaveBeenCalledWith(erro);
    expect(console.log).toHaveBeenCalledTimes(1);
  })

  it('caso o valor inserido seja uma string vazia, deverá mostrar o erro na tela', () => {
    sayHello('');
    expect(console.log).toHaveBeenCalledWith(erro);
    expect(console.log).toHaveBeenCalledTimes(1);
  })
});