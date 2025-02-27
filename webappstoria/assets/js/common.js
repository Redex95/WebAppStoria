const nav_menu =  document.getElementById("rev_list")


nav_menu.innerHTML += `<li class="home-list-el"><a class="nav-link" href="/">Home</a></li>`
nav_menu.innerHTML += `<li class="fav-list-el"><a href="/preferiti.html" class="nav-link">Preferiti</a></li>`
nav_menu.innerHTML += `<li class="search-list-el"><a class="nav-link" href="/search.html">Cerca</a></li>`
nav_menu.innerHTML += `<li class="rev-list-el"><a class="nav-link" href="/RivoluzioniHome.html">Rivoluzioni</a></li>`

function add_favorites(e,id){
  if(saved.includes(id)){
    let index = saved.indexOf(id)
    saved.splice(index,1)
    e.classList.remove("saved")
  }
  else{
    saved.push(id)
    e.classList.add("saved")
  }
  localStorage.setItem("favorites",JSON.stringify(saved))
}

function set_favorites(){
  let cards = Array.from(card_container_child).filter(card=> typeof card.id  != 'undefined');
  cards.forEach(card=>{
    let id_num = parseInt(card.id.split("-")[1])
    if(saved.includes(id_num)){
      card.querySelector(".save").classList.add("saved") 
    }
  })
}

function getpage(id){
  document.location.href = '/rivoluzione.html'+`?id_rivoluzione=${id}`
}