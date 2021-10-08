import React from 'react';
import useDelete from './useDelete';

export const Card = ({ value }) => {
  //get methods from useDelete Hook
  const { cardDelete, handleClick } = useDelete({ value });
  return (
    //Card body
    <div class="plan-card plan-one">
      <div class="pricing-header" onClick={handleClick}>
        <h4 class="plan-title">{value.vehicle}</h4>
        <div class="plan-cost">${value.purchasePrice}</div>
        <div class="plan-save">
          Save ${value.originPrice - value.purchasePrice}
        </div>
      </div>
      <ul class="plan-features">
        <li class="text-muted">
          $<del>{value.originPrice}</del>
        </li>
        <li>{value.body}</li>
        <li>{value.colour}</li>
        <li>{value.engine}</li>
        <li>{value.type}</li>
      </ul>
      <div class="plan-footer">
        <button
          class="btn btn-danger btn-lg btn-rounded"
          onClick={() => cardDelete(value.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
