import React from 'react';
import useDelete from '../../hooks/useDelete';

export const Card = ({ value }) => {
  const { cardDelete, handleClick } = useDelete(value);
  return (
    <div className="plan-card plan-one">
      <div className="pricing-header" onClick={handleClick}>
        <h4 className="plan-title">{value.vehicle}</h4>
        <div className="plan-cost">${value.purchasePrice}</div>
        <div className="plan-save">
          Save ${value.originPrice - value.purchasePrice}
        </div>
      </div>
      <ul className="plan-features">
        <li className="text-muted">
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
