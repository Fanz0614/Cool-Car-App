import React from 'react';
import useAdd from '../../hooks/useAdd';

export const Dialog = () => {
  const {
    addNewCard,
    setVehicle,
    setOriginPrice,
    setPurchasePrice,
    setType,
    setEngine,
    setColour,
    setBody,
    setDescription,
    setComment,
  } = useAdd();
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add new vihecle
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={(e) => {
                      setVehicle(e.target.value);
                    }}
                  />
                  <label for="recipient-name" className="col-form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={(e) => {
                      setPurchasePrice(e.target.value);
                    }}
                  />
                  <label for="recipient-name" className="col-form-label">
                    Original Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={(e) => {
                      setOriginPrice(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    Type
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  />
                  <label for="recipient-name" className="col-form-label">
                    Engine
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={(e) => {
                      setEngine(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    Colour
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={(e) => {
                      setColour(e.target.value);
                    }}
                  />
                  <label for="recipient-name" className="col-form-label">
                    Body
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={(e) => {
                      setBody(e.target.value);
                    }}
                  />
                  <label for="recipient-name" className="col-form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label for="message-text" className="col-form-label">
                    Comment
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={addNewCard}
                data-dismiss="modal"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
