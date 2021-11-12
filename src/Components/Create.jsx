import { useState } from "react";

function Create({ create }) {
  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    quantity: "",
    date: "",
  });

  const formControl = (e, what) => {
    const inputsCopy = { ...inputs };
    inputsCopy[what] = e.target.value;
    setInputs(inputsCopy);
  };

  const handleCreate = () => {
    create(inputs);
    setInputs({
      name: "",
      price: "",
      quantity: "",
      date: "",
    });
  };
  return (
    <div className="create">
      <div>
        <span>name: </span>
        <input
          type="text"
          id="name"
          value={inputs.name}
          onChange={(e) => formControl(e, "name")}
        />
      </div>
      <div>
        <span>price: </span>
        <input
          type="number"
          id="price"
          value={inputs.price}
          onChange={(e) => formControl(e, "price")}
        />
      </div>
      <div>
        <span>quantity: </span>
        <input
          type="number"
          id="quantity"
          value={inputs.quantity}
          onChange={(e) => formControl(e, "quantity")}
        />
      </div>
      <div>
        <span>date: </span>
        <input
          type="date"
          id="date"
          value={inputs.date}
          onChange={(e) => formControl(e, "date")}
        />
      </div>
      <button onClick={handleCreate}>Add</button>
    </div>
  );
}

export default Create;
