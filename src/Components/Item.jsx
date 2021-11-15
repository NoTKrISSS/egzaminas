function Item({ data, modal, remove }) {
  const showEdit = () => {
    modal(data);
  };

  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.price}</td>
      <td>{data.quantity}</td>
      <td>
        {new Date(data.date).toLocaleDateString("fr-CA", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </td>
      <button className="btn btn-primary" onClick={showEdit}>
        Edit
      </button>
      <button className="btn btn-primary" onClick={() => remove(data.id)}>
        Delete
      </button>
    </tr>
  );
}

export default Item;
