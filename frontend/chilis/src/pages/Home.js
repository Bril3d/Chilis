import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Contact from "../components/contact";
import Card from "../components/Card";
import Typography from "../components/Typography";
import axios from "axios";

const Home = () => {
  const [foods, setFoods] = useState([]);

  const fetchFood = () => {
    axios.get('/api/food').then((response) => {
      let { data } = response;
      setFoods(data);
    });
  };

  const itemsPerPage = 6;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerPage);
  };

  useEffect(() => {
    fetchFood()
  }, [])

  return (
    <>
      <Header />
      <div className="my-20 sm:px-24 px-8 ">
        <Typography type='h1' />
        <Typography type='h2' />
        <div className="flex items-center gap-2 flex-wrap my-3">
          {foods.slice(0, visibleItems).map((food) => (
            <Card key={food._id} food={food} />
          ))}
        </div>
        {visibleItems < foods.length && (
          <div className="flex justify-center mt-4">
            <a
              className="text-red-600 p-2 rounded"
              onClick={loadMore}
            >
              Voir Plus
            </a>
          </div>
        )}
        <Typography type='h2' />
        <div className="flex items-center gap-2 flex-wrap my-3">
          {foods.slice(0, visibleItems).map((food) => (
            <Card key={food._id} food={food} />
          ))}
        </div>
        {visibleItems < foods.length && (
          <div className="flex justify-center mt-4">
            <a
              className="text-red-600 p-2 rounded"
              onClick={loadMore}
            >
              Voir Plus
            </a>
          </div>
        )}
      </div>
      <Contact />
    </>
  );
};

export default Home;
