import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const About = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>About</h1>
      <h2>{id}</h2>
      <Link to="/">Home Page</Link>
      <Link to="/">Contact Page</Link>
    </div>
  );
};

export default About;
