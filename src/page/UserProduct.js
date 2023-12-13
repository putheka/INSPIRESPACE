import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import BASE_URL from "../BASE_URL";
import ProductCard from "../component/ProductCards"
import "../style/UserProduct.css"; 

const UserProduct = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  const PER_PAGE = 6;
  const offset = currentPage * PER_PAGE;
  const currentPageData = data.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(data.length / PER_PAGE);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <>
      <h1 className="text-center my-5">INSPIRESPACE PRODUCT</h1>
      <div className="container">
        <div className="row">
          {currentPageData.map(product =>
            <div className='col-md-4 py-3' key={product.id}>
              <ProductCard
                images={product.images}
                title={product.title}
                price={product.price}
                id={product.id}
                description={product.description}
              />
            </div>
          )}
        </div>
      </div>

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
    </>
  );
};

export default UserProduct;