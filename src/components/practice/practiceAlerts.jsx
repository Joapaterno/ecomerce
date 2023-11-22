import React from 'react'
import Swal from 'sweetalert2'


function PracticeAlerts() {

  let info = {
    url : "asdfasdf",
    url : "asdfasdf",
    url : "asdfasdf",
    url : "asdfasdf",
    url : "asdfasdf"
  }


  const handleclick  = () => {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'success',
      html: `
      <div>
      <h4>title</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus soluta praesentium vel assumenda hic cum nemo corrupti atque culpa, quis ratione, aut iste et eaque illo minima, quibusdam expedita cupiditate?
      <button className='bg-indigo-500 text-white px-3 py-2 text-2xl' > click me </button>
      </p>
    </div>     
      `,
      confirmButtonText: 'Cool'  
    })
  }



  return (
    <>
      <div onClick={()=>handleclick()} >PracticeAlerts</div>
      <div>
        <h4>title</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus soluta praesentium vel assumenda hic cum nemo corrupti atque culpa, quis ratione, aut iste et eaque illo minima, quibusdam expedita cupiditate?</p>
        <button className='bg-indigo-500 text-white px-3 py-2 text-2xl' > click me </button>
      </div>    
    </>
  )
}

export default PracticeAlerts