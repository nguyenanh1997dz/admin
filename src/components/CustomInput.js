import React from "react";

const CustomInput = (props) => {
  const { type, label, i_id, i_class, name,val,onChng } = props;
  return (
    <div className="form-floating mt-3">
      <input
        type={type}
        className={`form-control ${i_class ? i_class : "" }`}
        id={i_id}
        placeholder={label}
        name={name}
        value={val}
        onChange={onChng}
        onBlur={onChng}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default CustomInput;
