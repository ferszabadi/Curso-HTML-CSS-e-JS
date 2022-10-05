fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
.then((response) => response.json())
.then((data) => {

        // selecionar lista
        const lista = document.querySelector('.lista');

        //loop nos pokemons
        data.results.forEach((pokemon) => {

        //request para url do pokemon
        fetch(pokemon.url)
            .then((response) => response.json())
            .then((pokemonData) => {
              
        // criar li
            const modelo = `
                <li class="card">
                    <img class="card-image" src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                        <section class="card-text">
                            <div>
                                <p>${pokemonData.id}</p>
                                <h2>${pokemonData.name}</h2>
                            </div>
                            <div>
                                <h3>Tipo</h3>
                                <p>${pokemonData.types[0].type.name}</p>
                            </div>
                        </section>
                </li>`; //só funciona com crase (interpolação)

            // inserir lis na lista
            lista.insertAdjacentHTML('beforeend', modelo);
        });

        console.log('pokemon name', pokemon.name);
    })
});