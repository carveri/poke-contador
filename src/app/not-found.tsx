import Link from 'next/link'
import Sidebar from './Components/Sidebar'
 
export default function NotFound() {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-700 selection:bg-blue-600 selection:text-white">
      <div className="flex ">
          <div>
            <Sidebar />
          </div>
          <div className='w-screen h-screen grid place-items-center text-4xl'>
            <section className='w-96 h-72  grid place-content-center'>
              <div>
                Error 404
              </div>
              <div >
                <Link href='/dashboard/pokemon'>Volver a la lista de pokemones</Link>
              </div>
            </section>
          </div>
      </div>
    </div>
  )
}