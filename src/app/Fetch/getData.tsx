import { Pokemons } from "../Interfaces/Pokemons"


export const getData = async(limit = 10):Promise<Pokemons>=>{
    const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`

    const res = await fetch(apiUrl)
    const desjson = await res.json()

    return desjson
}