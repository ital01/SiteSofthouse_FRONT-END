const getById = (id) => document.getElementById(id);
const addEventListener = (element, event, handler) => element.addEventListener(event, handler);
const toggleDisplay = (element, display) => { if (element) element.style.display = display; };

const formatPhoneNumber = (input) => {
  const phoneNumber = input.value.replace(/\D/g, "");
  const formattedPhoneNumber = [
    phoneNumber.substring(0, 2),
    phoneNumber.substring(2, 8) ? ` ${phoneNumber.substring(2, 8)}` : "",
    phoneNumber.substring(8, 13) ? `-${phoneNumber.substring(8, 13)}` : ""
  ].join("");

  input.value = formattedPhoneNumber;
};

const overlay = getById("overlay");
const imagem = getById("imagem");
const header = getById("page-top");
const botaoExibirImagem = getById("exibir-imagem");
const fechar = getById("fechar");

const bloquearRolagem = () => document.body.style.overflow = "hidden";
const desbloquearRolagem = () => document.body.style.overflow = "auto";

const toggleNavbar = (display) => toggleDisplay(header, display);
const setImagem = (src) => imagem.setAttribute("src", src);
const toggleCarouselControls = (display) => {
  const carouselControlsPrev = getById("CarouselControlPrev");
  const carouselControlsNext = getById("CarouselControlNext");
  toggleDisplay(carouselControlsPrev, display);
  toggleDisplay(carouselControlsNext, display);
};

const showOverlay = () => {
  overlay.style.display = "block";
  overlay.classList.add("active");
};

const hideOverlay = () => {
  overlay.style.display = "none";
  overlay.classList.remove("active");
};

const exibirImagemHandler = () => {
  const caminhoDaImagem = "assets/conteudo/sistemas/FolderGED.webp";
  setImagem(caminhoDaImagem);
  showOverlay();
  bloquearRolagem();
  toggleNavbar("none");
  toggleCarouselControls("none");
};

const fecharImagemHandler = () => {
  setImagem("");
  hideOverlay();
  desbloquearRolagem();
  toggleNavbar("block");
  toggleCarouselControls("block");
};

addEventListener(botaoExibirImagem, "click", exibirImagemHandler);
addEventListener(fechar, "click", fecharImagemHandler);