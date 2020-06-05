console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", fetchDogs)

function fetchDogs() {
    fetch(breedUrl)
        .then(res => res.json())
        .then(json => {
            Object.keys(json.message).forEach(breed => {
                let li = document.createElement("li")
                let ul = document.querySelector("#dog-breeds")
                li.addEventListener('click', changeColor)
                li.innerText = breed
                ul.appendChild(li)
            })
        })
}

fetch(imgUrl)
    .then(response => response.json())
    .then(json => {
        json.message.forEach(img => {
            let ul = document.createElement("ul");
            let li = document.createElement("li");
            let imgTag = document.createElement("img")
            imgTag.setAttribute("src", img);
            li.appendChild(imgTag);
            ul.appendChild(li);
            let dogImg = document.querySelector("#dog-image-container");
            dogImg.appendChild(ul)
        })
    })

function changeColor (e) {
    console.log('click')
    e.target.style.color = 'red'
    
}