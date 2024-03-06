'use client'

import {useState} from 'react'

const Contador = () => {

    const [contador, setContador] = useState(0)

    const handleClickContador = (e:any)=>{
        if(e.target.name === 'suma'){
            setContador(contador + 1)
        }
        else if(e.target.name === 'resta'){
            setContador(contador - 1)
        }
        else{
            console.log('aas');
        }
    }

  return (
    <section className='w-80 h-80  grid grid-row-2 mt-60 border-2 border-blue-600 bg-gray-600 md:w-96 lg:w-96"'>
          <header className='w-full h-20  grid place-content-center text-2xl'>
            {contador}
          </header>
          <article className='w-full h-44  grid grid-cols-2 place-items-center'>
            <button name='suma' onClick={handleClickContador} className='w-28 h-20 bg-blue-700 text-white text-4xl'>
              +
            </button>
            <button name='resta' onClick={handleClickContador} className='w-28 h-20 bg-green-700 text-white text-4xl'>
              -
            </button>
          </article>
        </section>
  )
}

export default Contador