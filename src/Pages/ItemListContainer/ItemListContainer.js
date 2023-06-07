import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Item from '../../components/Item/Item';
import './ItemListContainer.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.config';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    console.log(productos);  

    const categoria = useParams().categoria
/*
    const traerDatos = () => {
        return new Promise((resolve, reject) => {
          resolve(data)
        })
      };
*/
    useEffect(() => {
        const getProductos = async () => {
            try {

            const col = collection(db, "productos")
            const data = await getDocs(col)
            const result = data.docs.map(doc => doc={...doc.data()})
            if(categoria) {
                setProductos(result.filter(prod => prod.categoria === categoria))
            } else {
                setProductos(result)
            }

            } catch (error) {
            console.log(error)
            
            }
    }

    getProductos();

    }, [categoria])
    
/*
    useEffect(() => {
        traerDatos()
            .then((resp) => {
                if (categoria) {
                    setProductos(resp.filter(prod => prod.categoria === categoria))
                } else {
                    setProductos(resp)
                }
            })
    }, [categoria])
*/

    return (
    <>
        <div className='item-list-container'>
            {productos && productos.map((prod) => <Item key={prod.id} producto={prod} /> )}
        </div>
    </>
  )
}

export default ItemListContainer