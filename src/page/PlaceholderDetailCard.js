import React from 'react'
import "../style/PlaceholderDetailCard.css"
const PlaceholderDetailCard = () => {
  return (
    <div className="placeholder-container">
    <div className="placeholder-spinner" />
    <p className="placeholder-text">Loading product details...</p>
  </div>
  )
}

export default PlaceholderDetailCard