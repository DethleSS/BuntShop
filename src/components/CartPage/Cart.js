import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
export default function Cart({ history }) {
  return (
    <section className="py-5">
      {/* title */}
      <div className="container">
        <Title title="Ваша корзина товаров" center />
      </div>
      {/* cart columns */}
      <CartColumns />
      {/* cart list */}
      <CartList />
      {/* cart totals */}
      <CartTotals history={history} />
    </section>
  );
}
