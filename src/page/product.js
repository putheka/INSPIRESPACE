import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import BASE_URL from '../BASE_URL';
import TableItem from '../component/TableItem';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);  // Define pageCount state
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredText, setFilteredText] = useState('');

  const PER_PAGE = 5;
  const offset = currentPage * PER_PAGE;
  const currentPageData = products.slice(offset, offset + PER_PAGE);

  const getAllProducts = async () => {
    try {
      const res = await axios.get(BASE_URL);
      const data = res.data;
      let filteredProduct = data.filter((p) => p.category.name.toLowerCase() === "furniture");
      setProducts(filteredProduct);
      setPageCount(Math.ceil(filteredProduct.length / PER_PAGE)); // Set pageCount based on filtered data
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading && (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "49vh" }}>
          <button className="btn btn-success" type="button" disabled>
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Loading...
          </button>
        </div>
      )}

      {!loading && (
        
        
        <div className="table-responsive container">
          <div className='d-flex justify-content-between'>
            <button
            className='btn btn-primary mt-5'
                  onClick={() => {
                    // Handle the addition of a new product
                  }}
            > Add Product
            </button>
            <input
                  className='form-control'
                  onChange={(e) => setFilteredText(e.target.value)}
                  type='text'
                  name='search'
                  placeholder='Search by title...'
                />   
          </div>
          <table className="table table-hover table-dark mt-2">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Product Image</th>
                <th scope="col">Title</th>
                <th scope="col"className='d-none d-md-block'>Description</th>
                {/* <th scope="col"className='d-none d-md-block'>Price</th> */}
              </tr>
            </thead>
            <tbody>
              {currentPageData.map(product => (
                <TableItem
                  key={product.id}
                  id={product.id}
                  images={product.images}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                />
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          {pageCount > 1 && (
            <div className="pagination-container">
              <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Products;
