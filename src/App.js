import React from "react";
import { Route, Routes } from "react-router";
import WorkoutDetails from "./Components/WorkoutsDetails/WorkoutDetails";
import AddWorkout from "./Components/AddWorkouts/AddWorkouts";
import UpdateWorkout from "./Components/UpdateWorkouts/UpdateWorkouts";
function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<WorkoutDetails />} />
          <Route path="/addworkout" element={<AddWorkout />} />
          <Route path="/updateworkout/:id" element={<UpdateWorkout />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
