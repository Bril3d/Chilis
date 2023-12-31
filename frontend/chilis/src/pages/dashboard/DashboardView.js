import { useEffect, useState } from "react";
import axios from "axios";

const DashboardView = () => {
  const [foods, setFoods] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedFood, setEditedFood] = useState({});

  const fetchFood = () => {
    axios.get('/api/food').then((response) => {
      let { data } = response;
      setFoods(data);
    });
  };

  const deleteFood = (id) => {
    axios.delete(`/api/food/${id}`).then(() => {
      const updatedFoods = foods.filter((food) => food._id !== id);
      setFoods(updatedFoods);
    });
  };

  const handleEditClick = (food) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setEditedFood(food);
    setEditMode(true);
  };

  const handleUpdate = () => {
    axios.put(`/api/food/${editedFood._id}`, editedFood, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }).then((response) => {

      const updatedFoods = foods.map((food) =>
        food._id === editedFood._id ? response.data : food
      );
      setFoods(updatedFoods);
      setEditedFood({});
      setEditMode(false);
    });
  };

  const handleCancelEdit = () => {
    setEditedFood({});
    setEditMode(false);
  };

  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Food List</h1>

      {editMode && (
        <div className="bg-white p-4 mb-4 shadow-md rounded">
          <h2 className="text-xl font-bold mb-2">Edit Food</h2>
          <label htmlFor="editedTitle" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="editedTitle"
            className="w-full p-2 border border-gray-300 rounded"
            value={editedFood.title || ""}
            onChange={(e) => setEditedFood({ ...editedFood, title: e.target.value })}
            required
          />

          <label htmlFor="editedDescription" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            id="editedDescription"
            className="w-full p-2 border border-gray-300 rounded"
            value={editedFood.description || ""}
            onChange={(e) => setEditedFood({ ...editedFood, description: e.target.value })}
            required
          ></textarea>

          <label htmlFor="editedImage" className="block text-gray-700 font-bold mb-2">
            Image
          </label>

          <input
            type="file"
            id="editedImage"
            name="img"
            accept="image/*"
            onChange={(e) => setEditedFood({ ...editedFood, img: e.target.files[0] })}
            className="w-full p-2 border border-gray-300 rounded"
          />

          <label htmlFor="editedPrice" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="text"
            id="editedPrice"
            className="w-full p-2 border border-gray-300 rounded"
            value={editedFood.price || ""}
            onChange={(e) => setEditedFood({ ...editedFood, price: e.target.value })}
            required
          />

          <div className="flex mt-4">
            <button
              onClick={handleUpdate}
              className="bg-green-500 text-white py-2 px-4 rounded mr-2 hover:bg-green-600"
            >
              Update
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <div className="flex items-center flex-wrap gap-2">
        {foods.map((food) => (
          <div key={food._id} className="bg-white p-4 mb-4 shadow-md rounded w-full sm:w-[32%] h-[30rem]">
            <img
              src={food.img}
              alt={food.title}
              className="w-full h-2/3 object-cover mb-2 rounded max-h-2/3"
            />
            <h2 className="text-xl font-bold mb-2">{food.title}</h2>
            <p className="text-gray-700 mb-2">{food.description}</p>
            <p className="text-green-500 font-bold">Price: {food.price} DT</p>
            <div className="flex mt-4">
              <button
                onClick={() => handleEditClick(food)}
                className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteFood(food._id)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DashboardView;
