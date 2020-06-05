console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"



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