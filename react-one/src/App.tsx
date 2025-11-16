import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    "Tangub City",
    "Oroquieta City",
    "Ozamiz City",
    "Iligan City",
    "Cagayan de Oro City",
  ];
  const handleSelectItem = (item: string) => {
    console.log("Selected item:", item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
