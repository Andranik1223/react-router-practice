import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <Link to="/">Home Page</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
