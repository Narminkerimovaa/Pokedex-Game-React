import Card from "../ui/Card"
import { pad } from "../../utils/battleUtil" 

const PokeTeam=({pokemon,onPokiClick})=>{
    return (
        <Card variant="pokeCard" onClick={() => onPokiClick(pokemon)}>
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pad(pokemon.id)}.png`} />
            <h4>{pokemon.name}</h4>
            <p>{pokemon.base_experience}XP</p>       
        </Card>
    )
}

export default PokeTeam