"use client";

import Link from "next/link";
import React, { FC } from "react";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  path: string;
  text: string;
}

export const ActiveLink: FC<ActiveLinkProps> = ({ path, text }) => {
  const pathname = usePathname();

  console.log(pathname.split("/").slice(1));

  return (
    <Link
      href={path}
      className={`${style.link} ${pathname === path && style["active-link"]} `}
    >
      <span>{text}</span>
    </Link>
  );
};
