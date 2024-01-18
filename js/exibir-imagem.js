const getById = (id) => document.getElementById(id);
const addEventListener = (element, event, handler) => element.addEventListener(event, handler);
const toggleDisplay = (element, display) => { if (element) element.style.display = display; };

const overlay = getById("overlay");
const imagem = getById("imagem");
const header = getById("page-top");
const botaoExibirImagem = getById("exibir-imagem");
const fechar = getById("fechar");
const carouselControlsPrev = getById("CarouselControlPrev");
const carouselControlsNext = getById("CarouselControlNext");
const caminhoDaImagem = "assets/conteudo/sistemas/FolderGED.webp";

const bloquearRolagem = () => document.body.style.overflow = "hidden";
const desbloquearRolagem = () => document.body.style.overflow = "auto";

const toggleElements = (elements, display) => {
  elements.forEach(element => toggleDisplay(element, display));
};

const showOverlay = () => {
  overlay.style.display = "block";
  overlay.classList.add("active");
};

const hideOverlay = () => {
  overlay.style.display = "none";
  overlay.classList.remove("active");
};

const setImagem = (src) => imagem.setAttribute("src", src);

const exibirImagem = () => {
  setImagem(caminhoDaImagem);
  showOverlay();
  bloquearRolagem();
  toggleElements([header, carouselControlsPrev, carouselControlsNext], "none");
};

const fecharImagem = () => {
  setImagem("");
  hideOverlay();
  desbloquearRolagem();
  toggleElements([header, carouselControlsPrev, carouselControlsNext], "block");
};

addEventListener(botaoExibirImagem, "click", exibirImagem);
addEventListener(fechar, "click", fecharImagem);