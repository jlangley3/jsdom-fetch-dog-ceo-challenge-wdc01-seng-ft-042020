console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function() {
    fetchDogs()
    let breedDown = document.querySelector("#breed-dropdown")
    breedDown.addEventListener("change", breedChange)
})


function breedChange(event) {
    let a = document.querySelector("#dog-breeds")
    fetch(breedUrl)
        .then(res => res.json())
        .then(json => {
            let result = Object.keys(json.message).filter(breed => {
                return breed[0] === event.target.value

            })

            result.forEach(element => {
                console.log(element);
                let liLast = document.querySelector("#dogs")
                let ul = document.querySelectorAll("#dog-breeds")
                liLast.parentNode.removeChild(liLast)
                let li = document.createElement("li")
                li.addEventListener('click', changeColor)
                li.innerText = element
                ul.appendChild(li)
            });

        })
        // })
        // for (i = 0; i < a.children.length; i++) {

    //     let breed = a.children.innerText
    //     console.log(breed)
    //     debugger;
    //     let newVal = breed.filter(letter => {
    //         return letter.innerText[0] === event.target.value
    //     })

    //     let selectBreed;

    //     switch (event.target.value) {
    //         case 'a':
    //             selectBreed = "";
    //             break;
    //         case 'b':
    //             selectBreed = "";
    //             break;
    //         case 'c':
    //             selectBreed = '';
    //             break;
    //         case 'd':
    //             selectBreed = '';
    //             break;
    //     }

    // }
}




function fetchDogs() {
    fetch(breedUrl)
        .then(res => res.json())
        .then(json => {
            Object.keys(json.message).forEach(breed => {
                let li = document.createElement("li")
                li.setAttribute("id", "dogs")
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

function changeColor(e) {
    console.log('click')
    e.target.style.color = 'red'

}