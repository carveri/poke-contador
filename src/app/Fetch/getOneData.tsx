import { GetData } from "../Interfaces/Fetch/getData"

// lo usa:
// app/dashboadr/pokemon/[id]/page

export const getOneData = async({num}:GetData)=>{
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${num}`

    const res = await fetch(apiUrl)
    const desjson = await res.json()

    return desjson
}