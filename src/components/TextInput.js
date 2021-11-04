import React from "react";

const TextInput = ({
  labelName,
  placeholder,
  type,
  name,
  required,
  setUsername,
  value,
}) => {
  return (
    <div>
      <label className="col-sm-2 col-form-label" htmlFor={name}>
        {labelName}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        className="form-control"
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
