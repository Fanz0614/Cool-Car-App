import React from 'react';
import useAdd from './useAdd';

export const Dialog = () => {
  //get methonds from useAdd hook
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
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add new vihecle
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    onChange={(e) => {
                      setVehicle(e.target.value);
                    }}
                  />
                  <label for="recipient-name" class="col-form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    onChange={(e) => {
                      setPurchasePrice(e.target.value);
                    }}
                  />
                  <label for="recipient-name" class="col-form-label">
                    Original Price
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    onChange={(e) => {
                      setOriginPrice(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Type
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  />
                  <label for="recipient-name" class="col-form-label">
                    Engine
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    onChange={(e) => {
                      setEngine(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Colour
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    onChange={(e) => {
                      setColour(e.target.value);
                    }}
                  />
                  <label for="recipient-name" class="col-form-label">
                    Body
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    onChange={(e) => {
                      setBody(e.target.value);
                    }}
                  />
                  <label for="recipient-name" class="col-form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">
                    Comment
                  </label>
                  <textarea
                    class="form-control"
                    id="message-text"
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  ></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
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
