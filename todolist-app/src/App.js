import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List";
import Alert from "./components/Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [checkEditIem, setCheckEdeitIem] = useState(false);
  const [editId, setEditId] = useState(null);

  const submitData = (e) => {
    e.preventDefault();
    if (!name) {
      setAlert({ show: true, msg: "กรุณาป้อนข้อมูล", type: "error" });
    } else if (checkEditIem && name) {
      const result = list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name };
        }
        return item;
      });
      setList(result);
      setName("");
      setCheckEdeitIem(false);
      setEditId(null);
      setAlert({ show: true, msg: "แก้ไขข้อมูลเรียบร้อย", type: "success" });
    } else {
      const newItem = {
        id: uuidv4(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
      setAlert({ show: true, msg: "บันทึกข้อมูลเรียบร้อย", type: "success" });
    }
  };

  const removeItem = (id) => {
    const result = list.filter((item) => item.id !== id);
    setList(result);
    setAlert({ show: true, msg: "ลบข้อมูลเรียบร้อย", type: "error" });
  };

  const editItem = (id) => {
    setCheckEdeitIem(true);
    setEditId(id);
    const searchItem = list.find((item) => item.id === id);

    setName(searchItem.title);
  };
  return (
    <section className="container">
      <h1>Todo List App</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list} />}
      <form className="form-group" onSubmit={submitData}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button type="submit" className="submit-btn">
            {checkEditIem ? "แก้ไขข้อมูล" : "เพิ่มข้อมูล"}
          </button>
        </div>
      </form>
      <section className="list-container">
        {list.map((data, index) => {
          return (
            <List
              key={index}
              {...data}
              removeItem={removeItem}
              editItem={editItem}
            />
          );
        })}
      </section>
    </section>
  );
}

export default App;
