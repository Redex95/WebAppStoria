const card_container =  document.getElementById("card-container");
const save_btn = document.getElementById("save")
const card_container_child = card_container.childNodes



let saved = []

let key = "rivoluzioni"

// fetch dei dati per popolare le card
// controlla che il sessionstorage sia vuoto e prende le info dal file 'rivoluzioni.json'
// altrimenti carica direttamente dal sessionstorage
let dati_card = null
let id_riv = {}

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

if(localStorage.getItem("favorites")!=null){
  saved = JSON.parse(localStorage.getItem("favorites"))
  set_favorites()
}

// usata per raggruppare tutto e fare il display del contenuto quando sono presenti i dati delle card
function main(){
  display_cards()
  display_nav_link()
  set_favorites()
}

//funzione che crea e aggiunge le card 
function display_cards() {
  dati_card.forEach(rv => {
    card_container.innerHTML +=   
    `
    <div class="card scale-hover text-white bg-dark" style="width: 18rem;" id="rev-${rv.id}" >
      <div class="content-container" onclick="getpage(${rv.id})">
        <img src=".${rv.path_immagine}" class="card-img-top" alt="${rv.nome}" >
      
        <div class="card-body">
          <h2 class="card-title">${rv.nome}</h2>
          <p class="card-text">${rv.descrizione_breve}</p>
        </div>
      </div>
      <div class="btn-container">
        <button onclick="add_favorites(this,${rv.id})" class="save">
          <?xml version="1.0" encoding="utf-8"?>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.0309 3.30271C13.0299 2.8991 10.9701 2.8991 8.96913 3.30271C6.66186 3.76809 5 5.82231 5 8.20894V18.6292C5 20.4579 6.9567 21.596 8.51221 20.6721L11.3451 18.9895C11.7496 18.7492 12.2504 18.7492 12.6549 18.9895L15.4878 20.6721C17.0433 21.596 19 20.4579 19 18.6292V8.20894C19 5.82231 17.3381 3.76809 15.0309 3.30271Z" fill="#fff"/>
            </svg>
        </button>
      </div>
    </div> 
    `;
  });
  
}


function display_nav_link(){
  dati_card.forEach(rv => {
    nav_menu.innerHTML += `<li class="sub-link"><a class="nav-link" href="/rivoluzione.html?id_rivoluzione=${rv.id}">${rv.nome}</a></li>`
  });
}



