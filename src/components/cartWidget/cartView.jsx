import React, { useEffect, useState } from 'react'
// import { useCart } from '../Contexto/CartContext'
import { useShopContext } from '../shopContext/shopContext'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


function CartView() {
  const {cart, addItem, test} = useShopContext()
  const [valortotal, setvalortotal] = useState(0)
  
  useEffect(() => {
    console.log(cart)

    let valorTotal = 0

    cart.forEach( (item) => {
      valorTotal += item.price * item.cantidad
    })

    console.log(valorTotal)
    setvalortotal(valorTotal)

  }, [cart])
  
  const handlesubmit = (e) =>{
    e.preventDefault()
    console.log(e.target)
    e.target.reset()
  }

  const mostrarAlerta = () => {
    Swal.fire({
      title: 'Compra realizada con exito!',
      text: 'Gracias por su compra',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })

  }


  return (    
      <div className='bg-indigo-600 h-screen text-white' >

        <div className='flex justify-center pt-10' >
          <h5 className='text-2xl' >costo total : {valortotal}  </h5>
        </div>

        <div className='flex items-center flex-col pt-10 gap-10' >
          {cart.map((item) => {
            return (
              <div key={item.id} className='flex flex-col items-center gap-3' >
                <p className='text-3xl'          >{item.title}</p>              
                <p className='text-xl' >{item.cantidad}</p>              
              </div>
            )
          })}          
        </div>        

        {
          cart.length > 0 && (
            <div className='flex justify-center pt-10' >


              <form onSubmit={handlesubmit} className='border px-2 py-4 text-black rounded-lg w-[370px]' action="">

                <div className='w-100 flex items-center gap-3 px-3 py-2' >
                  <label className='text-xl' htmlFor="">Nombre</label>
                  <input type="text" className='w-100 px-2 py-2 rounded-md' placeholder='Nombre' required />
                </div>
                <div className='w-100 flex items-center gap-3 px-3 py-2' >
                  <label className='text-xl' htmlFor="">Direccion</label>
                  <input type="text" className='w-100 px-2 py-2 rounded-md' placeholder='Nombre' required />
                </div>
                <div className='w-100 flex items-center gap-3 px-3 py-2' >
                  <label className='text-xl' htmlFor="">Email</label>
                  <input type="text" className='w-100 px-2 py-2 rounded-md' placeholder='Nombre' required />
                </div>
                <div className='w-100 flex items-center gap-3 px-3 py-2' >
                  <label className='text-xl' htmlFor="">Numero de tarjeta</label>
                  <input type="text" className='w-100 px-2 py-2 rounded-md' placeholder='Nombre' required />
                </div>

                <div className='flex justify-around py-3' >                  
                  <button  className='bg-red-800 p-2 rounded-md text-xl font-bold' >Cancelar</button>
                  <input onClick={mostrarAlerta} className='bg-blue-800 p-2 rounded-md text-xl font-bold' type="submit" value="comprar" />
                </div>




              </form>



            </div>
          )
        }


      </div>
    
  )
}

export default CartView