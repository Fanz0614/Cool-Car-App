import React from 'react';
import { useLocation } from 'react-router-dom';

export const VehicleDetails = () => {
  //get state data from location
  const location = useLocation();
  const detailValue = location.state.data;
  return (
    <div className="container" style={{ marginTop: '30px' }}>
      <div className="row">
        <div className="col-6">
          <h5>{detailValue.vehicle}</h5>
          <p className="mb-2 text-muted text-uppercase small">
            {detailValue.type}
          </p>
          <p>
            <span className="mr-1">
              <strong>${detailValue.purchasePrice}</strong>
            </span>
          </p>
          <p className="pt-1">{detailValue.comment}</p>
          <div className="table-responsive">
            <table className="table table-sm table-borderless mb-0">
              <tbody>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>Area</strong>
                  </th>
                  <td>{detailValue.area}</td>
                </tr>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>Body</strong>
                  </th>
                  <td>{detailValue.body}</td>
                </tr>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>Colour</strong>
                  </th>
                  <td>{detailValue.colour}</td>
                </tr>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>Engine</strong>
                  </th>
                  <td>{detailValue.engine}</td>
                </tr>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>Origin Price</strong>
                  </th>
                  <td>${detailValue.originPrice}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <h5>Comment</h5>
          <p className="pt-1">{detailValue.describe}</p>
        </div>
      </div>
    </div>
  );
};
