import React from 'react'
import BadgePerfil from './Components/BadgePerfil'
import BadgeAtaque from './Components/BadgeAtaque'
import { getOneData } from '@/app/Fetch/getOneData'
import { InterParams } from '@/app/Interfaces/Pokemon/InterPokemon'

const page = async({params}:InterParams) => {

    //console.log('datos del param: ', params);
    
    const {id} = params
    const num = Number(id)
    //const id = 10
    const pokemon = await getOneData({num})

    //console.log(pokemon);



  return (
    <div className='w-screen h-screen  grid place-items-center'>
        <section className='w-4/5 h-4/5  flex gap-x-2'>
            <section className='w-2/6 h-full'>
                <BadgePerfil
                    pokemon={pokemon}
                />
            </section>
            <section className='w-4/6 h-full'>
                <BadgeAtaque
                    pokemon={pokemon}
                    />
            </section>
        </section>
    </div>
  )
}

export default page