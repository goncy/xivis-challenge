import React from "react";
import styled from "styled-components";
import {Link} from "dva/router";
import {Card, Button} from "antd";
import {connect} from "dva";

import {truncate} from "../utils/strings";

const {Meta} = Card;

const Extra = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
  margin: 8px 0;

  .company {
    span {
      font-weight: bold;
    }
  }

  .price {
    margin-left: 8px;
    font-size: 16px;
  }
`;

const Product = ({product, dispatch}) => {
  const {_id, picture, description, name, price, company, stock} = product;

  return (
    <Card key={_id} hoverable cover={<img alt={description} src={picture} />}>
      <Link className="link" to={`/products/${_id}`}>
        <Meta title={name} description={truncate(description, 140)} />
      </Link>
      <Extra>
        <div className="company">
          By <span>{company}</span>
        </div>
        <div className="price">{price}</div>
      </Extra>
      <Button
        onClick={() => dispatch({type: "cart/add", payload: product})}
        disabled={stock === 0}
        type="primary"
        size="large"
      >
        {stock === 0 ? "Out of stock" : "Add to cart"}
      </Button>
    </Card>
  );
};

const enhancer = connect();

export default enhancer(Product);
