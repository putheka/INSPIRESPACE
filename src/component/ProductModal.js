import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ThreeCircles } from 'react-loader-spinner'
import { toast } from 'react-toastify';
import { CREATE_PRODUCT, UPDATE_PRODUCT_BY_ID, UPLOAD_FILE } from '../services/productService';

const AddProductModal = ({ updatedProduct, showProduct, handleCloseProductForm, isUpdate }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState(3);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState('https://img.freepik.com/premium-psd/upload-folder-3d-icon_136651-1164.jpg?size=626&ext=jpg&ga=GA1.1.1587386060.1703438607&semt=ais');

  useEffect(() => {
    if (updatedProduct) {
      console.log("Effect triggered with updatedProduct:", updatedProduct);
      setTitle(updatedProduct.title || '');
      setDescription(updatedProduct.description || '');
      setPrice(updatedProduct.price || 0);
      setCategoryId(updatedProduct.category.id || 3);
      setImages(updatedProduct.images || []);
      setSelectedImage(updatedProduct.images ? updatedProduct.images[0] : 'https://img.freepik.com/premium-psd/upload-folder-3d-icon_136651-1164.jpg?size=626&ext=jpg&ga=GA1.1.1587386060.1703438607&semt=ais');
    } else {
      setTitle('');
      setDescription('');
      setPrice();
      setCategoryId(3);
      setImages([]);
      setSelectedImage('https://img.freepik.com/premium-psd/upload-folder-3d-icon_136651-1164.jpg?size=626&ext=jpg&ga=GA1.1.1587386060.1703438607&semt=ais');
    }
  }, [updatedProduct]);

  const handleProductClose = () => {
    handleCloseProductForm();
  };

  const handleCreateNewProduct = () => { 
    setIsLoading(true);

    const productData = {
      title,
      price,
      description,
      categoryId,
      images: [],
    };

    if (updatedProduct) {
      // Handle update logic
      if (selectedFile) {
        const fileData = new FormData();
        fileData.append('file', selectedFile);

        UPLOAD_FILE(fileData)
          .then((response) => {
            productData.images.push(response.location);

            UPDATE_PRODUCT_BY_ID(updatedProduct.id, productData)
              .then(() => {
                toast.success('Updated Product Successfully!');
                setIsLoading(false);
              })
              .catch((error) => {
                console.error('Error updating product', error);
                toast.error('Failed to update product!');
                setIsLoading(false);
              });
          })
          .catch((error) => {
            console.error('Error uploading file', error);
            toast.error('Failed to upload file!');
            setIsLoading(false);
          });
      } else {
        productData.images = updatedProduct.images;

        UPDATE_PRODUCT_BY_ID(updatedProduct.id, productData)
          .then(() => {
            toast.success('Updated Product Successfully!');
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('Error updating product', error);
            toast.error('Failed to update product!');
            setIsLoading(false);
          });
      }
    } else {
      // Handle create logic
      if (selectedFile) {
        const fileData = new FormData();
        fileData.append('file', selectedFile);

        UPLOAD_FILE(fileData)
          .then((response) => {
            productData.images.push(response.location);

            CREATE_PRODUCT(productData)
              .then(() => {
                
                toast.success('Created Product Successfully!');
                setIsLoading(false);
              })
              .catch((error) => {
                console.error('Error creating product', error);
                toast.error('Failed to create product!');
                setIsLoading(false);
              });
          })
          .catch((error) => {
            console.error('Error uploading file', error);
            toast.error('Failed to upload file!');
            setIsLoading(false);
          });
      } else {
        // No file selected
        CREATE_PRODUCT(productData)
          .then(() => {
            toast.success('Created Product Successfully!');
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('Error creating product', error);
            toast.error('Failed to create product!');
            setIsLoading(false);
          });
      }
    }
  };

  const handleImageChange = (e) => {
    setSelectedFile(e.target.files[0]);
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(imageUrl);
  };

  return (
    <Modal size="lg" show={showProduct} onHide={handleProductClose}>
      <Modal.Header closeButton={false}>
        <Modal.Title className="m-auto">
          {updatedProduct ? 'Update Product' : 'Create New Product'}
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
  <div className="d-flex justify-content-between">
    <div className="img-side">
      <label htmlFor="file-input">
        <div className="preview-container">
          <img
            id="preview-image"
            className="img-fluid img-thumbnail"
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px' }}
            src={selectedImage}
            alt="Product Preview"
          />
          <div className="upload-icon">
           
          </div>
        </div>
        <input
          className="form-control d-none"
          type="file"
          name=""
          onChange={handleImageChange}
          id="file-input"
          multiple
        />
      </label>
    </div>

    <div className="form-side w-50 ms-3">
      <Form>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Product Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <div className="text-center">
          <Button
            variant={updatedProduct ? 'warning' : 'success'}
            className="w-90 justify-content-center"
            onClick={handleCreateNewProduct}
          >
            {isLoading ? (
             <ThreeCircles
             visible={true}
             height="25"
             width="50"
             color="#4fa94d"
             ariaLabel="three-circles-loading"
             wrapperClass=""/>
            ) : (
              updatedProduct ? 'Update Product' : 'Create Product'
            )}
          </Button>
        </div>
      </Form>
    </div>
  </div>
</Modal.Body>
    </Modal>
  );
};

export default AddProductModal;