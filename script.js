// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
  const minInput = document.getElementById("min");
  const maxInput = document.getElementById("max");
  const sortearBtn = document.getElementById("sortearBtn");
  const resultadoSpan = document.getElementById("resultado");

  // Função principal de sorteio
  function sortearNumero() {
    // Converte os valores para números inteiros
    const min = parseInt(minInput.value, 10);
    const max = parseInt(maxInput.value, 10);

    // Validação: campos preenchidos e números válidos
    if (isNaN(min) || isNaN(max)) {
      exibirErro("Preencha ambos os campos com números.");
      return;
    }

    // Validação: mínimo não pode ser maior que máximo
    if (min > max) {
      exibirErro("O mínimo deve ser menor ou igual ao máximo.");
      return;
    }

    // Gera o número aleatório entre min e max (inclusivos)
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

    // Exibe o resultado no span com animação
    resultadoSpan.style.transform = "scale(1.2)";
    resultadoSpan.textContent = numeroSorteado;

    // Remove a animação após 150ms
    setTimeout(() => {
      resultadoSpan.style.transform = "scale(1)";
    }, 150);

    // 🚨 ALERTA: descomente a linha abaixo se quiser um alerta também no sorteio bem-sucedido
    // alert(`Número sorteado: ${numeroSorteado}`);
  }

  // Função auxiliar para exibir mensagens de erro
  function exibirErro(mensagem) {
    resultadoSpan.textContent = "❌";
    resultadoSpan.style.transform = "scale(1)";
    alert(mensagem); // Alerta de erro
  }

  // Evento do botão
  sortearBtn.addEventListener("click", sortearNumero);

  // Permite sortear pressionando "Enter" em qualquer input
  [minInput, maxInput].forEach((input) => {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sortearNumero();
      }
    });
  });

  // Inicializa o resultado com "—"
  resultadoSpan.textContent = "—";
});
