import { connect } from "react-redux";
import { Button } from "antd";
import { addToCart, receiveProduct } from "../../state/actions/shopcart";

const product = (props) => {
  return (
    <div>
      {props.products &&
        props.products.map((item) => {
          //
          return (
            <div key={item.id}>
              {item.name}-{item.price}-{item.stock}
              <Button onClick={() => props.dispatch(addToCart(item.id))}>
                +
              </Button>
            </div>
          );
        })}

      <Button onClick={() => props.dispatch(receiveProduct([]))}>test</Button>
    </div>
  );
};
const mapStateToProp = (state) => {
  return {
    products: state.shopcart.productReduce,
  };
};
export default connect(mapStateToProp)(product);
