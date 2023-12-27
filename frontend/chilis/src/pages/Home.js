import React from "react";
import Header from "../components/header";
import Contact from "../components/contact";
import Card from "../components/Card";
import Typography from "../components/Typography";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="my-20 mx-10 ">
        <Typography type='h1'/>
        <Typography type='h2' />
        <Card  />
        <Typography type='h2' />
        <Card />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
