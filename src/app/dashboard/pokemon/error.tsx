'use client' // Error components must be Client Components
 
import Image from 'next/image'
import { useEffect } from 'react'

import imagenError from './../../Assets/Images/imagenError500.png'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])


  
 
  return (
    <div className='w-screen h-screen'>
        <Image 
            src={imagenError} 
            alt="as"
            width={2500}
            height={2500}
            />
    </div>
  )
}