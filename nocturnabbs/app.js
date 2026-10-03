'use strict';
const topics = [
{id:'objeto',date:'07/07/1994',author:'VESPER',subject:'Espelho para cenário',category:'CINEMA',posts:[
{author:'VESPER',date:'07/07/1994',text:'pessoal, alguém sabe onde eu consigo um espelho negro, tipo aqueles de obsidiana?\n\nnão precisa ser bonito. é pra cenário.\n\nse parecer velho, melhor ainda.'},
{author:'MOTH',date:'07/07/1994',text:'isso é praquele filme do teu filho?'},
{author:'VESPER',date:'07/07/1994',text:'é.'},
{author:'MOTH',date:'07/07/1994',text:'então usa vidro pintado e economiza dor de cabeça kkkkk'},
{author:'VESPER',date:'07/07/1994',text:'tarde demais.'},
{author:'NIX',date:'09/07/1994',text:'conheço um sujeito que sabe de um. vou ver.'},
{author:'VESPER',date:'18/07/1994',text:'consegui aquela peça. pesada pra cacete.\n\no Rafael gostou porque na câmera ela fica muito preta.'},
{author:'MOTH',date:'18/07/1994',text:'agora quero ver isso no filme.'},
{author:'VESPER',date:'18/07/1994',text:'se ele conseguir terminar, você vê.'}]},
{id:'referencias',date:'04/09/1994',author:'VESPER',subject:'Referências sobre espelhos de obsidiana',category:'HISTÓRIA',posts:[
{author:'VESPER',date:'04/09/1994',text:'alguém tem coisa séria sobre espelho de obsidiana?\n\nsem livro tosco, por favor.\n\nestou tentando entender algumas coisas que apareceram durante a pesquisa do filme.'},
{author:'CASSIEL',date:'04/09/1994',text:'coisas tipo o quê?'},
{author:'VESPER',date:'04/09/1994',text:'primeiro quero saber se encontro alguma referência que preste.'},
{author:'ARQUIVUM',date:'05/09/1994',text:'tenho umas fichas com referências a superfícies negras usadas para observação. vou procurar a bibliografia, não está toda aqui.'},
{author:'SOLVE',date:'05/09/1994',text:'se for aquela transcrição que circulou no ano passado, tem erro. melhor conferir a edição antes.'},
{author:'ARQUIVUM',date:'06/09/1994',text:'não é a mesma. mas vou conferir.'},
{author:'VESPER',date:'19/09/1994',text:'achei que fosse só coisa da filmagem, mas algumas coisas de ontem não batem.\n\nde qualquer forma, acabou. não quero repetir aquilo.'},
{author:'MOTH',date:'19/09/1994',text:'deu ruim na cena?'},
{author:'VESPER',date:'19/09/1994',text:'a cena é o menor dos problemas.'}]},
{id:'peca',date:'22/09/1994',author:'RMEIRELES',subject:'A peça que você comentou',category:'COLECIONISMO',posts:[
{author:'RMEIRELES',date:'22/09/1994',text:'Vesper, acompanhei as mensagens sobre essa peça.\n\ntrabalho com acervo no Instituto Saldanha de Estudos Históricos.\n\nse ela for realmente antiga e você tiver alguma documentação, mesmo incompleta, podemos avaliar.\n\nse tiver interesse em vender ou doar, me manda uma descrição e algumas fotos.'},
{author:'VESPER',date:'23/09/1994',text:'vender não.\n\nse vocês aceitarem como doação, melhor.'},
{author:'RMEIRELES',date:'23/09/1994',text:'aceitamos avaliar dessa forma.\n\nte mando os dados no privado.'},
{author:'VESPER',date:'30/09/1994',text:'resolvido, espelho doado.'}]}
];
const general = [
{id:'equipamentos',date:'12/10/1996',author:'NIX',subject:'Equipamentos antigos',category:'OUTROS ASSUNTOS',posts:[{author:'NIX',date:'12/10/1996',text:'Estou recuperando um monitor e dois teclados. Alguém ainda guarda os manuais desses equipamentos? Prefiro cópias em papel.'}]},
{id:'filmes',date:'08/10/1996',author:'LUCERNA',subject:'Filmes esquecidos',category:'CINEMA',posts:[{author:'LUCERNA',date:'08/10/1996',text:'A sessão de sábado vai reunir curtas que só circularam em cineclubes. Quem tiver programas antigos pode trazer para compararmos as fichas.'}]},
{id:'particulares',date:'03/10/1996',author:'ARQUIVUM',subject:'Arquivos particulares',category:'DOCUMENTOS',posts:[{author:'ARQUIVUM',date:'03/10/1996',text:'Estou organizando correspondências dos anos 40. Ainda é melhor manter os envelopes junto das cartas. As datas ajudam a ordenar o conjunto.'}]},
{id:'fotografias',date:'28/09/1996',author:'MOTH',subject:'Fotografias sem origem',category:'COLECIONISMO',posts:[{author:'MOTH',date:'28/09/1996',text:'Encontrei um lote de fotografias sem anotações no verso. Parecem retratos de família. Vou comparar o papel e os carimbos dos estúdios antes de catalogar.'}]},
{id:'livros',date:'22/09/1996',author:'CASSIEL',subject:'Livros raros',category:'HISTÓRIA',posts:[{author:'CASSIEL',date:'22/09/1996',text:'Procuro catálogos de sebos e listas de edições antigas. Não preciso dos volumes por enquanto, apenas das referências completas.'}]}
];
// Conversas ambientais do arquivo; os registros anteriores continuam preservados.
general.push(
{id:'mostras',date:'14/05/1995',author:'LUCERNA',subject:'Filmes exibidos uma única vez',category:'CINEMA',posts:[{author:'LUCERNA',date:'14/05/1995',text:'Tenho programas de duas pequenas mostras com filmes que nunca mais encontrei. Alguns eram em Super 8. Será que as cópias ficaram com os realizadores?'},{author:'NIX',date:'15/05/1995',text:'Me mande os títulos. Tenho uma caixa de programas aqui.'},{author:'ARQUIVUM',date:'16/05/1995',text:'Às vezes só o cineclube guarda uma cópia. Vale perguntar.'}]},
{id:'vhs',date:'02/11/1996',author:'ORPHEUS',subject:'Cópias em VHS de curtas nacionais',category:'CINEMA',posts:[{author:'ORPHEUS',date:'02/11/1996',text:'Alguém gravou os curtas que passaram na televisão no domingo? Procuro cópias em VHS, mesmo com os intervalos. Esqueci de programar o aparelho.'},{author:'LUCERNA',date:'03/11/1996',text:'Gravei dois. O começo do primeiro ficou cortado.'}]},
{id:'creditos',date:'18/03/1997',author:'NIX',subject:'Filme sem créditos finais',category:'CINEMA',posts:[{author:'NIX',date:'18/03/1997',text:'Veio uma fita sem etiqueta junto de um lote. O filme acaba antes dos créditos. Parece um curta sobre uma estação de ônibus. Alguém reconhece?'},{author:'ORPHEUS',date:'19/03/1997',text:'Pode ser gravação de TV. Tinha esse problema quando a fita acabava.'}]},
{id:'inventarios',date:'21/02/1995',author:'ARQUIVUM',subject:'Inventários particulares',category:'HISTÓRIA',posts:[{author:'ARQUIVUM',date:'21/02/1995',text:'Estou comparando um inventário familiar com recibos guardados na mesma caixa. Há móveis na lista que ninguém da família lembra. Vou manter as descrições originais.'},{author:'ANIMA',date:'22/02/1995',text:'Boa ideia. Os nomes usados nos recibos podem ser diferentes.'}]},
{id:'predios',date:'09/08/1996',author:'CASSIEL',subject:'Fotografias de prédios demolidos',category:'HISTÓRIA',posts:[{author:'CASSIEL',date:'09/08/1996',text:'Procuro fotografias da antiga rua da estação, antes da abertura da avenida. Serve recorte de jornal também. Quero comparar as fachadas.'},{author:'MOTH',date:'10/08/1996',text:'Tenho uma fotografia de uma festa na rua. Aparecem duas casas ao fundo.'}]},
{id:'datas',date:'11/01/1997',author:'MOTH',subject:'Datas conflitantes em documentos',category:'HISTÓRIA',posts:[{author:'MOTH',date:'11/01/1997',text:'Uma ata registra a inauguração em 1928, mas o jornal diz 1929. Pode ter sido abertura parcial? Estou anotando as duas datas por enquanto.'},{author:'ARQUIVUM',date:'12/01/1997',text:'Confira se o jornal fala da cerimônia ou do início das atividades.'}]},
{id:'cameras',date:'07/04/1995',author:'NIX',subject:'Equipamentos fotográficos antigos',category:'COLECIONISMO',posts:[{author:'NIX',date:'07/04/1995',text:'Procuro um anel adaptador para uma lente fora de fabricação. A câmera funciona, mas a rosca não bate com nenhuma das peças que tenho.'},{author:'SOLVE',date:'08/04/1995',text:'Tenho uma parecida. Me passe o diâmetro da rosca.'}]},
{id:'fabricante',date:'16/09/1996',author:'SOLVE',subject:'Objetos sem marca de fabricante',category:'COLECIONISMO',posts:[{author:'SOLVE',date:'16/09/1996',text:'Uma caixa de metal veio sem inscrição nenhuma. Tem duas dobradiças e forro de tecido. Há algum catálogo bom para comparar esse tipo de objeto?'},{author:'CASSIEL',date:'17/09/1996',text:'Veja o fecho e os parafusos. Podem ajudar mais que o formato.'}]},
{id:'negativos',date:'04/02/1998',author:'ANIMA',subject:'Caixas de negativos',category:'COLECIONISMO',posts:[{author:'ANIMA',date:'04/02/1998',text:'Achei negativos em envelopes de papel num imóvel fechado. Alguns estão grudados. Não vou tentar separar à força. Quem já passou por isso?'},{author:'MOTH',date:'05/02/1998',text:'Já vi isso acontecer com negativo mal armazenado. Melhor pedir avaliação antes de mexer.'}]},
{id:'ruido',date:'03/06/1995',author:'MOTH',subject:'Ruído em gravação',category:'RELATOS',posts:[{author:'MOTH',date:'03/06/1995',text:'Uma fita de entrevista faz um assobio sempre no mesmo trecho. No aparelho do meu irmão quase não aparece. Achei estranho porque o resto está bom.'},{author:'NIX',date:'04/06/1995',text:'Isso provavelmente é defeito da fita ou do cabeçote. Teste outra gravação nesse aparelho.'},{author:'SOLVE',date:'04/06/1995',text:'Já tive isso com fita guardada perto de um alto-falante.'}]},
{id:'sonhos',date:'17/12/1996',author:'NOCTIS',subject:'Sonhos recorrentes depois de uma viagem',category:'RELATOS',posts:[{author:'NOCTIS',date:'17/12/1996',text:'Voltei de uma viagem e tenho sonhado com a mesma estrada. No sonho a curva fica do lado contrário. Talvez seja só cansaço. Mais alguém guarda lugares assim na cabeça?'},{author:'ANIMA',date:'18/12/1996',text:'Acontece comigo depois de viajar de ônibus. Misturo pedaços de lugares.'}]},
{id:'perspectiva',date:'09/03/1998',author:'CASSIEL',subject:'Lugares que parecem diferentes em fotografias',category:'RELATOS',posts:[{author:'CASSIEL',date:'09/03/1998',text:'Revi fotografias de uma casa onde passei as férias. O corredor parece enorme, mas lembro dele bem curto. Não sei se é a lente ou minha lembrança.'},{author:'NIX',date:'10/03/1998',text:'Uma grande-angular muda bastante a impressão de distância.'},{author:'MOTH',date:'11/03/1998',text:'A altura de quem tira a fotografia também faz diferença.'}]},
{id:'catalogos',date:'12/04/1995',author:'ARQUIVUM',subject:'Catálogos antigos digitalizados',category:'DOCUMENTOS',posts:[{author:'ARQUIVUM',date:'12/04/1995',text:'Consegui digitalizar algumas páginas de catálogos de revistas fora de circulação. Os arquivos ficaram grandes. Vou separar por edição e guardar os originais.'},{author:'SOLVE',date:'13/04/1995',text:'Me mande o número da edição. Posso conferir as páginas que faltam.'}]},
{id:'carta',date:'28/07/1996',author:'LUCERNA',subject:'Carta sem remetente',category:'DOCUMENTOS',posts:[{author:'LUCERNA',date:'28/07/1996',text:'Veio uma carta dentro de um livro comprado no sebo. Não tem envelope nem assinatura, só um nome de rua. Parece tratar de uma mudança.'},{author:'ARQUIVUM',date:'29/07/1996',text:'Vou procurar nos meus arquivos. Você consegue ler o nome completo da rua?'}]},
{id:'datilografado',date:'22/05/1998',author:'SOLVE',subject:'Documento datilografado sem assinatura',category:'DOCUMENTOS',posts:[{author:'SOLVE',date:'22/05/1998',text:'Quero estimar a época de um documento datilografado. O papel não tem marca visível. A grafia de algumas palavras é antiga, mas isso sozinho não resolve.'},{author:'CASSIEL',date:'23/05/1998',text:'Compare os endereços citados e a numeração dos telefones. Costuma ajudar.'}]},
{id:'modems',date:'05/02/1995',author:'NIX',subject:'Modems mais estáveis',category:'OUTROS ASSUNTOS',posts:[{author:'NIX',date:'05/02/1995',text:'Minha conexão cai quando alguém atende a extensão. Há algum ajuste no modem que ajude ou tenho que trocar a fiação?'},{author:'NOCTIS',date:'06/02/1995',text:'Teste sem a extensão primeiro. Aqui era um conector ruim.'}]},
{id:'cassete',date:'19/06/1996',author:'MOTH',subject:'Alguém ainda usa fita cassete?',category:'OUTROS ASSUNTOS',posts:[{author:'MOTH',date:'19/06/1996',text:'Ainda gravo programas de rádio em cassete. Tenho uma pilha sem etiqueta e estou tentando organizar. Vocês anotam o conteúdo na caixa ou na fita?'},{author:'ORPHEUS',date:'20/06/1996',text:'Nos dois. As caixas sempre acabam trocadas.'},{author:'ANIMA',date:'21/06/1996',text:'Também faço uma lista num caderno. Senão nunca acho nada.'}]},
{id:'conectado',date:'31/12/1997',author:'ORPHEUS',subject:'Quem ainda está conectado?',category:'OUTROS ASSUNTOS',posts:[{author:'ORPHEUS',date:'31/12/1997',text:'Passei só para desejar um bom ano. Vou desligar antes que comecem a reclamar do telefone ocupado. Tem alguém aí?'},{author:'NOCTIS',date:'31/12/1997',text:'Ainda por aqui. Bom ano para todos!'},{author:'NIX',date:'01/01/1998',text:'Cheguei atrasado. Feliz ano novo.'}]}
);
const content=document.getElementById('content');
const searchPanel=document.querySelector('.search-panel');
const historyStack=[];
let state={screen:'menu'};
function el(tag,text,className){const node=document.createElement(tag);if(text!==undefined)node.textContent=text;if(className)node.className=className;return node;}
function go(next){historyStack.push(state);state=next;render();}
function back(){state=historyStack.pop()||{screen:'menu'};render();}
function addBack(){const previous=historyStack[historyStack.length-1];const button=el('button',state.screen==='topic'&&previous?.screen==='category'?'[ VOLTAR AO FÓRUM ]':'[ VOLTAR ]','back');button.type='button';button.addEventListener('click',back);content.append(button);}
function list(entries,profile=false){const ul=el('ul',undefined,'message-list'+(profile?' topic-list':''));for(const topic of entries){const li=el('li');const button=el('button');button.type='button';button.dataset.topic=topic.id;button.append(el('span','['+topic.date+']'));if(profile)button.append(el('span',topic.category));button.append(el('span',topic.author));button.append(el('span',topic.subject,'subject'));button.addEventListener('click',()=>go({screen:'topic',id:topic.id}));li.append(button);ul.append(li);}content.append(ul);}
function render(){content.replaceChildren();searchPanel.hidden=state.screen!=='search';
if(state.screen==='menu'){
  const menu=el('div',undefined,'main-menu');
  for(const [label,screen] of [
    ['[1] MENSAGENS','messages'],
    ['[2] FÓRUNS','forums'],
    ['[3] ARQUIVOS','files'],
    ['[4] USUÁRIOS','users'],
    ['[5] BUSCA','search'],
    ['[0] SAIR','exit']
  ]){
    const button=el('button',label);
    button.type='button';
    button.addEventListener('click',()=>{
      go({screen});
      if(screen==='search') document.getElementById('query').focus();
    });
    menu.append(button);
  }
  content.append(menu);
}
else if(state.screen==='messages'){content.append(el('h2','ÚLTIMAS MENSAGENS'),el('p','Bem-vindo ao arquivo. Mensagens preservadas de uma rede de conversas independente.','intro'));const head=el('div',undefined,'table-head');head.append(el('span','DATA'),el('span','APELIDO'),el('span','ASSUNTO'));content.append(head);list(general.slice(0,5));content.append(el('p','O acervo está disponível para consulta. Respostas e novos cadastros estão desabilitados.','notice'));addBack();}
else if(state.screen==='results'){if(state.user){content.append(el('h2','USUÁRIO LOCALIZADO'));const dl=el('dl',undefined,'profile');for(const [label,value]of [['Apelido:','VESPER'],['Cadastro:','1993'],['Última atividade:','1994'],['Tópicos preservados:',String(topics.length)]])dl.append(el('dt',label),el('dd',value));content.append(dl,el('h2','RESULTADOS DO ARQUIVO'));list(topics,true);}else{content.append(el('h2','RESULTADO DA BUSCA'));if(state.ids.length)list([...general,...topics].filter(topic=>state.ids.includes(topic.id)));else content.append(el('p','Nenhum registro localizado.'));}addBack();}
else if(state.screen==='topic'){const topic=[...topics,...general].find(item=>item.id===state.id);content.append(el('h2',topic.subject),el('p','FÓRUM: '+topic.category+' / SOMENTE LEITURA','intro'));for(const [index,post] of topic.posts.entries()){if(index===1)content.append(el('h2','RESPOSTAS'));const article=el('article',undefined,'post');const meta=el('div',undefined,'post-meta');meta.append(el('b','AUTOR: '+post.author),el('span','DATA: '+post.date));const body=el('div',undefined,'post-body');for(const paragraph of post.text.split('\n\n'))body.append(el('p',paragraph));article.append(meta,body);content.append(article);}addBack();}
else if(state.screen==='forums'){content.append(el('h2','FÓRUNS'));const ul=el('ul',undefined,'directory');for(const category of ['CINEMA','HISTÓRIA','COLECIONISMO','RELATOS','DOCUMENTOS','OUTROS ASSUNTOS']){const li=el('li');const button=el('button','[ '+category+' ]');button.addEventListener('click',()=>go({screen:'category',category}));li.append(button);ul.append(li);}content.append(ul);addBack();}
else if(state.screen==='category'){content.append(el('h2',state.category));list(general.filter(topic=>topic.category===state.category));content.append(el('p','Seleção de mensagens públicas. Outros registros podem ser localizados pela busca.','notice'));addBack();}
else if(state.screen==='files'){content.append(el('h2','ARQUIVOS DISPONÍVEIS'),el('p','Catálogo preservado. Transferência de arquivos desabilitada.','intro'));for(const [name,size]of [['LEIA-ME.TXT','2 KB'],['SALAS.GIF','38 KB'],['CATALOGO.ZIP','124 KB'],['BIBLIO.DOC','16 KB']]){const row=el('div',undefined,'file-row');row.append(el('b',name),el('span',size+' / ÍNDICE'));content.append(row);}addBack();}
else if(state.screen==='users'){content.append(el('h2','USUÁRIOS / LISTAGEM PARCIAL'));const ul=el('ul',undefined,'user-list');for(const name of ['ANIMA','ARQUIVUM','CASSIEL','LUCERNA','MOTH','NIX','NOCTIS','ORPHEUS','RMEIRELES','SOLVE','VESPER'])ul.append(el('li',name));content.append(ul);addBack();}
else if(state.screen==='search'){content.append(el('h2','CONSULTA AO ARQUIVO'),el('p','Use o campo acima para localizar um usuário, assunto ou palavra-chave.','intro'),el('p','Os registros de usuários são identificados pelo apelido.','notice'));addBack();}
else if(state.screen==='exit'){content.append(el('h2','CONEXÃO ENCERRADA'),el('p','Obrigado pela visita. A base permanece disponível para consulta.'));const button=el('button','[ RECONECTAR ]','back');button.addEventListener('click',()=>go({screen:'menu'}));content.append(button);}
content.focus({preventScroll:true});}
function normalize(value){return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace(/\s+/g,' ');}
document.getElementById('search-form').addEventListener('submit',event=>{event.preventDefault();const query=normalize(document.getElementById('query').value);const alias=query.replace(/^sr\.?\s+/,'');if(alias==='vesper'){go({screen:'results',user:true});return;}const ids=query?[...general,...topics].filter(topic=>normalize(topic.author+' '+topic.subject+' '+topic.posts.map(post=>post.author+' '+post.text).join(' ')).includes(query)).map(topic=>topic.id):[];go({screen:'results',user:false,ids});});

document.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();back();}});
render();


// Ativar esta disponibilidade quando assets/audio/nocturna.mp3 for fornecido.
// Evita pedidos de um arquivo ausente e mantém o console limpo.
const MUSIC_FILE_AVAILABLE = true;
const music=document.getElementById('background-music');
const musicToggle=document.getElementById('music-toggle');
let musicEnabled=true;
let musicAttemptPending=false;
try{musicEnabled=localStorage.getItem('nocturnaMusicEnabled')!=='false';}catch{}
music.volume=0.08;
music.loop=true;
function updateMusicControl(){musicToggle.textContent=musicEnabled?'[ MÚSICA: ON ]':'[ MÚSICA: OFF ]';musicToggle.setAttribute('aria-pressed',String(musicEnabled));}
async function tryMusic(){if(!MUSIC_FILE_AVAILABLE||!musicEnabled||!music.paused||musicAttemptPending)return;musicAttemptPending=true;try{await music.play();}catch{}finally{musicAttemptPending=false;if(!musicEnabled)music.pause();}}
musicToggle.addEventListener('click',()=>{musicEnabled=!musicEnabled;try{localStorage.setItem('nocturnaMusicEnabled',String(musicEnabled));}catch{}updateMusicControl();if(musicEnabled)tryMusic();else music.pause();});
document.addEventListener('click',event=>{if(event.isTrusted)tryMusic();});
document.addEventListener('keydown',event=>{if(event.isTrusted&&!event.repeat&&(event.key==='Enter'||event.key===' '))tryMusic();});
updateMusicControl();
tryMusic();


