import { useEffect, useState } from "react";

function Modal({ showModal, hide, modalInputs, edit, remove }) {
  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    quantity: "",
    date: "",
  });

  const control = (e, what) => {
    const inputsCopy = { ...inputs };
    inputsCopy[what] = e.target.value;
    setInputs(inputsCopy);
  };

  useEffect(() => {
    setInputs({
      name: modalInputs.name,
      price: modalInputs.price,
      quantity: modalInputs.quantity,
      date: modalInputs.date,
    });
  }, [modalInputs]);

  const handleEdit = () => {
    edit(
      {
        name: inputs.name,
        price: inputs.price,
        quantity: inputs.quantity,
        date: inputs.date,
      },
      modalInputs.id
    );
  };

  const handleRemove = () => {
    remove(modalInputs.id);
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{
        display: showModal ? "block" : "none",
        opacity: showModal ? "1" : "0",
      }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit X
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label for="name" className="col-form-label">
                  name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="th1"
                  value={inputs.name}
                  onChange={(e) => control(e, "name")}
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <label for="price" className="col-form-label">
                  price
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="price"
                  value={inputs.price}
                  onChange={(e) => control(e, "price")}
                  placeholder="Enter price"
                />
              </div>
              <div className="form-group">
                <label for="quantity" className="col-form-label">
                  quantity
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="quantity"
                  value={inputs.quantity}
                  onChange={(e) => control(e, "quantity")}
                  placeholder="Enter quantity"
                />
              </div>

              <div className="form-group">
                <label for="date" className="col-form-label">
                  date
                </label>
                <input
                  className="form-control"
                  type="date"
                  id="date"
                  value={inputs.date}
                  onChange={(e) => control(e, "date")}
                  placeholder="Enter date"
                />
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={hide}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleEdit}
                >
                  Save changes
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleRemove}
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
