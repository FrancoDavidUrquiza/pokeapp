//DOM Elements 
const dataCardElement = document.querySelector("[data-card]");
const pokeName = document.querySelector("[poke-name]");
const imgElement = document.querySelector("[poke-img]");
const inputElement = document.querySelector("[input-poke]").value;
const btn = document.querySelector("[poke-btn]");


const requestURL = new URL("https://pokeapi.co/api/v2");


btn.addEventListener('click', btnPokemon)

function btnPokemon () {

}

async function getPokemon (name){
    requestURL.pathname +=`/pokemon/${name}`
    let data = '';
    try{
        const dataPromise = await fetch(requestURL);
        if(!dataPromise.ok){
            throw new Error('Bad fetch response', dataPromise)

        }
        data = await dataPromise.json();
    }
    catch(error){
        console.log(error)
    }
    console.log(data)
    return data
}

 function displayPokemon (pokemon) {
    pokeName.textContent = pokemon.forms[0].name
    imgElement.setAttribute('src',pokemon['sprites']['other']['official-artwork']['front_default'])
    
}

const result = getPokemon('pikachu')
result.then((data)=> displayPokemon(data));



