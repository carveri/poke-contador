import { SimplePokemon } from '@/app/Interfaces/SimplePokemon'
import Image from 'next/image'
import React from 'react'

const Badge = ({name, url, id}:SimplePokemon) => {


  return (
    <div className='w-full h-full border-2 border-gray-300 pb-4'>
        <div className='h-5/6'>
            <section className='h-4/6 grid place-content-center'>
               <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
                alt="as" 
                width={120}
                height={120}
                />
            </section>
            <section className='h-2/6 w-full grid place-items-center'>
                <article className='capitalize'>
                    {name}
                </article>
                <article className='w-36 rounded-lg border-2 border-gray-400 grid place-content-center'>
                    mas info
                </article>
            </section>
        </div>
        <section className='h-1/6 w-full grid place-content-center'>
            <article>
                <span><input type="checkbox" /></span> no es favorito
            </article>
            <article>
                ver no se que mierda
            </article>
        </section>
    </div>
  )
}

export default Badge