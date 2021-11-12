function Item({ data, modal }) {
  const showEdit = () => {
    modal(data);
  };

  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.price}</td>
      <td>{data.quantity}</td>
      <td>{data.date.slice(0, 10)}</td>
      <button className="btn btn-primary" onClick={showEdit}>
        Edit
      </button>
      <button className="btn btn-secondary">Delete</button>
    </tr>
  );
}

export default Item;
