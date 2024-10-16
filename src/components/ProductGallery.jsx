// src/components/ProductGallery.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Pour la validation des props
import './ProductGallery.css'; // Importez le CSS pour ce composant

const ProductGallery = ({ images }) => {
  return (
    <div className="product-gallery">
      {images.map((img, index) => (
        <figure key={index} className="product-gallery__item">
          <img src={img.src} alt={img.alt} className="product-gallery__image" />
          <figcaption className="product-gallery__caption">{img.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
};

// Définition des types de props
ProductGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductGallery;
