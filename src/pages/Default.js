import React from "react";
import Hero from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpeg";
import { Link } from "react-router-dom";
export default function Default() {
  return (
    <Hero img={defaultBcg} title="404" max="true">
      <h2 className="text-uppercase">Страница не найдена</h2>
      <Link to="/" className="main-link" style={{ marginTop: "2rem" }}>
        Вернуться на главную
      </Link>
    </Hero>
  );
}
