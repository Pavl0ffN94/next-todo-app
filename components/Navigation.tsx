"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

type NavLink = {
  label: string;
  href: string;
};
interface Iprops {
  navLinks: NavLink[];
}

const NavigationImpl = ({ navLinks }: Iprops) => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? "active" : ""}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export const Navigation = memo(NavigationImpl);
