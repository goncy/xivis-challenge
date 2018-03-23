import React from "react";
import styled from "styled-components";
import {List, Avatar, Card, Icon} from "antd";
import {connect} from "dva";

import {truncate, toNumber} from "../utils/strings";

const Container = styled.div`
  padding: 12px;

  .price {
    font-size: 16px;
  }

  .total {
    border-top: 1px solid gainsboro;
    text-align: right;
    font-size: 24px;
    font-weight: bold;
    padding-top: 24px;
  }
`;

const Cart = ({cart, dispatch}) => {
  const sum = cart.list.reduce(
    (accum, item) => accum + toNumber(item.price),
    0
  );

  return (
    <Container>
      <Card title="Cart items">
        <List
          itemLayout="horizontal"
          dataSource={cart.list}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <Icon
                  key="remove"
                  onClick={() =>
                    dispatch({type: "cart/remove", payload: index})
                  }
                  type="close"
                />,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.picture} />}
                title={item.name}
                description={truncate(item.description, 140)}
              />
              <div className="price">{item.price}</div>
            </List.Item>
          )}
        />
        {cart.list.length > 0 && (
          <div className="total">
            {sum.toLocaleString("es-AR", {style: "currency", currency: "USD"})}
          </div>
        )}
      </Card>
    </Container>
  );
};

const enhancer = connect(({cart}) => ({cart}));

export default enhancer(Cart);
