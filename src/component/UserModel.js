import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ThreeCircles } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { CREATE_USER, UPDATE_USER_BY_ID, UPLOAD_FILE } from '../services/UserService';

const UserModal = ({ updatedUser, showUser, handleCloseUserForm }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [avatar, setAvatar] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    if (updatedUser) {
      setEmail(updatedUser.email || '');
      setName(updatedUser.name || '');
      setPassword(updatedUser.password || '');
      setRole(updatedUser.role || '');
      setAvatar(updatedUser.avatar ? updatedUser.avatar : 'https://img.freepik.com/premium-psd/upload-folder-3d-icon_136651-1164.jpg?size=626&ext=jpg&ga=GA1.1.1587386060.1703438607&semt=ais');
    } else {
      setEmail('');
      setName('');
      setPassword('');
      setRole('');
      setAvatar();
    }
  }, [updatedUser]);

  const handleUserClose = () => {
    handleCloseUserForm();
  };
  
  const handleCreateOrUpdateUser = async () => {
    setIsLoading(true);

    try {
      let avatarUrl = updatedUser?.avatar || '';

      if (avatar) {
        const fileData = new FormData();
        fileData.append('file', avatar);

        const uploadResponse = await UPLOAD_FILE(fileData);
        avatarUrl = uploadResponse.location;
      }

      const userData = { email, name, password, role, avatar: avatarUrl };

      if (updatedUser) {
        await UPDATE_USER_BY_ID(updatedUser.id, userData);
        toast.success('Updated User Successfully!');
      } else {
        await CREATE_USER(userData);
        toast.success('Created User Successfully!');
      }
      setIsLoading(false);
      handleCloseUserForm();
    } catch (error) {
      console.error('Error:', error);
      toast.error('Operation failed!');
      setIsLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setAvatar(file);
        setPreviewImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal size="lg" show={showUser} onHide={handleUserClose}>
      <Modal.Header closeButton={false}>
        <Modal.Title className="m-auto">
          {updatedUser ? 'Update User' : 'Create New User'}
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
                  src={previewImage || avatar || 'https://img.freepik.com/premium-psd/upload-folder-3d-icon_136651-1164.jpg?size=626&ext=jpg&ga=GA1.1.1587386060.1703438607&semt=ais'}
                  alt="User Preview"
                />

                <div className="upload-icon">
                  <i className="fas fa-upload"></i>
                </div>
              </div>
              <input
                className="form-control d-none"
                type="file"
                name=""
                onChange={handleImageChange}
                id="file-input"
              />
            </label>
          </div>

          <div className="form-side w-50 ms-3">
            <Form>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formRole">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleUserClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleCreateOrUpdateUser}
          disabled={isLoading}
        >
          {isLoading ? (
            <ThreeCircles
              visible={true}
              height="25"
              width="50"
              color="#4fa94d"
              ariaLabel="three-circles-loading"
              wrapperClass=""
            />
          ) : (
            'Save Changes'
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;
