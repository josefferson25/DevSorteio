# 🎲 Sorteador de Números Aleatórios

---
## 📌 Sobre o Projeto

O **Sorteador de Números Aleatórios** é uma aplicação web interativa desenvolvida com **HTML5, CSS3 e JavaScript puro (Vanilla JS)**.
A aplicação permite que o usuário defina um intervalo numérico personalizado e gere um número aleatório em tempo real, sem recarregamento da página.
Este projeto foi desenvolvido com foco na prática de conceitos fundamentais do desenvolvimento front-end, como manipulação do DOM, eventos JavaScript e atualização dinâmica da interface.

---

## 🛠️ Tecnologias Utilizadas

### ✅ HTML5
- Estrutura semântica da aplicação
- Inputs e elementos interativos
- Organização do layout

### ✅ CSS3
- Estilização moderna
- Organização visual
- Responsividade básica

### ✅ JavaScript (Vanilla JS)
- Manipulação do DOM
- Captura de eventos
- Geração de números aleatórios com `Math.random()`
- Atualização dinâmica utilizando `innerHTML`

---

## ⚙️ Funcionalidades

- ✅ Definir valor mínimo e máximo do sorteio
- ✅ Gerar número aleatório dentro do intervalo informado
- ✅ Atualização dinâmica do resultado
- ✅ Interface simples e intuitiva
- ✅ Execução instantânea sem recarregar a página

---

## 🧠 Como Funciona

1. O usuário informa o intervalo desejado (mínimo e máximo).
2. Ao clicar no botão **Sortear**, um evento de clique é disparado.
3. O JavaScript processa os valores inseridos.
4. O número aleatório é gerado utilizando:

```js
Math.floor(Math.random() * (max - min + 1)) + min;

📂 Estrutura do Projeto
📦 DevSorteio
 ┣ 📂 assets
 ┃ ┗ preview.png
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📜 script.js
 ┗ 📜 README.md
▶️ Como Executar o Projeto
# Clonar o repositório
git clone https://github.com/seu-usuario/DevSorteio.git

# Entrar na pasta
cd DevSorteio
Abra o arquivo index.html no navegador.

🎯 Objetivos de Aprendizado

Este projeto foi desenvolvido para fortalecer conhecimentos em:

Manipulação do DOM
Eventos em JavaScript
Lógica de programação
Interatividade em aplicações web
Organização de código front-end

🚀 Melhorias Futuras

🔹 Validação avançada dos campos
🔹 Histórico de números sorteados
🔹 Dark Mode 🌙
🔹 Responsividade completa para mobile
🔹 Animações no resultado do sorteio

👨‍💻 Autor
Josefferson Gonçalves Chagas                

🔗 GitHub: https://github.com/josefferson25/DevSorteio.git
🌐 Portfólio: https://josefferson25.github.io/DevSorteio/

📄 Licença
Este projeto está sob a licença MIT.
Sinta-se livre para estudar, modificar e utilizar como base para outros projetos.
