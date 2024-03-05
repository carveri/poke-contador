import Image from 'next/image'
import React from 'react'
import SideMenuItem from './SideMenuItem'
import { dataSidebar } from '../Utils/dataSidebar'

const Sidebar = () => {

  return (
    <div id="menu" style={{width:'350px'}} className="bg-black min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll">
           <div id="logo" className="my-4 px-6">
            <h1 className="text-lg md:text-2xl font-bold text-white">
                <span>Dashboard</span>
            <span className="text-blue-500">8</span>.</h1>
            <p className="text-slate-500 text-sm">Manage your actions and activities</p>
           </div>
           <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Welcome back,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
                <span>
                    <Image 
                        className="rounded-full w-8 h-8" 
                        src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" 
                        alt="foto de perfil"
                        width={50}
                        height={50}
                        />
                </span>
                <span className="text-sm md:text-base font-bold">
                    Carveri
                </span>
                </a>
           </div>
           <div id="nav" className="w-full px-6">
            {dataSidebar.map((element)=>{
                const {path, icon, title, subTitle} = element
                return <SideMenuItem
                    key={path}
                    path={path}
                    title={title}
                    subTitle={subTitle}
                    icon={icon}
            />
            })}
           </div>
        </div>
  )
}

export default Sidebar