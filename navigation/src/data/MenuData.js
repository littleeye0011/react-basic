import { FaHome, FaUserAlt, FaShoppingCart, FaPhone } from "react-icons/fa";

const menuData = [
  {
    title: "หน้าแรก",
    path: "/",
    icon: <FaHome />,
  },
  {
    title: "สมาชิก",
    path: "/menber",
    icon: <FaUserAlt />,
  },
  {
    title: "สินค้า",
    path: "/product",
    icon: <FaShoppingCart />,
  },
  {
    title: "ติดต่อเรา",
    path: "/contract",
    icon: <FaPhone />,
  },
];

export default menuData;
