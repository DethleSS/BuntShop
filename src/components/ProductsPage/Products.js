import React from "react";
import { ProductConsumer } from "../../context";
import styled from "styled-components";
import Title from "../Title";
import Product from "../Product";
import ProductFilter from "./ProductFilter";

export default function Products() {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProducts } = value;
        return (
          <ProductsWrapper className="py-5">
            <div className="container">
              {/* title */}

              <Title center title="Наши продукты" />
              <ProductFilter />
              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    Количество товаров : {filteredProducts.length}
                  </h6>
                  <hr />
                </div>
              </div>
              {/* products */}
              <div className="row my-5">
                {filteredProducts.length === 0 ? (
                  <div className="col text-title text-center">
                    извините, нет не одного товара по вашему запросу
                  </div>
                ) : (
                  filteredProducts.map(product => {
                    return <Product key={product.id} product={product} />;
                  })
                )}
              </div>
            </div>
          </ProductsWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const ProductsWrapper = styled.section``;
