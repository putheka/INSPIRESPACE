import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import GET_ALL_PRODUCTS from "../services/productService";
import ProductCard from "../component/ProductCards";
import PlaceholderCard from "../component/placeholdercard";
import Carousel from 'react-bootstrap/Carousel';
import "../style/UserProduct.css";

const UserProduct = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const PER_PAGE = 6;
  const startIndex = currentPage * PER_PAGE;
  const currentPageData = data.slice(startIndex, startIndex + PER_PAGE);
  const pageCount = Math.ceil(data.length / PER_PAGE);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(GET_ALL_PRODUCTS)
      .then((res) => res.json())
      .then((data) => {
        let sortedProduct = data.sort((a, b) => b.id - a.id);
        let filteredProduct = data.filter((p) => p.category.name.toLowerCase() === "furniture")
        setData(filteredProduct , sortedProduct);
        setIsLoading(false);
      });
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const placeholderCards = (number) => {
    let placeholders = [];
    for (var i = 0; i < number; i++) {
      placeholders.push(
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={i}>
          <PlaceholderCard />
        </div>
      );
    }
    return placeholders;
  };

  return (
    <>
  
      <div className="container">
        <div className="row">
          {isLoading ? (
            <>
              {placeholderCards(6)}
            </>
          ) : (
            <>
              {currentPageData.length === 0 ? (
                <>
                  <img
                    src="https://img.freepik.com/premium-photo/blue-folder-with-red-stop-sign-isolated-white_226262-195.jpg?size=626&ext=jpg&ga=GA1.1.1587386060.1703438607&semt=ais"
                    style={{ height: "40vh", width: "40vh" }}
                    alt="No products"
                  />
                  <h1>There is no product to show</h1>
                </>
              ) : (
                <>
                  <div className="col-md-12 text-center mb-4 mt-5">
                  <div className="w-50 h-90 mx-auto ">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 h-90"
                        src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" 
                        
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 h-90  rounded-3"
                        src="https://plus.unsplash.com/premium_photo-1678402545077-7a9ec2b5e5b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8fDB8fHww"
                       
                      />
                      
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 h-90 rounded-3"
                        src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                        
                      />
                
                    </Carousel.Item>
                  </Carousel>
                  </div>
                  </div>
                  <h1 className="text-center my-5">INSPIRESPACE PRODUCT</h1>
                  {currentPageData.map(product => (
                    <div className='col-lg-4 col-md-6 col-sm-12 mb-4' key={product.id}>
                      <ProductCard
                        images={product.images}
                        title={product.title}
                        price={product.price}
                        id={product.id}
                        description={product.description}
                        >
                        </ProductCard>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </div>

      {data.length > PER_PAGE && (
        <div className="pagination-container mb-5">
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
