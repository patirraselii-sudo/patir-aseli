'use strict';
const ADMIN='6285113220034';
const dataJoki=[
 {name:'JOKI FREE? PM',price:'Rp 0',duration:'FREE',desc:'TEBAR SW 24 JAM',free:true},
 ...[[2,1000],[3,2000],[4,3000],[5,4000],[6,5000],[7,6000]].map(([d,p])=>({name:`JOKI ${d} HARI`,price:`Rp ${p.toLocaleString('id-ID')}`,duration:`${d} hari`,desc:'TEBAR ALL GB WARJOK + SW'})),
 {name:'JOKI PERMANEN',price:'Rp 7.000',duration:'PERMANEN',desc:'TEBAR ALL GB WARJOK + SW'}
];
const dataSuntik=[{heading:'PENGIKUT SALURAN WA',items:[['250 PENGIKUT','Rp 2.000'],['300 PENGIKUT','Rp 2.500'],['400 PENGIKUT','Rp 3.500'],['500 PENGIKUT','Rp 4.500'],['1 RB PENGIKUT','Rp 6.000'],['1,5 RB PENGIKUT','Rp 9.000'],['2 RB PENGIKUT','Rp 11.000'],['2,5 RB PENGIKUT','Rp 13.000'],['3 RB PENGIKUT','Rp 15.000'],['4 RB PENGIKUT','Rp 20.000'],['5 RB PENGIKUT','Rp 25.000']]},{heading:'REACTION SALURAN WA',items:[['50 REACTION','Rp 500'],['100 REACTION','Rp 1.000'],['200 REACTION','Rp 2.000'],['300 REACTION','Rp 3.000'],['400 REACTION','Rp 4.000'],['500 REACTION','Rp 5.000'],['600 REACTION','Rp 6.000'],['700 REACTION','Rp 7.000'],['800 REACTION','Rp 8.000'],['900 REACTION','Rp 9.000'],['1.000 REACTION','Rp 10.000']]},{heading:'VOTE SALURAN WA',items:[['50 VOTE','Rp 1.500'],['55 VOTE','Rp 2.500'],['60 VOTE','Rp 3.500'],['65 VOTE','Rp 4.500'],['70 VOTE','Rp 5.500'],['75 VOTE','Rp 6.500'],['100 VOTE','Rp 7.500'],['150 VOTE','Rp 8.500']]}];
const dataDigital=[{name:'MURLOG',price:'Rp 1.000',desc:'KEUNTUNGAN:\n> BISA JADI KANG LOGO\n> BISA BIKIN LOGO SENDIRI\n> DIKASIH MENTAHAN\n> BISA OPEN JASLOG\n> BISA OPEN MURLOG LAGI'},{name:'MURWEB',price:'Rp 7.000',desc:'KEUNTUNGAN:\n> BISA BIKIN WEB PRODUK/JUALAN\n> BISA OPEN JASA BIKIN WEB\n> BISA BIKIN WEB SEPUASNYA\n> DIKASIH TUTOR + PROMPT\n> BISA OPEN MURWEB LAGI'},{name:'MURNOK',price:'Rp 2.000',desc:'KEUNTUNGAN:\n> BISA JUALAN NOKOS\n> BISA JADI KANG NOKOS\n> BISA GACHA NOKOS\n> BISA OPEN MURNOK LAGI'},{name:'MURFS',price:'Rp 1.000',desc:'KEUNTUNGAN:\n> BISA OPEN JASA FS\n> BISA BIKIN FS SEPUASNYA\n> BISA BIKIN FS SENDIRI\n> BISA OPEN MURFS LAGI'},{name:'MURSUN',price:'Rp 5.000',desc:'KEUNTUNGAN:\n> BISA OPEN SUNTIK SOSMED\n> BISA JADI KANG SUNTIK SOSMED\n> BISA SUNTIK SOSMED SENDIRI\n> BISA OPEN MURSUN LAGI'}];
const $=id=>document.getElementById(id), esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function wa(text){location.href=`https://wa.me/${ADMIN}?text=${encodeURIComponent(text)}`}
function makeItem(name,price,type,description='',extra={}){return `<article class="item package-card"><div class="item-info"><span class="package-tag">${esc(extra.tag||'PAKET')}</span><b>${esc(name)}</b><div class="item-desc">${esc(description)}</div><div class="pr">${esc(price)}</div></div>${extra.noButton?'':`<button type="button" class="btn-order" data-paket="${esc(name)}" data-harga="${esc(price)}" data-tipe="${type}" data-durasi="${esc(extra.duration||'')}" data-free="${extra.free?'1':'0'}">${extra.label||'ORDER'}</button>`}</article>`}
function render(){ $('joki').innerHTML=dataJoki.map(a=>makeItem(a.name,a.price,'joki',a.desc,{tag:a.duration==='PERMANEN'?'PERMANEN':a.duration==='FREE'?'FREE':a.duration.toUpperCase().replace(' HARI',' HARI'),duration:a.duration,free:a.free})).join('');
$('suntik').innerHTML=dataSuntik.map(g=>`<section class="package-group"><h2 class="group-title">${esc(g.heading)}</h2>${g.items.map(a=>makeItem(a[0],a[1],g.heading.includes('PENGIKUT')?'suntik-followers':'suntik-message')).join('')}</section>`).join('');
$('digital').innerHTML=dataDigital.map(a=>makeItem(a.name,a.price,'digital',a.desc)).join('');
$('jasa').innerHTML=`<section class="package-group"><h2 class="group-title">JASA DIGITAL</h2>${[['Jasa Post Free','Hubungi Admin','TIR MAU JASA POST DONG'],['Jasa Rekber/MC','Hubungi Admin','TIR MAU REKBER DONG'],['Jasa Created Web','Rp 5.000 - 15.000','TIR MAU ORDER JASA BIKIN WEB DONG']].map(a=>`<article class="item package-card"><div class="item-info"><b>${a[0]}</b><div class="item-desc">${a[1]==='Hubungi Admin'?'Layanan melalui admin':a[1]}</div></div><button class="btn-order quick-wa" data-message="${a[2]}">Hubungi Admin</button></article>`).join('')}<h2 class="group-title">JASA LOGO</h2>${[['Logo Biasa','Rp 1.000','TIR MAU ORDER JASLOG BIASA'],['Logo QRIS','Rp 1.000','TIR MAU ORDER JASLOG QRIS'],['Logo Wallpaper','Rp 1.000','TIR MAU ORDER JASLOG WALLPAPER'],['Logo Ft Cs','Rp 1.000','TIR MAU ORDER JASLOG FT CS'],['Logo List Fee Rekber','Rp 1.000','TIR MAU ORDER JASLOG LIST REKBER']].map(a=>`<article class="item package-card"><div class="item-info"><span class="package-tag">JASA LOGO</span><b>${a[0]}</b><div class="pr">${a[1]}</div></div><button class="btn-order quick-wa" data-message="${a[2]}">ORDER</button></article>`).join('')}<article class="item package-card"><div class="item-info"><b>Jasa Video FS</b><div class="item-desc">CLOSE ❌</div></div><span class="status-close">CLOSE ❌</span></article><article class="item package-card"><div class="item-info"><b>Nokos (Tambahan)</b><div class="item-desc">Stok dan harga: Rp 5.000–6.000</div></div><button class="btn-order quick-wa" data-message="TIR ADA STOK NOKOS?">Hubungi Admin</button></article></section>`;
}
render();
// Sinkronkan paket Joki Kontak dari Supabase jika konfigurasi sudah diisi.
(async function loadJokiFromDatabase(){
  const cfg=window.PATIR_SUPABASE_CONFIG;
  if(!window.supabase || !cfg || !cfg.url || !cfg.anonKey || cfg.anonKey.includes('PASTE_SUPABASE')) return;
  try {
    const client=window.supabase.createClient(cfg.url,cfg.anonKey);
    const {data,error}=await client.from('services').select('id,name,category,description,price,is_active,sort_order').eq('category','Joki Kontak').eq('is_active',true).order('sort_order',{ascending:true}).order('id',{ascending:true});
    if(error) throw error;
    if(Array.isArray(data) && data.length){
      const dbItems=data.map(row=>({name:row.name,price:'Rp '+Number(row.price||0).toLocaleString('id-ID'),duration:(row.name.match(/(\d+) Hari/i)||[])[1] ? (row.name.match(/(\d+) Hari/i)[1]+' hari') : (row.name.toLowerCase().includes('permanen')?'PERMANEN':''),desc:row.description||'Paket Joki Kontak PATIR ASELI',free:false}));
      $('joki').innerHTML=dbItems.map(a=>makeItem(a.name,a.price,'joki',a.desc,{tag:a.duration==='PERMANEN'?'PERMANEN':a.duration.toUpperCase(),duration:a.duration})).join('');
    }
  } catch(err) { console.warn('Layanan Supabase belum dimuat; daftar lokal tetap digunakan.',err.message); }
})();
window.showList=function(type){
  $('home').style.display='none';
  document.querySelectorAll('.listPage').forEach(p=>p.style.display='none');
  const aliases={pesanan:'pesanan',jasa:'jasa',about:'about',joki:'joki',suntik:'suntik',digital:'digital'};
  const target=aliases[type];
  const page=target ? $('list-'+target) : null;
  if(page) page.style.display='block';
  window.scrollTo({top:0,behavior:'smooth'});
};
window.showHome=function(){
  $('home').style.display='block';
  document.querySelectorAll('.listPage').forEach(p=>p.style.display='none');
  window.scrollTo({top:0,behavior:'smooth'});
};
window.showAbout=function(){window.showList('about')};
const orders=[
['RJ-2026-4401','te****','Joki 2 hari','MASUK ANTRIAN'],
['RJ-2026-4402','ra****','Joki 2 hari','MASUK ANTRIAN'],
['RJ-2026-4403','mo****','Joki 2 hari','MASUK ANTRIAN'],
['RJ-2026-4404','ki****','Joki 2 hari','MASUK ANTRIAN'],
['RJ-2026-4405','sa****','Joki 2 hari','MASUK ANTRIAN'],
['RJ-2026-4406','pe****','Joki 2 hari','MASUK ANTRIAN'],
['RJ-2026-4407','pa****','Joki 2 hari','MASUK ANTRIAN'],
['RJ-2026-4408','ma****','Joki 2 hari','MASUK ANTRIAN'],
['RJ-2026-4409','ke****','Joki 2 hari','MASUK ANTRIAN'],
['RJ-2026-4410','yu****','Joki 2 hari','MASUK ANTRIAN'],
['RJ-2026-4411','va****','Joki 3 hari','MASUK ANTRIAN'],
['RJ-2026-4412','ba****','Joki 3 hari','MASUK ANTRIAN'],
['RJ-2026-4413','bo****','Joki 3 hari','MASUK ANTRIAN'],
['RJ-2026-4414','xi****','Joki 3 hari','MASUK ANTRIAN'],
['RJ-2026-4415','sh****','Joki 3 hari','MASUK ANTRIAN'],
['RJ-2026-4416','za****','Joki 3 hari','MASUK ANTRIAN'],
['RJ-2026-4417','jb****','Joki 3 hari','MASUK ANTRIAN'],
['RJ-2026-4418','zx****','Joki 3 hari','MASUK ANTRIAN'],
['RJ-2026-4419','ra****','Joki 3 hari','MASUK ANTRIAN'],
['RJ-2026-4420','tr****','Joki 3 hari','MASUK ANTRIAN'],
['RJ-2026-4421','my****','Joki 4 hari','MASUK ANTRIAN'],
['RJ-2026-4422','ab****','Joki 4 hari','MASUK ANTRIAN'],
['RJ-2026-4423','su****','Joki 4 hari','MASUK ANTRIAN'],
['RJ-2026-4424','se****','Joki 4 hari','MASUK ANTRIAN'],
['RJ-2026-4425','ka****','Joki 4 hari','MASUK ANTRIAN'],
['RJ-2026-4426','wa****','Joki 4 hari','MASUK ANTRIAN'],
['RJ-2026-4427','si****','Joki 4 hari','MASUK ANTRIAN'],
['RJ-2026-4428','za****','Joki 4 hari','MASUK ANTRIAN'],
['RJ-2026-4429','ha****','Joki 4 hari','MASUK ANTRIAN'],
['RJ-2026-4430','ul****','Joki 5 hari','MASUK ANTRIAN'],
['RJ-2026-4431','lu****','Joki 5 hari','MASUK ANTRIAN'],
['RJ-2026-4432','ka****','Joki 5 hari','MASUK ANTRIAN'],
['RJ-2026-4433','mi****','Joki 5 hari','MASUK ANTRIAN'],
['RJ-2026-4434','sa****','Joki 5 hari','MASUK ANTRIAN'],
['RJ-2026-4435','fa****','Joki 5 hari','MASUK ANTRIAN'],
['RJ-2026-4436','fi****','Joki 5 hari','MASUK ANTRIAN'],
['RJ-2026-4437','vi****','Joki 5 hari','MASUK ANTRIAN'],
['RJ-2026-4438','al****','Joki 5 hari','MASUK ANTRIAN'],
['RJ-2026-4439','ca****','Joki 5 hari','MASUK ANTRIAN'],
['RJ-2026-4440','il****','Joki 5 hari','MASUK ANTRIAN'],
['RJ-2026-4441','di****','Joki 6 hari','MASUK ANTRIAN'],
['RJ-2026-4442','an****','Joki 6 hari','MASUK ANTRIAN'],
['RJ-2026-4443','af****','Joki 6 hari','MASUK ANTRIAN'],
['RJ-2026-4444','di****','Joki 6 hari','MASUK ANTRIAN'],
['RJ-2026-4445','bi****','Joki 6 hari','MASUK ANTRIAN'],
['RJ-2026-4446','ha****','Joki 6 hari','MASUK ANTRIAN'],
['RJ-2026-4447','dw****','Joki 6 hari','MASUK ANTRIAN'],
['RJ-2026-4448','na****','Joki 6 hari','MASUK ANTRIAN'],
['RJ-2026-4449','ji****','Joki 6 hari','MASUK ANTRIAN'],
['RJ-2026-4450','wa****','Joki 6 hari','MASUK ANTRIAN'],
['RJ-2026-4451','ne****','Joki 7 hari','MASUK ANTRIAN'],
['RJ-2026-4452','ta****','Joki 7 hari','MASUK ANTRIAN'],
['RJ-2026-4453','ek****','Joki 7 hari','MASUK ANTRIAN'],
['RJ-2026-4454','da****','Joki 7 hari','MASUK ANTRIAN'],
['RJ-2026-4455','im****','Joki 7 hari','MASUK ANTRIAN'],
['RJ-2026-4456','um****','Joki 7 hari','MASUK ANTRIAN'],
['RJ-2026-4457','ma****','Joki 7 hari','MASUK ANTRIAN'],
['RJ-2026-4458','ad****','Joki 7 hari','MASUK ANTRIAN'],
['RJ-2026-4459','si****','Joki 7 hari','MASUK ANTRIAN'],
['RJ-2026-4460','da****','Joki 7 hari','MASUK ANTRIAN']];
let queuePage=0;
const queueRanges=[[0,15],[15,30],[30,60]];
function drawQueue(filter=''){
 const rows=orders.map((o,i)=>({...o,n:i+1})).filter(o=>!filter||o[0].toLowerCase().includes(filter.toLowerCase()));
 const range=queueRanges[queuePage]||queueRanges[0];
 const pageRows=filter?rows:rows.slice(range[0],range[1]);
 $('queueRows').innerHTML=pageRows.map(o=>`<tr><td><span class="queue-number">#${o.n}</span></td><td>${o[0]}</td><td>${o[1]}</td><td>${o[2]}</td><td><span class="queue-status">${o[3]}</span></td></tr>`).join('');
 $('queuePageLabel').textContent=filter?`Hasil pencarian: ${pageRows.length}`:`Menampilkan antrean ${range[0]+1}–${range[1]} dari 60`;
 $('prevQueue').disabled=queuePage===0||!!filter;
 $('nextQueue').disabled=queuePage===2||!!filter;
 $('prevQueue').textContent='← Sebelumnya';
 $('nextQueue').textContent=queuePage===0?'Selanjutnya: 16–30 →':queuePage===1?'Selanjutnya: 31–60 →':'Selanjutnya →';
}
drawQueue();
$('nextQueue').addEventListener('click',()=>{if(queuePage<2)queuePage++;drawQueue($('queueSearch').value.trim())});
$('prevQueue').addEventListener('click',()=>{if(queuePage>0)queuePage--;drawQueue($('queueSearch').value.trim())});
$('queueSearch').addEventListener('input',()=>drawQueue($('queueSearch').value.trim()));
$('queueCheck').addEventListener('click',()=>drawQueue($('queueSearch').value.trim()));
let timerInterval=null,remainingSeconds=900;function updateTimer(){const m=String(Math.floor(remainingSeconds/60)).padStart(2,'0'),s=String(remainingSeconds%60).padStart(2,'0');$('timer').textContent=`${m}:${s}`;remainingSeconds=Math.max(0,remainingSeconds-1);if(remainingSeconds===0)clearInterval(timerInterval)}
function openOrder(paket,harga,tipe,durasi='',free=false){if(tipe==='jaslog'){wa('TIR MAU ORDER JASLOG');return}let base='';if(tipe==='joki'){if(free){wa('TIR MAU JOKI FREE DONG');return}const tag=durasi==='PERMANEN'?'[ PERMANEN ]':`[ BERBAYAR ${durasi.replace(/\s*hari/i,'H').replace(/\s/g,'')} ]`;base=`SV BUYER FRESH PATIR 👑\n${tag}\nSV ;\nWa.me/62..\n\n#NAMBAH VIEW SW + KONTAK + SELLER + BUYYER + DLL 🌤️🌈`; }else if(tipe==='suntik-followers'){base='ORDER SUNTIK SALURAN PATIR ASELI\nNama:\nLink Saluran:\nPaket: \nHarga: '}else if(tipe==='suntik-message'){base='ORDER SUNTIK SALURAN PATIR ASELI\nNama:\nLink Pesan Saluran:\nPaket: \nHarga: '}else{base='ORDER PRODUK DIGITAL PATIR ASELI\nNama:\nJenis Produk:\nPaket:\nHarga:'}if(tipe==='joki')$('format').value=base;else $('format').value=(tipe==='suntik-followers'||tipe==='suntik-message')?base.replace('Paket: \nHarga: ',`Paket: ${paket}\nHarga: ${harga}`):base.replace('Paket:\nHarga:',`Paket: ${paket}\nHarga: ${harga}`);$('overlay').style.display='flex';$('step1').hidden=false;$('step2').hidden=true;$('format').focus()}
document.addEventListener('click',e=>{const b=e.target.closest('.btn-order');if(b){if(b.classList.contains('quick-wa')){wa(b.dataset.message);return}openOrder(b.dataset.paket,b.dataset.harga,b.dataset.tipe,b.dataset.durasi,b.dataset.free==='1');return}if(e.target.id==='closeOverlay'||e.target.id==='overlay'){$('overlay').style.display='none';clearInterval(timerInterval)}});
$('toPayment').addEventListener('click',()=>{const details=$('format').value.trim();if(!details){alert('Silakan isi format pesanan terlebih dahulu.');return}$('finalFormat').value=details;$('waConfirm').href=`https://wa.me/${ADMIN}?text=${encodeURIComponent(details)}`;$('step1').hidden=true;$('step2').hidden=false;remainingSeconds=900;clearInterval(timerInterval);updateTimer();timerInterval=setInterval(updateTimer,1000)});$('editOrder').addEventListener('click',()=>{$('step2').hidden=true;$('step1').hidden=false});
