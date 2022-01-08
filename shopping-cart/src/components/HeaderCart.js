import { MyCartcontext } from "../management/context";

const HeaderCart = () => {
  const { amount } = MyCartcontext();
  return (
    <button className="button">
      <span>ตะกร้าสินค้า</span>
      <span className="badge">{amount}</span>
    </button>
  );
};

export default HeaderCart;
