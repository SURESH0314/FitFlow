import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router";
import axios from "axios";

function AddWorkouts() {
  const navigate = useNavigate(); 
  const [workouts, setWorkouts] = useState({
    run: "",
    pushups: "",
    lifted: "",
    description: "",
    date: "",
  });
  const { run, pushups, lifted, description,date } = workouts;

  const onInputChange = (e) => {
    setWorkouts({ ...workouts, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/workout", workouts);
    alert("Workout status uploaded successfully");
    navigate("/");
  };
  return (
    <div>
      <NavBar />
      <div className="form_box">
        <div>
          <h1 className="topic">
            Add New<span className="topicsub"> Workout Status..!</span>
          </h1>

          <form onSubmit={(e) => onSubmit(e)} className="form_full">
          <label className="form_lable" for="distance">
              Date:
            </label>
            <br></br>
            <input
              onChange={(e) => onInputChange(e)}
              type="date"
              className="form_input"
              value={date}
              required
              name="date"
              placeholder="Enter date"
            />
            <br></br>
            <label className="form_lable" for="distance">
              Distance Ran (km):
            </label>
            <br></br>
            <input
              onChange={(e) => onInputChange(e)}
              type="number"
              className="form_input"
              value={run}
              required
              name="run"
              placeholder="Enter distance ran"
            />
            <br></br>
            <label className="form_lable" for="pushups">
              Number of Pushups Completed:
            </label>
            <br />
            <input
              onChange={(e) => onInputChange(e)}
              type="number"
              className="form_input"
              value={pushups}
              name="pushups"
              placeholder="Enter number of pushups completed"
            />
            <br />
            <label className="form_lable" for="weight">
              Weight Lifted (kg):
            </label>
            <br></br>
            <input
              onChange={(e) => onInputChange(e)}
              type="number"
              className="form_input"
              value={lifted}
              name="lifted"
              placeholder="Enter weight lifted"
            />
            <br />
            <label className="form_lable" for="description">
              Description:
            </label>
            <br></br>
            <textarea
              className="form_input"
              value={description}
              onChange={(e) => onInputChange(e)}
              name="description"
              placeholder="Enter a brief description"
            ></textarea>
            <button className="add_btnbtn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddWorkouts;
