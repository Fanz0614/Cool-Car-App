import React from 'react';
import { useLocation } from 'react-router-dom';

export const VehicleDetails = () => {
  //get state data from location
  const location = useLocation();
  const detailValue = location.state.data;
  return (
    <div class="container" style={{ marginTop: '30px' }}>
      <div class="row">
        <div class="col-6">
          <h5>{detailValue.vehicle}</h5>
          <p class="mb-2 text-muted text-uppercase small">{detailValue.type}</p>
          <p>
            <span class="mr-1">
              <strong>${detailValue.purchasePrice}</strong>
            </span>
          </p>
          <p class="pt-1">{detailValue.comment}</p>
          <div class="table-responsive">
            <table class="table table-sm table-borderless mb-0">
              <tbody>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>Area</strong>
                  </th>
                  <td>{detailValue.area}</td>
                </tr>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>Body</strong>
                  </th>
                  <td>{detailValue.body}</td>
                </tr>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>Colour</strong>
                  </th>
                  <td>{detailValue.colour}</td>
                </tr>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>Engine</strong>
                  </th>
                  <td>{detailValue.engine}</td>
                </tr>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>Origin Price</strong>
                  </th>
                  <td>${detailValue.originPrice}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <h5>Comment</h5>
          <p class="pt-1">{detailValue.describe}</p>
        </div>
      </div>
    </div>
  );
};
