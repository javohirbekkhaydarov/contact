import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact, removeContact } from "./stories/ContactSlice";
import TodoCategories from "./stories/Categories";
import { FiTrash } from "react-icons/fi";
const App = () => {
  const [inputVal, setInputVal] = useState(" ");
  const [number, setNumber] = useState("");
  const [selectVal, setSelectVal] = useState("");
  const [demo, setDemo] = useState("default");

  const { arr } = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (demo === "green") {
      dispatch(
        addContact({ name: inputVal, number: number, category: selectVal })
      );
      


      setNumber("");
      setInputVal("");
    }
   

  };

  //? remove handler

  const removeHandler = (id) => {
    dispatch(removeContact(id));
  };

  //? phone number

  return (
    <div className="center">
      <h2> Add Contact</h2>

      <form action="#" className="center" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          id="input"
          onChange={ (e) => nameHandler(e)}}
          value={inputVal}
          placeholder="enter your Name"
          pattern="[^a-z]*"
        />

        <input
          type="number"
          id="phone-number"
          className="input"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          name="txt_name"
          placeholder="enter your Number"
        ></input>

        {/* SELECT SECTION  */}
        <select
          onChange={(e) => setSelectVal(e.target.value)}
          name="sort"
          id="sort"
          className="form-select"
        >
          <span> select categorys</span>
          <option value="family">Family</option>
          <option value="friends ">Friend</option>
          <option value="relatives">relatives</option>
          <option value="value" selected>
            Option Name
          </option>
        </select>
        <br />

        <TodoCategories />
        <br />

        <button type="submit" className="btn btn-success">
          {" "}
          submit
        </button>
        <br />
      </form>

      <br />
      <div className="info-card">
        <ul>
          {arr.map((item, id) => {
            return (
              <div key={id}>
                <li className={`info-list ${item.active ? "active" : ""}`}>
                  <div className="context">
                    <div> Name : {item.name} </div>
                    <tt> Number : {item.number} </tt>
                    <div> Category : {item.category}</div>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeHandler(item.id)}
                  >
                    <FiTrash />
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
