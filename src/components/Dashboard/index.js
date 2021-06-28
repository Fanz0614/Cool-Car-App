import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from './card';
import { addCard } from '../../redux/appSlice';
import { testData } from './testData';
import './style.css';

export const DashBoard = () => {
  const dispatch = useDispatch();

  const carsDetails = useSelector((state) => state.details);

  const getCardDetails = carsDetails.map((value) => {
    return (
      <div className="col-sm-4">
        <Card value={value} />
      </div>
    );
  });

  useEffect(() => {
    if (carsDetails.length === 0) {
      // Add dummy data
      testData.forEach((item) => {
        dispatch(addCard(item));
      });
    }
  }, [carsDetails.length]);

  return (
    <div className="container">
      <div className="row" style={{ margin: '30px' }}>
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
