let listStorage = {};
let arrayCounter = 0;

let nomeLista = document.getElementById("listName")
let masterDiv = document.getElementById("div")
let searchBox = document.getElementById("searchBox")

function Lista(nome) {
    this.nome = nome
    this.filmes = []
}

function AdicionarFilme(button){
    console.log("filme add")
    searchBox.classList.remove("hidden")

    let parentDiv = button.parentElement;
    let h3Element = parentDiv.querySelector('h3');
    let h3Text = h3Element.innerHTML;
    localStorage.setItem('btnClick', h3Text);
}

function Save(button){
    let myDiv = document.getElementById('div');
    let divHtml = myDiv.innerHTML;
    localStorage.setItem('cachedHtml', divHtml);
}

function RetrieveHtml() {
    let cachedHtml = localStorage.getItem('cachedHtml');

    if (cachedHtml) {
      let container = document.getElementById("div");
      container.innerHTML = cachedHtml;
    }
}

function CreateBlock(nome){
    let newDiv = document.createElement('div')
    newDiv.classList.add("div__lista")

    let newID = "div__" + nome

    newDiv.setAttribute('id', newID);
    localStorage.setItem('div__id', newID);

    let newH3 = document.createElement('h3')
    newH3.innerHTML = nome

    let newBtn = document.createElement("button")
    newBtn.textContent = "Adicionar Filme"
    newBtn.classList.add("button__primary__md")
    newBtn.setAttribute("onclick", "AdicionarFilme(this)")  

    newDiv.appendChild(newH3)
    newDiv.appendChild(newBtn)

    masterDiv.appendChild(newDiv)
}


function NovaLista(){
    const lista1 = new Lista(nomeLista.value);
    console.log(lista1)
    localStorage.setItem('nome', lista1.nome);
    CreateBlock(lista1.nome)
}


function AdicionarFilmeLista(nome){
    searchBox.classList.add("hidden")

    let thisLista = document.getElementById("div__" + localStorage.getItem('btnClick'))

    let divLista = document.createElement("div");
    let posterLista = document.createElement("img");

    posterLista.setAttribute("src", localStorage.getItem('storedPosterSrc'))
    
    divLista.appendChild(posterLista)
    thisLista.appendChild(divLista)


}



//Pesquisar

let url = "https://www.omdbapi.com/?apikey=ef37334f&t="
let searchText = document.querySelector("#searchText")


let postsContainer = document.querySelector("#posts-container")


async function getAllPosts(urls) {

    let response = await fetch(urls);

    let data = await response.json();

    let div = document.createElement("div");
    let title = document.createElement("h3");
    let director = document.createElement("h4");
    let poster = document.createElement("img");
    let button = document.createElement("button");

    title.innerText = data.Title;
    director.innerText = "diretor: " + data.Director;
    poster.setAttribute("src", data.Poster)

    button.textContent = "Adicionar Filme"
    button.classList.add("button__primary__md")
    button.addEventListener('click', AdicionarFilmeLista);

    let posterSrc = poster.src
    localStorage.setItem('storedPosterSrc', posterSrc);

    div.appendChild(title)
    div.appendChild(poster)
    div.appendChild(director)
    div.appendChild(button)

    postsContainer.appendChild(div)
}


function search(){
    apagar();
    let searchQuerry = searchText.value;
    let urls = url + searchQuerry;
    getAllPosts(urls);
    searchText.value = "";
}

function apagar(){
    postsContainer.innerHTML = "";
}


//Execute
RetrieveHtml()