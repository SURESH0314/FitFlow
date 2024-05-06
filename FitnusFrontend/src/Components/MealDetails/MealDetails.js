import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "../NavBar/nav.css";
import axios from "axios";
import { useParams } from "react-router";
import "../meal.css";
import { Link } from "react-router-dom";
function MealDetails() {
  const [mealplan, setMeal] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    loadMeal();
  }, []);

  const loadMeal = async () => {
    const result = await axios.get("http://localhost:8080/meelplan");
    setMeal(result.data);
  };

  // Delete workout function
  const deleteMeal = async (id) => {
    // Display confirmation dialog
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this meelplan?"
    );
    if (confirmDelete) {
      try {
        // Send DELETE request to delete workout
        await axios.delete(`http://localhost:8080/meelplan/${id}`);
        // Reload Meal after successful deletion
        loadMeal();
        // Display success message
        alert("mealplan deleted successfully!");
      } catch (error) {
        // Handle any errors
        console.error("Error deleting workout:", error);
        // Display error message
        alert("An error occurred while deleting the mealplan.");
      }
    }
  };

  return (
    <div>
      <NavBar />
      <h1 className="topic">Your Meal Plane Details..!</h1>
      <div className="table_main">
        <div className="table_details_admin">
          <div className="mealcar_set">
            {mealplan.map((meel, index) => (
              <div className="mealcard" key={index}>
                <div>
                  <img
                    src={meel.imgUrl}
                    alt={meel.name}
                    className="img_mealcard"
                  />
                </div>

                <div className="detailbody">
                  <p className="name_meal">{meel.name}</p>
                  <p className="meal_recipi">
                    <b>recipe : </b>
                    {meel.recipe}
                  </p>
                  <p className="meal_info">
                    <b>Note : </b>
                    {meel.info}
                  </p>
                  <div className="meal_box_detail">
                    <p className="meal_size">
                      <b>Size : </b>
                      {meel.size}
                    </p>
                    <p className="meal_date">{meel.date}</p>
                  </div>
                </div>
                <div className="meal_box_detail_btn">
                  <Link to={`/updatemeal/${meel.id}`} className="btnbtn">
                    Update
                  </Link>
                  <button
                    onClick={() => deleteMeal(meel.id)}
                    className="btnbtndlt"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealDetails;
