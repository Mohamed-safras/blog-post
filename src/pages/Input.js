import React from "react";
import Spinner from "../assets/Spinner.svg";

import "../styles/input.scss";

const Form = ({
  isLoading,
  handelChange,
  title,
  description,
  blogtype,
  cover,
  typeOfAction,
}) => {
  return (
    <React.Fragment>
      <div className="input-field">
        <input
          value={title}
          onChange={handelChange}
          name="title"
          type="text"
          placeholder="enter title"
        />
      </div>

      <textarea
        value={description}
        onChange={handelChange}
        name="description"
        type="text"
        placeholder="Enter description"
      />

      <select
        value={blogtype}
        className="blogtypes"
        name="blogtype"
        onChange={handelChange}
      >
        <option value="medical">medical</option>
        <option value="design">design</option>
      </select>
      <div className="input-field">
        <input
          value={cover}
          onChange={handelChange}
          name="cover"
          type="url"
          placeholder="Enter cover image url"
        />
      </div>
      <button className="submit">
        {!isLoading ? `${typeOfAction}` : <img src={Spinner} alt="spinner" />}
      </button>
    </React.Fragment>
  );
};

export default Form;
