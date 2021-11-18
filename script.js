async function buscaPokemon() {
  const codigoPokemon = document.getElementById("codigoPokemon");
  const imgPokemon = document.getElementById("pokemon");

  imgPokemon.src = "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif";

  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${codigoPokemon.value}`)
  .then(function (resp) {
    return resp.json();
  });
  imgPokemon.src = result.sprites.other.home.front_default;
}