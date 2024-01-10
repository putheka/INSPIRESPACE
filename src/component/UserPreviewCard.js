import React, { useState } from 'react';
import { DELETE_USERS } from '../services/UserService';
import { toast } from 'react-toastify';
import { ThreeCircles } from 'react-loader-spinner';

const PlaceholderImage = 'https://placehold.it/200';

const UserPreviewCard = ({ onDelete, user, onUpdate, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(true);

  const handleUpdateUser = () => {
    setIsLoading(true);
    onUpdate(user);
  };

  const handleDelete = () => {
    setIsLoading(true);
    DELETE_USERS(user.id)
      .then(response => {
        toast.success("Delete successfully");
        onDelete(user.id);
        setIsLoading(false);
        setIsCardVisible(false);
      })
      .catch(error => {
        toast.error("Failed to Delete!!");
        console.log("Error Delete: ", error);
        setIsLoading(false);
      });
  };

  if (!isCardVisible || !user) {
    return null; // Don't render the card if it's not visible or user is undefined
  }

  const { name, email, password, role, avatar } = user;

  return (
    <div className="card border-success mb-3 text-center" onClick={onClick}>
      <img
        className="card-img-top"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = PlaceholderImage;
        }}
        src={avatar || PlaceholderImage}
        alt="User Avatar"
      />
      <div className="card-body">
        <h5 className="card-title text-success">{name}</h5>
        <p className="card-text">
          <h5>Email</h5>
          {email}
          <h5>Password</h5>
          {password}
          <h5>Role</h5>
          {role}
        </p>
        <div className="d-flex justify-content-around align-items-center">
          <button
            className="btn btn-outline-warning"
            onClick={handleUpdateUser}
          >
            Update
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={handleDelete}
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
              "Delete"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPreviewCard;
