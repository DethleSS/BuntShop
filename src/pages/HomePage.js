import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
export default function HomePage() {
  return (
    <>
      <Hero title="Лучшая техника" max="true">
        <Link
          to="/products"
          className="main-link"
          style={{ marginTop: "2rem" }}
        >
          Наши продукты
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
