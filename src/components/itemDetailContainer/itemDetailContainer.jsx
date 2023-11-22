import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../item/itemDetail";
import { db } from "../../firebase/client";
import { collection, addDoc, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {

    
      const fetchData = async () => {
        const data = await getDocs(collection(db, "products"));   
        
        
        data.forEach((doc) => {
          
          let p = doc.data()
          
          let pid = p.id
          
          if(pid == id){            
            setProducto(p)
            console.log(producto)
            setLoading(false)  
          }
        });
      } 
      
      fetchData();   
    

  }, []);
  

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-green-800 ">      
      
      {console.log(producto)}

      <ItemDetail producto={producto} />

    </div>
  );
};

export default ItemDetailContainer;
