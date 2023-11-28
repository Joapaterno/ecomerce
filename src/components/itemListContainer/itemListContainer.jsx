import { useState, useEffect } from "react";
import Item from "../../components/item/item";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/client";
import { collection, addDoc, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [filtrado, setFiltrado] = useState([]);
  const [categoria, setCategoria] = useState('');
  const { nombreCategoria } = useParams();

  

  let show = [];

  const fetchData = async () => {
    const data = await getDocs(collection(db, "products"));
    const productsArray = []
    
    data.forEach((doc) => {
      productsArray.push(doc.data())
    });
    setProducts( productsArray )           
  } 

  const filtrar = async () => {
    const data = await getDocs(collection(db, "products"));
    const productsArray = []
    
    data.forEach((doc) => {
      productsArray.push(doc.data())
    });
    
    let filtrado = setFiltrado(productsArray.filter((pr) => pr.category === nombreCategoria));      
  }



  useEffect(() => {       
    if (nombreCategoria !== undefined) {
      console.log('filtro')
      filtrar();
    } else {
      console.log('no filtro')
      fetchData();
      console.log(filtrado)
    }
    
  }, [nombreCategoria ]);
  
  show = nombreCategoria !== undefined ? filtrado : products;
  

  return (    




    <div className="flex flex-wrap justify-center gap-4 mt-4" >
      {/* {console.log(products)}     */}
      {show.length > 0 ? (
        <>
          {show.map((pr) => (
            <Item producto={pr} key={pr.id} />
          ))}
        </>
      ) : (
        <Spinner
          animation="border"
          variant="danger"
          className="custom-spinner"
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;