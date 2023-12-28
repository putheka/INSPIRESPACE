// import { GET_ALL_PRODUCTS } from '../services/productService'
import { useEffect, useState } from 'react'
import axios from 'axios'
import BASE_URL from '../BASE_URL'
// import ProductCard from '../component/ProductCards'
import TableItem from '../component/TableItem'


const Products = () =>
{
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getAllProducts = async () =>
  {
    const res = await axios.get(BASE_URL)
    const data = res.data
    let filteredProduct = data.filter((p) => p.category.name.toLowerCase() === "furniture")
    setProducts(filteredProduct)
    setLoading(false)
  }

  useEffect(() =>
  {
    // call this function when page is created
    getAllProducts()
    console.log(products)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(products)
  return <>
    {loading &&
    <div className="d-flex justify-content-center align-items-center" style={{ height: "49vh" }}>
    <button className="btn btn-success" type="button" disabled>
      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      Loading...
    </button>

  </div>
    }

    {!loading && 
    <div className="table-responsive container">
      <table className="table table-hover table-dark mt-5">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Product Image</th>
          <th scope="col">Title</th>
          <th scope="col" className='d-none d-md-block'>Description</th>
        </tr>
      </thead>

      <tbody>
        {products.map(product =>
          <TableItem
            key={product.id}
            id={product.id}
            images={product.images}
            title={product.title}
            price={product.price}
            description={product.description}
          >
          </TableItem>
        )}
      </tbody>
    </table>
    </div>}
    
  </>
}
export default Products