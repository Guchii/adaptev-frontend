import { FC } from "react";
import Link from "next/link";

const Nav: FC = () => {
  return (
    <ul className="flex flex-row gap-4 text-lg px-8 py-4 bg-[#DBE2EF] text-dark">
      <li className="link">
        <Link href={"/"}>
          <a>home</a>
        </Link>
      </li>
      <li className="link">
        <Link href="/app">
          <a>app</a>
        </Link>
      </li>
      <li className="link">
        <Link href="/about">
          <a>about</a>
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
