const FoodComponents = ({ foodName, image_url }) => {
  return (
    <div className="sigle-food">
      <h2>{foodName}</h2>
      <img src={image_url} alt={foodName} />
    </div>
  );
};

export default FoodComponents;
