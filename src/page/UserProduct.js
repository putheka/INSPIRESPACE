import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import BASE_URL from "../BASE_URL";
import ProductCard from "../component/ProductCards";
import PlaceholderCard from "../component/placeholdercard";
import "../style/UserProduct.css";

const UserProduct = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Corrected function name
  
  const PER_PAGE = 6;
  const startIndex = currentPage * PER_PAGE;     
  const currentPageData = data.slice(startIndex, startIndex + PER_PAGE);
  const pageCount = Math.ceil(data.length / PER_PAGE);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        let filteredProduct = data.filter((p) => p.category.name.toLowerCase() === "furniture")
        setData(filteredProduct);
        setIsLoading(false); // Set loading to false after fetching data
      });
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const placeholderCards = (number) => {
    let placeholders = [];
    for (var i = 0; i < number; i++) {
      placeholders.push(
        <div className="col-4">
          <PlaceholderCard />
        </div>
      );
    }
    return placeholders;
  };

  return (
    <>
      <h1 className="text-center my-5">INSPIRESPACE PRODUCT</h1>
      <div className="container">
      <div className="row">
          {isLoading ? (
            <>
              {placeholderCards(6)}
            </>
          ) : (
            currentPageData.length === 0 ? (
              <>
              <img src="https://img.freepik.com/premium-photo/blue-folder-with-red-stop-sign-isolated-white_226262-195.jpg?size=626&ext=jpg&ga=GA1.1.1587386060.1703438607&semt=ais" 
              style={{ height: "40vh",  width:"40vh"}}
              />
              <h1>There is no product to show</h1>
              </>
            ) : (
              currentPageData.map(product => (
                <div className='col-md-4 py-3' key={product.id}>
                  <ProductCard
                    images={product.images}
                    title={product.title}
                    price={product.price}
                    id={product.id}
                    description={product.description}
                  />
                </div>
              ))
            )
          )}
        </div>
      </div>


      {data.length > PER_PAGE && (
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
    </>
  );
};

export default UserProduct;
