import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

type NavbarItemProp = { to: string; children: ReactNode };

function NavbarItem({ to, children }: NavbarItemProp) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "block py-2 pr-4 pl-3  rounded bg-transparent text-blue-700 md:p-0 dark:text-white"
          : "block py-2 pr-4 pl-3 rounded bg-transparent text-gray-700 md:p-0 dark:text-white"
      }
    >
      {children}
    </NavLink>
  );
}

export default NavbarItem;
