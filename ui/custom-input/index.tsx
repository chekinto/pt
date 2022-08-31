import React, { FC, ChangeEvent, HTMLInputTypeAttribute } from "react";
export interface IInput {
  type: HTMLInputTypeAttribute;
  value: string | number;
  onChange: (e: ChangeEvent) => void;
}

export const CustomInput: FC<IInput> = ({
  value,
  type = "text",
  onChange = () => {},
  ...rest
}) => {
  return <input type={type} value={value} onChange={onChange} {...rest} />;
};
