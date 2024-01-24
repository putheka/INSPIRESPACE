import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import BASE_URL from '../services/productService';
import PreviewCardInfo from "../component/PreviewCardInfo";
import AddProductModal from "../component/ProductModal";
import { Modal } from 'react-bootstrap';

const ProductDashBoard = () => {
  const [products, setProducts] = useState([]);
  const [updatedProduct,setupdateProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredText, setFilteredText] = useState('');
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCardVisible, setIsCardVisible] = useState(true);
  

  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      width: '100px',
    },
    {
      name: 'Image',
      selector: (row) => (
        <img
          className='img-fluid m-1'
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = 'https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png';
          }}
          style={{ width: '100px', height: '100px' }}
          src={row.images[0]}
          alt=' product Image '
        />
      ),
      width: '150px',
    },
    {
      name: 'Title',
      selector: (row) => row.title,
      width: '300px',
    },
    {
      name: 'Description',
      selector: (row) => row.description,
      width: '600px',
    },
    {
      name: 'Price',
      selector: (row) => row.price,
      sortable: true,
    },
  ];

  useEffect(() => {
    
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        let sortedProduct = data.sort((a, b) => b.id - a.id);
        let filteredProduct = data.filter((p) =>
          p.category.name.toLowerCase() === "furniture" &&
          p.title.toLowerCase().includes(filteredText.toLowerCase())
        );
        setProducts(filteredProduct, sortedProduct);
        setLoading(false);
      })
      .catch((error) => console.log('Error is: ', error));
  }, [
    filteredText,setShowAddProductModal
  ]);


  const handleProductUpdate = (updatedProduct) => {
    setupdateProduct(updatedProduct)
    setShowAddProductModal(true);


  }

  const RowclickHandler = (row) => {
    setSelectedProduct(row);
    
  }

  const closeModal = () => {
    setSelectedProduct(null);
  }


  const handleStateChange = (deletedProductId) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== deletedProductId));
  }


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
        <div className='container mt-5'>
          <div className='d-flex  justify-content-between'>
            <div className='data-table col-12'>
              <DataTable
                className='table table-striped table-hover w-100'
                subHeader={true}
                pointerOnHover={true}
                selectableRowsHighlight={true}
                highlightOnHover={true}
                pagination={true}
                columns={columns}
                responsive={true}
                paginationPerPage={5}
                striped
                bordered hover variant="dark"
                subHeaderComponent={
                  <div className='d-flex w-100 justify-content-between'>
                    <button
                      className='btn btn-success'
                      onClick={() => {
                        setShowAddProductModal(true)
                        setupdateProduct(null)
                      }} 
                    >
                      Add Product
                    </button>

                    <input
                      onChange={(e) => setFilteredText(e.target.value)}
                      type='text'
                      name='search'
                      placeholder='Search by title...'
                    />

                  </div>
                }
                data={products}
                onRowClicked={RowclickHandler}
              />
            </div>
          </div>
        </div>
      )}

      <AddProductModal
      updatedProduct={updatedProduct}
      showProduct={showAddProductModal}
      handleCloseProductForm={() => setShowAddProductModal(false)}
     
      />

      <Modal show={isCardVisible && !!selectedProduct} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <PreviewCardInfo
            product={selectedProduct}
            onDelete={handleStateChange}
            onUpdate={handleProductUpdate}
            onClick={closeModal}
          />

        </Modal.Body>
      </Modal>

    </>
  );
};

export default ProductDashBoard;