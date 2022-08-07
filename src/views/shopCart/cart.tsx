import { getProductList } from "../../api/shopcart";
import propTypes from "prop-types";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { useMemo } from "react";
import { Button } from "antd";
import { addShop, reduceShop, clearCart } from "../../state/actions/shopcart";

const CartItem = ({ name, price, number = 0 }) => {
  return (
    <div>
      {name} : 【<FontRed>{price}</FontRed>】:{number}
    </div>
  );
};
const CartList = (props) => {
  const cartList = useMemo(() => {
    const list =
      props.cartIds &&
      props.cartIds
        .map((id) => {
          return {
            ...(props.products.find((item) => item.id == id) || {}),
            id,
          };
        })
        .map((item) => {
          let num = props.productNumsObj[item.id];
          return { ...item, ...{ stock: num } };
        });
    return list || [];
  }, [props.cartIds, props.products, props.productNumsObj]);

  return (
    <div>
      {cartList &&
        cartList.length &&
        cartList.map((item) => {
          return (
            <div key={item.id}>
              <CartItem
                name={item.name}
                price={item.price}
                number={item.stock}
              ></CartItem>
              <Button onClick={() => props.dispatch(addShop(item.id))}>
                +
              </Button>
              <Button onClick={() => props.dispatch(reduceShop(item.id))}>
                -
              </Button>
            </div>
          );
        })}
    </div>
  );
};
const Cart = (props) => {
  console.log("updated");
  return (
    <CartDiv>
      {/* 【测试 ：
        {props.cartIds.map(i=><div key={i}>#{i}</div>)}
        ++
        {props.products.map(item=><div key={item.id}>@{item.id}</div>)}
        】 */}
      <CartList {...props} />
      <Button onClick={() => props.dispatch(clearCart())}>clear cart</Button>
    </CartDiv>
  );
};
const mapStateToProp = (state) => {
  console.log("sta", state.shopcart.cartReduce.cartIds);
  return {
    cartIds: state.shopcart.cartReduce.cartIds,
    productNumsObj: state.shopcart.cartReduce.productNumsObj,
    products: state.shopcart.productReduce,
  };
};
export default connect(mapStateToProp)(Cart);

const FontRed = styled.span`
  color: red;
  font-size: 20px;
`;
const CartDiv = styled.div`
  border: 1px solid #666;
`;
