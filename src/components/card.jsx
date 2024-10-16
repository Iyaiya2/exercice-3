// src/App.js
import React from 'react';
import ProductGallery from './components/ProductGallery.jsx';

const App = () => {
  const images = [
    {
      src: 'https://www.univers-du-foot.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/2004669000003_1.jpg',
      alt: 'T-shirt FC Barcelone',
      caption: 'T-shirt FC Barcelone',
    },
    {
      src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/29651b91-8c59-489d-8049-4ac91c477065/maillot-de-football-dri-fit-adv-fc-barcelone-2023-24-match-domicile-pour-PvZMps.png',
      alt: 'Maillot FC Barcelone',
      caption: 'Maillot FC Barcelone',
    },
    // Ajoutez plus d'images si nécessaire
  ];

  return (
    <div>
      <h1>shop barcelone</h1>
      <ProductGallery images={images} />
    </div>
  );
};

export default App;
