import { FC } from "react";
import Link from "next/link";
import navigationLinks from "./navigation-links.json";

export interface IHeader {}

export const Navigation: FC<IHeader> = () => {
  return (
    <header>
      {navigationLinks.map(({ href, title }) => (
        <Link key={title} href={href}>
          <a>{title}</a>
        </Link>
      ))}
    </header>
  );
};
