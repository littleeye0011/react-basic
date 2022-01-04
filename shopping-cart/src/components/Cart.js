import CartData from "../data/CartData";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="Shopping-cart">
      <div className="title">สินค้าในตะกร้า</div>
      {CartData.map((data) => {
        return <CartItem key={data.id} {...data} />;
      })}
      <div className="footer">ยอดรวม 5 บาท</div>
    </div>
  );
};

export default Cart;
