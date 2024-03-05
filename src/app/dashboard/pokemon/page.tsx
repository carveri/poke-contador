import { getData } from '@/app/Fetch/getData'
import React from 'react'
import Badge from './Components/Badge'


const page = async() => {
    
    const limit = 66
    const pokemones = await getData(limit)
        

  return (
    <div className='w-screen h-screen '>
       <header className='h-14 w-full  grid place-content-center text-xl'>
        Lista de pokemones
       </header>
       <div className='h-5/6 grid grid-cols-7 grid-rows-auto gap-x-3 gap-y-2'>
            {pokemones.results.map((element)=>{
                const {name, url} = element
                const id = element.url.split('/').at(-2)
                return <div key={url}>
                    <Badge
                    name={name}
                    url = {url}   
                    id={id} 
                />
                </div>
            })}
        </div>
    </div>
  )
}

export default page