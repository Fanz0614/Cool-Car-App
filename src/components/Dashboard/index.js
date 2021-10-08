import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from './card';
import './style.css';

export const DashBoard = () => {
  //get data from redux
  const carsDetails = useSelector((state) => state.details.data);
  console.log(carsDetails)
 
  //create dashboard dynamically
  const getCardDetails = carsDetails.map((value) => {
    return (
      <div class="col-4">
        <Card value={value} />
      </div>
    );
  });
  return (
    <div class="container">
      <div class="row" style={{ margin: '30px' }}>
        <div
          style={{
            fontFamily: 'Sans-serif',
            fontWeight: 'bold',
            fontSize: '30px',
            marginTop: '20px',
          }}
        >
          poject
        </div>
        {getCardDetails}
      </div>
    </div>
  );
};
