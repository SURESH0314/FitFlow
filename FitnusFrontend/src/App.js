import React from "react";
import { Route, Routes } from "react-router";
import MealDetails from "./Components/MealDetails/MealDetails";
import AddMeal from "./Components/AddMeal/AddMeal";
import UpdateMeal from "./Components/UpdateMeal/UpdateMeal";
function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<MealDetails />} />
          <Route path="/addmeal" element={<AddMeal />} />
          <Route path="/updatemeal/:id" element={<UpdateMeal />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
