import React from "react";
import {connect} from "dva";
import styled from "styled-components";

import Product from "../components/Product";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 12px;
  padding: 12px;
`;

const Products = ({products}) => (
  <Container>
    {products.list.map((product, key) => (
      <Product key={key} product={product} />
    ))}
  </Container>
);

const enhancer = connect(({products}) => ({products}));

export default enhancer(Products);
