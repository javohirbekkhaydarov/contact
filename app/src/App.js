import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./stories/ContactSlice";
const App = () => {
  const [inputVal, setInputVal] = useState(" ");
  const [number, setNumber] = useState("");
  const { arr } = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal) {
      dispatch(addContact(inputVal));
    }
    if (number) {
      dispatch(addContact(number));
    }
    setNumber("");
    setInputVal("");
  };
  console.log(inputVal);

  return (
    <div className="center">
      <h2> Add Contact</h2>

      <form action="#" className="center" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          id="input"
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
          placeholder="enter your Name"
        />

        <input
          type="number"
          name="number"
          id="number"
          required
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          placeholder="enter your Number"
          className="input"
        />

        <button type="submit" className="btn btn-success">
          {" "}
          submit
        </button>
      </form>

      <div className="info-card">
        <ul>
          {arr.map((item, id) => {
            return (
              <div key={id}>
                <li className={`info-list ${item.active ? "active" : ""}`}>
                  <h4> Name : {item.name} </h4>
                  <tt> Number : {item.number} </tt>
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
