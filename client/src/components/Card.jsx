import React, { useState } from 'react'

const Card = ({ model, setShowModel }) => {

  return (
    <div onClick={() => setShowModel(model)} className='rounded-lg cursor-pointer min-h-42 flex flex-col items-center gap-3 '>
      <div className='w-full h-full bg-pink-100 '>
        <img className='object-cover aspect-square hover:scale-105 hover:shadow-lg  hover:shadow-black/70 transition-all ease-in-out duration-500 rounded-lg border-2 hover:border-none border-black/30' src={"https://third-dimension.onrender.com/" + model.thumbnailUrl} alt="" />
      </div>
      <h1 className='font-semibold capitalize text-xl'>{model.title}</h1>
    </div>
  )
}

export default Card