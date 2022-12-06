## Desafios de lógica com javascript

Esse projeto nasceu com o intuíto de testar e praticar a lógica de programadores utilizando testes unitários implementados para que tenham de garantir o funcionamento correto.


## Sumário
  - [Como usar?](#como-usar)
  - Desafios
    - [0. Hello](#desafio-0-hello)
    - [1. Area do circulo](#desafio-1-area-do-circulo)
    - [2. Contagem](#desafio-2-contagem)
    - [3. Fatorial](#desafio-3-fatorial)
### Como usar?

1. Inicialmente, para usar você deve clonar este repositório na sua máquina da seguinte forma:
```bash
  git clone git@github.com:ppessanhadev/code-logic-challenges.git
```
2. Ao terminar de clonar, você deve instalar os pacotes, com o seguinte comando

```bash
  npm install
```

3. Agora, resolva o desafio de forma isolada, e então teste com os comandos em seu terminal:

```bash
  npm run test:1 # irá rodar o arquivo "1. AreaDoCirculo"
```

4. **Opcional** Caso queira destrinchar melhor o funcionamento, existe um arquivo na raiz do projeto chamada `debug.js`, seu uso é para acionar as implementações e validar seu funcionamento da melhor forma, para isso, deve-se importar o arquivo da pasta e utilizar a função atribuída, da seguinte forma:

Exemplo de uso e resultado esperado:
> *código*
```javascript
// debug.js
const { sayHello } = require('./0-hello/hello');

sayHello('teste');
```
> *terminal*
```sh
$ node debug.js
$ Hello teste # retorno esperado
```
**Apague as modificações e comece do zero para cada desafio, use apenas como rascunho.**


### Desafio 0: Hello
A ideia dessa desafio é criar um programa ao qual retorne uma mensagem com hello no inicio.
EX: 'Hello João', 'Hello strogonoff com carne', 'Hello pessoas!'

**Regras**
- Deve receber como entrada a pessoa ou mensagem que gostaria de colocar logo após o Hello
- Caso a entrada não seja uma string, deverá retornar a seguinte mensagem de erro:
   - *"Valor inválido, deve inserir uma mensagem do tipo string."* (É recomendado copiar a mensagem na validação)
- Se estiver correto, deverá printar a mensagem utilizando `console.log`.

**Dicas de resolução**

<details>
<summary>Mostrar</summary>

  - [Condicionais](https://www.w3schools.com/jsref/jsref_if.asp) para validação do tipo
  - [typeof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof) para entender o tipo
- `console.log` para printar a mensagem
</details>


## Desafio 1: Area do circulo
A ideia dessa desafio é bascimaente fazer uma função ao qual deve calcular a área de um circulo 
baseado no valor do raio de entrada.

Para o funcionamento correto, deverá receber como parâmetro o valor do raio, e então realizar o calculo usando como base a fórmula

**Regras**
 - A fórmula para calcular a área de uma circunferência é: area = **PI * (raio * raio)**.
 - Considerando para este problema que **PI = 3.14159**.
 - Deve possuir 4 casas decimais e deve <ins>retornar</ins> um valor do tipo **númerico**!

**Dicas de resolução**
<details>
<summary>Mostrar</summary>

  - [Operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators) para realizar os calculos.
  - [Funções](https://www.w3schools.com/js/js_functions.asp) para compreesão de escopo, parametro e como retornar um valor.
</details>


## Desafio 2: Contagem
A ideia dessa desafio é bascimaente fazer que será capaz de realizar contagem a partir de sua entrada.

**Regras**
- Caso a entrada seja um número menor que 0 ou não numérico, deverá printar uma mensagem dizendo:
  - *"Valor inválido, deve inserir uma entrada númerica maior que 1."* (É recomendado copiar a mensagem na validação)
- Se estiver correto, deverá printar utilizando console.log uma contagem a partir do valor 1.

**Dicas de resolução**
<details>
<summary>Mostrar</summary>

  - [Estrutura de repetição for](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for) para realizar iteração para contagem.
</details>

## Desafio 3: Fatorial
A ideia dessa desafio é realizar um fatorial a partir da entrada e retornar a resposta.

**Regras**
- Caso a entrada seja um número menor que 0 ou não numérico, deverá printar uma mensagem dizendo:
   - *"Valor inválido, deve inserir uma entrada númerica maior ou igual a 0."* (É recomendado copiar a mensagem na validação)
- Se estiver correto, deverá retornar o valor final com return.

**Dicas de resolução**
<details>
<summary>Mostrar</summary>

  - Exemplo de imagem contendo algoritmo parar realizar um fatorial:
<img src='https://s3.static.brasilescola.uol.com.br/be/2020/09/multiplicacao-fatorial.jpg' />

  - [Estrutura de repetição for](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for) para realizar iteração para multiplicação.
  - [Declaração de variável mutavel com **let**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let) 
</details>