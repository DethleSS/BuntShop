import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block my-5">
        <div className="row ">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Продукты</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Название</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Цена</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Количество</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Убрать</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Стоимость</p>
          </div>
        </div>
      </div>
    );
  }
}
