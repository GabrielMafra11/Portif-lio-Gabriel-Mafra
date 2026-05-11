// ============================================
// PORTFÓLIO - Gabriel Figueiredo Mafra Ferreira
// JavaScript Puro | Sem frameworks
// Disciplina: Fundamentos da Programação Web
// ============================================

// --- Alternância de tema claro/escuro ---
function alternarTema() {
  // Adiciona ou remove a classe 'light' no body
  document.body.classList.toggle('light');

  // Atualiza o texto do botão conforme o tema ativo
  const btn = document.querySelector('.btn-tema');
  if (document.body.classList.contains('light')) {
    btn.textContent = '🌙 Tema Escuro';
  } else {
    btn.textContent = '☀️ Tema Claro';
  }
}

// --- Validação e envio do formulário de contato ---
document.getElementById('formContato').addEventListener('submit', function (e) {
  // Impede o envio padrão do formulário (recarregar a página)
  e.preventDefault();

  // Captura os valores dos campos
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // Elemento onde a mensagem de feedback será exibida
  const feedback = document.getElementById('mensagem-feedback');

  // Validação: verifica se todos os campos estão preenchidos
  if (!nome || !email || !mensagem) {
    feedback.style.display = 'block';
    feedback.style.borderLeftColor = '#e05a5a';
    feedback.style.color = '#e05a5a';
    feedback.style.background = 'rgba(224, 90, 90, 0.1)';
    feedback.textContent = '⚠️ Por favor, preencha todos os campos antes de enviar.';
    return;
  }

  // Validação: verifica o formato do e-mail com expressão regular
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    feedback.style.display = 'block';
    feedback.style.borderLeftColor = '#e05a5a';
    feedback.style.color = '#e05a5a';
    feedback.style.background = 'rgba(224, 90, 90, 0.1)';
    feedback.textContent = '⚠️ Por favor, insira um e-mail válido (ex: usuario@dominio.com).';
    return;
  }

  // Simula o envio — limpa o formulário e exibe mensagem de sucesso
  this.reset();
  feedback.style.display = 'block';
  feedback.style.borderLeftColor = '';
  feedback.style.color = '';
  feedback.style.background = '';
  feedback.textContent = '✅ Mensagem enviada com sucesso! Entrarei em contato em breve.';

  // Oculta a mensagem de sucesso após 5 segundos
  setTimeout(() => {
    feedback.style.display = 'none';
  }, 5000);
});

// --- Menu responsivo: destaca link ativo conforme seção visível ---
// Utiliza IntersectionObserver para detectar qual seção está na tela
const secoes = document.querySelectorAll('section');
const linksMenu = document.querySelectorAll('#menu ul li a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove a classe 'ativo' de todos os links
        linksMenu.forEach((link) => link.classList.remove('ativo'));

        // Adiciona 'ativo' ao link correspondente à seção visível
        const linkAtivo = document.querySelector(
          `#menu ul li a[href="#${entry.target.id}"]`
        );
        if (linkAtivo) linkAtivo.classList.add('ativo');
      }
    });
  },
  { threshold: 0.4 } // ativa quando 40% da seção estiver visível
);

// Observa todas as seções
secoes.forEach((secao) => observer.observe(secao));
