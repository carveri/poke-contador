import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {


  redirect('/dashboard/counter')

  return (
    <div className='w-screen h-screen'>Pagina inicial de mi bella app</div>
  )
}

export default page