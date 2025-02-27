const titolo = document.getElementById("titolo")
const testo = document.getElementById("testo")
const hero = document.getElementById("hero")



//prende il valore del parametro 'id_rivoluzione' 
let params = new URLSearchParams(document.location.search);
const param = params.get("id_rivoluzione");

//fetch dati
let key = "rivoluzioni"
if(sessionStorage.getItem(key)==null){
  fetch("./rivoluzioni.json")
  .then(res => res.json())
  .then(data =>{
    dati_card = data.rivoluzioni
    sessionStorage.setItem(key,JSON.stringify(dati_card))
    console.log("from json");
  }).then(()=>main())
  
}
else{
  console.log("from sessionstorage");
  dati_card = JSON.parse(sessionStorage.getItem(key))
  main()
}

//popola i campi
function main(){
  display_nav_link()

  if (dati_card[parseInt(param)] == null) {
    titolo.innerText = "Rivoluzione Non trovata"
    return;
  }
  testo.innerText = dati_card[parseInt(param)].descrizione_lunga
  titolo.innerText = dati_card[parseInt(param)].nome
  hero.style.backgroundImage = `url(./${dati_card[parseInt(param)].path_immagine})`

  document.title = document.title +' - '+ dati_card[parseInt(param)].nome

}

function display_nav_link(){
  dati_card.forEach(rv => {
    nav_menu.innerHTML += `<li class="sub-link"><a class="nav-link" href="rivoluzione.html?id_rivoluzione=${rv.id}">${rv.nome}</a></li>`
  });
}