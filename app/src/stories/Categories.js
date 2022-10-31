import React from "react";
import { useDispatch } from "react-redux";
import { filterContact } from "./ContactSlice";

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => dispatch(filterContact("all"))}
      >
        all
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => dispatch(filterContact(true))}
      >
        relatives
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => dispatch(filterContact(false))}
      >
        friends
      </button>
    </div>
  );
};

export default Categories;
