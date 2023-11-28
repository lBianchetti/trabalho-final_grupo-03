let listStorage = {};
let arrayCounter = 0;

let nomeLista = document.getElementById("listName")
let masterDiv = document.getElementById("div")
let searchBox = document.getElementById("searchBox")

function Lista(nome) {
    this.nome = nome
    this.filmes = []
}

function AdicionarFilme(button) {
    console.log("filme add")
    searchBox.classList.remove("hidden")

    let parentDiv = button.parentElement;
    let h3Element = parentDiv.querySelector('h3');
    let h3Text = h3Element.innerHTML;
    localStorage.setItem('btnClick', h3Text);
}

function Save(button) {
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

function CreateBlock(nome) {
    let newDiv = document.createElement('div')
    let newDiv2 = document.createElement('div')

    newDiv.classList.add("div__lista")

    let newID = "div__" + nome

    newDiv.setAttribute('id', newID);
    localStorage.setItem('div__id', newID);

    let newH3 = document.createElement('h3')
    newH3.innerHTML = nome

    newDiv2.classList.add("listaMenu")

    let newBtn = document.createElement("button")
    newBtn.textContent = "Adicionar Filme"
    newBtn.classList.add("button__primary__md")
    newBtn.setAttribute("onclick", "AdicionarFilme(this)")

    let newBtn2 = document.createElement("button")
    newBtn2.textContent = "Excluir Lista"
    newBtn2.classList.add("button__secondary__md")
    newBtn2.setAttribute("onclick", "ExcluirLista(this)")

    newDiv2.appendChild(newH3)
    newDiv2.appendChild(newBtn2)
    newDiv2.appendChild(newBtn)


    newDiv.appendChild(newDiv2)

    masterDiv.appendChild(newDiv)
}


function NovaLista() {
    const lista1 = new Lista(nomeLista.value);
    console.log(lista1)
    localStorage.setItem('nome', lista1.nome);
    CreateBlock(lista1.nome)
}


function AdicionarFilmeLista(nome) {
    searchBox.classList.add("hidden")

    let thisLista = document.getElementById("div__" + localStorage.getItem('btnClick'))

    let thisData = localStorage.getItem('data')
    console.log(JSON.parse(thisData))

    let divLista = document.createElement("div");
    divLista.classList.add("poster")
    let posterLista = document.createElement("img");
    posterLista.setAttribute("src", localStorage.getItem('storedPosterSrc'))
    divLista.appendChild(posterLista)

    let infoLista = document.createElement("div");
    let tituloLista = document.createElement("h3");
    let anoLista = document.createElement("h5");
    let diretorLista = document.createElement("h5");
    let generoLista = document.createElement("h5");
    let plotLista = document.createElement("p");

    let btnExcluirFilme = document.createElement("button")
    btnExcluirFilme.textContent = "Excluir Filme"
    btnExcluirFilme.classList.add("button__secondary__md")
    btnExcluirFilme.classList.add("btnExcluir")
    btnExcluirFilme.setAttribute("onclick", "ExcluirFilme(this)")

    infoLista.classList.add("infos")

    tituloLista.innerText = JSON.parse(thisData).Title
    anoLista.innerText = JSON.parse(thisData).Year
    diretorLista.innerText = JSON.parse(thisData).Director
    generoLista.innerText = JSON.parse(thisData).Genre
    plotLista.innerText = JSON.parse(thisData).Plot

    infoLista.appendChild(tituloLista)
    infoLista.appendChild(anoLista)
    infoLista.appendChild(diretorLista)
    infoLista.appendChild(generoLista)
    infoLista.appendChild(plotLista)
    infoLista.appendChild(btnExcluirFilme)


    divLista.appendChild(infoLista)

    thisLista.appendChild(divLista)
}

function ExcluirFilme(button) {
    let parentDiv2 = button.parentElement;
    parentDiv2.parentElement.remove()

}

function ExcluirLista(button) {
    let parentDiv3 = button.parentElement;
    parentDiv3.parentElement.remove()

}

//Pesquisar

let url = "https://www.omdbapi.com/?apikey=ef37334f&t="
let searchText = document.querySelector("#searchText")


let postsContainer = document.querySelector("#posts-container")


async function getAllPosts(urls) {

    let response = await fetch(urls);

    let data = await response.json();

    localStorage.setItem('data', JSON.stringify(data));

    let div = document.createElement("div");
    // let title = document.createElement("h3");
    // let director = document.createElement("h4");
    let poster = document.createElement("img");
    let button = document.createElement("button");

    // title.innerText = data.Title;
    // director.innerText = "diretor: " + data.Director;
    poster.setAttribute("src", data.Poster)

    button.textContent = "Adicionar Filme"
    button.classList.add("button__primary__md")
    button.addEventListener('click', AdicionarFilmeLista);

    let posterSrc = poster.src
    localStorage.setItem('storedPosterSrc', posterSrc);

    // div.appendChild(title)
    div.appendChild(poster)
    // div.appendChild(director)
    div.appendChild(button)

    postsContainer.appendChild(div)
}


function search() {
    apagar();
    let searchQuerry = searchText.value;
    let urls = url + searchQuerry;
    getAllPosts(urls);
    searchText.value = "";
}

function apagar() {
    postsContainer.innerHTML = "";
}


//Execute
RetrieveHtml()