import { Types } from '@/app/Interfaces/Pokemon/interTypes'
import Image from 'next/image'
import React from 'react'

const BadgePerfil = ({pokemon}:any) => {

    //console.log(pokemon?.types[0]?.type.name);

    const as = pokemon.species.url 
    const ids = as.split('/').at(-2)

  return (
    <div className='w-full h-full bg-gray-800 grid grid-rows-2'>
        <header className='grid place-items-center'>
            <Image 
                src={pokemon?.sprites.front_default} 
                alt="sd"
                width={200}
                height={200}
                />
        </header>
        <main className='w-full h-full grid grid-rows-2 place-content-center text-4xl'>
            <section className='grid place-items-center'>
                #{ids}
            </section>
            <section>
                {pokemon?.forms[0].name}
            </section>
            <section>
                <span className='text-blue-600'>Tipo:</span> {pokemon?.types.map((element:Types)=>{
                    const {type} = element
                    return <div
                         className='grid grid-rows-2'
                         key={type.url}
                         >
                            {type?.name}
                        </div>
                })}
            </section>
        </main>
    </div>
  )
}

export default BadgePerfil