import React, { useEffect, useState } from 'react'

function Practice1() {
  const [ispen, setisopen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)


  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
  }, [width])


  return (
    <div className={` ${ispen ? "fixed top-0 bottom-0 left-0 right-0 z-[999999] flex-col" : ""} items-center bg-indigo-500 text-white py-2 flex justify-between px-5`} >
      <i class="fa-solid fa-pen text-3xl cursor-pointer hover:scale-125 hover:opacity-50 duration-200"></i>

      {        
          Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className={`${width < 1000 && !ispen ? "hidden" : "" }`} >
              <h4 className='cursor-pointer hover:scale-125 hover:opacity-50' >element ${i}</h4>
            </div>
          ))        
      }

      <div>
        <h2 className={` ${ ispen ? "bg-yellow-400 text-6xl" : "bg-slate-400 text-sm" } `} > {ispen ? "abierto" : "cerrado"} </h2>
      </div>


      <i onClick={()=>setisopen(!ispen)} className={`${ispen ? "fa-close" : ""} ${width > 1000 && "hidden"} fas fa-bars text-3xl cursor-pointer hover:scale-125 hover:opacity-50 duration-200`} > </i>
    </div>
  )
}

export default Practice1