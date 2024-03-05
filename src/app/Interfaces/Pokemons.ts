
export interface Results {
    name: string
    url: string
}

export interface Pokemons{
    count: number
    next: ''
    previous: null
    results: Results[]
}