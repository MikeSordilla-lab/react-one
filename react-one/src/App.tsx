import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    "Tangub City",
    "Oroquieta City",
    "Ozamiz City",
    "Iligan City",
    "Cagayan de Oro City",
  ];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
