function ListGroup() {
  let items = [
    "Tangub City",
    "Oroquieta City",
    "Ozamiz City",
    "Iligan City",
    "Cagayan de Oro City",
  ];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found. </p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
