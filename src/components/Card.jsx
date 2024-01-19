import React, { useState } from 'react';

const rate = (
  <>
    <i className="bi-star-fill" style={{ color: 'gold' }}></i>
    <i className="bi-star-fill" style={{ color: 'gold' }}></i>
    <i className="bi-star-fill" style={{ color: 'gold' }}></i>
    <i className="bi-star-fill" style={{ color: 'gold' }}></i>
    <i className="bi-star-fill" style={{ color: 'gold' }}></i>
  </>
);
const badge=<div className="badge bg-dark text-white ms-3 rounded-pill position-absolute " style={{top:"0.5rem",left:"12rem",padding:"5px 8px"}}>Sale</div>;

const Card = ({ cart, setCart }) => {
  const cardDetails = [
    {
      type: 'Fancy Product',
      price: '$40.00 - $80.00',
      rating: false,
      badge:false,
      
    },
    {
      type: 'Special Item',
      price: <> <s className='text-muted'>$20.00</s> $18.00</>,
      rating: true,
      badge:true,
      
    },
    {
      type: 'Sale Item',
      price: <> <s className='text-muted'>$50.00</s> $25.00</>,
      rating: false,
      badge:true,
    
    },
    {
      type: 'Popular Item',
      price: '$40.00',
      rating: true,
      badge:false,
    
    },
    {
      type: 'Sale Item',
      price: <> <s className='text-muted'>$50.00</s> $25.00</>,
      rating: false,
      badge:true,
   
    },
    {
      type: 'Fancy Product',
      price: '$120.00 - $280.00',
      rating: false,
      badge:false,
      
    },
    {
      type: 'Special Item',
      price:  <> <s className='text-muted'>$20.00</s> $18.00</>,
      rating: true,
      badge:true,
      
    },
    {
      type: 'Popular Item',
      price: '$40.00',
      rating: true,
      badge:false,
      
    },
  ];

  const [productStates, setProductStates] = useState(
    cardDetails.map(() => ({ add: true }))
  );

  const handleAddToCart = (index) => {
    setCart(cart + 1);
    updateProductState(index, false);
  };

  const handleRemoveFromCart = (index) => {
    setCart(cart - 1);
    updateProductState(index, true);
  };

  const updateProductState = (index, addState) => {
    const updatedStates = [...productStates];
    updatedStates[index].add = addState;
    setProductStates(updatedStates);
  };

  return (
    <div className="container  my-5  mx-5 px-0 py-0">
      <div className="row justify-content-center">
        {cardDetails.map((card, index) => (
          <div className="" key={index}>
            <div
              className="card text-center  "
              style={{ width: '15rem', margin: '1rem',height:"22rem" }}
            >
                {card.badge && badge}
              <img
                className="card-img-top m-0 p-0"
                style={{ width: '100%' }}
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
              />
              <div className="card-body p-">
                <p className="card-text">
                  <h4>{card.type}</h4>
                  {card.rating && rate}<br />
                  {card.price}
                  
                 
                </p>

                {productStates[index].add ? (
                  <button
                    className=" btn btn-outline-dark mt-auto"
                    type="submit"
                    onClick={() => handleAddToCart(index)}
                  >
                    Add to cart
                  </button>)
                 : (
                  <button
                    className="btn btn-outline-dark mt-auto"
                    type="submit"
                    onClick={() => handleRemoveFromCart(index)}
                  >
                    Remove from cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;