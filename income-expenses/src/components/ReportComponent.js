import { useContext } from "react";
import DataContext from "../data/DataContext";
import "./reportComponent.css";

const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <div>
      <h4>คงเหลือ (บาท)</h4>
      <h1>฿{formatNumber(income - expense)}</h1>
      <div className="report-container">
        <div>
          <h4>รายรับ</h4>
          <p className="report plus">฿{formatNumber(income)}</p>
        </div>
        <div>
          <h4>รายจ่าย</h4>
          <p className="report minus">฿{formatNumber(expense)}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
