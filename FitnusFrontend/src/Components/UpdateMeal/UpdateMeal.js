import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

function UpdateMeal() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [mealplan, setMeal] = useState({
    name: "",
    recipe: "",
    info: "",
    size: "",
    imgUrl: "",
    date: "",
  });
  const { name, recipe, info, size, date, imgUrl } = mealplan;

  const onInputChange = (e) => {
    setMeal({ ...mealplan, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/meelplan/${id}`, mealplan);
    alert("meal Plane Update successfully");
    navigate("/");
  };
  const loadUser = async (e) => {
    const result = await axios.get(`http://localhost:8080/meelplan/${id}`);
    setMeal(result.data);
  };
  return (
    <div>
      <NavBar />
      <div className="form_box">
        <div>
          <h1 className="topic">
            Update<span className="topicsub"> Meal Plane..!</span>
          </h1>

            <form onSubmit={(e) => onSubmit(e)} className="form_full">
            <label className="form_lable" for="name">
              img url:
            </label>
            <br></br>
            <input
              onChange={(e) => onInputChange(e)}
              type="text"
              className="form_input"
              value={imgUrl}
              required
              name="imgUrl"
              placeholder="Enter imgUrl"
            />
            <br></br>
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
            <label className="form_lable" for="name">
             Meal Nic name:
            </label>
            <br></br>
            <input
              onChange={(e) => onInputChange(e)}
              type="text"
              className="form_input"
              value={name}
              required
              name="name"
              placeholder="Enter Meal nic name"
            />
            <br></br>
            <label className="form_lable" for="pushups">
            Meal recipe:
            </label>
            <br />
            <textarea
              onChange={(e) => onInputChange(e)}
              type="text"
              className="form_input"
              value={recipe}
              name="recipe"
              placeholder="Enter recipe"
            />
            <br />
            <label className="form_lable" for="weight">
            Meal info:
            </label>
            <br></br>
            <textarea
              onChange={(e) => onInputChange(e)}
              type="text"
              className="form_input"
              value={info}
              name="info"
              placeholder="Enter info"
            />
            <br />
            <label className="form_lable" for="size">
            Meal  size:
            </label>
            <br></br>
            <input
              className="form_input"
              value={size}
              onChange={(e) => onInputChange(e)}
              name="size"
              placeholder="Enter size"
            ></input>
            <button className="add_btnbtn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateMeal;
