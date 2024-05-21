import React from 'react'
import { BiUpload } from 'react-icons/bi'
import { FaUpload } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='w-full text-white z-40 absolute top-0 left-0 flex items-center justify-between px-52 h-20 '>
            <h2 className='text-2xl font-bold  '>ThirdDimension</h2>
            <ul className='flex gap-10'>
                <Link to={"/"}><li className='py-2 font-semibold'>Home</li></Link>
                <Link to={"/upload"}><li className='px-5 py-2 bg-black text-white font-semibold rounded-3xl flex items-center gap-2'>Upload <FaUpload /> </li></Link>
            </ul>
        </div>
    )
}

export default Header