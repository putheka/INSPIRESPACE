// import { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Search = ({ onSearch }) => {
//   const location = useLocation();
//   const navigation = useNavigate();
//   const [q, setQ] = useState('');

//   useEffect(() => {
//     if (location.search.length === 0) {
//       setQ('');
//     }
//   }, [location]);

//   const inputHandler = (e) => {
//     e.preventDefault();
//     const searchTerm = e.target.search.value.toLowerCase();
//     setQ(searchTerm);
//     navigation(`/search?q=${searchTerm}`);
//     onSearch(searchTerm); // Notify the parent component about the search term
//   };

//   return (
//     <div className="container my-5">
//       <form onSubmit={inputHandler} className="mx-auto">
//         <input
//           type="search"
//           className="form-control w-75 my-3 mx-auto clear"
//           autoComplete="off"
//           name="search"
//           defaultValue={q}
//         />
//         <div className="text-center">
//           <button className="btn btn-success me-3" type="submit">
//             Search
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Search;


// import React, { useState } from 'react';
// import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
// import BASE_URL from '../BASE_URL';

// const AddProductModal = ({ show, onHide, onProductAdded }) => {
//   const [productData, setProductData] = useState({
//     title: '',
//     price: '',
//     description: '',
//     categoryId: '16',
//     image: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProductData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setProductData((prevData) => ({
//       ...prevData,
//       image: file,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Upload image file
//       const imageData = new FormData();
//       imageData.append('file', productData.images);

//       const imageUploadResponse = await fetch('https://api.escuelajs.co/api/v1/files/upload', {
//         method: 'POST',
//         body: imageData,
//       });

//       const imageUploadData = await imageUploadResponse.json();

//       // Create product
//       const productPayload = {
//         title: productData.title,
//         price: productData.price,
//         description: productData.description,
//         categoryId: productData.categoryId,
//         images: [imageUploadData.url], // Assuming the response contains the URL
//       };

//       const productResponse = await fetch(`${BASE_URL}/products`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(productPayload),
//       });

//       const productData = await productResponse.json();

//       console.log('Product added successfully:', productData);
//       onProductAdded(); // Notify the parent component that a product has been added
//       onHide(); // Close the modal
//     } catch (error) {
//       console.error('Error adding product:', error);
//       // Handle error (e.g., show a toast message)
//     }
//   };

//   return (
//     <Modal show={show} onHide={onHide} size="lg">
//       <Modal.Header closeButton>
//         <Modal.Title>Add Product</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <Row>
//             <Col md={6}>
//               <Form.Group controlId="formTitle">
//                 <Form.Label>Title</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter title"
//                   name="title"
//                   value={productData.title}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId="formPrice">
//                 <Form.Label>Price</Form.Label>
//                 <Form.Control
//                   type="number"
//                   placeholder="Enter price"
//                   name="price"
//                   value={productData.price}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Form.Group controlId="formDescription">
//             <Form.Label className="mt-2">Description</Form.Label>
//             <Form.Control
//               as="textarea"
//               placeholder="Enter description"
//               name="description"
//               value={productData.description}
//               onChange={handleInputChange}
//               rows={3}
//               required
//             />
//           </Form.Group>

//           <Row>
//           <Col md={6}>
//               <Form.Group controlId="formImage">
//                 <Form.Label>Image</Form.Label>
//                 <Form.Control
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Button className="mt-2" variant="primary" type="submit">
//             Create Product
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default AddProductModal;
