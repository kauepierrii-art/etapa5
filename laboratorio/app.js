'use strict';
// Altere o código provisório somente aqui.
const NEGATIVO_CODIGO = 'FOB-94-0918-07';
// Substitua null pela URL real do CineArquivo quando estiver disponível.
// Enquanto isso, o link permanece nesta página e informa a indisponibilidade.
const CINEARQUIVO_URL = 'https://cinearquivo.vercel.app';
const resultado = document.getElementById('resultado');
const mensagem = document.getElementById('mensagem');
document.getElementById('consulta').addEventListener('submit', (event) => {
  event.preventDefault();
  const localizado = document.getElementById('codigo').value.trim().toUpperCase() === NEGATIVO_CODIGO;
  resultado.hidden = !localizado;
  mensagem.textContent = localizado ? '' : 'Registro não localizado.';
  document.getElementById('codigo-localizado').textContent = localizado ? NEGATIVO_CODIGO : '';
});
const cinearquivo = document.getElementById('cinearquivo');
if (CINEARQUIVO_URL) {
  cinearquivo.href = CINEARQUIVO_URL;
} else {
  cinearquivo.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('cinearquivo-status').textContent = 'Catálogo temporariamente indisponível.';
  });
}
const ampliacao = document.getElementById('ampliacao');
const fotoAmpliada = document.getElementById('foto-ampliada');
const areaFoto = document.getElementById('area-foto');
const mais = document.getElementById('zoom-mais');
const menos = document.getElementById('zoom-menos');
const ZOOM_MAXIMO = 5;
let zoom = 1;
let posX = 0;
let posY = 0;
let larguraBase = 0;
let alturaBase = 0;
let arraste = null;
let ignorarClique = false;

function desenharFoto() {
  const limiteX = Math.max(0, (larguraBase * zoom - areaFoto.clientWidth) / 2);
  const limiteY = Math.max(0, (alturaBase * zoom - areaFoto.clientHeight) / 2);
  posX = Math.max(-limiteX, Math.min(limiteX, posX));
  posY = Math.max(-limiteY, Math.min(limiteY, posY));
  fotoAmpliada.style.transform = `translate(-50%, -50%) translate(${posX}px, ${posY}px) scale(${zoom})`;
  areaFoto.classList.toggle('ampliada', zoom > 1);
  menos.disabled = zoom <= 1;
  mais.disabled = zoom >= ZOOM_MAXIMO;
}

function pararArraste() {
  if (arraste && fotoAmpliada.hasPointerCapture(arraste.id)) {
    fotoAmpliada.releasePointerCapture(arraste.id);
  }
  arraste = null;
  areaFoto.classList.remove('arrastando');
}

function ajustarFoto() {
  pararArraste();
  zoom = 1;
  posX = posY = 0;
  if (fotoAmpliada.naturalWidth) {
    const fator = Math.min(areaFoto.clientWidth / fotoAmpliada.naturalWidth,
      areaFoto.clientHeight / fotoAmpliada.naturalHeight, 1);
    larguraBase = fotoAmpliada.naturalWidth * fator;
    alturaBase = fotoAmpliada.naturalHeight * fator;
    fotoAmpliada.style.width = `${larguraBase}px`;
    fotoAmpliada.style.height = `${alturaBase}px`;
  }
  desenharFoto();
}

function alterarZoom(fator) {
  zoom = Math.max(1, Math.min(ZOOM_MAXIMO, zoom * fator));
  desenharFoto();
}

fotoAmpliada.addEventListener('load', () => {
  if (ampliacao.open) ajustarFoto();
});
document.querySelectorAll('.miniatura').forEach((botao) => {
  botao.addEventListener('click', () => {
    const foto = botao.querySelector('img');
    ignorarClique = false;
    fotoAmpliada.src = foto.getAttribute('src');
    fotoAmpliada.alt = foto.alt;
    document.getElementById('legenda-ampliada').textContent = botao.closest('figure').querySelector('figcaption').innerText.replace(/\n/g, ' — ');
    ampliacao.showModal();
    ajustarFoto();
  });
});
mais.addEventListener('click', () => alterarZoom(1.25));
menos.addEventListener('click', () => alterarZoom(1 / 1.25));
document.getElementById('ajustar').addEventListener('click', ajustarFoto);
document.getElementById('fechar').addEventListener('click', () => ampliacao.close());
areaFoto.addEventListener('wheel', (event) => {
  if (event.target !== fotoAmpliada) return;
  event.preventDefault();
  if (event.deltaY) alterarZoom(event.deltaY < 0 ? 1.15 : 1 / 1.15);
}, { passive: false });
fotoAmpliada.addEventListener('pointerdown', (event) => {
  ignorarClique = false;
  if (zoom <= 1 || arraste || event.button !== 0) return;
  arraste = { id: event.pointerId, x: event.clientX, y: event.clientY, posX, posY };
  fotoAmpliada.setPointerCapture(event.pointerId);
  areaFoto.classList.add('arrastando');
});
fotoAmpliada.addEventListener('pointermove', (event) => {
  if (!arraste || arraste.id !== event.pointerId) return;
  const dx = event.clientX - arraste.x;
  const dy = event.clientY - arraste.y;
  if (Math.abs(dx) + Math.abs(dy) > 4) ignorarClique = true;
  posX = arraste.posX + dx;
  posY = arraste.posY + dy;
  desenharFoto();
});
fotoAmpliada.addEventListener('pointerup', pararArraste);
fotoAmpliada.addEventListener('pointercancel', pararArraste);
fotoAmpliada.addEventListener('lostpointercapture', pararArraste);
ampliacao.addEventListener('click', (event) => {
  if (ignorarClique) { ignorarClique = false; return; }
  if (!arraste && (event.target === ampliacao || event.target === areaFoto)) ampliacao.close();
});
ampliacao.addEventListener('close', () => {
  ajustarFoto();
  ignorarClique = false;
});
window.addEventListener('resize', () => {
  if (ampliacao.open) ajustarFoto();
});
// O dialog mantém ESC e a devolução de foco à miniatura.

