import "./FormComponent.css";
import { useState } from "react";

const FormComponent = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [repassword, setRePassWord] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRePassword, setErrorRePassword] = useState("");

  const [userNameColor, setUserNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [repasswordColor, setRePasswordColor] = useState("");

  const validatform = (e) => {
    e.preventDefault();

    if (userName.length > 8) {
      setErrorUserName("");
      setUserNameColor("green");
    } else {
      setErrorUserName("กรุณาระบุมากกว่า 8 ตัวอักษร");
      setUserNameColor("red");
    }
    if (email.includes("@") && email.includes(".")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("รูปแบบอีเมลไม่ถูกต้อง");
      setEmailColor("red");
    }
    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("รหัสผ่านต้องมากกว่า 8 ตัวอักษร");
      setPasswordColor("red");
    }
    if (repassword !== "" && repassword.length > 8 && repassword === password) {
      setErrorRePassword("");
      setRePasswordColor("green");
    } else {
      setErrorRePassword("รหัสผ่านไม่ตรงกันหรือน้อยกว่า 8 ตัวอักษร");
      setRePasswordColor("red");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={validatform}>
        <h2>ลงทะเบียน</h2>
        <div className="form-control">
          <label>ชื่อผู้ใช้</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderColor: userNameColor }}
          />
          <small style={{ color: userNameColor }}>{errorUserName}</small>
        </div>
        <div className="form-control">
          <label>อีเมล</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
          />
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </div>
        <div className="form-control">
          <label>รหัสผ่าน</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
            style={{ borderColor: passwordColor }}
          />
          <small style={{ color: passwordColor }}>{errorPassword}</small>
        </div>
        <div className="form-control">
          <label>ยีนยันรหัสผ่าน</label>
          <input
            type="password"
            value={repassword}
            onChange={(e) => setRePassWord(e.target.value)}
            style={{ borderColor: repasswordColor }}
          />
          <small style={{ color: repasswordColor }}>{errorRePassword}</small>
        </div>
        <button type="submit">ลงทะเบียน</button>
      </form>
    </div>
  );
};

export default FormComponent;
