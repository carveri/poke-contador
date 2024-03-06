import { GameIndice } from '@/app/Interfaces/Pokemon/InterGameIndice'
import Link from 'next/link'
import React from 'react'

const BadgeAtaque = ({pokemon}:any) => {
  return (
    <div className='w-full h-full grid grid-rows-2 bg-gray-700'>
      <section>
        <h1>Ataques</h1>
        
      </section>
      <section className='flex'>
        <article className='w-4/5'>
          <header className='w-full h-24 grid place-content-center text-2xl'>
            Juegos
          </header>
          <div className='grid grid-cols-3'>
            {pokemon.game_indices.map((element:GameIndice)=>{
              const {version} = element
              return <div
                className='text-xl'
                key={version.url}>
                {version?.name}
            </div>
            })}
          </div>
        </article>
        <article className='1/5 grid place-items-center'>
          <div className='bg-blue-600 w-44 h-20 grid place-content-center'>
            <Link className='py-5 px-16' href='/dashboard/pokemon'>
              Volver
            </Link>
          </div>
        </article>
      </section>
    </div>
  )
}

export default BadgeAtaque