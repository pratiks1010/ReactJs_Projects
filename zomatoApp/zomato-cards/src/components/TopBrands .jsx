import React from 'react';
import './TopBrands.css'; // Import the CSS file for styling

const TopBrands = () => {
  const brandsData = [
    {
      name: "Domino's Pizza",
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252811.png?output-format=webp",
      deliveryTime: "25 min",
    },
    {
      name: "BOX8 - Desi Meals",
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/dc25345966698c3077d648ecf3c5b3d1_1643349142.png?output-format=webp",
      deliveryTime: "25 min",
    },
    {
      name: "Oven Story Pizza - Standout Toppings",
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/7c048d2ec413aaca136a33c3e9628c0e_1629952759.png?output-format=webp",
      deliveryTime: "32 min",
    },
    {
      name: "Faasos - Wraps & Rolls",
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655798578.png?output-format=webp",
      deliveryTime: "54 min",
    },
    {
      name: "MOJO Pizza - 2X Toppings",
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/12e92e9cea7fb873962c3cd87deccd48_1681458723.png?output-format=webp",
      deliveryTime: "25 min",
    },
    {
      name: "Behrouz Biryani",
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/47c22bbd5043ef52b80a4e3d3409a368_1626810701.png?output-format=webp",
      deliveryTime: "50 min",
    },
  ];

  return (
    <div className="top-brands">
      <h3 className="brand-heading">Top brands for you</h3>
      <div className="brands-container">
        {brandsData.map((brand, index) => (
          <div className="brand-card" key={index}>
            <img src={brand.image} alt={brand.name} className="brand-logo" />
            <h6 className="brand-name">{brand.name}</h6>
            <h6 className="brand-delivery-time">{brand.deliveryTime}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
