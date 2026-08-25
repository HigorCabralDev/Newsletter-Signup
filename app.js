const root = document.documentElement;
const btn = document.getElementById("btnTema");
const ano = document.getElementById("ano");
const form = document.querySelector("form");

// ano atual
ano.textContent = new Date().getFullYear();

// pega o tema salvo
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
  root.setAttribute("data-tema", "escuro");
}

// alternar tema
btn.addEventListener("click", () => {
  const escuro = root.getAttribute("data-tema") === "escuro";

  if (escuro) {
    root.removeAttribute("data-tema");
    localStorage.setItem("tema", "claro");
  } else {
    root.setAttribute("data-tema", "escuro");
    localStorage.setItem("tema", "escuro");
  }
});

// impedir recarregamento do formulário
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
