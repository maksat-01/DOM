// npm - node package manager

// axios

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => res.json())
// .then((data) => console.log(data))


const row = document.querySelector('.row')
const input = document.querySelector('.search-input')
const btn = document.querySelector('.search-btn')


btn.addEventListener("click", () => {
    searchCountry()
})
input.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        searchCountry()
    }
})

function searchCountry() {
    axios(`https://restcountries.com/v3.1/name/${input.value}`)
        .then((result) => {
            console.log(result.data[0])
            result.data.map((el, idx) => (
                row.innerHTML = `<div class="col-4 my-4">
<h1>${idx + 1}</h1>
<img src="${el.flags.svg}" class="col" width="300" height="200" alt="">
<h3>${el.name.official}</h3>
<p>аянты: ${el.area ? el.area + "км" + `<sup>2</sup>` : "ЖОК"}</p>
<p>калкы: ${el.population}</p>
<p>region: ${el.region}</p>
</div>`
            ))
        })
}

function fetchingData() {
    axios('https://restcountries.com/v2/all')
        .then((result) => {
            console.log(result.data.slice(0, 5))
            getCounters(result.data)
        })
}

fetchingData()

function getCounters(data) {
    data.map((el, idx) => (
        row.innerHTML += `<div class="col-4 my-4">
<h1>${idx + 1}</h1>
<img src="${el.flag}" class="col" width="300" height="200" alt="">
<h3>${el.name}</h3>
<p>аянты: ${el.area ? el.area + "км" + `<sup>2</sup>` : "ЖОК"}</p>
<p>калкы: ${el.population}</p>
<p>тили: ${languages.map(el => el.name)}</p>
</div>`
    ))
}