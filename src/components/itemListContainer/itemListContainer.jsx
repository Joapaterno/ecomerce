import { useState, useEffect } from "react";
import Item from "../../components/item/item";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/client";
import { collection, addDoc, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const { nombreCategoria } = useParams();

      
  

  useEffect(() => {
    console.log(123)

    const fetchData = async () => {
      const data = await getDocs(collection(db, "products"));
      
      // console.log(data)
      data.forEach((doc) => {
        // console.log(doc.data()); 
        setProducts( prevProducts => [...prevProducts, doc.data()] )       
      });
      // setProducts(data)
      // setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } 
    fetchData();    

  }, []);

  return (

    <div className="flex flex-wrap justify-center gap-4 mt-4" >
      {/* {console.log(products)}     */}
      {products.length > 0 ? (
        <>
          {products.map((pr) => (
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

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const url = nombreCategoria
//         ? `https://fakestoreapi.com/products/category/${nombreCategoria}`
//         : "https://fakestoreapi.com/products";
//       const response = await fetch(url);
//       const data = await response.json();
//       setProducts(data);
//     } catch
//  (error) {
//       console.error(error);
//     }
//   };

//   fetchData();
// }, [nombreCategoria]);
