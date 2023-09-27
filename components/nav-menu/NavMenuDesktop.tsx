import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { NAV_MENU_OPTIONS } from './util';
import { NavItemDesktop } from './components/NavItemDesktop';
import Link from 'next/link';

type Props = {};

const NavMenuDesktop: FC<Props> = (props) => {
  const { pathname } = useRouter();

  return (
    <div className=" ml-auto flex items-center gap-4">
      {NAV_MENU_OPTIONS.map((menu_item, i) => {
        return (
          <React.Fragment key={menu_item.text}>
            <Link href={menu_item.link}>
              <NavItemDesktop
                {...menu_item}
                active={pathname === menu_item.link}
              >
                {menu_item.text}
              </NavItemDesktop>
            </Link>
            {i != NAV_MENU_OPTIONS.length - 1 ? (
              <div className="w-[1px] bg-slate-300 h-6 my-auto"></div>
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default NavMenuDesktop;
