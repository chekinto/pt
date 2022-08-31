import { ElementType, ReactNode } from "react";
import { IInput } from ".";

interface IWrapperComponent extends IInput {
  children: ReactNode;
  id: string;
}

export const withLabel = (Component: ElementType) => {
  return function WrapperComponent({
    children,
    id,
    ...rest
  }: IWrapperComponent) {
    return (
      <>
        <label htmlFor={id}>{children}</label>
        <Component id={id} {...rest} />
      </>
    );
  };
};
