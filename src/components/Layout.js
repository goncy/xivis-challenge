import React from "react";
import styled from "styled-components";
import {withRouter} from "dva/router";
import {compose} from "recompose";
import {Icon, Badge, Spin} from "antd";
import {NavLink} from "dva/router";
import {connect} from "dva";

const Container = styled.div`
  background-color: whitesmoke;
  min-height: 100vh;

  .spinner {
    margin-top: 64px;
  }

  .menu {
    background-color: white;
    height: 64px;
    border-bottom: 1px solid gainsboro;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;

    .logo {
      font-size: 24px;
      font-weight: bold;
    }

    .cart {
      font-size: 32px;
    }
  }

  a {
    text-decoration: none;
  }
`;

const Layout = ({children, products, cart}) => (
  <Container>
    <div className="menu">
      <NavLink to="/products">
        <span className="logo">Logo</span>
      </NavLink>
      <NavLink to="/cart">
        <Badge count={cart.list.length}>
          <Icon className="cart" type="shopping-cart" />
        </Badge>
      </NavLink>
    </div>
    <Spin className="spinner" spinning={products.loading}>
      {children}
    </Spin>
  </Container>
);

const enhancer = compose(
  withRouter,
  connect(({cart, products}) => ({cart, products}))
);

export default enhancer(Layout);
