// UpdateProductModal.jsx
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { UPDATE_PRODUCT_BY_ID, UPLOAD_FILE } from '../utils/fileService';

const UpdateProductModal = ({ updatedProduct, showProduct, handleCloseProductForm }) => {
  const [title, setTitle] = useState(updatedProduct ? updatedProduct.title : '');
  const [price, setPrice] = useState(updatedProduct ? updatedProduct.price : 0);
  const [description, setDescription] = useState(updatedProduct ? updatedProduct.description : '');
  const [categoryId, setCategoryId] = useState(updatedProduct ? updatedProduct.category.id : 16);
  const [images, setImages] = useState(updatedProduct ? updatedProduct.images : []);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(updatedProduct ? updatedProduct.images[0] : 'https://img.freepik.com/premium-psd/upload-folder-3d-icon_136651-1164.jpg?size=626&ext=jpg&ga=GA1.1.1587386060.1703438607&semt=ais');

  useEffect(() => {
    setTitle(updatedProduct ? updatedProduct.title : '');
    setDescription(updatedProduct ? updatedProduct.description : '');
    setPrice(updatedProduct ? updatedProduct.price : 0);
    setCategoryId(updatedProduct ? updatedProduct.category.id : 16);
    setImages(updatedProduct ? updatedProduct.images : []);
    setSelectedImage(updatedProduct ? updatedProduct.images[0] : 'https://img.freepik.com/premium-psd/upload-folder-3d-icon_136651-1164.jpg?size=626&ext=jpg&ga=GA1.1.1587386060.1703438607&semt=ais');
  }, [updatedProduct]);

  const handleProductClose = () => {
    handleCloseProductForm();
  };

  const handleUpdateProduct = () => {
    setIsLoading(true);

    const productData = {
      title,
      price,
      description,
      categoryId,
      images: [],
    };

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
              handleCloseProductForm();
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
          handleCloseProductForm();
        })
        .catch((error) => {
          console.error('Error updating product', error);
          toast.error('Failed to update product!');
          setIsLoading(false);
        });
    }
  };

  const handleImageChange = (e) => {
    setSelectedFile(e.target.files[0]);
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(imageUrl);
  };

  return (
    <Modal size="lg" show={showProduct} onHide={handleProductClose}>
      {/* ... (similar structure as in your original code) */}
    </Modal>
  );
};

export default UpdateProductModal;
