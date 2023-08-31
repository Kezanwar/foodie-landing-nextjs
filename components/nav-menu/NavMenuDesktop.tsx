import React, { FC } from 'react';
import { useRouter } from 'next/router';

import NavItem from './components/NavItem';

import { NAV_MENU_OPTIONS } from './util';

type Props = {};

const NavMenuDesktop: FC<Props> = (props) => {
  const { pathname } = useRouter();

  return (
    <div className="hidden ml-auto lg:flex items-center gap-6">
      {NAV_MENU_OPTIONS.map((menu_item, i) => {
        return (
          <>
            <NavItem {...menu_item} isSelected={pathname === menu_item.link} />
            {i != NAV_MENU_OPTIONS.length - 1 ? (
              <div className="w-[1px] bg-slate-300 h-6 my-auto"></div>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default NavMenuDesktop;
