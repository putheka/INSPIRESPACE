// ProductDashBoard.jsx
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import BASE_URL from '../BASE_URL';
import PreviewCardInfo from "../component/PreviewCardInfo";
import AddProductModal from "../component/AddProductModal";

const ProductDashBoard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredText, setFilteredText] = useState('');
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [SelectedProduct, setSelectedProduct] = useState([])

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
    },
    {
      name: 'Title',
      selector: (row) => row.title,
    },
    {
      name: 'Description',
      selector: (row) => row.description,
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
        let filteredProduct = data.filter((p) => p.category.name.toLowerCase() === "furniture");
        setProducts(filteredProduct);
        setLoading(false);
      })
      .catch((error) => console.log('Error is: ', error));
  }, [filteredText]);

  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filteredText.toLowerCase())
  );

  const RowclickHandler = (row) => {
        setSelectedProduct(row);
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
          <div className='d-flex justify-content-between'>
            <div className='col-3 mx-auto mt-1'>
              {/* {filteredProducts.length > 0 && <PreviewCardInfo product={filteredProducts[0]} />} 
              */}
              <PreviewCardInfo product={SelectedProduct} />
            </div>
            <div className='data-table col-8'>
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
                      onClick={() => setShowAddProductModal(true)}
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
                data={filteredProducts}
                onRowClicked={RowclickHandler}
              />
            </div>
          </div>
        </div>
      )}

      {/* Add Product Modal */}
      <AddProductModal
        show={showAddProductModal}
        onHide={() => setShowAddProductModal(false)}
      />
    </>
  );
};

export default ProductDashBoard;
    