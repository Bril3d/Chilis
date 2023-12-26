import { useEffect, useState } from "react";
import axios from "axios";
const DashboardView = () => {

  const [foods, setFoods] = useState([]);

  const fetchFood = () => {
    axios.get('/api/food')
      .then((response) => {
        let { data } = response
        setFoods(data)
      });
  }

  const deleteFood = (id) => {
    axios.delete(`/api/food/${id}`).then(() => {
      const food = foods.filter((food) => food._id != id)
      setFoods(food)
    })
  }

  useEffect(() => {
    fetchFood()
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Food List</h1>
      {foods.map((food) => (
        <li key={food._id} className="flex items-center justify-between bg-white p-4 mb-4 shadow-md rounded">
          {food.title}
          <button onClick={() => deleteFood(food._id)} className="text-red-500 hover:text-red-700">
            Delete
          </button>
        </li>
      ))}
    </div>
  )
}

export default DashboardView