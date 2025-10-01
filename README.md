## Autores
* Adryelle Caroline de Souza Calefi


* Tabata Etiéle Roberto da Silva 

---
# 🧮 Calculadora Avançada com Histórico

Este é um projeto de calculadora simples e elegante construído com HTML, CSS (para design e responsividade) e JavaScript (para lógica e manipulação do DOM). O diferencial é a inclusão de um **histórico de operações** e uma função de **Ligar/Desligar** não destrutiva.

---

## ✨ Funcionalidades Principais

* **Operações Padrão:** Suporte para adição, subtração, multiplicação e divisão.
* **Operações Avançadas:** Suporte para **Porcentagem** (`%`) e **Potência** (`^`).
* **Histórico Persistente:** O histórico de cálculos é armazenado e pode ser visualizado em um painel lateral. Os botões de histórico foram aumentados para melhor usabilidade.
* **Botão Ligar/Desligar (Power):** Desativa a entrada de dados e as operações de cálculo, mas **mantém o histórico funcional**, permitindo que o usuário consulte operações passadas mesmo com a calculadora "desligada".
* **Design Responsivo:** O layout se adapta bem a diferentes tamanhos de tela, incluindo dispositivos móveis.
* **UI Intuitiva:** Layout de botões e cores de destaque para operadores e o botão de igual.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura base da calculadora.
* **CSS3:** Estilização, layout Flexbox e Grid, responsividade (Media Queries).
* **JavaScript (ES6+):** Lógica de cálculo, manipulação do histórico e controle de estado (Ligar/Desligar).

---

## 🚀 Como Usar

### Pré-requisitos

Você só precisa de um navegador web moderno (Chrome, Firefox, Edge, Safari, etc.).

### Executando o Projeto

1.  Clone ou baixe este repositório para sua máquina local.
2.  Abra o arquivo `index.html` no seu navegador.

A calculadora estará pronta para uso.

---

## 🔑 Detalhes da Implementação

### Estrutura do Projeto

| Arquivo | Descrição |
| :--- | :--- |
| `index.html` | Contém a estrutura da calculadora, o visor, os botões e o painel de histórico. |
| `style.css` | Define a aparência, o layout Grid/Flex e os estilos para os estados (e.g., `calculadora.desligada`). |
| `script.js` | Contém todas as funções JavaScript (entrada de valor, limpeza, cálculo, manipulação do histórico e `togglePower`). |

### Função Ligar/Desligar (Toggle Power)

A função `togglePower()` controla o estado global da calculadora (`let ligada = true/false`).

* Quando está **DESLIGADA**, a função `calcular()` e `adicionarValor()` são bloqueadas através de uma checagem (`if (!ligada) return;`).
* O estilo CSS usa o seletor `.calculadora.desligada` para escurecer o visual e usa **`pointer-events: none;`** para desativar a maioria dos botões.
* O botão de energia (`.power-button`) é ativado com uma regra CSS de alta especificidade (`pointer-events: auto;`), garantindo que ele **sempre possa ser clicado** para ligar a calculadora novamente.

---

## 🗺️ Próximos Passos (To-Do)

* [ ] Implementar funcionalidades científicas (seno, cosseno, tangente, logaritmo).
* [ ] Adicionar persistência do histórico via `localStorage` para que os dados não se percam ao recarregar a página.
* [ ] Implementar o cálculo da raiz quadrada (`√`) corretamente.
* [ ] Melhorar a acessibilidade (ARIA labels).

---

Feito com ❤️ por [Seu Nome ou Nome do Colaborador]
