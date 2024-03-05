import { IoLogoReact, IoLogoChrome } from 'react-icons/io5'

export const dataSidebar = [
    {
        id:1,
        path: '/dashboard',
        icon: <IoLogoReact size={40}/>,
        title: 'Dashboard',
        subTitle: 'Soy el dash'
    },
    {
        id:2,
        path: '/dashboard/counter',
        icon: <IoLogoChrome size={40}/>,
        title: 'Counter',
        subTitle: 'Soy el count'
    },
    {
        id:3,
        path: '/dashboard/pokemon',
        icon: <IoLogoChrome size={40}/>,
        title: 'Pokemon',
        subTitle: 'Soy el pokemon'
    },
]