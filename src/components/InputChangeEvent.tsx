import React from "react";

type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = (props: InputProps) => {
  return <input onChange={props.handleChange} />;
};
