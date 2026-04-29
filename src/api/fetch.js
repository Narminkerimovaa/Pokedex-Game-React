// API: https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon_id}.png
// example : https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png //

export async function getData(pokemon_id) {
  try {
    const response = await fetch(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon_id}.png`);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Xəta:", error);
  }
}
