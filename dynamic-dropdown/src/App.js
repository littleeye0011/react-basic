import "./App.css";

import DropdownComponents from "./components/DropdownComponents";
import FoodComponents from "./components/FoodComponents";
import { useState } from "react";
import MenuData from "./Data/MenuData";

function App() {
  const [foods, setFoods] = useState(MenuData);

  const changeFoodData = (e) => {
    const category = e.target.value;
    if (category === "เมนูทั้งหมด") {
      setFoods(MenuData);
    } else {
      const result = MenuData.filter((element) => {
        return element.menu === category;
      });
      setFoods(result);
    }
  };
  return (
    <div className="container">
      <DropdownComponents changeFoodData={changeFoodData} />
      <div className="content">
        {foods.map((data, index) => {
          return <FoodComponents key={index} {...data} />;
        })}
      </div>
    </div>
  );
}

export default App;
