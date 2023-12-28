import React from 'react'
import { NavLink } from 'react-router-dom';
const NotFoundpage = () => {
  return (
    <div className='container d-flex bg-light mt-4 rounded-3 justify-content-around'>
            <div className="image-side">
                <img src="https://img.freepik.com/free-vector/404-error-design-with-magnifying-glass_23-2147733005.jpg?size=626&ext=jpg&ga=GA1.1.1587386060.1703438607&semt=ais" alt="not found page" />
            </div>
            <div className="text-side w-50 mt-5"> 
                <h1> Page Not Found </h1>
                <p> Seems like you have lost your ways here <br /> Please get back to home page  </p>
                <NavLink  className='btn btn-success' to="/"> Home</NavLink>
            </div>


        </div>
  )
}

export default NotFoundpage