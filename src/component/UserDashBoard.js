import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import GET_ALL_USER from '../services/UserService';
import UserPreviewCard from '../component/UserPreviewCard';
import UserModal from '../component/UserModel';
import { Modal } from 'react-bootstrap';

const UserDashBoard = () => {
  const [users, setUsers] = useState([]);
  const [updatedUser, setUpdateUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredText, setFilteredText] = useState('');
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

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
          src={row.avatar}
          alt=' product Image '
        />
      ),
    },
    {
      name: 'Email',
      selector: (row) => row.email,
    },
    {
      name: 'PassWord',
      selector: (row) => row.password,
    },
    {
      name: 'Role',
      selector: (row) => row.role,
      sortable: true,
    },
  ];


  useEffect(() => {
    fetch(GET_ALL_USER)
      .then((res) => res.json())
      .then((data) => {
        let sortedUsers = data.sort((a, b) => b.id - a.id);
        let filteredProduct = data.filter((p) =>
        p.email.toLowerCase().includes(filteredText.toLowerCase())
        );
        setUsers(filteredProduct,sortedUsers);
        setLoading(false);
      })
      .catch((error) => console.log('Error is: ', error));
  },
   
  [
    filteredText, showAddUserModal  
  ]);
  

  const handleUpdateUser = (updatedUser) => {
    setUpdateUser(updatedUser);
    setShowAddUserModal(true);
  };

  const RowclickHandler = (row) => {
    setSelectedUser(row);
    setShowUpdateModal(true);
    console.log('Selected User:', row);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const handleStateChange = (deletedProductId) => {
    setUsers((prevProducts) => prevProducts.filter((product) => product.id !== deletedProductId));
  };

  return (
    <>
      {loading && (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "49vh" }}>
          <button className="btn btn-success" type="button" disabled>
            Loading...
          </button>
        </div>
      )}

      {!loading && (
        <div className='container mt-5'>
          <div className='d-flex justify-content-between'>
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
                        setShowAddUserModal(true);
                        setUpdateUser(null);
                      }}
                    >
                      Create User
                    </button>

                    <input
                      onChange={(e) => setFilteredText(e.target.value)}
                      type='text'
                      name='search'
                      placeholder='Search by title...'
                    />
                  </div>
                }
                data={users}
                onRowClicked={RowclickHandler}
              />
            </div>
          </div>
        </div>
      )}

      <UserModal
        updatedUser={updatedUser}
        showUser={showAddUserModal}
        handleCloseUserForm={() => setShowAddUserModal(false)}
      />

      <Modal show={isCardVisible && !!selectedUser} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserPreviewCard
            user={selectedUser}
            onDelete={handleStateChange}
            onUpdate={handleUpdateUser}
            onClick={closeModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UserDashBoard;  