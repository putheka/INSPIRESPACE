import React, { useState } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import BASE_URL from '../BASE_URL';

const AddProductModal = ({ show, onHide, onProductAdded }) => {
  
  
  const [productData, setProductData] = useState({
    title: '',
    price: '',
    description: '',
    categoryId: '',
    images: ['', '', ''],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e, index) => {
    const newImages = [...productData.images];
    newImages[index] = e.target.value;
    setProductData((prevData) => ({
      ...prevData,
      images: newImages,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your API call logic here
    fetch(BASE_URL + '/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        // Optionally, you can handle the response or perform additional actions
        console.log('Product added successfully:', data);
        onProductAdded(); // Notify the parent component that a product has been added
        onHide(); // Close the modal
      })
      .catch((error) => console.error('Error adding product:', error));
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  name="title"
                  value={productData.title}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter price"
                  name="price"
                  value={productData.price}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formDescription">
            <Form.Label className='mt-2'>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter description"
              name="description"
              value={productData.description}
              onChange={handleInputChange}
              rows={3}
              required
            />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group controlId="formCategory">
                <Form.Label>Category ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category ID"
                  name="categoryId"
                  value={productData.categoryId}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            {productData.images.map((image, index) => (
              <Col md={6} key={index}>
                <Form.Group controlId={`formImage${index + 1}`}>
                  <Form.Label>{`Image ${index + 1}`}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={`Enter image URL for Image ${index + 1}`}
                    value={image}
                    onChange={(e) => handleImageChange(e, index)}
                    required
                  />
                </Form.Group>
              </Col>
            ))}
          </Row>

          <Button className='mt-2' variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddProductModal;
