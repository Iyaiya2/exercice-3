import React from 'react';

// Product Gallery Component
const ProductGallery = ({ images }) => {
  return (
    <div className="product-gallery" aria-labelledby="gallery-heading">
      <h2 id="gallery-heading">SHOP barcelone</h2>
      <div className="gallery-items">
        {images.map((img, index) => (
          <figure key={index} className="gallery-item">
            <img 
              src={img.src} 
              alt={img.alt} 
              loading="lazy" // Ajout de lazy loading pour améliorer la performance
            />
            <figcaption>
              {img.caption} - <strong>${img.price.toFixed(2)}</strong> {/* Affichage du prix */}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

// Exemple de données d'images pour la galerie avec des prix
const sampleImages = [
  {
    src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9a477f39-480c-41e8-9937-0e9e20312167/FCB+M+NK+DF+JSY+SS+STAD+HM.png",
    alt: "FC Barcelona Jersey",
    caption: "FC Barcelona Jersey",
    price: 89.99 // Ajout du prix
  },
  {
    src: "https://planetfoot.com/cdn/shop/files/camiseta-lamine-yamal-fc-barcelona-2024-25-replica-oficial_1.jpg?v=1728315457&width=960",
    alt: "t-shirt lamine",
    caption: "t-shirt lamine",
    price: 120.00 // Ajout du prix
  }
];

// Exportation de ProductGallery pour utilisation dans d'autres fichiers
export default function App() {
  return <ProductGallery images={sampleImages} />;
}
