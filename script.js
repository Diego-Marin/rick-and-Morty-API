const contentE = document.querySelector('#content');

function load() {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            //pintar las card
            console.log('DATA', data);
            const results = data.results;

            results.map((item, index, array) => {
                const card = `<div class="card">${item.name}</div>`;
                contentE.innerHTML += card;
            });
        })
    .catch ((error)=>{
        console.log('error', error);
    });
}

load();