import React from 'react';

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f0f0f0', // Set your desired background color
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '20px',
  },
  greeting: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  logoutButton: {
    backgroundColor: '#2196F3', // Set your desired button color
    color: '#fff', // Set your desired button text color
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <div style={styles.container}>
      <img src={user.avatar} alt="User Avatar" style={styles.avatar} />
      <div style={styles.greeting}>
        Welcome {user.fname} {user.lname}
      </div>
      <button style={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
