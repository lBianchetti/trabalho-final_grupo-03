let url = "https://www.omdbapi.com/?apikey=ef37334f&t="
let searchText = document.querySelector("#searchText")


let postsContainer = document.querySelector("#posts-container")




async function getAllPosts(urls) {

    let response = await fetch(urls);

    console.log(response);

    let data = await response.json();

    console.log(data);

    let div = document.createElement("div");
    let title = document.createElement("h3");
    let director = document.createElement("h4");
    let poster = document.createElement("img");

    title.innerText = data.Title;
    director.innerText = "diretor: " + data.Director;
    poster.setAttribute("src", data.Poster)

    div.appendChild(title)
    div.appendChild(poster)
    div.appendChild(director)

    postsContainer.appendChild(div)
}


function search(){
    apagar();

    let searchQuerry = searchText.value;

    console.log(url)
    console.log(searchText.value)


    let urls = url + searchQuerry;

    console.log(urls);

    getAllPosts(urls);
    searchText.value = "";
}

function apagar(){
    postsContainer.innerHTML = "";

}