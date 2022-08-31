import { FC, ReactNode } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

export interface ILayout {
  children: ReactNode;
}
export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};
