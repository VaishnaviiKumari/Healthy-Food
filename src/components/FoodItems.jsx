import Item from "./Item";

const FoodItems = ({items}) => {

  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salas", "Milk", "Ghee"];

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItems={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
