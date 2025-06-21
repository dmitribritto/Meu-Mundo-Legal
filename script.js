const container = document.querySelector(".container");
const botoaReiniciar = document.querySelector("button");
let cartas;
let primeiraCarta = "";
let segundaCarta = "";

botoaReiniciar.addEventListener("click", () => location.reload());

let items = [
  { nome: "ben10", imagem: "/img/ben10.jpg" },
  { nome: "picapau", imagem: "/img/picapau.jpg" },
  { nome: "johnnybravo", imagem: "/img/johnnybravo.jpg" },
  { nome: "apenasumshow", imagem: "/img/apenasumshow.jpg" },
  { nome: "jovenstitans", imagem: "/img/jovenstitans.jpg" },
  { nome: "gumball", imagem: "/img/gumball.jpg" },
  { nome: "clarencio", imagem: "/img/clarencio.jpg" },
  { nome: "tomejerry", imagem: "/img/tom-e-jerry.jpg" },
  { nome: "scoobydoo", imagem: "/img/scoobydoo.jpg" },
];

function criarCartas() {
  let itemsDuplicados = [...items, ...items];
  let animais = itemsDuplicados.sort(() => Math.random() - 0.5);

  animais.map((animal) => {
    container.innerHTML += `
    <div class="carta" data-carta=${animal.nome}>
    <div class="atras">?</div>
    <div class="frente">
      <img src=${animal.imagem} width="180px" height="180px" />
    </div>`;
  });
}
criarCartas();

function virarCarta() {
  cartas = document.querySelectorAll(".carta");

  cartas.forEach((carta) => {
    carta.addEventListener("click", () => {
      if (primeiraCarta == "") {
        carta.classList.add("carta-virada");
        primeiraCarta = carta;
      } else if (segundaCarta == "") {
        carta.classList.add("carta-virada");
        segundaCarta = carta;
        checarCartas(carta);
      }
    });
  });
}
virarCarta();

function checarCartas() {
  const primeiroAnimal = primeiraCarta.getAttribute("data-carta");
  const segundoAnimal = segundaCarta.getAttribute("data-carta");

  if (primeiroAnimal == segundoAnimal) {
    primeiraCarta = "";
    segundaCarta = "";
  } else {
    setTimeout(() => {
      primeiraCarta.classList.remove("carta-virada");
      segundaCarta.classList.remove("carta-virada");

      primeiraCarta = "";
      segundaCarta = "";
    }, 600);
  }
}