'use strict';
// Endereço centralizado para a futura discussão arquivada.
const BBS_URL = '#arquivo-status';
const INSTAGRAM_URL = '#instagram-status';
const films = [
  {title:'A Última Estação',year:2003,genre:'Drama',director:'Cláudia Amaral',poster:'ultima-estacao',note:'Despedidas numa pequena estação do interior.'},
  {title:'Depois da Chuva',year:2001,genre:'Drama / Romance',director:'Sérgio Valença',poster:'depois-chuva',note:'Uma família aprende a recomeçar.'},
  {title:'Linha Morta',year:1998,genre:'Suspense',director:'Otávio Reis',poster:'linha-morta',note:'Um telefonema muda a rotina de um vigia.'},
  {title:'Cidade de Vidro',year:2004,genre:'Drama',director:'Beatriz Nogueira',poster:'cidade-vidro',note:'Histórias que se cruzam na metrópole.'},
  {title:'Ruído Branco',year:2002,genre:'Suspense',director:'Mauro Bastos',poster:'ruido-branco',note:'A última transmissão de uma rádio local.'},
  {title:'Horizonte Partido',year:1999,genre:'Drama',director:'Cecília Paiva',poster:'horizonte-partido',note:'Dois irmãos e uma viagem adiada.'},
  {title:'Quarto 17',year:2000,genre:'Drama / Suspense',director:'Luís Barreto',poster:'quarto-17',note:'Encontros passageiros em um velho hotel.'},
  {title:'Noite sem Retorno',year:2003,genre:'Suspense',director:'Renato Moura',poster:'noite-retorno',note:'Uma decisão nas ruas depois da meia-noite.'},
  {title:'Os Dias Vazios',year:2001,genre:'Drama',director:'Alice Fontoura',poster:'dias-vazios',note:'O cotidiano de uma cidade fora de temporada.'},
  {title:'A Outra Margem',year:1994,genre:'Drama / Suspense',director:'Rafael Vesperini',cast:'Rafael Vesperini Marina Torres Caio Ferraz Lúcia Prado',poster:'outra-margem',note:'Uma casa, um rio e lembranças incertas.',page:'filme.html'}
];
function normalize(value){return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace(/\s+/g,' ');}
const catalog = document.getElementById('catalog-list');
if(catalog){for(const film of films){const row=document.createElement('article');row.className='catalog-item';const img=document.createElement('img');img.src=`assets/img/${film.poster}.webp`;img.alt=`Pôster de ${film.title}`;img.loading='lazy';const info=document.createElement('div');const title=document.createElement('b');title.textContent=`${film.title} — ${film.year}`;const meta=document.createElement('small');meta.textContent=`${film.genre} • Brasil`;const note=document.createElement('small');note.textContent=film.note;if(film.page){const posterLink=document.createElement('a');posterLink.href=film.page;posterLink.setAttribute('aria-label','Ver filme: '+film.title);posterLink.append(img);const titleLink=document.createElement('a');titleLink.href=film.page;titleLink.append(title);info.append(titleLink,meta,note);row.append(posterLink,info);}else{info.append(title,meta,note);row.append(img,info);}catalog.append(row);}}
const ranking=document.getElementById('ranking');
if(ranking){for(const film of films.slice(0,9).concat(films[9])){const item=document.createElement('li');item.textContent=film.title;ranking.append(item);}}
document.getElementById('search-form')?.addEventListener('submit',event=>{event.preventDefault();const query=normalize(document.getElementById('query').value);const results=document.getElementById('search-results');results.replaceChildren();results.hidden=false;const matches=query?films.filter(film=>normalize(`${film.title} ${film.director} ${film.cast||''}`).includes(query)):[];if(!matches.length){results.textContent='Nenhum título encontrado.';return;}for(const film of matches){const row=document.createElement('div');row.className='result';const title=document.createElement('strong');title.textContent=film.title.toUpperCase();const meta=document.createElement('p');meta.textContent=`${film.year} • ${film.genre}`;row.append(title,meta);if(film.page){const cast=document.createElement('p');cast.textContent='Rafael Vesperini — elenco';const link=document.createElement('a');link.href=film.page;link.textContent='[ VER FILME ]';row.append(cast,link);}else{const note=document.createElement('small');note.textContent='Registro resumido do catálogo.';row.append(note);}results.append(row);}});
const archived=document.getElementById('archived-discussion');
if(archived){archived.href=BBS_URL;archived.addEventListener('click',event=>{if(BBS_URL.startsWith('#')){event.preventDefault();const status=document.querySelector(BBS_URL);if(status){status.hidden=false;}}});}
const instagram=document.getElementById('rafael-instagram');
if(instagram){instagram.href=INSTAGRAM_URL;instagram.addEventListener('click',event=>{if(INSTAGRAM_URL.startsWith('#')){event.preventDefault();const status=document.querySelector(INSTAGRAM_URL);if(status){status.hidden=false;}}});}
for(const link of document.querySelectorAll('[data-unavailable]')){link.addEventListener('click',event=>{event.preventDefault();const status=document.getElementById('menu-status');status.textContent='Esta seção está temporariamente indisponível.';status.hidden=false;});}



